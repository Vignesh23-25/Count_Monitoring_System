const express = require("express");

const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./dbSchema/dbConnect.js");

const mqtt = require("mqtt");
const LineConfig = require("./Route/configureLine.js");
const deleteData = require("./Route/dataDelete.js");
const getData = require("./Route/getData.js");
const healthCheck = require("./Route/integrity.js");
const shift = require("./Route/shift.js");

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

app.set("io", io);

// MQTT Connection
const mqttBroker = process.env.MQTT_BROKER || "mqtt://localhost:1883";
const mqttClient = mqtt.connect(mqttBroker);

mqttClient.on("connect", () => {
  console.log(`MQTT Connected to ${mqttBroker}`);
  mqttClient.subscribe("factory/leather/#", (err) => {
    if (!err) {
      console.log("Subscribed to factory/leather/#");
    } else {
      console.error("MQTT Subscription Error:", err);
    }
  });
});

// Receive data from ESP32 and forward to Socket.io
mqttClient.on("message", (topic, message) => {
  try {
    const data = message.toString();
    console.log(`Received from ${topic}:`, data);
    const parsed = JSON.parse(data);
    io.emit("data", parsed); // Emit to all connected clients
  } catch (err) {
    console.error("MQTT Message Error:", err);
  }
});

const port = process.env.PORT || 3000;
app.use(express.json());

connectDB();
app.get("/", (req,res)=>{
    res.send("THIS IS BACKEND FOR KH FACTORY PRODUCTION LINE");
})

app.use("/config", LineConfig);
app.use("/admin" , deleteData);
app.use("/health", healthCheck);
app.use("/fetch", getData);
app.use("/shiftInfo",shift);

server.listen(port , ()=>{
    console.log(`Server is running on ${port}`);
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("joinLine", (lineId) => {
    socket.join(`line_${lineId}`);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
