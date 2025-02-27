---
title: "LED Indicator for High Temperature"
description: "Learn how to control an LED using the DHT11 temperature sensor with E-Cube."
---

# **LED Indicator for High Temperature**

In this guide, we will learn how to use the **DHT11** temperature sensor with **E-Cube** to turn an LED on when the temperature exceeds a certain threshold. This project demonstrates **sensor interfacing, conditional logic, and real-time decision-making**.

## **What is Temperature?**
Temperature is a measure of how hot or cold an object or environment is. It is typically measured in **Celsius (°C)** or **Fahrenheit (°F)**. The DHT11 sensor provides temperature readings that can be used for **automated control systems** and **environmental monitoring**.

## **Components Required**
- **E-Cube**
- **LED**
- **220Ω Resistor**
- **Jumper Wires**
- **USB Cable**
- **PC for Programming**

## **Description of DHT11**
The **DHT11** is a basic, low-cost digital temperature and humidity sensor. It can measure temperature in the range of **0°C to 50°C** with an accuracy of **±2°C**. It communicates with the microcontroller using a **single-wire digital interface**, making it easy to integrate with the **ESP32-S3** in the E-Cube.

## **How It Works**
The DHT11 sensor contains a **thermistor** that changes resistance with temperature. The ESP32-S3 reads the **digital temperature output** from the sensor and compares it with a predefined threshold. If the temperature exceeds **30°C**, the LED turns **ON**; otherwise, it remains **OFF**.

## **Setup**
Refer to [Soldering](/en/assembly/soldering.md) if you haven't already attached the **DHT11 sensor** to the **EPS Board**.

## **Circuit Diagram**
<div style="text-align: center;"><img src="/public/simpleled.png" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

## **Code: LED Glows When Temperature is High**

Refer to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing The Code](/en/operationguide/executingthecode.md) for IDE setup and programming guide.

Upload the following **code** to your E-Cube:

```cpp
#include <DHT.h>

#define DHTPIN 37         // Pin where DHT11 is connected
#define DHTTYPE DHT11    // Defining the sensor type
#define LEDPIN 2         // Pin where LED is connected

DHT dht(DHTPIN, DHTTYPE);

void setup() {
    Serial.begin(115200);
    dht.begin();
    pinMode(LEDPIN, OUTPUT);
}

void loop() {
    float temperature = dht.readTemperature();  // Read temperature in Celsius

    if (isnan(temperature)) {
        Serial.println("Failed to read from DHT sensor!");
        return;
    }

    Serial.print("Temperature: ");
    Serial.print(temperature);
    Serial.println(" °C");

    if (temperature > 30) {
        digitalWrite(LEDPIN, HIGH);  // Turn LED ON
        Serial.println("LED ON: High Temperature!");
    } else {
        digitalWrite(LEDPIN, LOW);   // Turn LED OFF
        Serial.println("LED OFF: Normal Temperature");
    }

    delay(2000);  // Wait 2 seconds before next reading
}
```
## Code Overview
The code initializes the DHT11 sensor and continuously reads the temperature value. If the temperature exceeds 30°C, it turns the LED ON, otherwise, it remains OFF.

## Code Breakdown

```cpp
#include <DHT.h>
```
Includes the DHT library, which provides functions to interact with the DHT11 sensor.<br><br>

```cpp
#define DHTPIN 37
```
Defines the GPIO pin where the DHT11 sensor is connected.<br><br>

```cpp
DHT dht(DHTPIN, DHTTYPE);
```
Creates an instance of the DHT class to handle the sensor.<br><br>

```cpp
void setup() {
```
Initializes serial communication, sets up the DHT11 sensor, and configures the LED pin as output.<br><br>

```cpp
void loop() {
```
Reads the temperature every 2 seconds and prints it to the Serial Monitor.<br><br>

```cpp
float temperature = dht.readTemperature();
```
Reads the temperature value from the DHT11 sensor.<br><br>

```cpp
if (temperature > 30) {
```
Checks if the temperature exceeds 30°C and turns the LED ON.<br><br>

```cpp
else {
    digitalWrite(LEDPIN, LOW);
}
```
Turns the LED OFF if the temperature is below 30°C.<br><br>

## **What You Can Learn from This Project**
This project introduces key concepts in **embedded systems, sensor integration, and automation**. By completing it, you will gain hands-on experience in the following areas:

### **1. Understanding Temperature Sensors**
- Learn how **DHT11** works and how it measures **temperature**.  
- Understand the **accuracy and limitations** of low-cost sensors.  

### **2. Microcontroller Interfacing**
- Learn how to connect and interface the **DHT11** sensor with **ESP32-S3**.  
- Understand how to read sensor data using **digital communication protocols**.  

### **3. Conditional Logic and Decision Making**
- Use `if` statements to create logic-based decisions.  
- Learn how **threshold-based control** works in automation.  

### **4. GPIO Control and Output Devices**
- Learn how to control **LEDs** using **ESP32-S3 GPIO pins**.  
- Understand how external components like **LEDs and buzzers** can react to sensor inputs.  

### **5. Serial Communication and Debugging**
- Learn how to print **real-time sensor data** to the **Serial Monitor**.  
- Understand how to **troubleshoot** sensor readings and improve code reliability.  

### **6. Practical Applications in Real Life**
- Understand how **temperature monitoring systems** work in **homes, industries, and smart devices**.  
- Explore how similar concepts apply to **climate control, weather stations, and safety alarms**.  

---
This project builds a strong foundation in **IoT, automation, and embedded programming**. Students can extend it by integrating **displays, cloud connectivity, or machine learning-based prediction systems** for more advanced applications!


## Try It Yourself!

### Adjust Threshold

Try changing the threshold for the glowing up of led to different temperature values.

### Reverse the logic!

Swap the output of the LED. Make it so that the LED glows in low temperatures and glows in greater temperatures.
 
### Buzzer Alert 
Replace the LED with a Buzzer. You now have a temperature based buzzer system. This is a very useful project which can be implemented to  detect house fires, forest fires etc.

---

This project provides a **solid foundation** for automated temperature-based control systems. 

### Also See:

- [Using I2C Communication](/en/experiments/gpiosensor/i2c_communication)  
- [Pressure alert system with BMP180](/en/experiments/gpiosensor/pressure_led_warning)
- [Using the GY-271 Magnetometer](/en/experiments/gpiosensor/motion_detector)

[Back to Home](./index.md)