# KM Factory Production Monitoring System

This project is an automated count monitoring system for a leather factory. It integrates ESP32 IoT devices, a Node.js backend with MongoDB, and a React-based real-time dashboard.

## Project Structure

- `/backend`: Node.js server with MongoDB and Socket.io integration.
- `/frontend`: React + Vite dashboard for real-time monitoring.
- `/Count_Monitoring`: Arduino code for ESP32.
- `/factory-dashboard` (Legacy): Original server and dashboard (preserved for reference).

## Setup Instructions

### 1. Backend Setup
1. Open a terminal in the `backend/` folder.
2. Run `npm install` (already done).
3. Open `.env` and update the `MONGO_DB` URI if needed.
4. Run `npm start`.

### 2. Frontend Setup
1. Open a terminal in the `frontend/` folder.
2. Run `npm install` (already done).
3. Run `npm run dev`.
4. Open your browser at the URL shown (usually `http://localhost:5173`).

### 3. ESP32 Setup
1. Open `Count_Monitoring/Count_Monitoring.ino` in Arduino IDE.
2. Update the `ssid` and `password` for your WiFi.
3. Update `mqtt_server` to your PC's IP address (currently `192.168.137.1`).
4. Upload to your ESP32.

## How it Works
1. **ESP32** detects a button press and publishes a JSON payload to the MQTT broker on your PC.
2. **Backend** subscribes to MQTT topics, receives the data, and broadcasts it to all connected web clients via **Socket.io**.
3. **Frontend** listens for Socket.io messages and updates the dashboard in real-time.
