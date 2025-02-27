---
title: "Using Wi-Fi with E-Cube"
description: "Learn how to connect the ESP32-S3-WROOM-1 to Wi-Fi and send data over the network."
---

# **Using Wi-Fi with E-Cube**

The **E-cube** (ESP32-S3-WROOM-1) is a powerful Wi-Fi and Bluetooth-enabled microcontroller module based on the ESP32-S3 chip. This guide will walk you through how to set up Wi-Fi on the ESP32-S3, connect to a network, and send data over the internet.

## **Why Use Wi-Fi with ESP32-S3?**
Wi-Fi connectivity enables **IoT applications**, allowing your ESP32-S3 to communicate with servers, cloud platforms, and other devices. Some common use cases include:
- **Remote Monitoring** – Send sensor data to a web server.
- **Home Automation** – Control smart devices over the internet.
- **Data Logging** – Store data on cloud platforms like Firebase or MQTT.
- **Web Server Applications** – Host a webpage from the ESP32 itself.

## **Components Required**

| Component                   | Present in E-Cube | Not Present in E-Cube |
|-----------------------------|-------------------|-----------------------|
| **E-Cube (ESP32-S3 Module)**| ✔️                |                       |
| **Wi-fi Network**     |                   |            ✔️        | 
| **USB Cable**              |            ✔️       |                     |
| **PC for Programming** ||✔️|*

## **How Wi-Fi Works in ESP32-S3**
The ESP32-S3 uses a built-in Wi-Fi transceiver to connect to local networks. It operates in **Station Mode (STA)** to connect to a router or **Access Point Mode (AP)** to create its own network.

The **Wi-Fi Stack** in ESP32 includes:
- **LwIP (Lightweight IP)** – Provides TCP/IP connectivity.
- **Event Loop Handler** – Manages Wi-Fi connections.
- **Hardware Offload** – Improves networking performance.

## **Wi-Fi Modes in ESP32**
The ESP32-S3 can operate in **three different Wi-Fi modes**:
1. **Station Mode (STA)**
   - Connects to an existing Wi-Fi network.
   - Uses DHCP to get an IP address.
   - Suitable for IoT devices communicating with cloud services.

2. **Access Point Mode (AP)**
   - Creates its own Wi-Fi network.
   - Other devices can connect to it.
   - Useful for local control applications.

3. **Dual Mode (STA + AP)**
   - Works as both a client and a hotspot.
   - Ideal for IoT applications needing local and internet access.

## **Code: Connecting ESP32-S3 to Wi-Fi**
Below is a basic code example for connecting **ESP32-S3-WROOM-1** to Wi-Fi in **Station Mode**.

```cpp
#include <WiFi.h>

const char* ssid = "Your_SSID";      // Replace with your Wi-Fi network name
const char* password = "Your_Password"; // Replace with your Wi-Fi password

void setup() {
    Serial.begin(115200);
    
    WiFi.begin(ssid, password);
    Serial.print("Connecting to Wi-Fi");

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("\nConnected to Wi-Fi!");
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());
}

void loop() {
    // Your application code here
}
```
## **Code Breakdown**
- **`WiFi.begin(ssid, password);`** → Initiates Wi-Fi connection.
- **`WiFi.status()`** → Checks if the connection is successful.
- **`WiFi.localIP()`** → Retrieves the assigned IP address.

## **What You Can Learn from This Project**
By completing this project, you will gain hands-on experience in:

### **1. Wi-Fi Connectivity Basics**
- Learn how to connect an **ESP32-S3** module to a Wi-Fi network.
- Understand the **station mode and access point mode**.

### **2. Debugging Wi-Fi Issues**
- Use **serial debugging** to check Wi-Fi connection status.
- Handle **connection failures and retries** in your code.

### **3. IoT and Web-Based Applications**
- Use **ESP32-S3** for **remote monitoring**.
- Learn how to host a **webpage from the ESP32**.

### **4. Expanding Functionality**
- Send **HTTP requests** to web servers.
- Connect to **cloud platforms like Firebase or MQTT**.

## **Try It Yourself!**
### **1. Control an LED Over Wi-Fi**
Modify the code to allow turning an **LED ON/OFF** using a simple **web interface**.

### **2. Create a Wi-Fi Scanner**
Use the ESP32-S3 to scan for nearby Wi-Fi networks and print **SSID and signal strength**.

### **3. Host a Simple Web Page**
Serve a **basic HTML page** from the ESP32-S3 and display sensor readings in real-time.

---
## **Also See:**
- [ESP32-S3 Web Server Guide](/en/iot/webserver.md)
- [Sending Data to Firebase](/en/iot/firebase.md)
- [Using MQTT with ESP32-S3](/en/iot/mqtt.md)

[Back to Home](./index.md)