# I2C Communications

In the world of embedded systems, communication protocols are essential for enabling data exchange between microcontrollers and various peripheral devices. One of the most commonly used protocols is **I2C (Inter-Integrated Circuit)**. This guide will help you understand what I2C is, how it works, and how to establish communication between different sensors on the E-Cube.

## **🔍 What is I2C?**

I2C is a synchronous, multi-master, multi-slave, packet-switching communication protocol developed by Philips. The beauty of I2C lies in its ability to connect multiple devices using just two wires, which simplifies wiring and reduces the complexity of circuit designs. 

### **Key Components of I2C:**

- **SDA (Serial Data Line)**: This line is used for transmitting data between devices.
- **SCL (Serial Clock Line)**: This line is used to synchronize data transfers, ensuring that both the sender and receiver are in agreement about when data is being sent.

## **📡 How Does I2C Work?**

I2C operates in a master-slave configuration. In this setup, one device (the master) controls the communication, while other devices (the slaves) respond to requests. Each device on the I2C bus is assigned a unique address, allowing the master to communicate with the specific slave it chooses.

### **Communication Process:**

1. **Start Condition**: The master device initiates communication by sending a start condition. It does this by pulling the SDA line low while the SCL line remains high.
  
2. **Addressing**: The master then sends the 7-bit address of the targeted slave device along with a read/write bit. The read/write bit indicates whether the master wants to read from or write to the slave.

3. **Acknowledge (ACK)**: After the address is sent, the addressed slave responds with an ACK signal. This signal tells the master that the slave is ready to communicate.

4. **Data Transfer**: The master and slave exchange data bytes. For every byte sent, the receiving device sends an ACK to confirm that it has received the data successfully.

5. **Stop Condition**: Once the communication is complete, the master generates a stop condition by releasing the SDA line while keeping the SCL line high. This signals the end of the communication session.

## **🔗 Other Communication Protocols**

While I2C is widely used, there are other communication protocols that also serve specific purposes. Here are a few of the most common ones:

- **SPI (Serial Peripheral Interface)**:
  - Uses four wires: MOSI (Master Out Slave In), MISO (Master In Slave Out), SCK (Serial Clock), and SS (Slave Select).
  - SPI is typically faster than I2C and supports full-duplex communication, meaning data can be sent and received simultaneously.
  - It is ideal for applications that require high-speed data transfer, such as reading from memory chips or sensors that output large amounts of data quickly.

- **UART (Universal Asynchronous Receiver-Transmitter)**:
  - Uses two wires: TX (Transmit) and RX (Receive).
  - Unlike I2C and SPI, UART is an asynchronous communication protocol, meaning it does not require a clock signal to synchronize data transmission.
  - It is commonly used for long-distance communication between devices but is less efficient for connecting multiple devices compared to I2C and SPI.

### **Comparison of Features:**

| Feature       | I2C                      | SPI                        | UART                      |
|---------------|--------------------------|---------------------------|---------------------------|
| Number of Wires | 2 (SDA, SCL)          | 4 (MOSI, MISO, SCK, SS)   | 2 (TX, RX)                |
| Speed         | Up to 1 Mbps             | Up to 100 Mbps or higher  | Up to 115200 bps          |
| Master/Slave   | Multi-master, multi-slave| Single master, multiple slaves | Single master, single slave |

## **🛠️ Experiment: Establishing I2C Communication with E-Cube Sensors**

Now that you have a basic understanding of I2C communications, let’s put this knowledge into practice. In this experiment, we will establish I2C communication between the E-Cube and several sensors: DHT11, GY521 (MPU6050), GY271 (HMC5883L), and BMP180.

### **Required Components**

To complete this experiment, you will need the following components:

- **E-Cube**: The main microcontroller board.
- **DHT11 Sensor**: Measures temperature and humidity.
- **GY521 Sensor (MPU6050)**: Measures acceleration and gyroscope data.
- **GY271 Sensor (HMC5883L)**: Measures magnetic field strength.
- **BMP180 Sensor**: Measures temperature and pressure.
- **Jumper Wires**: For connecting the sensors to the E-Cube.

### **Wiring Connections**

The sensors are pre-wired, so no additional wiring is necessary. you can refer to [Schematics & Layouts](/en/schematics/one.md) to see the E-Cube Schematics.

### **Sample Code for I2C Testing**

Let's create a simple I2C testing code to detect any sensors connected to the I2C bus and print their addresses:

```cpp
#include <Wire.h>

void setup() {
  Serial.begin(115200); // Initialize serial communication at 115200 baud rate
  Wire.begin();         // Initialize I2C bus
  Serial.println("I2C Scanner");
}

void loop() {
  Serial.println("Scanning...");

  int totalDevices = 0; // Count of detected devices
  for (uint8_t address = 1; address < 127; address++) { // I2C addresses range from 1 to 126
    Wire.beginTransmission(address); // Begin transmission to the current address
    if (Wire.endTransmission() == 0) { // If device is found
      Serial.print("I2C device found at address 0x");
      Serial.print(address, HEX); // Print address in hexadecimal format
      Serial.println("");
      totalDevices++;
    }
    delay(10); // Small delay to allow the bus to settle
  }

  if (totalDevices == 0) {
    Serial.println("No I2C devices found.");
  } else {
    Serial.print("Total I2C devices found: ");
    Serial.println(totalDevices);
  }

  delay(5000); // Wait 5 seconds before scanning again
}
```
#### Code Breakdown

```cpp
#include <Wire.h>
```
  - This line includes the Wire library, which provides functions for I2C communication. It allows your ESP32 to communicate with I2C devices. <br><br>

```cpp
void setup()
```
  - This function is executed once when the program starts, used for initialization. <br><br>
```cpp
Wire.begin();
```
Initializes the I2C bus. This sets up the ESP32 to communicate over I2C, preparing it to detect devices connected to the bus.<br><br>
```cpp
Wire.begin();
```
Initializes the I2C bus. This sets up the ESP32 to communicate over I2C, preparing it to detect devices connected to the bus.<br><br>

```cpp
void loop() {
```
This function runs continuously after the setup function, containing the main logic for checking connected devices.<br><br>

```cpp
Serial.begin(115200);
```
Initializes serial communication at a baud rate of **115200** bits per second. This allows the ESP32 to send data to the Serial Monitor for display.<br><br>

```cpp
Serial.println("Scanning...");
```
Prints the message "Scanning..." to the Serial Monitor, indicating the start of the scanning process.<br><br>

```cpp
int nDevices = 0;
```
Initializes a counter variable to keep track of the number of detected devices.<br><br>

```cpp
for (byte address = 1; address < 127; address++) {
```
This loop iterates through possible I2C addresses from **1** to **126**, checking each address for a connected device.<br><br>

```cpp
Wire.beginTransmission(address);
```
Begins communication with the device at the current address. This function prepares the ESP32 to send data to the specified address.<br><br>

```cpp
if (Wire.endTransmission() == 0) {
```
Ends the transmission and checks if the device acknowledged the request (returns **0** if acknowledged). If the device is present, it increments the counter.<br><br>

```cpp
Serial.print("I2C device found at address 0x");
```
Prints the message indicating that a device has been found at the specified address, followed by the address in hexadecimal format.<br><br>

```cpp
Serial.print(address, HEX);
```
Converts the address to hexadecimal format and prints it to the Serial Monitor.<br><br>

```cpp
Serial.println();
```
Prints a newline character, moving the cursor to the next line on the Serial Monitor for better readability.<br><br>

```cpp
nDevices++;
```
Increments the device counter by one for each detected device.<br><br>

```cpp
if (nDevices == 0) {
```
After checking all addresses, it checks if no devices were found. If true, it prints a message indicating that no devices were detected.<br><br>
```cpp
else {
```
If devices were found, it prints the total number of devices detected.<br><br>

```cpp
delay(5000);
```
Pauses the program for **5000 milliseconds** (5 seconds) before starting the next scan. This helps to avoid overwhelming the Serial Monitor with too much data too quickly.<br><br>


### Code Logic

The I2C checking code scans for connected devices on the I2C bus and reports their addresses.

1. **Initialization**: 
   - The code begins by initializing the I2C bus and setting up serial communication to display output on the Serial Monitor.

2. **Scanning for Devices**:
   - The program enters a loop that checks each possible I2C address (from **1** to **126**).
   - For each address, it attempts to communicate with any device present.

3. **Detecting Devices**:
   - If a device acknowledges the request (indicating it is connected), the code records its address and increments a counter.

4. **Reporting Results**:
   - After scanning all addresses, the code prints the addresses of any detected devices. If no devices are found, it notifies the user accordingly.

5. **Repeat Cycle**:
   - The program pauses for 5 seconds before repeating the scan, allowing for continuous monitoring of connected I2C devices.
