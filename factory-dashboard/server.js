const mqtt = require("mqtt");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Connect to MQTT
const client = mqtt.connect("mqtt://192.168.137.1:1883");

client.on("connect", () => {
  console.log("MQTT Connected");

  // Subscribe to all stations (future-proof)
  client.subscribe("factory/leather/#");
});

// Receive data from ESP32
client.on("message", (topic, message) => {
  try {
    const data = message.toString();
    console.log("Received:", data);

    const parsed = JSON.parse(data);

    // Send to frontend
    io.emit("data", parsed);

  } catch (err) {
    console.error("JSON Parse Error:", err);
  }
});

// Serve frontend
app.use(express.static("public"));

// Start server
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});