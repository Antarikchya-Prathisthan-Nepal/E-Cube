---
title: "Detecting Free Fall with an Accelerometer"
description: "Learn how to detect free fall conditions using acceleration values from the GY-521 accelerometer."
---

# **Detecting Free Fall with an Accelerometer**

In this guide, we will learn how to use the **GY-521 (MPU6050)** accelerometer module with **E-Cube** to detect free fall. This project introduces **motion sensing, physics-based analysis, and real-world applications of acceleration data**.

## **What is Free Fall?**
Free fall occurs when an object moves under the influence of gravity alone, without any other forces acting on it. In the absence of air resistance, all objects experience the same acceleration due to gravity, **9.81 m/s²**.

### **Physics Behind Free Fall**
During free fall, the only force acting on an object is gravity. The acceleration due to gravity (**g**) is constant:

$$ a = g = 9.81 \, m/s^2 $$

However, if an accelerometer in free fall is also falling at the same rate as gravity, it **experiences zero acceleration relative to itself**.

## **How Does an Accelerometer Detect Free Fall?**
An accelerometer like the **GY-521 (MPU6050)** measures acceleration along three axes (**X, Y, and Z**). In normal conditions, the sensor reads around **±9.81 m/s²** due to Earth's gravity.  

During free fall:
- The measured acceleration approaches **0 m/s²** in all axes.
- If all acceleration components (**ax, ay, az**) are close to zero, the sensor is likely in free fall.

## **Components Required**

| Component                   | Present in E-Cube | Not Present in E-Cube |
|-----------------------------|-------------------|-----------------------|
| **E-Cube (ESP32-S3 Module)**| ✔️                |                       |
| **GY-521 (MPU6050) Accelerometer**     |          ✔️          |                  | 
| **USB Cable**              |            ✔️       |                     |
| **PC for Programming** ||✔️|

## **Setup**
Refer to [Soldering](/en/assembly/soldering.md) if you haven't already attached the **GY-521 module** to the **EPS Board**.

## **Code: Detecting Free Fall Using GY-521**  

Refer to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing The Code](/en/operationguide/executingthecode.md) for IDE setup and programming guide.

## Code  

<a href="/public/GY521-freefall.zip" download style="display: inline-block; padding: 10px 15px; background: #007bff; color: white; text-decoration: none; border-radius: 5px;">
Download Free Fall Detection Code
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
The code initializes the **MPU6050** accelerometer, continuously reads acceleration values, and detects when all three axes approach **zero acceleration**, indicating free fall.

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
Declares variables to store acceleration values along X, Y, and Z axes.<br><br>

```cpp
mpu.getAcceleration(&ax, &ay, &az);
```
Reads acceleration data from the sensor.<br><br>

```cpp
float totalAcceleration = sqrt(ax * ax + ay * ay + az * az);
```

Computes the total acceleration magnitude.<br><br>

```cpp
if (totalAcceleration < 2.0)
```
Checks if the acceleration is significantly below the expected 9.81 m/s², indicating free fall.<br><br>

```cpp
Serial.println("Free Fall Detected!");
```
Prints a message when free fall is detected.<br><br>

## **What You Can Learn from This Project**  
This project introduces key concepts in **motion sensing, physics applications, and embedded systems**. By completing it, you will gain hands-on experience in the following areas:  

### **1. Understanding Accelerometer Sensors**  
- Learn how **MPU6050** works and how it measures **acceleration**.  
- Understand the **role of MEMS technology** in detecting motion and free fall.  

### **2. Microcontroller Interfacing**  
- Learn how to connect and interface the **GY-521** sensor with **ESP32-S3**.  
- Understand how to read sensor data using **I2C communication**.  

### **3. Physics and Motion Analysis**  
- Apply **Newton’s Laws** to detect free fall conditions.  
- Understand how accelerometers detect **linear acceleration and zero gravity states**.  

### **4. Serial Communication and Debugging**  
- Learn how to print **real-time sensor data** to the **Serial Monitor**.  
- Understand how to **troubleshoot** sensor readings and improve code reliability.  

### **5. Practical Applications in Real Life**  
- Understand how **free fall detection is used in smartphones, aerospace, and emergency response systems**.  
- Explore how similar concepts apply to **drop detection, impact sensing, and astronaut training**.  

## **Try It Yourself!**

### **Impact Detection**  
Modify the project to detect **sudden acceleration spikes** when an object hits the ground.

### **Parachute Deployment System**  
Use the free fall detection system to trigger **automatic parachute deployment** when free fall is detected.

### **Also See:**
- [Using the MPU6050 Gyroscope](/en/sensors/mpu6050_gyro.md)  
- [Pressure alert system with BMP180](/en/experiments/gpiosensor/pressure_led_warning)
- [Using the GY-271 Magnetometer](/en/experiments/gpiosensor/motion_detector)

[Back to Home](./index.md)