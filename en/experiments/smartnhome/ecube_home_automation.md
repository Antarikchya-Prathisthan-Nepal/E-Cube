# Using E-Cube for Home Automation  
**Control appliances based on sensor inputs and wireless commands**  

## Introduction  
Home automation allows us to **remotely control electrical appliances** using sensors and wireless communication. With E-Cube, you can build a smart system that **automatically responds to environmental conditions** (like temperature, light, or motion) and allows **manual control via WiFi**.  

### Why Use E-Cube for Home Automation?  
- **Integrated WiFi & Bluetooth** for wireless communication.  
- **Multiple GPIO pins** for connecting sensors and relays.  
- **Low power consumption**, making it efficient for continuous use.  
- **Can be expanded** to control multiple devices.  

## How It Works  

1. **Sensors collect data** (e.g., temperature, motion, light levels).  
2. The **E-Cube processes the data** and decides whether to turn appliances ON/OFF.  
3. Users can also send **manual commands via a web interface or mobile app**.  
4. Relays connected to E-Cube **switch appliances ON/OFF accordingly**.  


## Components Required  
- **E-Cube (ESP32-based microcontroller)**  
- **Relays (to control appliances)**  
- **Sensors** (e.g., DHT11 for temperature, PIR for motion detection)  
- **WiFi network** for remote operation  
- **Power supply** for E-Cube  

## Code Implementation  

```cpp
#define RELAY_PIN 5  // Connect relay module to GPIO 5
#define SENSOR_PIN 4 // Example: PIR sensor input

void setup() {
    pinMode(RELAY_PIN, OUTPUT);
    pinMode(SENSOR_PIN, INPUT);
    Serial.begin(115200);
}

void loop() {
    int sensorValue = digitalRead(SENSOR_PIN);
    
    if (sensorValue == HIGH) {
        digitalWrite(RELAY_PIN, HIGH);  // Turn appliance ON
        Serial.println("Appliance ON");
    } else {
        digitalWrite(RELAY_PIN, LOW);   // Turn appliance OFF
        Serial.println("Appliance OFF");
    }
    delay(1000);  // Small delay for stability
}
```
## Code Breakdown

### 1. **Library Inclusions**
The code may include essential libraries for controlling relays, sensors, and network communication:
```cpp
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
```
- **WiFi.h** – Enables **E-Cube** to connect to WiFi.
- **ESPAsyncWebServer.h** – Helps create a simple **web-based** control interface.

### **2. Defining GPIO Pins**
```cpp
#define RELAY_PIN 5
```
- The **relay module** is connected to **GPIO** pin **5**.
- More relays can be **added** to control multiple appliances.

### **3. WiFi Setup**
```cpp
const char* ssid = "Your_SSID";
const char* password = "Your_PASSWORD";
WiFi.begin(ssid, password);
```
- Connects the **E-Cube** to a **WiFi** network.
- The **E-Cube** serves as a gateway to control home devices remotely.

### **4. Web Server Configuration**
```cpp 
AsyncWebServer server(80);
```
- Runs a web server on port **80** to host a control interface.

### **5. Handling Web Requests**
```cpp
server.on("/on", HTTP_GET, [](AsyncWebServerRequest *request){
  digitalWrite(RELAY_PIN, HIGH);
  request->send(200, "text/plain", "Relay ON");
});
```
- When the user visits **/on**, the relay is activated.
- Similarly, another **route** can turn the relay **OFF**.

### **6. Reading Sensor Data**
```cpp
int temperature = analogRead(A0); 
```
- Reads **sensor** input (temperature, motion, etc.).
- The system can **automate appliances** based on readings.

### **7. Looping and Execution**
```cpp 
void loop() {
  // Automation logic based on sensor values
}
```
- Controls **appliances** based on **real-time** data.
- Can be expanded for more **smart** home features.

## Web-Based Control  
E-Cube can also be controlled via a **web interface**:  
1. **Host a web server** on E-Cube.  
2. Use **buttons on the webpage** to send commands.  
3. Control **multiple appliances** wirelessly.  

Example:  
- **Turn ON fan if temperature > 30°C**  
- **Turn ON lights at sunset**  
- **Activate alarm when motion is detected**  

---

## Try It Yourself  
**Experiment with different configurations!**  
- **Modify GPIO pins** to control multiple relays.  
- **Use different sensors** (light, humidity, gas) for automation.  
- **Integrate voice control** using Google Assistant or Alexa.  
- **Build an IoT dashboard** to monitor appliance status online.  

---

## Real-World Applications  
- **Smart Lighting** – Automatically adjust lights based on time.  
- **Security Systems** – Activate alarms based on motion detection.  
- **Energy Efficiency** – Turn off unused devices automatically.  
- **Remote Control** – Operate home appliances from anywhere.  

---

## Final Thoughts  
Using E-Cube for home automation **reduces energy consumption**, **improves security**, and **adds convenience**. This system can be **expanded** for larger automation projects, integrating more sensors and controls. 🚀  
