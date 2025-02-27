---
title: "Space Debris Detection using Ultrasonic Sensor"
description: "Learn how to interface an ultrasonic sensor with E-Cube's MSN board for conceptual space debris detection."
---

# **Space Debris Detection using E-Cube**

In this conceptual project, we will use an **ultrasonic sensor** with the **MSN board of E-Cube** to detect objects within a certain range. While **E-Cube cannot be sent to space**, this project serves as an **educational model** for understanding how proximity sensors work in space debris monitoring.

## **What is Space Debris?**
Space debris consists of **defunct satellites, spent rocket stages, and fragmented parts** orbiting Earth. These objects pose a threat to active spacecraft and the **International Space Station (ISS)**. Monitoring and tracking space debris is essential for **collision avoidance and spacecraft safety**.

### **How Can We Simulate Space Debris Detection?**
Since we cannot deploy E-Cube into space, we will **simulate space debris detection** using an **ultrasonic sensor**. The sensor will measure the **distance of objects** in front of it, and if the distance falls **below a certain threshold**, an **LED will glow**, indicating a potential collision.

## **How Does an Ultrasonic Sensor Work?**  

An **ultrasonic sensor** is a device that measures **distance** using **sound waves**. It operates on the principle of **echolocation**, similar to how **bats, dolphins, and submarines** detect objects in their surroundings.  

### **Working Principle**  
The sensor consists of two main components:  
1. **Transmitter** – Sends out high-frequency sound waves (ultrasound).  
2. **Receiver** – Listens for the reflected sound waves (echo).  

The process works as follows:  
1. The **transmitter** generates a brief ultrasonic pulse, typically at **40 kHz**.  
2. This pulse travels through the air until it **hits an object**.  
3. The sound wave then **bounces back** to the **receiver**.  
4. The sensor calculates the **time taken** for the sound to travel to the object and return.  
5. Using the known **speed of sound in air (343 m/s)**, the **distance** to the object is determined using the formula:  


 $$
  \text{Distance} = \frac{\text{Speed of Sound} \times \text{Time}}{2}
  $$  

The division by **2** is necessary because the signal travels to the object and back.


### **Understanding the Speed of Sound**  
The speed of sound depends on factors like **temperature, humidity, and air pressure**. Under **normal conditions (at 20°C)**, sound travels at **343 meters per second**. If temperature increases, sound moves **slightly faster**, affecting the sensor’s accuracy.

### **Key Features of Ultrasonic Sensors**  
- **Non-contact measurement**: Ideal for detecting obstacles without physical contact.  
- **Works in various environments**: Can operate in **darkness, fog, and dust**, unlike optical sensors.  
- **Accuracy & reliability**: Provides **precise** distance measurements for robotics and automation.  

### **Real-World Applications**  
- **Automotive parking sensors**: Detects nearby objects when reversing a vehicle.  
- **Robotics and obstacle avoidance**: Helps robots navigate without colliding.  
- **Industrial automation**: Used in conveyor belts to detect and sort objects.  
- **Medical applications**: Utilized in **ultrasound imaging** for scanning internal organs.  

By understanding how an **ultrasonic sensor works**, we can apply this knowledge to **real-world problem-solving**, including **conceptual space debris detection!** 🚀  

## **Components Required**
- **E-Cube MSN Board**
- **HC-SR04 Ultrasonic Sensor**
- **LED**
- **Resistor (220Ω)**
- **Jumper Wires**
- **USB Cable**
- **PC for Programming**

## **Circuit Connection**

<div style="text-align: center;"><img src="/public/ultrasoniccircuit.png" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

| Ultrasonic Sensor (HC-SR04) | E-Cube MSN Board |
|-----------------------------|------------------|
| VCC                         | 5V               |
| GND                         | GND              |
| TRIG                        | GPIO7       |
| ECHO                        | GPIO4       |

| LED | E-Cube MSN Board |
|-----|------------------|
| Anode (+) | GPIO2 |
| Cathode (-) | GND |

## **Code: Detecting Objects and Glowing LED**
Below is the **code implementation** to interface the **ultrasonic sensor** and turn on an **LED** when an object is detected **within a critical range**.

```cpp
#define TRIG_PIN 7  // Define trigger pin
#define ECHO_PIN 4  // Define echo pin
#define LED_PIN 2   // Define LED pin
#define THRESHOLD_DISTANCE 10 // Set threshold distance in cm

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  long duration;
  float distance;

  // Send ultrasonic pulse
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  // Measure the time for echo signal
  duration = pulseIn(ECHO_PIN, HIGH);

  // Calculate distance in cm
  distance = (duration * 0.0343) / 2;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  // Turn on LED if object is too close
  if (distance < THRESHOLD_DISTANCE) {
    digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, LOW);
  }

  delay(500);
}
```
## Code Breakdown

```cpp
#define TRIG_PIN 7
#define ECHO_PIN 4
#define LED_PIN 2
```
Defines the GPIO pins used for the ultrasonic sensor and LED.<br><br>

```cpp
#define THRESHOLD_DISTANCE 10
```

Sets the minimum safe distance (in cm) before triggering an alert.<br><br>

```cpp
pinMode(TRIG_PIN, OUTPUT);
pinMode(ECHO_PIN, INPUT);
pinMode(LED_PIN, OUTPUT);
```

Configures the trigger pin as an output, the echo pin as an input, and the LED pin as an output.<br><br>

```cpp
digitalWrite(TRIG_PIN, LOW);
delayMicroseconds(2);
digitalWrite(TRIG_PIN, HIGH);
delayMicroseconds(10);
digitalWrite(TRIG_PIN, LOW);
```

Sends an ultrasonic pulse by setting the trigger pin HIGH for 10 microseconds.<br><br>

```cpp
duration = pulseIn(ECHO_PIN, HIGH);
distance = (duration * 0.0343) / 2;
```

Measures the time taken for the pulse to return and calculates the distance.<br><br>

```cpp
if (distance < THRESHOLD_DISTANCE) {
  digitalWrite(LED_PIN, HIGH);
} else {
  digitalWrite(LED_PIN, LOW);
}
```

Turns ON the LED when the detected object is too close, simulating a collision warning system.<br><br>

## **What You Can Learn from This Project**  
This project introduces key concepts in **distance measurement, obstacle detection, and embedded systems**. By completing it, you will gain hands-on experience in the following areas:  

### **1. Understanding Ultrasonic Sensors**  
- Learn how an **ultrasonic sensor** works and how it measures **distance**.  
- Understand the **role of echolocation** in obstacle detection.  

### **2. Microcontroller Interfacing**  
- Learn how to connect and interface the **HC-SR04** ultrasonic sensor with **ESP32-S3**.  
- Understand how to read sensor data using **GPIO communication**.  

### **3. Physics of Sound Waves**  
- Apply **wave propagation principles** to real-world sensing.  
- Understand how sound waves behave in different environmental conditions.  

### **4. Serial Communication and Debugging**  
- Learn how to print **real-time sensor data** to the **Serial Monitor**.  
- Understand how to **troubleshoot** sensor readings and improve code reliability.  

### **5. Practical Applications in Real Life**  
- Understand how **ultrasonic sensors are used in automotive, robotics, and industrial automation**.  
- Explore how similar concepts apply to **autonomous navigation, parking sensors, and obstacle avoidance systems**.  

## **Try It Yourself!**  

### **Multi-Object Detection**  
Modify the project to scan for **multiple objects** and display their distances on an LCD or serial monitor.  

### **Smart Obstacle Avoidance System**  
Use multiple ultrasonic sensors to create a **collision avoidance system** for a robot or drone.  

---  
This project provides a **solid foundation** for distance sensing and real-world engineering applications.  

### **Also See:**  
- [Using the MPU6050 Accelerometer](/en/sensors/mpu6050_accel.md)  
- [Interfacing I2C Sensors](/en/communication/i2c.md)  
- [Water level Monitoring with E-Cube](/en/experiments/envnphysics/water_level_monitor.md)

[Back to Home](./index.md)