# **Seeing E-Cube data wirelessly using Web Portal**

## Introduction  

E-Cube, powered by the **ESP32-S3-WROOM-1**, can be configured to host a **web portal** that allows users to view real-time sensor data wirelessly. By setting up a simple web server on E-Cube, users can connect to it via Wi-Fi and access data such as temperature, acceleration, and magnetic field readings.  

This guide will walk you through the process of setting up a **web portal for E-Cube**, serving a webpage from the ESP32-S3, and displaying sensor data dynamically. By the end of this tutorial, you will have a functional interface to monitor E-Cube’s onboard sensors remotely.  


## **Overview**
The **E-Cube Sensor System** integrates the following sensors:

- **GY-271 (Compass Sensor)**
- **DHT11 (Temperature & Humidity Sensor)**
- **BMP180 (Pressure & Altitude Sensor)**
- **MPU6050 (Accelerometer & Gyroscope)**

These sensors are connected to an **ESP32** microcontroller, which collects the data and transmits it via **serial communication**.


## **How It Works**
1. The **ESP32** collects real-time sensor readings.
2. The data is processed and sent via the **serial monitor**.
3. The data can be stored or visualized using a connected interface.

## **Components Required**

| Component                   | Present in E-Cube | Not Present in E-Cube |
|-----------------------------|-------------------|-----------------------|
| **E-Cube (ESP32-S3 Module)**| ✔️                |                       |
| **GY-271 Magnetometer**     |     ✔️              |                    | 
| **DHT11 Temperature & Humidity Sensor**     |     ✔️              |                    | 
| **BMP180 Pressure & Altitude Sensor**     |     ✔️              |                    | 
| **MPU6050 Accelerometer & Gyroscope**     |     ✔️              |                    | 
| **USB Cable**              |            ✔️       |                     |
| **PC for Programming** ||✔️|*

## **Code**


<a href="/public/sensor_readings.zip" download style="display: inline-block; padding: 10px 15px; background: #007bff; color: white; text-decoration: none; border-radius: 5px;">
Download E-Cube Web Portal Codes
</a>

### <u> **Code Breakdown for E-Cube Sensor Data Portal** </u>

This breakdown explains each section of the **ESP32 Arduino code** used for collecting sensor data from **GY-271, DHT11, BMP180, and MPU6050**.

### **1. Library Imports**
```cpp
#include <GY271.h>
#include <math.h>
#include <DHT11.h>
#include "BMP180_ESP32.h"
#include <Wire.h>
#include <GY521.h>
```
- **GY271.h** → Handles the **GY-271** (Compass Sensor).
- **math.h** → Provides **trigonometric functions** for angle calculations.
- **DHT11.h** → Interfaces with the **DHT11** Temperature & Humidity Sensor.
- **BMP180_ESP32.h** → Manages the **BMP180** Pressure & Altitude Sensor.
- **Wire.h** → Enables **I2C** communication for multiple sensors.
- **GY521.h** → Controls the **MPU6050** Accelerometer & Gyroscope.

### **2. Sensor Initialization** 

```cpp
QMC5883LCompass compass;  // GY-271 Magnetometer
DHT11 dht11(37);          // DHT11 Temperature & Humidity Sensor
SFE_BMP180 bmp180;        // BMP180 Pressure Sensor
#define SDA_PIN 36
#define SCL_PIN 35
#define P0 1013.25  // Standard Atmospheric Pressure at Sea Level
MPU6050 mpu;        // MPU6050 Accelerometer & Gyroscope
unsigned long previousTime = 0;
float timeStep = 0.01;

```
- **Defines** sensor objects for easy access.
- Assigns **I2C** pins for communication.
- **P0** represents the standard **atmospheric pressure** at sea level.

### **3. Setup Function**
```cpp
void setup() {
    Serial.begin(115200);
    
    compass.init();
    Wire.begin(SDA_PIN, SCL_PIN);
    
    bmp180.begin();
    mpu.begin(MPU6050_SCALE_2000DPS, MPU6050_RANGE_2G);
    mpu.setAccelPowerOnDelay(MPU6050_DELAY_3MS);
    mpu.setThreshold(3);
    previousTime = millis();
}

```
1. Serial communication starts at **115200** baud rate.
2. **GY-271** is initialized using **compass.init()**.
3. **I2C** communication begins for **BMP180** and **MPU6050.**
4. **MPU6050** is configured with:
- **2000DPS** gyro range
- **2G** accelerometer range
- Power delay & sensitivity **threshold** adjustments.

### **4. Main Loop**

#### 4.1. GY-271 Magnetometer (Compass)
```cpp
compass.read();
Serial.print("GY271_X: "); Serial.print(compass.getX()); Serial.print(",");
Serial.print("GY271_Y: "); Serial.print(compass.getY()); Serial.print(",");
Serial.print("GY271_Z: "); Serial.print(compass.getZ()); Serial.print(",");

```
- Reads **X, Y, Z** magnetic field values.
- Outputs them as **comma-separated values** **(CSV)** for structured data.

#### 4.2. DHT11 Temperature & Humidity 
```cpp
int humidity = dht11.readHumidity();
double dhtTemperature = dht11.readTemperature();
Serial.print("DHT11_Temperature: "); Serial.print(dhtTemperature); Serial.print(",");
Serial.print("DHT11_Humidity: "); Serial.print(humidity); Serial.print(",");

```
- Reads **humidity** and **temperature.**
- **Displays** sensor readings for **logging**.

#### 4.3. BMP180 Pressure & Altitude
``` cpp
double bmpTemperature, pressure, altitude;
bmp180.startTemperature();
delay(5);
bmp180.getTemperature(bmpTemperature);
Serial.print("BMP180_Temperature: "); Serial.print(bmpTemperature); Serial.print(",");

bmp180.startPressure(3);
delay(26);
bmp180.getPressure(pressure, bmpTemperature);
Serial.print("BMP180_Pressure: "); Serial.print(pressure); Serial.print(",");

altitude = bmp180.altitude(pressure, P0);
Serial.print("BMP180_Altitude: "); Serial.print(altitude); Serial.print(",");
```
- Captures **temperature** from **BMP180**.
- Reads **atmospheric pressure** and converts it into **altitude.**
- Uses a standard **delay** to ensure sensor stability.

#### 4.4. MPU6050 Accelerometer & Gyroscope
```cpp
Vector normAccel = mpu.readNormalizeAccel();
Serial.print("X_Accelerometer: "); Serial.print(normAccel.XAxis); Serial.print(",");
Serial.print("Y_Accelerometer: "); Serial.print(normAccel.YAxis); Serial.print(",");
Serial.print("Z_Accelerometer: "); Serial.print(normAccel.ZAxis); Serial.print(",");
```
- Reads **X, Y, Z** acceleration data.
- Helps measure **motion** and **orientation.**

### **5. Motion Detection with MPU6050**
```cpp
Activites act = mpu.readActivites();
if (act.isFreeFall) {
    Serial.println("MPU6050 Freefall Detected");
}
if (act.isActivity) {
    Serial.println("MPU6050 Motion Detected");
}
```
- Detects **motion** and **freefall events.**
- Useful for applications like **fall detection systems.**

### **6. Adding Delay for Data Stability**
```cpp
delay(250);
```
- Ensures sensors update at a controlled rate.
- Prevents flooding of serial data output.

## **Summary of Key Functions**
| Function | Purpose |
|----------|---------|
| `compass.read()` | Reads GY-271 (Compass) data |
| `dht11.readTemperature()` | Reads temperature from DHT11 |
| `dht11.readHumidity()` | Reads humidity from DHT11 |
| `bmp180.getTemperature()` | Reads temperature from BMP180 |
| `bmp180.getPressure()` | Reads atmospheric pressure |
| `bmp180.altitude(pressure, P0)` | Calculates altitude from pressure |
| `mpu.readNormalizeAccel()` | Reads acceleration from MPU6050 |
| `mpu.readActivites()` | Detects motion and freefall |

---

## **Final Notes**
- The **ESP32 continuously collects and logs sensor data**.
- The data can be used for:
  - **Real-time monitoring**
  - **Data logging & visualization**
  - **IoT-based sensor integration**
- This system allows **multiple sensor readings** to be processed and sent for further applications like:
  - **Remote environmental monitoring**
  - **Weather stations**
  - **Smart motion detection systems**

This **summary** provides a quick overview of the **main functions and practical applications** of the **E-Cube Sensor Data Portal**. 🚀📡

### Also See:

- [Temperature with DHT11](/en/experiments/gpiosensor/temp_led_warning.md)

- [Humidity with DHT11](/en/experiments/gpiosensor/humidity_led_warning.md)

- [Pressure Sensor](/en/experiments/gpiosensor/pressure_led_warning.md)

- [Acceleration from GY271](/en/experiments/gpiosensor/gyroscopic_values.md)

- [I2C Communication](/en/experiments/gpiosensor/i2c_communication.md) 

[Back to Home](./index.md)