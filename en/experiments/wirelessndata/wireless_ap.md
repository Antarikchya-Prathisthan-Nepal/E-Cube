# **Creating a Wireless Access Point with E-Cube**
Turn your **E-Cube** into a Wi-Fi hotspot, allowing devices to connect and communicate with it directly.

---

## **Introduction**
In this guide, we will configure the **E-Cube (ESP32-S3)** as a **Wireless Access Point (AP)**, enabling other devices (phones, laptops, IoT sensors) to connect to it without an internet connection.

### **Why Use an E-Cube Access Point?**
✅ Provides a private network for **sensor data sharing**  
✅ Ideal for **remote locations** without traditional Wi-Fi  
✅ Enables **IoT devices** to communicate with each other  
✅ Can be used for **local web control & automation**  

---

## **How It Works**
1. The **E-Cube** creates a **Wi-Fi hotspot** (no internet needed).
2. Devices **connect** to this hotspot.
3. The **E-Cube** serves a **webpage** for device communication.

---

## **Hardware Required**
- **E-Cube (ESP32-S3)**
- **A device to connect** (Phone/Laptop)

---

## **Setting Up the E-Cube as a Wi-Fi Hotspot**
We configure the **ESP32-S3 Wi-Fi module** to function as an **Access Point (AP)**.

### **Arduino Code**
```cpp
#include <WiFi.h>

// Define AP credentials
const char *ssid = "E-Cube_Hotspot";
const char *password = "12345678";

void setup() {
    Serial.begin(115200);

    // Create Access Point
    WiFi.softAP(ssid, password);

    Serial.println("WiFi Hotspot Created!");
    Serial.print("IP Address: ");
    Serial.println(WiFi.softAPIP());
}

void loop() {
    // Keep AP running
}
```

## **Connecting to the E-Cube AP**
1. Open **Wi-Fi Settings** on your phone or laptop.
2. Find **"E-Cube_Hotspot"** and connect.
3. Enter the password **12345678**.
4. You are now connected to the E-Cube network!

---

## **Expanding the System**
Once connected, you can:
- **Host a local web server** for controlling devices.
- **Send sensor data** between connected devices.
- **Create a captive portal** for IoT authentication.

---

## **Try It Yourself**
🔹 **Change the SSID & password** – Customize your hotspot name.  
🔹 **Set a static IP** – Assign fixed IP addresses to clients.  
🔹 **Enable web control** – Host a simple webpage to toggle LEDs.

---

## **Real-Life Applications**
✅ **IoT Networks** – Smart home devices talking over a private network.  
✅ **Industrial Monitoring** – Machines sharing sensor data wirelessly.  
✅ **Remote Data Logging** – E-Cube collect
