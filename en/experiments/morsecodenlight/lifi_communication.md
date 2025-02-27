# **Li-Fi Communication Using E-Cube for Humidity Data Transfer**

## **Introduction**
Li-Fi (Light Fidelity) is a wireless communication technology that uses light waves to transmit data instead of radio waves (like Wi-Fi). In this project, two **E-Cube (ESP32-S3 WROOM1)** modules communicate using **Li-Fi** to transmit **humidity data**. 

One E-Cube reads humidity data from a **DHT11 sensor** and sends it through a **laser diode (Li-Fi transmitter)**. The other E-Cube receives the data using a **solar panel (Li-Fi receiver)** and decodes the signal.

## **How It Works**
### **Transmitter (E-Cube 1)**
- Reads humidity data from a **DHT11 sensor**.
- Converts the humidity value into **binary form**.
- Uses a **laser diode (Li-Fi transmitter)** to send the binary data.
- Transmits **a start bit** to indicate the beginning of data transmission.

### **Receiver (E-Cube 2)**
- Uses a **solar panel** as the **Li-Fi receiver**.
- Waits for the **start bit** to detect an incoming signal.
- Reads the **binary data** from the received light pulses.
- Converts the binary data back into **decimal (humidity value)**.
- Displays the received **humidity** on the **serial monitor**.

## **Components Required**

| Component                   | Present in E-Cube | Not Present in E-Cube |
|-----------------------------|-------------------|-----------------------|
| **2x E-Cube (ESP32-S3 Module)**| ✔️                |                       |
| **DHT11 Humidity Sensor**     |       ✔️             |                   | 
|**Laser Diode (Transmitter)**||✔️|
|**Solar Panel (Receiver)**|✔️||
|**Jumper Wires**||✔️|
| **USB Cable**              |            ✔️       |                     |
| **PC for Programming** ||✔️|

## **Components Required**
- 2x **E-Cube (ESP32-S3 WROOM1)**
- 1x **DHT11 Humidity Sensor**
- 1x ****
- 1x **Solar Panel (Receiver)**
- Jumper Wires

## **Circuit Diagram**
### **Transmitter (E-Cube 1)**
1. Connect **DHT11 Sensor:**
   - VCC → 3.3V
   - GND → GND
   - Data → IO0 (E-Cube)
2. Connect **Laser Diode:**
   - Anode (+) → IO16 (E-Cube)
   - Cathode (-) → GND

### **Receiver (E-Cube 2)**
1. Connect **Solar Panel:**
   - Positive → A0 (E-Cube)
   - Negative → GND



## **Transmitter Code (E-Cube 1)**
```cpp
#include <DHT.h>
#include <DHT_U.h>

#define DHTTYPE DHT11
#define DHTPIN 0
#define LASERPIN 16

int reminder;
DHT dht(DHTPIN, DHTTYPE, 11);

void setup() {
  dht.begin();
  pinMode(LASERPIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" C");
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println(" %");

  int bits[8];
  int i = 7;
  while (i > -1) {
    reminder = humidity % 2;
    bits[i] = reminder;
    humidity = humidity / 2;
    i--;
  }

  // Start bit
  digitalWrite(LASERPIN, HIGH);
  delay(50);
  digitalWrite(LASERPIN, LOW);
 
  for (int i = 0; i < 8; i++) {
    digitalWrite(LASERPIN, bits[i]);
    Serial.print(bits[i]);
    delay(50);
  }
  Serial.println("");
  digitalWrite(LASERPIN, LOW);
  delay(5000);
}
```

## **Receiver Code (E-Cube 2)**
```cpp
#define SOLARPIN I03
#define THRESHOLD 20

int ambientReading = 0;

void setup() {
  pinMode(SOLARPIN, INPUT);
  Serial.begin(9600);
  ambientReading = analogRead(SOLARPIN);
}

void loop() {
  int reading = analogRead(SOLARPIN);
  int bits[8];

  // Listen for the start bit
  if (reading > ambientReading + THRESHOLD) {
    delay(60);
    Serial.println("Receiving Data...");

    for (int i = 0; i < 8; i++) {
      if (analogRead(SOLARPIN) > ambientReading + THRESHOLD) {
        bits[i] = 1;
      } else {
        bits[i] = 0;
      }
      delay(50);
    }

    int humidity = 0;
    for (int i = 0; i < 8; i++) {
      humidity += bits[i] * pow(2, (7 - i));
      Serial.print(bits[i]);
    }

    Serial.println("");
    Serial.print("Received Humidity: ");
    Serial.print(humidity);
    Serial.println("%");
  }
}
```
## **Code Breakdown**

### **1. Defining Constants and Variables**
```cpp
#define SOLARPIN A0
#define THRESHOLD 20
```
- SOLARPIN is defined as **I03**, which is the **analog** input pin where the **solar** panel (light sensor) is connected.
- THRESHOLD is set to **20**, which helps in **distinguishing** between ambient light and transmitted light.

```cpp
int ambientReading = 0;

```
- This variable **stores** the **ambient** light level before receiving data. 
- It helps determine **whether** an incoming signal is present.

### **2. Setup Function**
```cpp
void setup() {
  pinMode(SOLARPIN, INPUT);
  Serial.begin(9600);
  ambientReading = analogRead(SOLARPIN);
}

```
- The S**OLARPIN** is set as an input to **read** the light intensity from the solar panel.
- Serial.begin(9600); **initializes** serial communication at a baud rate of **9600**.
- The **ambientReading** is taken to **store** the base light level whenno signal is being transmitted.

### **3. Loop Function**

```cpp
void loop() {
  int reading = analogRead(SOLARPIN);
  int bits[8];

```
- **reading** stores the current light intensity.
- **bits[8]** is an **array** used to store the received **binary** data (8 bits).

### **4. Detecting the Start Bit**
```cpp
if (reading > ambientReading + THRESHOLD) {
    delay(60);
    Serial.println("Receiving Data...");
```
- The program **continuously** checks if the received light intensity **exceeds** the ambient light level plus the **threshold**.
- If this **condition** is met, it assumes that data transmission has **begun** and waits for **60ms** before reading the actual data.

### **5. Receiving the 8-Bit Data**
```cpp
for (int i = 0; i < 8; i++) {
    if (analogRead(SOLARPIN) > ambientReading + THRESHOLD) {
        bits[i] = 1;
    } else {
        bits[i] = 0;
    }
    delay(50);
}
```
- The program reads **8 bits** from the light sensor.
- If the received signal is above the **threshold**, it registers a **1**, **otherwise**, it registers a **0**.
- A delay of **50ms** is added to match the timing used in the **transmitter**.

### **6. Converting Binary to Decimal**
```cpp
int humidity = 0;
for (int i = 0; i < 8; i++) {
    humidity += bits[i] * pow(2, (7 - i));
    Serial.print(bits[i]);
}
```
- The received **8-bit** binary value is **converted** into **decimal** format.
- Each bit is **multiplied** by **2^(position)** to **reconstruct** the **original number**.
- The binary representation is printed to the **serial monitor**.

### **7. Displaying the Humidity Value**

```cpp
Serial.println("");
Serial.print("Received Humidity: ");
Serial.print(humidity);
Serial.println("%");
```
- The received and converted humidity **value** is printed to the **serial monitor**.

## Summary
- The receiver detects an incoming Li-Fi signal.
- It reads 8-bit binary data from the light sensor.
- The binary data is converted into a humidity value.
- The received humidity value is displayed on the serial monitor.

## **Try It Yourself!**
### **Step 1: Setup the Transmitter (E-Cube 1)**
- Connect the **DHT11 sensor** and **laser diode** to the E-Cube.
- Upload the **transmitter code** to the E-Cube.

### **Step 2: Setup the Receiver (E-Cube 2)**
- Connect the **solar panel** to the E-Cube.
- Upload the **receiver code** to the E-Cube.

### **Step 3: Run the System**
- Open the **serial monitor** on the receiver E-Cube.
- Observe the received humidity data.

### Also See: 
 - [Information about Humidity Sensor](/en/experiments/gpiosensor/humidity_reading_dht11.md)
- [Space Debris Detection using E-Cube](/en/experiments/envnphysics/ultrasonic_debris.md)
- [Interfacing I2C Sensors](/en/experiments/gpiosensor/i2c_communication.md)  

[Back to Home](./index.md)