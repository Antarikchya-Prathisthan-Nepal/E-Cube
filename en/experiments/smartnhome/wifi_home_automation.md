# **WiFi-Enabled Home Automation System with E-Cube**
### *Build a Complete Smart Home Controller*

## **Introduction**
The **E-Cube WiFi Home Automation System** allows users to control **lights, fans, and other appliances** wirelessly through a web interface. By integrating **ESP32-S3, relays, and sensors**, this system enables real-time monitoring and automation for a smart home.  

This project will guide you through **setting up an E-Cube-powered smart home controller**, enabling wireless **switching, automation, and IoT connectivity**.  

---

## **Features of the System**
✔️ **Remote Control:** Control devices from anywhere using WiFi  
✔️ **Web-Based Interface:** A user-friendly dashboard to toggle appliances  
✔️ **Sensor Integration:** Automate devices based on temperature, motion, or light  
✔️ **Energy Efficient:** Reduce unnecessary power usage  
✔️ **Customizable & Expandable:** Add more devices and sensors  

---

## **How It Works**
1. The **E-Cube (ESP32-S3)** acts as a **WiFi server**, hosting a web page.
2. Users can access this **web dashboard** from any device connected to the network.
3. The **web interface** sends commands to **control relays**, switching appliances ON/OFF.
4. Sensors (temperature, motion, etc.) can **automate appliance control**.
5. The system **logs data and status updates** for better monitoring.

---

## **Required Components**
🔹 **E-Cube ESP32-S3** – The central controller  
🔹 **Relay Module (4-channel)** – Controls home appliances  
🔹 **DHT11/DHT22 Sensor** – Measures temperature & humidity  
🔹 **PIR Sensor** – Detects motion for automation  
🔹 **LEDs or Bulbs** – For testing outputs  
🔹 **Jumper Wires & Power Supply**  

---

## **Code for Home Automation**
This Arduino code runs on **E-Cube ESP32-S3**, creating a **WiFi-controlled smart home system**.

```cpp
#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "Your_SSID";
const char* password = "Your_PASSWORD";

WebServer server(80);

// Define relay pins
const int relay1 = 12;
const int relay2 = 13;

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  pinMode(relay1, OUTPUT);
  pinMode(relay2, OUTPUT);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("Connected to WiFi");
  server.on("/", handleWebpage);
  server.on("/relay1on", []() { digitalWrite(relay1, HIGH); server.send(200, "text/plain", "Relay 1 ON"); });
  server.on("/relay1off", []() { digitalWrite(relay1, LOW); server.send(200, "text/plain", "Relay 1 OFF"); });
  server.on("/relay2on", []() { digitalWrite(relay2, HIGH); server.send(200, "text/plain", "Relay 2 ON"); });
  server.on("/relay2off", []() { digitalWrite(relay2, LOW); server.send(200, "text/plain", "Relay 2 OFF"); });

  server.begin();
}

void loop() {
  server.handleClient();
}

void handleWebpage() {
  String html = "<html><body><h2>WiFi Home Automation</h2>";
  html += "<button onclick=\"location.href='/relay1on'\">Turn ON Light</button>";
  html += "<button onclick=\"location.href='/relay1off'\">Turn OFF Light</button>";
  html += "<button onclick=\"location.href='/relay2on'\">Turn ON Fan</button>";
  html += "<button onclick=\"location.href='/relay2off'\">Turn OFF Fan</button>";
  html += "</body></html>";
  server.send(200, "text/html", html);
}
```
---
# **Code Breakdown: WiFi-Enabled Home Automation System**

This breakdown explains the key functions of the **WiFi-enabled home automation system** using the **ESP32 and E-Cube**.

## **1. Including Necessary Libraries**
```cpp
#include <WiFi.h>
#include <WebServer.h>
```
- **WiFi.h:** Handles the **E-Cube** WiFi connectivity.
- **WebServer.h:** **Enables** a simple web server to control devices remotely. 

## **2. Defining WiFi Credentials**
```cpp
const char* ssid = "Your_SSID";
const char* password = "Your_PASSWORD";
```
- Replace **"Your_SSID"** and **"Your_PASSWORD"** with your **actual WiFi** network details.

## **3. Creating a Web Server Instance**
```cpp
WebServer server(80);
```
- **server(80):** Starts a web server that listens on port **80** (HTTP)

## **4. Defining Relay Control Pins**
```cpp 
const int relay1 = 12;
const int relay2 = 13;
```
- **relay1** and **relay2** are connected to **GPIO** pins **12** and **13**.
- These control the **light** and **fan**, respectively.

## **5. Setting Up the ESP32 and Connecting to WiFi**

```cpp
void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  pinMode(relay1, OUTPUT);
  pinMode(relay2, OUTPUT);
```
- **Serial.begin(115200)**: Starts serial communication for debugging.
- **WiFi.begin(ssid, password)**: Connects the **E-Cube** to the given WiFi network.
- **pinMode(relay1, OUTPUT)** and **pinMode(relay2, OUTPUT)**: Set relay pins as **output**.

## **6. Checking WiFi Connection**
```cpp
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
```
- The **E-Cube** waits until it connects to **WiFi**.

## **7. Setting Up Web Server Endpoints**

```cpp
server.on("/", handleWebpage);
server.on("/relay1on", []() { digitalWrite(relay1, HIGH); server.send(200, "text/plain", "Relay 1 ON"); });
server.on("/relay1off", []() { digitalWrite(relay1, LOW); server.send(200, "text/plain", "Relay 1 OFF"); });
server.on("/relay2on", []() { digitalWrite(relay2, HIGH); server.send(200, "text/plain", "Relay 2 ON"); });
server.on("/relay2off", []() { digitalWrite(relay2, LOW); server.send(200, "text/plain", "Relay 2 OFF"); });
```
- **server.on("/")**: Loads the main webpage.
- **server.on("/relay1on")**: Turns on Relay **1** (Light).
- **server.on("/relay1off")**: Turns off Relay **1** (Light).
- **server.on("/relay2on")**: Turns on Relay **2** (Fan).
- **server.on("/relay2off")**: Turns off Relay **2** (Fan).

## **8. Starting the Web Server**
```cpp
server.begin();
```
- Starts the **E-Cube's** web server.

## **9. Handling Web Server Requests Continuously**
```cpp
void loop() {
  server.handleClient();
}
```
- Keeps the web server **active** and ready to **receive** commands.

---

# **Try It Yourself!**  

### **1. Add More Devices**  
- Expand the system by adding **more relays** to control multiple appliances.  
- Try connecting **LED strips, a coffee maker, or a smart lock**.  

### **2. Implement Voice Control**  
- Integrate with **Google Assistant** or **Amazon Alexa** using IFTTT.  
- Experiment with sending commands through **voice instead of a web interface**.  

### **3. Use a Different Trigger**  
- Instead of a web button, try controlling appliances using:  
  - A **physical button** connected to a GPIO pin.  
  - A **motion sensor** to turn on a light when someone enters a room.  
  - A **temperature sensor** to automatically turn on a fan when it’s hot.  

### **4. Automate Based on Time**  
- Modify the code to **schedule tasks** (e.g., turning on a light at sunset).  
- Use an **RTC (Real-Time Clock) module** or fetch time from the internet.  

### **5. Add Security Features**  
- Implement a **password-protected webpage** for better security.  
- Try integrating a **camera module** to monitor your home remotely.  

### **6. Control Devices via Mobile App**  
- Create a **basic mobile app** using **MIT App Inventor** or **Blynk**.  
- Send commands directly from your **smartphone** instead of a browser.  
 
## Also See
[Home automation using E-Cube](/en/experiments/smartnhome/ecube_home_automation.md)