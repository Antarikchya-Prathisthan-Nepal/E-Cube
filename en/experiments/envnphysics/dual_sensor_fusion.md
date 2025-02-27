---
title: "Combining GY-521 and GY-271 for Accurate Orientation Readings"
description: "Learn how to fuse data from the GY-521 accelerometer/gyroscope and the GY-271 magnetometer for precise orientation tracking."
---

# **Combining GY-521 and GY-271 for Accurate Orientation Readings**

In this guide, we will explore how to combine readings from the **GY-521 (MPU6050)** accelerometer/gyroscope and **GY-271 (QMC5883L)** magnetometer to improve orientation accuracy. This is done using **sensor fusion techniques**, including the **Kalman filter**, to minimize errors and drift.

## **Why Combine Sensors?**
Each sensor has strengths and weaknesses:  
- **Accelerometer (GY-521)** provides reliable static tilt angles but is affected by vibrations and external forces.  
- **Gyroscope (GY-521)** measures angular velocity and provides smooth motion tracking but drifts over time.  
- **Magnetometer (GY-271)** helps determine absolute orientation but is affected by electromagnetic interference.  

By combining these sensors, we can obtain **precise and stable orientation readings**.

## **Understanding Sensor Fusion**
**Sensor fusion** is the process of combining data from multiple sensors to obtain more accurate information than from a single sensor alone. This improves **stability, accuracy, and responsiveness** in applications like robotics, drones, and navigation systems.

### **The Role of Each Sensor**
- The **accelerometer** measures acceleration along X, Y, and Z axes. It helps determine tilt but is sensitive to external forces.  
- The **gyroscope** provides angular velocity (how fast the device is rotating) and helps track orientation changes over time. However, it accumulates errors (drift).  
- The **magnetometer** measures the Earth's magnetic field to determine absolute heading (compass direction).  

By fusing data from these sensors, we can compute an **accurate and drift-free orientation**.

## **Kalman Filter for Sensor Fusion**
One of the most effective sensor fusion techniques is the **Kalman filter**. It is an algorithm that:
- **Predicts** the next state based on previous data.  
- **Corrects** the estimate using new sensor readings.  
- **Reduces noise** and provides a more accurate result.  

In our project, the **Kalman filter helps correct gyroscope drift using accelerometer and magnetometer data**.

## **Components Required**

| Component                   | Present in E-Cube | Not Present in E-Cube |
|-----------------------------|-------------------|-----------------------|
| **E-Cube (ESP32-S3 Module)**| ✔️                |                       |
| **GY-521 (MPU6050) Accelerometer/Gyroscope**     |              ✔️     |                     |
| **GY-271 (QMC5883L) Magnetometer** | ✔️|| 
| **Jumper Wires**            |                   | ✔️                    |
| **USB Cable**              |            ✔️       |                     |
| **PC for Programming** ||✔️|

## **How It Works**
1. **Read raw data** from the GY-521 and GY-271 using I2C communication.  
2. **Compute tilt angles** from the accelerometer.  
3. **Integrate gyroscope data** to track rotation over time.  
4. **Use the magnetometer** to correct heading drift.  
5. **Apply the Kalman filter** to merge the data and obtain precise orientation values.  
6. **Use the processed data** for applications like robotics, drones, and navigation.

---

## **Code: Sensor Fusion with GY-521 and GY-271**
Below is an example code for **combining the accelerometer, gyroscope, and magnetometer** to compute accurate orientation values.

```cpp
#include <Wire.h>
#include <MPU6050.h>
#include <QMC5883LCompass.h>
#include <Kalman.h>  // Kalman filter library

MPU6050 mpu;
QMC5883LCompass compass;
Kalman kalmanX, kalmanY; // Kalman filter objects for X and Y axes

float accX, accY, accZ, gyroX, gyroY, gyroZ;
float roll, pitch, yaw;
unsigned long lastTime;

void setup() {
  Serial.begin(115200);
  Wire.begin();

  mpu.initialize();
  compass.init();
  
  lastTime = millis();
}

void loop() {
  unsigned long currentTime = millis();
  float dt = (currentTime - lastTime) / 1000.0; // Time difference in seconds
  lastTime = currentTime;

  // Read accelerometer and gyroscope data
  int16_t ax, ay, az, gx, gy, gz;
  mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);

  // Convert raw values to proper units
  accX = ax / 16384.0;
  accY = ay / 16384.0;
  accZ = az / 16384.0;
  gyroX = gx / 131.0;
  gyroY = gy / 131.0;
  gyroZ = gz / 131.0;

  // Compute tilt angles from accelerometer
  float accRoll = atan2(accY, accZ) * 180.0 / PI;
  float accPitch = atan2(-accX, sqrt(accY * accY + accZ * accZ)) * 180.0 / PI;

  // Integrate gyroscope data to get rotation
  roll += gyroX * dt;
  pitch += gyroY * dt;
  yaw += gyroZ * dt;

  // Apply Kalman filter
  roll = kalmanX.getAngle(accRoll, gyroX, dt);
  pitch = kalmanY.getAngle(accPitch, gyroY, dt);

  // Read magnetometer data
  compass.read();
  int x = compass.getX();
  int y = compass.getY();
  int z = compass.getZ();

  // Compute yaw angle using magnetometer
  yaw = atan2(y, x) * 180.0 / PI;

  Serial.print("Roll: ");
  Serial.print(roll);
  Serial.print("°, Pitch: ");
  Serial.print(pitch);
  Serial.print("°, Yaw: ");
  Serial.println(yaw);

  delay(100);
}
```
## Code Breakdown

### Reading Acceleromenter and Gyroscope Data

```cpp
mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
```

Reads raw accelerometer and gyroscope data.<br><br>

```cpp
accX = ax / 16384.0;
gyroX = gx / 131.0;
```
Converts raw data into readable units.<br><br>
```cpp
float accRoll = atan2(accY, accZ) * 180.0 / PI;
```

Calculates roll angle from accelerometer data.<br><br>

```cpp
roll += gyroX * dt;
```
Estimates roll angle by integrating gyroscope readings over time.<br><br>

```cpp
roll = kalmanX.getAngle(accRoll, gyroX, dt);
```
Filters the raw accelerometer and gyroscope data to get a more stable angle.<br><br>

```cpp
compass.read();
```
Fetches magnetometer data for yaw angle correction.<br><br>

## **What You Can Learn from This Project**  

This project introduces key concepts in **sensor fusion, navigation, and embedded systems**. You will gain hands-on experience in:  

### **1. Understanding IMU Sensors**  
- Learn how **accelerometers, gyroscopes, and magnetometers** work together.  
- Understand the strengths and limitations of each sensor.  

### **2. Sensor Fusion Techniques**  
- Apply **Kalman filtering** for accurate orientation tracking.  
- Reduce errors caused by sensor noise and drift.  

### **3. Microcontroller Interfacing**  
- Connect and interface the **GY-521 and GY-271** with ESP32-S3.  
- Learn how to read sensor data over **I2C communication**.  

### **4. Practical Applications**  
- Use sensor fusion for **robotics, drones, and motion tracking**.  
- Implement real-time **orientation estimation** for navigation systems.  

---

### **Also See:**  
- [Kalman Filtering Explained](/en/advanced/kalman_filter.md)  
- [Interfacing I2C Sensors](/en/communication/i2c.md)  
