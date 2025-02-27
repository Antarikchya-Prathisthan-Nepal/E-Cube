# Morse Code Decoder Using a Solar Panel

## Introduction

Morse code is a method of encoding text using sequences of short and long signals, typically represented as dots and dashes. In this project, we use a **solar panel** to detect light-based Morse code signals and decode them into readable text.

Instead of using a traditional light sensor, we leverage the ability of a **solar panel** to detect variations in light intensity, allowing us to receive Morse code signals transmitted via an LED or laser.

## How It Works

1. **Transmission**: A Morse code signal is sent using an LED or a laser. The light intensity changes based on the Morse code pattern.
2. **Detection**: A small solar panel captures the incoming light and converts it into voltage.
3. **Processing**: The ESP32 reads the fluctuating voltage values and translates them into Morse code based on timing.
4. **Decoding**: The microcontroller processes the Morse code and converts it into readable text.

## Circuit Components

- **ESP32-S3 (E-Cube)**
- **Small Solar Panel (Connected to an ADC pin)**
- **LED or Laser Pointer (for transmitting Morse code)**
- **Resistors and Connecting Wires**
- **Computer (for displaying decoded text)**

---

#### For Connections Help See 
[Solar Panel Connecting Guide](/en/experiments/envnphysics/solar_voltage.md)

[Soildeing Guide](/en/assembly/soldering.md)

## Morse Code Table

| Letter | Morse Code | Letter | Morse Code | Number | Morse Code |
|--------|-----------|--------|-----------|---------|-----------|
| A      | .-        | N      | -.        | 0       | -----     |
| B      | -...      | O      | ---       | 1       | .----     |
| C      | -.-.      | P      | .--.      | 2       | ..---     |
| D      | -..       | Q      | --.-      | 3       | ...--     |
| E      | .         | R      | .-.       | 4       | ....-     |
| F      | ..-.      | S      | ...       | 5       | .....     |
| G      | --.       | T      | -         | 6       | -....     |
| H      | ....      | U      | ..-       | 7       | --...     |
| I      | ..        | V      | ...-      | 8       | ---..     |
| J      | .---      | W      | .--       | 9       | ----.     |
| K      | -.-       | X      | -..-      |         |           |
| L      | .-..      | Y      | -.--      |         |           |
| M      | --        | Z      | --..      |         |           |

## Code

```cpp
#define SOLARPIN IO3
#define THRESHOLD 20

void setup() {
  Serial.begin(9600);
  pinMode(SOLARPIN, INPUT);
}

void loop() {
  int reading = analogRead(SOLARPIN);
  int bits[10];

  // Detect the start of a Morse code signal
  if (reading > THRESHOLD) {
    delay(100);
    Serial.println("Receiving Morse Code...");

    for (int i = 0; i < 10; i++) {
      int value = analogRead(SOLARPIN);
      if (value > THRESHOLD) {
        bits[i] = 1;  // Detect a 'dot' or 'dash'
      } else {
        bits[i] = 0;  // Detect a space
      }
      delay(200);
    }

    Serial.print("Morse Code: ");
    for (int i = 0; i < 10; i++) {
      Serial.print(bits[i]);
    }
    Serial.println();

    // Decode Morse code (this part can be expanded with a full Morse table)
  }
}
```
## Code Breakdown

Let's go through the code step by step:

### 1. **Defining Constants and Variables**
```cpp
#define SOLARPIN A0
#define THRESHOLD 20
int ambientReading = 0;
```
- **SOLARPIN A0**: Defines the **analog** input pin connected to the solar panel.
- **THRESHOLD 20**: Sets a **threshold** to differentiate between light and darkness.
- **ambientReading**: Stores the initial **ambient** light level for reference.

### **2. Setup Function**
```cpp
void setup(){
  pinMode(SOLARPIN, INPUT);
  Serial.begin(9600);
  ambientReading = analogRead(SOLARPIN);
}

```
- Sets up **SOLARPIN** as an input.
- Initializes **serial** communication.
- Reads the initial **ambient** light level to adjust **threshold** detection dynamically.

### **3. Loop Function - Detecting Morse Code Signals**
```cpp
void loop(){
  int reading = analogRead(SOLARPIN);
  int bits[8];

```
- Reads the **current** light level from the solar panel.
- Creates an array **bits[8]** to **store** detected **Morse** code signals.

### **4. Listening for Start of Transmission**

```cpp
if (reading > ambientReading + THRESHOLD){
  delay(60);
  Serial.println("Loop has started");

```
- Checks if a significant **increase** in light is **detected** (start of Morse code transmission).
- Adds a delay to **prevent** false triggering.

### **5. Reading the Morse Code Bits**
```cpp
  for (int i = 0; i < 8; i++){
    if(analogRead(SOLARPIN) >  ambientReading + THRESHOLD) {
      bits[i] = 1;
    } else {
      bits[i] = 0;
    }
    delay(50);
  }

```
- Iterates **8** times to read bits, determining whether each is **1** (light detected) or **0** (no light).
- Introduces a **delay** for **stable** readings.

### **6. Decoding the Received Data**
```cpp
  int x = 0;
  for (int i = 0; i < 8; i++){
    x += bits[i] * pow(2, (7 - i));
    Serial.print(bits[i]);
  }

```
- Converts the **binary array** into a **decimal** number.
- **Displays** the received **binary** sequence.

### **7. Displaying the Decoded Morse Code Message**

```cpp
  Serial.println("");
  Serial.print("Humidity: ");
  Serial.print(x);
  Serial.println("%");
}

```
- Prints the final **decoded** Morse code message.
- This **could** be **modified** to decode text messages from Morse code

## Try It Yourself!

You can experiment with different parameters:

- **Threshold Sensitivity**: Adjust the `THRESHOLD` value based on ambient light conditions.
- **Timing Adjustments**: Modify `delay(200);` to fine-tune dot/dash detection.
- **Alternative Light Sources**: Try decoding signals from a flashlight, laser pointer, or LED.
- **Wireless Communication**: Test Morse code transmission over longer distances using high-power LEDs or IR LEDs.


## What You Can Learn from This Project

- **How Solar Panels Work as Light Sensors**: Understand how solar panels generate voltage in response to light intensity.
- **Basic Principles of Morse Code Decoding**: Learn how timing and signal detection play a role in communication.
- **Embedded Systems and ADC Reading**: Gain experience in reading and processing analog sensor values.
- **Expanding to Wireless Communication**: This concept can be expanded for long-distance wireless light-based communication.

This project is a great introduction to **optical communication** and how simple components like a solar panel can be used to receive data! 🚀


### Also See

- [Morse Code Transmitter](/en/experiments/morsecodenlight/morse_led_transmitter.md)
- [Water Level Monitoring with E-Cube](/en/experiments/envnphysics/water_level_monitor.md)
- [Interfacing I2C Sensors](/en/experiments/gpiosensor/i2c_communication.md)  
