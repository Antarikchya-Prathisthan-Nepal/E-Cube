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

## **Code Breakdown**

This breakdown explains the key components of the Arduino code used to set up the **E-Cube (ESP32-S3)** as a **Wireless Access Point (AP)**, enabling other devices to connect directly to it.


## **1. Including the Wi-Fi Library**
```cpp
#include <WiFi.h>
```
- **#include <WiFi.h>**: Incorporates the **Wi-Fi** library, providing functions to configure the **E-Cube's** Wi-Fi capabilities.

## **2. Defining Access Point Credentials**
```cpp
const char *ssid = "E-Cube_Hotspot";
const char *password = "12345678";
```
- **ssid**: Sets the name of the Wi-Fi network (**SSID**) that the **E-Cube** will broadcast.
- **password:** Defines the password required to connect to this network. Note that **Wi-Fi** passwords must be at least **8** characters long.

## **3. Setting Up the Access Point in setup()**
```cpp
void setup() {
    Serial.begin(115200);

    // Create Access Point
    WiFi.softAP(ssid, password);

    Serial.println("WiFi Hotspot Created!");
    Serial.print("IP Address: ");
    Serial.println(WiFi.softAPIP());
}
```
- **Serial.begin(115200);**: Initializes serial communication at a baud rate of **115200** for debugging purposes.
- **WiFi.softAP(ssid, password);**: Configures the **E-Cube** as an access point with the specified **SSID** and p**assword**. This function starts the **AP** mode, allowing other devices to connect directly to the **E-Cube.**
- **WiFi.softAPIP();**: Retrieves and prints the **IP** address of the E-Cube in **AP** mode, typically **192.168.4.1** by default.

## **4. Maintaining the Access Point in loop()**
```cpp
void loop() {
    // Keep AP running
}
```
- The **loop()** function is intentionally left **empty** in this context, as the access point functionality runs **independently** in the background. However, this is where you could **add** code to handle client **connections** or other tasks.

---

## <ins> **Additional Considerations** </ins>

When configuring the E-Cube (ESP32-S3) as a Wireless Access Point (AP), consider the following:

- ### Open Network: To create an open network without a password, omit the password parameter:

```cpp
  WiFi.softAP(ssid);
```
Be cautious with **open** networks, as they allow any device to connect **without** authentication.

- ### Customizing Network Settings: Specify additional parameters such as Wi-Fi channel, hidden SSID, and maximum number of connections:

```cpp
WiFi.softAP(ssid, password, channel, ssid_hidden, max_connection);
```
- **channel**: Wi-Fi **channel** number **(1-13).**
- **ssid_hidden**: Set to **1** to hide the SSID, **0** to broadcast it.
- **max_connection:** Maximum number of **devices** that can connect simultaneously (default is **4**).

- ### Dual Mode Operation: The ESP32 can operate simultaneously as an access point and a station (connected to another Wi-Fi network). To enable both modes:

```cpp
WiFi.mode(WIFI_AP_STA);
```
This allows the E-Cube to create its own network while maintaining a connection to an existing Wi-Fi network.

By configuring the E-Cube (ESP32-S3) as a wireless access point, you enable direct communication with other Wi-Fi-enabled devices without the need for an external router. This setup is particularly useful for local networks, IoT applications, and scenarios where a standalone Wi-Fi network is required.

## **Expanding the System**
Once connected, you can:
- **Host a local web server** for controlling devices.
- **Send sensor data** between connected devices.
- **Create a captive portal** for IoT authentication.

---

## **Try It Yourself!**
🔹 **Change the SSID & password** – Customize your hotspot name.  
🔹 **Set a static IP** – Assign fixed IP addresses to clients.  
🔹 **Enable web control** – Host a simple webpage to toggle LEDs.

---

## **Real-Life Applications**
✅ **IoT Networks** – Smart home devices talking over a private network.  
✅ **Industrial Monitoring** – Machines sharing sensor data wirelessly.  
✅ **Remote Data Logging** – E-Cube collect

