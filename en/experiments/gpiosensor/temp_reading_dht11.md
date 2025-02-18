# Using DHT11 Sensor with ESP32-S3-WROOM-1

In this guide, we'll learn how to use the **DHT11** temperature and humidity sensor with the **ESP32-S3-WROOM-1**. The DHT11 is a simple and low-cost sensor, making it ideal for various environmental monitoring applications.

## **🛠️ Components Required**
- **E-Cube**
- **DHT11 Sensor**
- **Jumper Wires**
- **Breadboard (optional)**

## **🔍 Description of DHT11**
The DHT11 is a basic, low-cost digital temperature and humidity sensor. It provides a digital signal output, making it easy to interface with microcontrollers like the ESP32. The DHT11 can measure temperatures from 0 to 50°C with an accuracy of ±2°C and humidity from 20% to 90% with an accuracy of ±5%.

## **⚡ How It Works**
The DHT11 sensor contains a thermistor and a capacitive humidity sensor, which are used to measure temperature and humidity, respectively. It uses a single-wire digital interface to communicate with the microcontroller, sending data in a specific format. When queried, the sensor sends a series of bits representing the humidity and temperature readings.

## **💻 Circuit Diagram**
Connect the DHT11 sensor to the payload board as follows:

<!-- <div style="text-align: center;"><img src="/public/dht11_circuit.png" title="DHT11 Circuit Diagram" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div> -->

## **💻 Code: Reading DHT11 Sensor**

Refer to [Environment Setup](/en/operationguide/environmentsetup.md) and [Executing The Code](/en/operationguide/executingthecode.md) for IDE setup and programming guide.

Upload the following **Code** to your E-Cube:

```cpp
#include "DHT.h"

#define DHTPIN 4         // Pin where the DHT11 is connected
#define DHTTYPE DHT11    // DHT 11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200); // Initialize serial communication
  dht.begin();          // Initialize the DHT11 sensor
}

void loop() {
  // Wait a few seconds between measurements
  delay(2000);
  
  // Read temperature and humidity
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  // Check if any reads failed
  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  // Print the results to the Serial Monitor
  Serial.print("Humidity: ");
  Serial.print(h);
  Serial.print("%  Temperature: ");
  Serial.print(t);
  Serial.println("°C");
}
```
## **Code Overview**

The code initializes the DHT11 sensor and continuously reads the temperature and humidity values. The readings are then printed to the Serial Monitor.

### Code Breakdown

- **`#include "DHT.h"`**: 
  - This line includes the DHT library, which provides functions to interact with the DHT11 sensor.

- **`#define DHTPIN 4`**: 
  - This line defines a constant named `DHTPIN` with a value of **4**, which corresponds to the GPIO pin connected to the DHT11 sensor.

- **`DHT dht(DHTPIN, DHTTYPE);`**: 
  - This line creates an instance of the DHT class to manage the DHT11 sensor.

- **`void setup()`**: 
  - Initializes serial communication and the DHT11 sensor.

- **`void loop()`**: 
  - Continuously reads temperature and humidity values every 2 seconds and prints them to the Serial Monitor. It checks for errors in reading.

- **`float h = dht.readHumidity();`**: 
  - Reads the humidity value from the DHT11 sensor.

- **`float t = dht.readTemperature();`**: 
  - Reads the temperature value from the DHT11 sensor.

- **`if (isnan(h) || isnan(t)) {...}`**: 
  - Checks if the readings failed (i.e., if they are NaN) and prints an error message if so.

- **`Serial.print("Humidity: ");`**: 
  - Prints the humidity value to the Serial Monitor.

- **`Serial.print(h);`**: 
  
