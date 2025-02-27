# **Sending Morse Code Through LED**

## **Introduction**
Morse code is a method of encoding text into short and long signals, traditionally used in telecommunication. In this project, we will use an LED to send Morse code messages by blinking it in specific patterns. This is a fun and educational project that helps understand digital signaling, binary encoding, and microcontroller programming.


## **How Morse Code Works**
Morse code represents letters and numbers using short (`.`) and long (`-`) signals.

- **Dot (`.`) → Short blink**
- **Dash (`-`) → Long blink**
- **Space → Pause between signals**

For example:
- **"A"** in Morse code is `.-` (Short Blink, Long Blink)
- **"B"** is `-...` (Long Blink, Short Blink, Short Blink, Short Blink)

## **Circuit Diagram**
1. **Connect the LED** to the E cube:
   - **Anode (+) pin** to a **GPIO pin** (e.g., GPIO5)
   - **Cathode (-) pin** to **GND** through a **330Ω resistor**
2. **Ensure Proper Connections**:
   - The LED should blink when the GPIO pin is set to `HIGH`
   - Turn off when set to `LOW`

---

### **Step 1: Upload the Code**
```cpp
const int ledPin = IO1;  // LED connected to IO1

void setup() {
    pinMode(ledPin, OUTPUT);
}

// Function to blink LED in Morse code pattern
void morseBlink(const char* message) {
    while (*message) {
        if (*message == '.') {
            digitalWrite(ledPin, HIGH);
            delay(200);  // Short blink for dot
        } else if (*message == '-') {
            digitalWrite(ledPin, HIGH);
            delay(600);  // Long blink for dash
        }
        digitalWrite(ledPin, LOW);
        delay(200);  // Pause between signals
        message++;
    }
}

void loop() {
    // Morse code for "HELLO"
    morseBlink("....");  // H
    delay(400);  // Space between letters
    morseBlink(".");     // E
    delay(400);
    morseBlink(".-..");  // L
    delay(400);
    morseBlink(".-..");  // L
    delay(400);
    morseBlink("---");   // O
    delay(2000);  // Wait before repeating
}
```

## **Code Breakdown**
### 1. Defining LED Pin 

```cpp
const int ledPin = 1;
```
- Defines **GPIO5** as the LED control pin.

### 2. Setting Up the LED
```cpp
void setup() {
    pinMode(ledPin, OUTPUT);
}

```
- Configures the LED pin as an **output**

### 3. Function to Send Morse Code
```cpp
void morseBlink(const char* message) { ... }

```
**Reads** each character:
- Short Blink (**200ms**)
- Long Blink (**600ms**)
- Space between signals (**200ms**)

### 4. Sending "HELLO" in Morse Code
```cpp
void loop() {
    morseBlink("....");  // H
    delay(400);  
    morseBlink(".");     // E
    delay(400);
    morseBlink(".-..");  // L
    delay(400);
    morseBlink(".-..");  // L
    delay(400);
    morseBlink("---");   // O
    delay(2000);
}

```
- Each letter is **blinked** separately.
- A **400ms** delay is added **between** letters.
- A **2-second** delay before **repeating** the message.

## What You Can Learn from This Project

- **Morse Code Basics**: Understand how Morse code represents letters and numbers using dots and dashes.
- **LED as a Communication Medium**: Learn how to use an LED to transmit messages visually.
- **Timing in Embedded Systems**: See how precise timing is used to encode and decode signals.
- **Digital Output Control**: Gain experience in controlling GPIO pins to turn an LED on and off programmatically.
- **Expanding the Project**: This system can be enhanced by adding a light sensor to decode the Morse code automatically.

## Practical Applications in Real Life

- **Emergency Signaling**: In situations where sound-based communication is not possible, Morse code can be used with LEDs to send distress signals.
- **Covert Communication**: Morse code can be used in military or covert operations where silent communication is needed.
- **Low-Power Communication**: Using LEDs for Morse code transmission can be useful in power-sensitive environments, such as space missions or remote locations.
- **Educational Tool**: Helps beginners understand the fundamentals of binary communication and timing control in microcontrollers.

## Try It Yourself!

To experiment with this project, you can try changing:

- **Blink Speed**: Modify the timing delays to make the Morse code transmission faster or slower.
- **LED Brightness**: If using PWM-capable pins, try varying brightness for a different effect.
- **Custom Messages**: Replace "HELLO" with other words to transmit different Morse code sequences.
- **Multiple LEDs**: Add multiple LEDs to send different signals in parallel.
- **Wireless Transmission**: Use an IR LED instead of a normal LED and try to receive the signal with an IR receiver.

By tweaking these parameters, you can explore different ways Morse code can be used in communication! 🚀

### Also See:

- [Morse Code Decoder](/en/experiments/morsecodenlight/morse_ldr_decoder.md)
- [Interfacing I2C Sensors](/en/experiments/gpiosensor/i2c_communication.md)  
- [Parachute Design](/en/experiments/envnphysics/parachute_design)