# Blinking LED with ESP32-S3-WROOM-1

In this guide, we'll learn how to blink an LED using **ESP32-S3-WROOM-1**. This is the "Hello World" of embedded programming and a great way to get started with ESP32.

## **🛠️ Components Required**
- **E-Cube**
- **LED (Any color)**
- **220Ω Resistor**
- **Jumper Wires**
- **Soldering Equipments**

## **⚡ Circuit Diagram**
Connect the LED and the resistor to the payload board as follows:

<div style="text-align: center;"><img src="/public/simpleled.png" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

## **💻 Code: Blinking LED**

Refer to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing The Code](/en/operationguide/executingthecode.md) for IDE setup and programming guide.

Upload the following **Code** to your E-Cube:

```cpp
#define LED_PIN 2  // GPIO2 (Pin 38)

void setup() {
  pinMode(LED_PIN, OUTPUT);  // Set GPIO2 as an output
}

void loop() {
  digitalWrite(LED_PIN, HIGH); // Turn LED ON
  delay(1000);                 // Wait for a second
  digitalWrite(LED_PIN, LOW);  // Turn LED OFF
  delay(1000);                 // Wait for a second
}
```

## Code Overview

The LED blink code consists of a setup and loop function, which control the blinking behavior of the LED.

### Code Breakdown

```cpp
#define LED_PIN 2
```
This line defines a constant named `LED_PIN` with a value of **2**, which corresponds to GPIO2.<br><br>
Using a defined constant makes the code easier to read and maintain.<br><br>

```cpp
void setup() {
```
This function is executed once when the program starts and is used for initialization.<br><br>

```cpp
pinMode(LED_PIN, OUTPUT);
```
This command sets GPIO2 as an output pin, allowing it to send voltage to an external component (in this case, the LED).<br><br>

```cpp
void loop() {
```
This function runs continuously after the `setup()` function. It contains the main logic for blinking the LED.<br><br>

```cpp
digitalWrite(LED_PIN, HIGH);
```
This command turns the LED on by setting the `LED_PIN` (GPIO2) to HIGH, supplying voltage to the LED.<br><br>

```cpp
delay(1000);
```
This function pauses the program for **1000 milliseconds** (1 second), keeping the LED on during this time.<br><br>

```cpp
digitalWrite(LED_PIN, LOW);
```
This command turns the LED off by setting the `LED_PIN` to LOW, cutting off the voltage supply.<br><br>

```cpp
delay(1000);
```
This function pauses the program for another **1000 milliseconds** (1 second), keeping the LED off before the loop repeats.<br><br>

<br>
<hr>

<br>
Now try it for yourself. You can experiment with

- different values of delay
- more than one LED
- alternatate the blinking in two LEDs
- explore different blink patterns

### **Also See:**
- [Using I2C communication](/en/experiments/gpiosensor/i2c_communication)  
- [Using the DHT11](/en/experiments/gpiosensor/temp_reading_dht11)
- [Using the GY-271 Magnetometer](/en/experiments/gpiosensor/motion_detector)

