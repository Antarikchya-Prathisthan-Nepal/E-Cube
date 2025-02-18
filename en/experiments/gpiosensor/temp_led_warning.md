---
title: Reading Humidity From E-Cube
---

# Reading Humidity From E-Cube

In this guide, we'll learn how to use the DHT11 humidity sensor with E-Cube. The DHT11 is a simple and low-cost sensor, making it ideal for various environmental monitoring applications.

## What is Humidity?

Humidity refers to the amount of water vapor present in the air. It is commonly expressed as relative humidity (RH), which is the percentage of moisture in the air relative to the maximum amount it can hold at a given temperature. High humidity levels can make the air feel warmer, while low humidity can cause dryness and discomfort.

## Components Required

- E-Cube
- USB-Wire
- PC for programming

## Description of DHT11

The DHT11 is a basic, low-cost digital humidity sensor. It provides a digital signal output, making it easy to interface with microcontrollers like the ESP32-S3 in the E-Cube. The DHT11 can measure humidity from 20% to 90% with an accuracy of ±5%.

## How It Works

The DHT11 sensor contains a capacitive humidity sensor that measures relative humidity. It uses a single-wire digital interface to communicate with the microcontroller, sending humidity data in a specific format. When queried, the sensor sends a series of bits representing the humidity reading.

## Setup

Refer to Soldering for a guide if you haven't already attached the DHT11 sensor to the EPS Board.

## Code: Reading Humidity from DHT11

Refer to Environment Setup and Executing The Code for IDE setup and programming guide.

Upload the following code to your E-Cube:

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
  
  float h = dht.readHumidity(); // Read humidity

  if (isnan(h)) { // Check if the reading failed
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Humidity: ");
  Serial.print(h);
  Serial.println("%");
}
```