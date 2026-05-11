#include <WiFi.h>
#include <PubSubClient.h>

#define COUNT_BTN 5

// WIFI
const char* ssid = "Vignesh-PC";
const char* password = "something123";

// MQTT
const char* mqtt_server = "192.168.137.1";

WiFiClient espClient;
PubSubClient client(espClient);

// CONFIG
const float TARGET_RATE = 300.0;

// VARIABLES
int totalCount = 0;
unsigned long startTime;
unsigned long lastPressTime = 0;
const unsigned long debounceDelay = 200;
int lastButtonState = HIGH;

void setup_wifi() {

  Serial.println();
  Serial.println("Connecting to WiFi...");

  WiFi.begin(ssid, password);

  int retry = 0;

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
    retry++;

    if (retry > 40) {
      Serial.println("\nWiFi connection failed!");
      return;
    }
  }

  Serial.println();
  Serial.println("WiFi connected!");

  Serial.print("ESP32 IP: ");
  Serial.println(WiFi.localIP());
}

void reconnect() {

  while (!client.connected()) {

    Serial.print("Connecting MQTT...");

    if (client.connect("esp32_station1")) {

      Serial.println("connected");

    } else {

      Serial.print("failed, state=");
      Serial.println(client.state());

      Serial.println("Retrying in 3 seconds...");
      delay(3000);
    }
  }
}

void setup() {

  Serial.begin(115200);
  delay(2000);

  Serial.println("ESP32 Production Counter Starting...");

  pinMode(COUNT_BTN, INPUT_PULLUP);

  setup_wifi();

  client.setServer(mqtt_server, 1883);

  startTime = millis();
}

void loop() {

  if (!client.connected()) {
    reconnect();
  }

  client.loop();

  unsigned long now = millis();
  int currentButtonState = digitalRead(COUNT_BTN);

  if (lastButtonState == HIGH && currentButtonState == LOW) {

    if (now - lastPressTime > debounceDelay) {

      totalCount++;
      lastPressTime = now;

      float elapsedHours = (now - startTime) / 3600000.0;
      float actualRate = (elapsedHours > 0) ? totalCount / elapsedHours : 0;
      float efficiency = (TARGET_RATE > 0) ? (actualRate / TARGET_RATE) * 100.0 : 0;

      sendMQTT(actualRate, efficiency);
    }
  }

  lastButtonState = currentButtonState;
}

void sendMQTT(float actualRate, float efficiency) {

  String payload = "{";
  payload += "\"station\":\"cutting_01\",";
  payload += "\"count\":" + String(totalCount) + ",";
  payload += "\"actual_rate\":" + String(actualRate) + ",";
  payload += "\"efficiency\":" + String(efficiency);
  payload += "}";

  client.publish("factory/leather/station1", payload.c_str());

  Serial.println("Published:");
  Serial.println(payload);
}