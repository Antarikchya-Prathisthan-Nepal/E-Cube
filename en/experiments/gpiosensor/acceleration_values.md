---
title: "Reading Accelerometer Values from GY-521"
description: "Learn how to interface the GY-521 accelerometer module with E-Cube and read acceleration values."
---

# **Reading Accelerometer Values from E-Cube**

In this guide, we will learn how to use the **GY-521 (MPU6050)** accelerometer module with **E-Cube** to measure acceleration in real time. This project introduces **sensor interfacing, motion detection, and physics-based data analysis**.

## **What is Acceleration?**
Acceleration is the rate of change of velocity over time. It is measured in **meters per second squared (m/s²)** and is a fundamental concept in physics. Acceleration occurs when an object speeds up, slows down, or changes direction. 

### **Newton’s Second Law of Motion**
Acceleration is directly related to force and mass by Newton's Second Law:

$$ F = ma $$

where:
- **F** is force (Newton)
- **m** is mass (kg)
- **a** is acceleration (m/s²)

This principle is applied in various fields, including robotics, aerospace, and vehicle dynamics.

## **How Does an Accelerometer Work?**
An accelerometer like the **GY-521 (MPU6050)** measures acceleration using a **microelectromechanical system (MEMS)**. It detects changes in motion using tiny capacitive plates that shift under acceleration, altering the electrical signal, which is then processed into acceleration values.

The MPU6050 provides:
- **3-axis acceleration data (X, Y, Z)**
- **Gyroscope readings for angular velocity**
- **I2C communication for easy interfacing**

## **Components Required**
- **E-Cube**
- **GY-521 (MPU6050) Accelerometer**
- **Jumper Wires**
- **USB Cable**
- **PC for Programming**

## **Setup**
Refer to [Soldering](/en/assembly/soldering.md) if you haven't already attached the **GY-521 module** to the **EPS Board**.

## **Code: Reading Acceleration Data from GY-521**

Refer to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing The Code](/en/operationguide/executingthecode.md) for IDE setup and programming guide.

## Code

<a href="/public/GY521-main.zip" download style="display: inline-block; padding: 10px 15px; background: #007bff; color: white; text-decoration: none; border-radius: 5px;">
Download GY521 Codes
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
The code initializes the **MPU6050** accelerometer, reads acceleration values, and prints them to the Serial Monitor.

## **Code Breakdown**

```cpp
#include <MPU6050.h>
```
Includes the MPU6050 library for easy interfacing.<br><br>

```cpp
MPU6050 mpu;
```
Creates an MPU6050 object to communicate with the sensor.<br><br>

```cpp
mpu.initialize();
```
Initializes the sensor and verifies the connection.<br><br>

```cpp
int16_t ax, ay, az;
```
Declares variables to store acceleration values along **X, Y, and Z axes**.<br><br>

```cpp
mpu.getAcceleration(&ax, &ay, &az);
```
Reads acceleration data from the sensor.<br><br>

```cpp
Serial.print(ax);
```
Prints the acceleration values to the Serial Monitor.<br><br>

## **What You Can Learn from This Project**  
This project introduces key concepts in **motion sensing, physics applications, and embedded systems**. By completing it, you will gain hands-on experience in the following areas:  

### **1. Understanding Accelerometer Sensors**  
- Learn how **MPU6050** works and how it measures **acceleration**.  
- Understand the **role of MEMS technology** in modern sensors.  

### **2. Microcontroller Interfacing**  
- Learn how to connect and interface the **GY-521** sensor with **ESP32-S3**.  
- Understand how to read sensor data using **I2C communication**.  

### **3. Physics and Motion Analysis**  
- Apply **Newton’s Laws** to real-world motion sensing.  
- Understand how accelerometers detect **linear acceleration**.  

### **4. Serial Communication and Debugging**  
- Learn how to print **real-time sensor data** to the **Serial Monitor**.  
- Understand how to **troubleshoot** sensor readings and improve code reliability.  

### **5. Practical Applications in Real Life**  
- Understand how **accelerometers are used in smartphones, robotics, and aerospace**.  
- Explore how similar concepts apply to **gesture recognition, vehicle stability control, and structural monitoring**.  

## **Try It Yourself!**

### **Detect Free Fall**  
Modify the project to detect free-fall conditions by checking when all acceleration values approach **zero**.

### **Tilt Detection**  
Use the accelerometer data to detect the orientation of the sensor and turn on an LED when tilted beyond a certain angle.

---
This project provides a **solid foundation** for motion sensing and physics-based applications.  

### **Also See:**
- [Using I2C Communication](/en/experiments/gpiosensor/i2c_communication)  
- [Using the DHT11 for Temperature Reading](/en/experiments/gpiosensor/temp_reading_dht11)
- [Using the GY-271 Magnetometer](/en/experiments/gpiosensor/motion_detector)
