# **Water Level Monitoring System Using E-Cube**
This project demonstrates a **water level monitoring system** using the **E-Cube** (ESP32-S3 WROOM1) and **four transistors**. The system detects water levels in a beaker and lights up corresponding **LEDs** as the water reaches different levels.

---
# **Introduction to Water Level Monitoring**

**Water level monitoring** involves the continuous measurement and observation of water levels in various environments, such as rivers, lakes, reservoirs, and groundwater sources. This practice is essential for understanding and managing water resources effectively.

## **Why Water Level Monitoring?**

Monitoring water levels provides critical data for:

- **Flood Prevention and Management**: By tracking water levels in real-time, authorities can predict potential flooding events and implement timely evacuation or mitigation strategies. :contentReference[oaicite:0]{index=0}

- **Water Resource Management**: Accurate water level data aids in the sustainable management of water supplies for agricultural, industrial, and domestic use. :contentReference[oaicite:1]{index=1}

- **Environmental Protection**: Observing changes in water levels helps in assessing the health of aquatic ecosystems and in making informed decisions to protect habitats.

- **Climate Change Studies**: Long-term water level data contribute to understanding the impacts of climate change on sea levels and freshwater resources. :contentReference[oaicite:2]{index=2}

## **How is Water Level Monitoring done?**

Several techniques are employed to measure water levels:

- **Staff Gauges**: Simple measuring poles installed in water bodies, providing visual indications of water levels. :contentReference[oaicite:3]{index=3}

- **Float Sensors**: Devices that float on the water surface, moving with changes in water level to provide continuous measurements. :contentReference[oaicite:4]{index=4}

- **Pressure Transducers**: Sensors that measure the pressure exerted by the water column, translating it into depth readings.

- **Ultrasonic and Radar Sensors**: Non-contact devices that emit sound or radio waves to determine water surface levels based on the time it takes for the signal to return.

- **Tide Gauges**: Specialized instruments used to measure sea levels, essential for understanding oceanographic processes and sea-level rise. :contentReference[oaicite:5]{index=5}

## **Applications of Water Level Monitoring**

- **Flood Monitoring**: Real-time data allows for early warning systems to protect lives and property.

- **Irrigation Management**: Ensures optimal water usage in agriculture by monitoring soil moisture and water availability.

- **Hydroelectric Power Generation**: Maintains reservoir levels to ensure efficient energy production.

- **Navigation**: Assists in maintaining safe waterway conditions for transportation and shipping.

- **Urban Water Supply**: Monitors reservoir and tank levels to manage municipal water distribution effectively.

Implementing robust water level monitoring systems is vital for sustainable water management, environmental conservation, and disaster preparedness.


## **Water Level Monitoring with E-Cube**
- A **ground (GND) wire** is placed at one side of the beaker.
- **Four sensor wires** are positioned at different heights on the other side of the beaker.
- Each sensor wire is connected to the **base of an NPN transistor**.
- When water touches a sensor wire, it completes the circuit between the **GND wire** and the transistor base.
- The transistor **switches on**, allowing current to flow from **ESP32-S3 GPIO → LED → transistor emitter → GND**.
- The LED **lights up**, indicating that the water has reached that level.

## Components Required for Water Level Monitoring System

To build a water level monitoring system, you'll need the following components:

| Component                   | Present in E-Cube | Not Present in E-Cube |
|-----------------------------|-------------------|-----------------------|
| **E-Cube (ESP32-S3 Module)**| ✔️                |                       |
| **NPN Transistors (4)**     |                   | ✔️                    |
| **Jumper Wires**            |                   | ✔️                    |
| **Breadboard**              |                   | ✔️                    |
| **Resistors (1kΩ X 4)**  |                   | ✔️                    |
| **Power Supply** | ✔️ |               |
| **LED Indicators (4)**  |                 | ✔️                    |
| **Beaker with water** | | ✔️     |

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

## Circuit Diagram

<div style="text-align: center;"><img src="/public/waterlevel.png" title="On Board Computer" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

### **Working Mechanism**
- Each **LED is connected between an ESP32-S3 GPIO pin and the transistor collector**.
- The **transistor emitter is connected to GND**.
- When water touches a level sensor wire, the transistor **turns ON**, completing the circuit.
- The ESP32-S3 detects the water level and lights up the corresponding LED.


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
## Code Breakdown

### 1. Defining GPIO Pins  
The code defines the GPIO pins for the sensor inputs and LED outputs:  
```cpp
const int sensor1 = 1;  // First water level sensor
const int sensor2 = 2;  // Second water level sensor
const int sensor3 = 4;  // Third water level sensor
const int sensor4 = 7;  // Fourth water level sensor
```
- Four constants (**led1, led2, led3, led4**) are defined to represent the digital pins to which the **LEDs** are connected.
- Each **LED** corresponds to a **specific** water level.

### **2. Setup Function:**
```cpp
void setup() {
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
}
```
- The **setup()** function runs once when the E-Cube is powered on or reset.
- **pinMode()** is used to set each LED pin as an **OUTPUT**, allowing the E-Cube to control the LEDs.

### **3. Loop Function:**
```cpp
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
The **loop()** function runs continuously after the **setup()** function.
For each **LED**:
- digitalRead(ledX) checks the current state of the pin (**HIGH** or **LOW**).
- If the pin reads **HIGH**, digitalWrite(ledX, HIGH) turns the LED **on**.
- If the pin reads **LOW**, digitalWrite(ledX, LOW) turns the LED **off**.

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

