---
title: LED Glows on High Temperature
description: An educational experiment where an LED turns on when the temperature exceeds a threshold.
---

# LED Glows on High Temperature

In this experiment, we'll use the **DHT11** temperature sensor with **E-Cube** to control an LED. The LED will turn on when the temperature exceeds a predefined threshold.

## 🔍 **Introduction**
Temperature monitoring is an essential part of many applications, including weather stations, home automation, and industrial processes. This experiment demonstrates how to read temperature data and trigger an LED when the temperature is too high.

## 🛠️ **Components Required**
- **E-Cube**
- **DHT11 Temperature Sensor**
- **LED**
- **220Ω Resistor**
- **Jumper Wires**
- **Breadboard (optional)**

## 🌡️ **What is Temperature?**
Temperature is a measure of the heat energy in an object or environment. It is commonly measured in **Celsius (°C)** or **Fahrenheit (°F)**. Sensors like the **DHT11** help us measure temperature digitally.

## 🔧 **How the Circuit Works**
1. The **DHT11 sensor** reads the temperature.
2. The **E-Cube** processes the temperature data.
3. If the temperature exceeds a defined threshold (e.g., 30°C), the **LED turns on**.
4. If the temperature is below the threshold, the **LED remains off**.

## 🛠️ **Circuit Diagram**
Refer to the following connection guide:
- **DHT11 Sensor:**
  - VCC → 3.3V (on E-Cube)
  - GND → GND (on E-Cube)
  - DATA → GPIO 37 (on E-Cube)
- **LED:**
  - Anode (long leg) → GPIO 5 (on E-Cube) via a **220Ω resistor**
  - Cathode (short leg) → GND (on E-Cube)

## 💻 **Code Implementation**
Upload the following **code** to your E-Cube:

```cpp
#include "DHT.h"

#define DHTPIN 37        // Pin where the DHT11 is connected
#define DHTTYPE DHT11    // Type of DHT sensor
#define LEDPIN 5         // Pin where the LED is connected
#define TEMP_THRESHOLD 30 // Temperature threshold in °C

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200); // Initialize serial communication
  dht.begin();          // Initialize the DHT11 sensor
  pinMode(LEDPIN, OUTPUT); // Set LED pin as output
}

void loop() {
  delay(2000); // Wait a few seconds between measurements
  
  float temperature = dht.readTemperature(); // Read temperature

  if (isnan(temperature)) { // Check if the reading failed
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println("°C");

  if (temperature > TEMP_THRESHOLD) {
    digitalWrite(LEDPIN, HIGH); // Turn LED ON
    Serial.println("LED ON: High Temperature!");
  } else {
    digitalWrite(LEDPIN, LOW); // Turn LED OFF
    Serial.println("LED OFF: Normal Temperature");
  }
}
