---
title: "Reading Pressure Values from BMP180"
description: "Learn how to interface the BMP180 pressure sensor with E-Cube and measure atmospheric pressure."
---

# **Reading Pressure Values from E-Cube**

In this guide, we will learn how to use the **BMP180** sensor with **E-Cube** to measure atmospheric pressure. This project introduces **sensor interfacing, environmental monitoring, and data analysis**.

## **What is Atmospheric Pressure?**
Atmospheric pressure is the force exerted by the weight of air molecules on Earth's surface. It is measured in **Pascals (Pa) or hectopascals (hPa)**. Pressure varies with altitude and weather conditions and is crucial in **aerodynamics, meteorology, and space science**.

Understanding pressure variations helps in predicting weather patterns, altitude measurement, and flight stability in aerospace applications.

## **How Does the BMP180 Work?**
The **BMP180** is a digital barometric pressure sensor that measures atmospheric pressure using a **piezoelectric MEMS sensor**. The sensor converts pressure into electrical signals and provides temperature-compensated pressure readings via **I2C communication**.

### **BMP180 Features**
- **High-precision pressure sensing**
- **Temperature compensation**
- **I2C communication for easy interfacing**
- **Used in weather stations, altimeters, and drones**

## **Components Required**
- **E-Cube**
- **BMP180 Pressure Sensor**
- **Jumper Wires**
- **USB Cable**
- **PC for Programming**

## **Setup**
Refer to [Soldering](/en/assembly/soldering.md) if you haven't already attached the **BMP180 module** to the **EPS Board**.

## **Code: Reading Pressure Data from BMP180**

Refer to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing The Code](/en/operationguide/executingthecode.md) for IDE setup and programming guide.

## Code

<a href="/public/BMP180-main.zip" download style="display: inline-block; padding: 10px 15px; background: #007bff; color: white; text-decoration: none; border-radius: 5px;">
Download BMP180 Codes
</a>

## Code Implementation Steps

- **Download the Code from link above and Extract it**
- **Open the .ino file**
- **Execute It**

:::tip
Refer to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing The Code](/en/operationguide/executingthecode.md) for IDE setup and programming guide.
:::

:::info
The name of .ino file and the folder that contains it must have the same name. It is already setup in the zip. If you wish to change it then make sure the names match.
:::

## **Code Overview**
The code initializes the **BMP180** sensor, reads pressure values, and prints them to the Serial Monitor.

## **Code Breakdown**

```cpp
#include <Wire.h>
#include <Adafruit_BMP085.h>
```
Includes the Wire and Adafruit BMP085 libraries for I2C communication and sensor interfacing.<br><br>

```cpp
Adafruit_BMP085 bmp;
```
Creates a BMP180 object for sensor communication.<br><br>

```cpp
bmp.begin();
```
Initializes the BMP180 sensor.<br><br>

```cpp
float pressure = bmp.readPressure();
```
Reads the atmospheric pressure in Pascals.<br><br>

```cpp
Serial.print(pressure);
Serial.println(" Pa");
```
Prints the pressure value to the Serial Monitor.<br><br>

## **What You Can Learn from This Project**  
This project introduces key concepts in **environmental sensing, physics applications, and embedded systems**. By completing it, you will gain hands-on experience in the following areas:  

### **1. Understanding Barometric Sensors**  
- Learn how **BMP180** measures **atmospheric pressure**.  
- Understand the **role of MEMS technology** in modern sensors.  

### **2. Microcontroller Interfacing**  
- Learn how to connect and interface the **BMP180** sensor with **ESP32-S3**.  
- Understand how to read sensor data using **I2C communication**.  

### **3. Physics and Environmental Analysis**  
- Explore the relationship between **pressure, altitude, and weather conditions**.  
- Understand how pressure changes with **altitude and temperature**.  

### **4. Serial Communication and Debugging**  
- Learn how to print **real-time sensor data** to the **Serial Monitor**.  
- Understand how to **troubleshoot** sensor readings and improve code reliability.  

### **5. Practical Applications in Real Life**  
- Understand how **barometric sensors are used in weather stations, drones, and aerospace**.  
- Explore how similar concepts apply to **altitude estimation, pressure monitoring, and flight stability**.  



This project provides a **solid foundation** for environmental sensing and physics-based applications.  

### **Also See:**
- [Measuring Temperature with BMP180](/en/sensors/bmp180_temp.md)  
- [Interfacing I2C Sensors](/en/experiments/gpiosensor/i2c_communication.md)
- [Using the GY-271 Magnetometer](/en/experiments/gpiosensor/motion_detector)

