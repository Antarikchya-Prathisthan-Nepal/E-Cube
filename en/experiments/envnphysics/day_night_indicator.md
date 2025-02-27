# Day/Night Detector Using E-Cube

## Introduction

In this project, we will create a day/night detector using the E-Cube. We will use the LDR that is pre-soldered in the EPS board of the E-cube. The LDR will sense the ambient light level, allowing us to determine whether it is day or night. This can be useful for various applications, such as automatic lighting control or environmental monitoring.

## How an LDR Works

An LDR, or Light Dependent Resistor, is a resistor whose resistance decreases with increasing incident light intensity. When there is little light, the resistance is high, and when exposed to bright light, the resistance drops significantly. This property makes LDRs useful for light-sensing applications.

### Characteristics of LDR:
- **High Resistance**: In darkness, the resistance can be several megaohms.
- **Low Resistance**: In bright light, the resistance can drop to a few hundred ohms.
- **Applications**: Used in automatic lighting systems, alarm clocks, and light meters.

## How a Potential Divider Circuit Works

A potential divider (voltage divider) is a simple circuit that converts a large voltage into a smaller one. It consists of two resistors (or a resistor and an LDR in our case) connected in series. The output voltage is taken from the junction between the two resistors. The formula for the output voltage $V_{out}$ is:

$$
V_{out} = V_{in} \times \frac{R2}{R1 + R2}
$$

Where:
- $V_{in}$ is the input voltage (3.3V in our case).
- $R1$ is the resistance of the first component (LDR).
- $R2$ is the resistance of the second component (10kΩ resistor).

In our circuit, when the light level changes, the resistance of the LDR changes, affecting the voltage at the output, which is read by the ESP32-S3-WROOM-1.

## Circuit Diagram
<div style="text-align: center;"><img src="/public/ldr.png" title="ECube render" style="max-width: 80%; height: 500px; width: auto; margin-top: 20px;" /></div>

head over to [Schematics](schematics.md) for the complete Schematics of E-cube.

## **Components Required**

| Component                   | Present in E-Cube | Not Present in E-Cube |
|-----------------------------|-------------------|-----------------------|
| **E-Cube (ESP32-S3 Module)**| ✔️                |                       |
| **LDR**     |              ✔️     |                     |
| **USB Cable**              |            ✔️       |                     |
| **PC for Programming** ||✔️|

## Code

```cpp
#include <Arduino.h>

const int ldrPin = 18; // GPIO pin connected to LDR
const int threshold = 500; // Threshold value for day/night detection

void setup() {
    Serial.begin(115200); // Initialize serial communication
}

void loop() {
    int ldrValue = analogRead(ldrPin); // Read the LDR value

    if (ldrValue < threshold) {
        Serial.println("It's Night!"); // Print message for night
    } else {
        Serial.println("It's Day!"); // Print message for day
    }

    delay(1000); // Delay for 1 second
}
```

## Identifying the Threshold

Determining the appropriate threshold value is crucial for accurately detecting day and night with your LDR circuit. Here’s a simple guide to help you find the right threshold:

### Steps to Identify the Threshold

1. **Set Up Your E-Cube**: Ensure your E-Cube is properly assembled and ready for operation. 

Head to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing the Code](/en/operationguide/executingthecode.md) for setup and programming.

2. **Upload the Test Code**: Use the following test code to read and monitor the LDR values in real-time.

```cpp
   #include <Arduino.h>

   const int ldrPin = 18; // GPIO pin connected to LDR

   void setup() {
       Serial.begin(115200); // Initialize serial communication
   }

   void loop() {
       int ldrValue = analogRead(ldrPin); // Read the LDR value
       Serial.print("LDR Value: ");
       Serial.println(ldrValue); // Print the LDR value
       delay(1000); // Delay for 1 second
   }
```


3. **Monitor LDR Values**: Open the Serial Monitor in the Arduino IDE and observe the LDR values in different lighting conditions:
   - **In Bright Light**: Place the LDR in direct sunlight or a well-lit room. Note the values. They should be low (typically below 300).
   - **In Dim Light**: Move the LDR to a dimly lit area. The values will increase (usually above 500).
   - **In Darkness**: Cover the LDR completely or place it in a dark room. The values should be high (often above 800).

4. **Determine the Threshold**: 
   - Analyze the observed LDR values to find a suitable threshold that differentiates between day and night.
   - A common threshold is around 500, but this may vary depending on your specific environment and application. Adjust the threshold based on your observations to minimize false readings.

5. **Implement the Threshold**: Once you've determined the appropriate threshold value, update the `threshold` variable in your main code accordingly.

### Example of Threshold Adjustment

If during your testing you find that the LDR value is consistently around 600 in dim light and drops to 400 in bright light, you might set your threshold to 500:

```cpp
const int threshold = 500; // Updated threshold value
```
## Conclusion

By following these steps, you can effectively determine the threshold for your day/night detector project, ensuring reliable performance in your specific lighting conditions.

## Try It yourself

This experiment helps you create a logic between day/night detection. Now, pair it with other projects such as led-blinking or trigerring other circuits. 

Try creating a circuit in which an LED glows up when its night time. 

Scale it up by connecting many LEDs to create an ambient lighting that automatically turns on when its night. 

You can include this section in your VitePress project as is. Let me know if you need further modifications or additions!

### **Also See:**
- [Measuring Pressure using E-Cube](/en/experiments/gpiosensor/pressure_values.md) 
- [Using Led and E-Cube to send Morse Code](/en/experiments/morsecodenlight/morse_led_transmitter)
- [Using Solar Panel and E-Cube to receive Morse Code](/en/experiments/morsecodenlight/morse_ldr_decoder)

[Back to Home](./index.md)