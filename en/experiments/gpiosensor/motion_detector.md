---
title: "Detecting Motion Using GY-271"
description: "Learn how to use the GY-271 magnetometer with E-Cube to determine if it is in motion or at rest."
---

# **Detecting Motion Using GY-271**

In this guide, we will use the **GY-271 (HMC5883L)** magnetometer with **E-Cube** to detect whether the device is **in motion or at rest**. This project helps us understand **magnetometer-based motion detection**, how magnetic fields change with movement, and how they can be used for **navigation and motion sensing**.

## **What is Motion?**
Motion is defined as a **change in position** of an object with respect to a reference point over time. An object is said to be at **rest** if it does not change its position relative to its surroundings.  

A magnetometer like the **GY-271** can be used to detect motion by measuring changes in the **magnetic field** as the device moves through space. This is particularly useful in **navigation systems, robotics, and scientific experiments**.

## **Components Required**
- **E-Cube**
- **GY-271 Magnetometer**
- **Jumper Wires**
- **USB Cable**
- **PC for Programming**

## **Description of GY-271 (HMC5883L)**
The **GY-271** is a **three-axis magnetometer** that measures the **Earth’s magnetic field** in the **X, Y, and Z directions**. It is commonly used for **compass applications**, but it can also detect **motion** by analyzing variations in the magnetic field when the device moves.

- **Measures magnetic fields in three axes (X, Y, Z).**
- **Uses I2C communication for easy interfacing.**
- **Sensitive to changes in motion and orientation.**
- **Can be used for navigation, robotics, and motion tracking.**

## **How It Works**
The **Earth’s magnetic field** is relatively stable at a given location. When the E-Cube is stationary, the magnetic field readings remain constant. However, when E-Cube moves, the **sensor readings fluctuate** due to slight variations in the detected magnetic field.  

By continuously monitoring these changes, we can determine whether the E-Cube is **in motion or at rest**.

## **Setup**
Refer to [Soldering](/en/assembly/soldering.md) if you haven't already attached the **GY-271 sensor** to the **EPS Board**.

## **Code: Detecting Motion with GY-271**

Refer to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing The Code](/en/operationguide/executingthecode.md) for IDE setup and programming guide.

Upload the following **code** to your E-Cube:

```cpp
#include <Wire.h>
#include <HMC5883L.h>

HMC5883L magnetometer;

float prevX = 0, prevY = 0, prevZ = 0;
bool isMoving = false;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    
    magnetometer.initialize();
    
    if (!magnetometer.testConnection()) {
        Serial.println("Failed to connect to GY-271 (HMC5883L)!");
        while (1);
    }

    Serial.println("GY-271 Magnetometer Initialized!");
}

void loop() {
    Vector norm = magnetometer.readNormalize();

    float deltaX = abs(norm.XAxis - prevX);
    float deltaY = abs(norm.YAxis - prevY);
    float deltaZ = abs(norm.ZAxis - prevZ);

    if (deltaX > 0.5 || deltaY > 0.5 || deltaZ > 0.5) {
        if (!isMoving) {
            Serial.println("Motion Detected!");
            isMoving = true;
        }
    } else {
        if (isMoving) {
            Serial.println("Device is at Rest.");
            isMoving = false;
        }
    }

    prevX = norm.XAxis;
    prevY = norm.YAxis;
    prevZ = norm.ZAxis;

    delay(500);
}
```

## Code Overview
The code reads magnetic field values in the X, Y, and Z directions and compares them with previous values. If there is a significant change, it detects motion; otherwise, it considers the device at rest.

## Code Breakdown
```cpp
#include <HMC5883L.h>
```

Includes the library required to communicate with the GY-271 magnetometer.<br><br>

```cpp
HMC5883L magnetometer;
```

Creates an instance of the HMC5883L class for sensor communication.<br><br>

```cpp
Vector norm = magnetometer.readNormalize();
```
Reads the normalized X, Y, and Z-axis magnetic field values.<br><br>

```cpp
float deltaX = abs(norm.XAxis - prevX);
float deltaY = abs(norm.YAxis - prevY);
float deltaZ = abs(norm.ZAxis - prevZ);
```

Calculates the difference between the current and previous readings.<br><br>

```cpp
if (deltaX > 0.5 || deltaY > 0.5 || deltaZ > 0.5)
```
Checks if the change in any axis exceeds a threshold, indicating motion.<br><br>

```cpp
Serial.println("Motion Detected!");
```

Prints a message when movement is detected.<br><br>

```cpp
prevX = norm.XAxis;
prevY = norm.YAxis;
prevZ = norm.ZAxis;
```
Updates the previous readings to track changes over time.<br><br>

## What You Can Learn from This Project

This project introduces motion sensing using magnetometers, which is widely used in robotics, navigation, and scientific measurements. By completing this project, you will gain insights into the following topics:

### Understanding Motion and Magnetometers
Learn how motion detection works using changes in the magnetic field.
Understand the principles behind magnetometers and their applications.

### Sensor Interfacing with Microcontrollers
Learn how to connect and interface the GY-271 with the ESP32-S3.
Use the I2C communication protocol to interact with the sensor.

### Real-Time Motion Detection

Implement logic to detect whether the E-Cube is moving or at rest.

Learn how to set sensitivity thresholds for motion detection.

### Serial Communication for Debugging

Print real-time sensor data to the Serial Monitor.
Use debugging techniques to fine-tune motion detection algorithms.

## Practical Applications in Real Life

Learn how similar motion detection algorithms are used in:

- Smartphones for screen rotation.
- Drones for navigation.
- Wearable devices for fitness tracking.
- Security systems for detecting movement.

## Try It Yourself!

### Adjust Sensitivity
Modify the motion detection threshold to see how small or large movements affect detection.

### Integrate with LED/Buzzer
Instead of just printing messages, make the LED blink or a buzzer sound when motion is detected.

### Combine with Accelerometer (GY-521)
Use both the GY-271 magnetometer and the GY-521 accelerometer for more accurate motion detection.

---

This project provides an introduction to motion sensing using magnetometers. By experimenting with different sensor combinations and algorithms, you can build advanced navigation and motion-tracking applications!

## See also:
Reading Accelerometer Data from GY-521
Using I2C Communication in E-Cube