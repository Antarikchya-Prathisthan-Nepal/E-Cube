# **Water Level Monitoring System Using ESP32-S3 and Transistors**

## **Introduction**
This project demonstrates a **water level monitoring system** using the **ESP32-S3 WROOM1** and **four transistors**. The system detects water levels in a beaker and lights up corresponding **LEDs** as the water reaches different levels.

---

## **How It Works**
- A **ground (GND) wire** is placed at one side of the beaker.
- **Four sensor wires** are positioned at different heights on the other side of the beaker.
- Each sensor wire is connected to the **base of an NPN transistor**.
- When water touches a sensor wire, it completes the circuit between the **GND wire** and the transistor base.
- The transistor **switches on**, allowing current to flow from **ESP32-S3 GPIO → LED → transistor emitter → GND**.
- The LED **lights up**, indicating that the water has reached that level.

---

## **Components Required**

- **4 NPN Transistors** (e.g., 2N2222)
- **4 LEDs**
- **4 Resistors** (1kΩ for transistor base)
- **Jumper Wires**
- **Beaker filled with water**

---

## **Circuit Connections**
| **Component**  | **ESP32-S3 GPIO Pin** |
|---------------|----------------------|
| Level 1 Sensor (Transistor Base) | Wire dipped at Level 1 |
| Level 2 Sensor (Transistor Base) | Wire dipped at Level 2 |
| Level 3 Sensor (Transistor Base) | Wire dipped at Level 3 |
| Level 4 Sensor (Transistor Base) | Wire dipped at Level 4 |
| Level 1 LED (Connected to Collector) | GPIO 1 |
| Level 2 LED (Connected to Collector) | GPIO 2 |
| Level 3 LED (Connected to Collector) | GPIO 4 |
| Level 4 LED (Connected to Collector) | GPIO 7 |
| Transistor Emitters | Connected to GND |

### **Working Mechanism**
- Each **LED is connected between an ESP32-S3 GPIO pin and the transistor collector**.
- The **transistor emitter is connected to GND**.
- When water touches a level sensor wire, the transistor **turns ON**, completing the circuit.
- The ESP32-S3 detects the water level and lights up the corresponding LED.

---

## **Code**
```cpp
const int led1 = 1;  // LED for level 1
const int led2 = 2;  // LED for level 2
const int led3 = 4;  // LED for level 3
const int led4 = 7;  // LED for level 4

void setup() {
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
}

void loop() {
  if (digitalRead(led1) == HIGH) {
    digitalWrite(led1, HIGH);
  } else {
    digitalWrite(led1, LOW);
  }

  if (digitalRead(led2) == HIGH) {
    digitalWrite(led2, HIGH);
  } else {
    digitalWrite(led2, LOW);
  }

  if (digitalRead(led3) == HIGH) {
    digitalWrite(led3, HIGH);
  } else {
    digitalWrite(led3, LOW);
  }

  if (digitalRead(led4) == HIGH) {
    digitalWrite(led4, HIGH);
  } else {
    digitalWrite(led4, LOW);
  }
}
```
## Try It Yourself!

### Step 1: Set Up the Circuit  
- Place the GND wire on one side of the beaker.  
- Position four sensor wires on the opposite side at different heights.  
- Connect each sensor wire to the base of an NPN transistor via a 1kΩ resistor.  
- Connect each LED between an ESP32 GPIO pin and the transistor collector.  
- Connect the transistor emitter to GND.  

### Step 2: Upload the Code  
1. Connect the ESP32-S3 to your PC.  
2. Open Arduino IDE or another programming tool.  
3. Upload the code.  

### Step 3: Test the System  
- Slowly fill the beaker with water.  
- As the water reaches each sensor wire, the corresponding LED should turn on.  
- When the water level drops, the LEDs should turn off accordingly.  

## What You Can Learn from This Project  
- How water conducts electricity and completes a circuit.  
- How transistors function as switches.  
- Using ESP32-S3 GPIO pins for LED control.  
- Interfacing a microcontroller with a simple water-level detection system.  

This system can be expanded for automatic water pumps or IoT-based water monitoring projects! 🚀  

