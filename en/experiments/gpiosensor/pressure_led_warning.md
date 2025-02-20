---
title: "LED Activation Based on Pressure Threshold"
description: "Learn how to interface the BMP180 pressure sensor with E-Cube to trigger an LED when the pressure exceeds a set threshold."
---

# **LED Activation Based on Pressure Threshold**

In this guide, we will learn how to use the **BMP180 pressure sensor** with **E-Cube** to monitor pressure values and trigger an **LED** when the pressure exceeds a predefined threshold. This project introduces **sensor-based automation, pressure monitoring, and embedded control systems**.

## **What is Atmospheric Pressure?**
Atmospheric pressure is the force exerted by the weight of air in the Earth's atmosphere. It is measured in **Pascals (Pa) or hectopascals (hPa)**. Changes in pressure can indicate altitude variations, weather changes, or enclosed system behavior.

### **Pressure and Altitude Relationship**
Pressure decreases with increasing altitude according to the **barometric formula**:

$$ P = P_0 e^{-\frac{Mgh}{RT}} $$

where:
- **P** is the pressure at height **h**
- **P₀** is the pressure at sea level
- **M** is the molar mass of air
- **g** is gravitational acceleration
- **R** is the universal gas constant
- **T** is temperature in Kelvin

Understanding this relationship is crucial for applications in **altimeters, weather forecasting, and aerospace systems**.

## **How Does the BMP180 Sensor Work?**
The **BMP180** is a **barometric pressure sensor** that measures atmospheric pressure and temperature. It works using a **microelectromechanical system (MEMS)** that detects pressure variations through a tiny diaphragm.

The sensor provides:
- **Absolute pressure readings in hPa**
- **Temperature compensation for accurate measurements**
- **I2C communication for easy interfacing with microcontrollers**

## **Components Required**
- **E-Cube**
- **BMP180 Pressure Sensor**
- **LED**
- **Resistor (220Ω)**
- **Jumper Wires**
- **USB Cable**
- **PC for Programming**

## **Setup**
Refer to [Soldering](/en/assembly/soldering.md) if you haven't already attached the **BMP180 module** to the **EPS Board**.

### Circuit Diagram for MSN board

<div style="text-align: center;"><img src="/public/simpleled.png" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

## **Code: Pressure-Based LED Activation**

Refer to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing The Code](/en/operationguide/executingthecode.md) for IDE setup and programming guide.

## **Code Implementation**
Below is the code to interface the **BMP180** sensor with **E-Cube** and turn on an **LED** when pressure exceeds a threshold.

```cpp
#include <Wire.h>
#include <Adafruit_BMP085.h>

#define LED_PIN 13  // Define LED pin
Adafruit_BMP085 bmp;

void setup() {
    Serial.begin(115200);
    pinMode(LED_PIN, OUTPUT);

    if (!bmp.begin()) {
        Serial.println("Could not find BMP180 sensor!");
        while (1);
    }
}

void loop() {
    float pressure = bmp.readPressure(); // Read pressure in Pascals
    Serial.print("Pressure: ");
    Serial.print(pressure / 100.0); // Convert to hPa
    Serial.println(" hPa");

    if (pressure > 101325) {  // 1013.25 hPa is standard sea-level pressure
        digitalWrite(LED_PIN, HIGH);
        Serial.println("LED ON - Pressure exceeded threshold!");
    } else {
        digitalWrite(LED_PIN, LOW);
        Serial.println("LED OFF");
    }

    delay(1000);  // Wait for 1 second before reading again
}
```

## **Code Breakdown**

```cpp
#include <Wire.h>
#include <Adafruit_BMP085.h>
```
Includes the necessary libraries for I2C communication and BMP180 sensor interfacing.<br><br>

```cpp
Adafruit_BMP085 bmp;
```
Creates an instance of the BMP180 sensor for reading pressure values.<br><br>

```cpp
bmp.begin();
```
Initializes the BMP180 sensor and checks for a successful connection.<br><br>

```cpp
float pressure = bmp.readPressure() / 100.0;
```
Reads the pressure value in Pascals and converts it to hPa (hectopascals).<br><br>

```cpp
if (pressure > 1013.25) {
  digitalWrite(LED_BUILTIN, HIGH);
} else {
  digitalWrite(LED_BUILTIN, LOW);
}
```
Compares the current pressure with a predefined threshold (1013.25 hPa) and turns the LED on or off accordingly.<br><br>

```cpp
Serial.print("Pressure: ");
Serial.print(pressure);
Serial.println(" hPa");
```
Prints the real-time pressure values to the Serial Monitor for debugging and analysis.<br><br>


## **What You Can Learn from This Project**  
This project introduces key concepts in **sensor-based automation, pressure monitoring, and embedded system design**. By completing it, you will gain hands-on experience in the following areas:  

### **1. Understanding Pressure Sensors**  
- Learn how **BMP180** works and how it measures **atmospheric pressure**.  
- Understand the **role of MEMS technology** in modern pressure sensors.  

### **2. Microcontroller Interfacing**  
- Learn how to connect and interface the **BMP180** sensor with **ESP32-S3**.  
- Understand how to read sensor data using **I2C communication**.  

### **3. Threshold-Based Control Systems**  
- Implement a **threshold-based activation system** using sensor data.  
- Learn how to trigger **real-time responses** based on environmental readings.  

### **4. Serial Communication and Debugging**  
- Learn how to print **real-time sensor data** to the **Serial Monitor**.  
- Understand how to **troubleshoot** sensor readings and improve code reliability.  

### **5. Practical Applications in Real Life**  
- Understand how **pressure sensors are used in weather stations, altimeters, and aerospace applications**.  
- Explore how similar concepts apply to **air pressure monitoring, automatic valve control, and emergency warning systems**.  

## **Try It Yourself!**

### **Altitude-Based LED Activation**  
Modify the project to turn the LED on when altitude exceeds a certain height.

### **Pressure-Based Alarm System**  
Use the pressure sensor to trigger a **buzzer or alarm** when pressure drops suddenly, simulating an emergency warning system.

---

This project provides a **solid foundation** for automation using pressure sensors and real-time monitoring.  

### **See also:**
- [Using the BMP180 for Altitude Measurement](/en/sensors/bmp180_altitude.md)  
- [Interfacing I2C Sensors](/en/communication/i2c.md)  
