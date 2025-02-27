---
title: "Measuring Altitude with BMP180"
description: "Learn how to interface the BMP180 sensor with E-Cube to measure altitude using atmospheric pressure."
---

# **Measuring Altitude with E-Cube**

In this guide, we will learn how to use the **BMP180** sensor with **E-Cube** to measure altitude based on atmospheric pressure. This project introduces **sensor interfacing, pressure-based altitude estimation, and atmospheric physics**.

## **What is Altitude?**
Altitude is the height of an object above a reference level, typically sea level. It is measured in **meters (m)** and is essential in applications such as **aerospace, meteorology, and GPS navigation**.

### **Altitude and Atmospheric Pressure**
The altitude is derived from atmospheric pressure are inversely related.

When altitude increases, pressure decreases.

When altitude decreases, pressure increases.

## **How Does the BMP180 Sensor Work?**
The **BMP180** is a digital barometric pressure sensor that uses a **microelectromechanical system (MEMS)** to measure atmospheric pressure. It works as follows:

1. **Pressure Sensing:** The sensor contains a **silicon diaphragm** that deforms under atmospheric pressure.  

:::tip
refer to [Measuring Pressure](/en/experiments/gpiosensor/pressure_values.md) for a pressure measurement guide.
:::
2. **Temperature Compensation:** A built-in temperature sensor corrects variations in pressure readings.  
3. **Digital Processing:** The sensor uses an **internal ADC** (Analog-Digital Converter) to convert pressure data into digital values.  
4. **I2C Communication:** The data is transmitted to a microcontroller via the **I2C protocol** for further calculations.

:::tip
refer to [I2C Communication](/en/experiments/gpiosensor/i2c_communication.md) for more details on I2C Protocol.
:::
## **Components Required**

| Component                   | Present in E-Cube | Not Present in E-Cube |
|-----------------------------|-------------------|-----------------------|
| **E-Cube (ESP32-S3 Module)**| ✔️                |                       |
| **USB Cable**     |          ✔️         |                     |
| **PC for Programing**            |                   | ✔️                    |

## **Code: Reading Altitude from BMP180**
Refer to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing The Code](/en/operationguide/executingthecode.md) for IDE setup and programming guide.

```cpp
#include <Wire.h>
#include <Adafruit_BMP085.h>

Adafruit_BMP085 bmp;

void setup() {
  Serial.begin(9600);
  if (!bmp.begin()) {
    Serial.println("Could not find a valid BMP180 sensor, check wiring!");
    while (1);
  }
}

void loop() {
  float pressure = bmp.readPressure();
  float altitude = bmp.readAltitude();

  Serial.print("Pressure: ");
  Serial.print(pressure);
  Serial.println(" Pa");

  Serial.print("Altitude: ");
  Serial.print(altitude);
  Serial.println(" m");

  delay(1000);
}
```
## Code Breakdown

```cpp
#include <Wire.h>
#include <Adafruit_BMP085.h>
```
Includes the necessary libraries for BMP180 communication.<br><br>

```cpp
Adafruit_BMP085 bmp;
```
Creates a BMP180 object for interfacing with the sensor.<br><br>

```cpp
bmp.begin();
```
Initializes the BMP180 sensor and verifies the connection.<br><br>

```cpp
float pressure = bmp.readPressure();
```

Reads the atmospheric pressure from the sensor.<br><br>

```cpp
float altitude = bmp.readAltitude();
```

Calculates altitude using the standard pressure equation.<br><br>

```cpp
Serial.print(altitude);
```
Prints the altitude value to the Serial Monitor.<br><br>

## **What You Can Learn from This Project**  
This project introduces key concepts in **atmospheric physics, sensor applications, and data processing**. By completing it, you will gain hands-on experience in the following areas:  

### **1. Understanding Barometric Pressure Sensors**  
- Learn how the **BMP180** measures **pressure and altitude**.  
- Understand how **MEMS technology** is used in modern sensors.  

### **2. Microcontroller Interfacing**  
- Learn how to connect and interface the **BMP180** sensor with **ESP32-S3**.  
- Understand how to retrieve sensor data using **I2C communication**.  

### **3. Atmospheric Physics Applications**  
- Understand how pressure changes with altitude using the **barometric formula**.  
- Explore how altitude measurements apply to **aviation, weather monitoring, and navigation**.  

### **4. Data Processing and Calibration**  
- Learn how temperature affects **pressure sensor readings**.  
- Explore calibration techniques for **improving accuracy**.  

### **5. Practical Applications in Real Life**  
- Understand how **altimeters work in aircraft and drones**.  
- Learn how barometric sensors help in **hiking, weather prediction, and fitness tracking**.  

## **Try It Yourself!**

### **Compare Altitude at Different Locations**  
Take your E-Cube outdoors and compare altitude readings at **different elevations**.

### **Monitor Weather Changes**  
Use the BMP180 to track **pressure changes** and predict upcoming **weather conditions**.

---

This project provides a **solid foundation** for altitude measurement and atmospheric science.  

### **Also See:**
- [Measuring Pressure using E-Cube](/en/experiments/gpiosensor/pressure_values.md)
- [Interfacing I2C Sensors](/en/experiments/gpiosensor/i2c_communication.md)  
- [Parachute Design for E-Cube](/en/experiments/envnphysics/parachute_design.md)

[Back to Home](./index.md)