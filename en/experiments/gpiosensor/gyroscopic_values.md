---
title: "Obtaining Angle Values from GY-271"
description: "Learn how to interface the GY-271 compass module with E-Cube and read angle values."
---

# **Obtaining Angle Values from E-Cube**

In this guide, we will learn how to use the **GY-271 (QMC5883L)** compass module with **E-Cube** to measure angles in real time. This project introduces **sensor interfacing, angle detection, and physics-based data analysis**.

## **What are Angles?**
Angles are formed when two lines meet at a point, and they are measured in **degrees (°)**. Angles are fundamental in understanding direction, orientation, and movement in various fields, including physics, robotics, and navigation.

### **Trigonometric Functions and Angle Calculation**
Angles can be calculated using trigonometric functions. The relationship between the coordinates of a point and the angle it forms with the axes is essential in various applications, including navigation and robotics.

## **How Does a Compass Work?**
A compass like the **GY-271 (QMC5883L)** measures magnetic fields to determine orientation. It detects the Earth's magnetic field using a **microelectromechanical system (MEMS)**, converting magnetic readings into angle values.

The GY-271 provides:
- **3-axis magnetic field data (X, Y, Z)**
- **Angle calculations for orientation**
- **I2C communication for easy interfacing**

## **Components Required**

| Component                   | Present in E-Cube | Not Present in E-Cube |
|-----------------------------|-------------------|-----------------------|
| **E-Cube (ESP32-S3 Module)**| ✔️                |                       |
| **GY-271 (QMC5883L) Compass**     |          ✔️          |                  | 
| **USB Cable**              |            ✔️       |                     |
| **PC for Programming** ||✔️|

## **Setup**
Refer to [Soldering](/en/assembly/soldering.md) if you haven't already attached the **GY-271 module** to the **EPS Board**.

## **Code: Obtaining Angle Data from GY-271**

Refer to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing The Code](/en/operationguide/executingthecode.md) for IDE setup and programming guide.

## Code

<a href="/public/GY271-main.zip" download style="display: inline-block; padding: 10px 15px; background: #007bff; color: white; text-decoration: none; border-radius: 5px;">
Download GY271 Codes
</a>

## Code Implementation Steps

- **Download the Code from the link above and Extract it**
- **Open the .ino file**
- **Execute It**

:::tip
Refer to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing The Code](/en/operationguide/executingthecode.md) for IDE setup and programming guide.
:::

:::info
The name of the .ino file and the folder that contains it must have the same name. It is already set up in the zip. If you wish to change it, then make sure the names match.
:::

## **Code Overview**
The code initializes the **QMC5883L** compass, reads magnetic field data, calculates angles, and prints them to the Serial Monitor.

## **Code Breakdown**

```cpp
#include <GY271.h>
#include <math.h> // For trigonometric functions
```
Creates a QMC5883L object to communicate with the sensor.<br><br>

```cpp
void setup() {
  Serial.begin(9600);
  compass.init();
}
```
Initializes the sensor and sets up the Serial Monitor.<br><br>

```cpp
int x, y, z;
float angleX, angleY, angleZ;
```
Declares variables to store magnetic field data and calculated angles along X, Y, and Z axes.<br><br>

```cpp
compass.read();
x = compass.getX();
y = compass.getY();
z = compass.getZ();
```
Reads magnetic data from the sensor.<br><br>

```cpp
angleX = atan2(y, z) * 180.0 / PI; // X-axis angle
```
Calculates the angle around the X-axis.<br><br>

```cpp
Serial.print(angleX);

```
Prints the X-axis angle to the Serial Monitor.<br><br>

## What You Can Learn from This Project

This project introduces key concepts in angle sensing, physics applications, and embedded systems. By completing it, you will gain hands-on experience in the following areas:

- **Understanding Compass Sensors**
Learn how QMC5883L works and how it measures orientation.
Understand the role of MEMS technology in modern sensors.

- **Microcontroller Interfacing**
Learn how to connect and interface the GY-271 sensor with ESP32-S3.
Understand how to read sensor data using I2C communication.

- **Trigonometric Applications**
Apply trigonometric functions to real-world angle detection.
Understand how compass sensors determine orientation.

- **Serial Communication and Debugging**
Learn how to print real-time sensor data to the Serial Monitor.
Understand how to troubleshoot sensor readings and improve code reliability.

- **Practical Applications in Real Life**
Understand how compass sensors are used in smartphones, robotics, and navigation.
Explore how similar concepts apply to gesture recognition and orientation tracking.

### **Also See:**
- [Using I2C Communication](/en/experiments/gpiosensor/i2c_communication)  
- [Pressure alert system with BMP180](/en/experiments/gpiosensor/pressure_led_warning)
- [Using the GY-271 Magnetometer](/en/experiments/gpiosensor/motion_detector)

[Back to Home](./index.md)