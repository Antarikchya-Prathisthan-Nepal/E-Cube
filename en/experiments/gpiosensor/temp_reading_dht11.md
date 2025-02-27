# Reading Temperature From E-Cube

In this guide, we'll learn how to use the **DHT11** temperature sensor with **E-Cube**. The DHT11 is a simple and low-cost sensor, making it ideal for various environmental monitoring applications.

## **Components Required**

| Component                   | Present in E-Cube | Not Present in E-Cube |
|-----------------------------|-------------------|-----------------------|
| **E-Cube (ESP32-S3 Module)**| ✔️                |                       |
| **DHT11 Sensor**     |          ✔️          |                  | 
| **USB Cable**              |            ✔️       |                     |
| **PC for Programming** ||✔️|


## **Description of DHT11**
The DHT11 is a basic, low-cost digital temperature sensor. It provides a digital signal output, making it easy to interface with microcontrollers like the ESP32-S3 in the E-Cube. The DHT11 can measure temperatures from **0 to 50°C** with an accuracy of **±2°C**.

## **How It Works**
The DHT11 sensor contains a thermistor that measures temperature. It uses a single-wire digital interface to communicate with the microcontroller, sending temperature data in a specific format. When queried, the sensor sends a series of bits representing the temperature reading.

## **Setup**
Refer to [Soldering](/en/assembly/soldering.md) for a guide if you haven't already attached the **DHT11 sensor** to the **EPS Board**.

## **Code: Reading Temperature from DHT11**

Refer to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing The Code](/en/operationguide/executingthecode.md) for IDE setup and programming guide.

Upload the following **code** to your E-Cube:

```cpp
#include "DHT.h"

#define DHTPIN 37    // Pin where the DHT11 is connected
#define DHTTYPE DHT11    // DHT 11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200); // Initialize serial communication
  dht.begin();          // Initialize the DHT11 sensor
}

void loop() {
  delay(2000); // Wait a few seconds between measurements
  
  float t = dht.readTemperature(); // Read temperature

  if (isnan(t)) { // Check if the reading failed
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Temperature: ");
  Serial.print(t);
  Serial.println("°C");
}
```

## **Code Overview**
The code initializes the DHT11 sensor and continuously reads the temperature value, printing it to the Serial Monitor.

### Code Breakdown

```cpp
#include "DHT.h"
```
Includes the DHT library, which provides functions to interact with the DHT11 sensor.<br><br>

```cpp
#define DHTPIN 37
```
Defines the GPIO pin connected to the DHT11 sensor.<br><br>

```cpp
DHT dht(DHTPIN, DHTTYPE);
```
Creates an instance of the DHT class to manage the DHT11 sensor.<br><br>

```cpp
void setup() {
```
Initializes serial communication and the DHT11 sensor.<br><br>

```cpp
void loop() {
```
Reads the temperature every 2 seconds and prints it to the Serial Monitor.<br><br>

```cpp
float t = dht.readTemperature();
```
Reads the temperature value from the DHT11 sensor.<br><br>

```cpp
if (isnan(t)) {
```
Checks if the reading failed (i.e., if it is NaN) and prints an error message if so.<br><br>

This guide ensures that you can successfully read temperature data from the DHT11 sensor on your E-Cube.

### Also See:
- [Using the GY-521 Accelerometer](/en/experiments/gpiosensor/acceleration_values)  
- [Using the DHT11 for Humidity Reading](/en/experiments/gpiosensor/humidity_reading_dht11)
- [Using the GY-271 Magnetometer](/en/experiments/gpiosensor/motion_detector)

[Back to Home](./index.md)