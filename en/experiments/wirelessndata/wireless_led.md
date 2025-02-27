# **Wi-Fi Controlled LED**

## **Introduction**
This project allows you to control an LED **remotely via Wi-Fi** using an ESP32-S3. By hosting a **web server**, the ESP32-S3 enables users to **toggle the LED on and off** from a web browser.

## **Components Required**
- ESP32-S3 Module  
- LED  
- Resistor (220Ω)  
- USB Cable  
- Wi-Fi Connection  

## **How It Works**
1. The ESP32-S3 **connects to a Wi-Fi network**.
2. It starts a **web server on port 80**.
3. When a user accesses the **ESP32-S3’s IP address**, they see a webpage with **ON/OFF buttons**.
4. Clicking the buttons sends an HTTP request (`GET /H` or `GET /L`).
5. The ESP32-S3 **reads the request** and **controls the LED accordingly**.

## **Code for Wifi Controlled LED**

``` cpp
#include <WiFi.h>

const char* ssid = "Your_SSID";      // Replace with your Wi-Fi network name
const char* password = "Your_Password"; // Replace with your Wi-Fi password

NetworkServer server(80);

void setup() {
  Serial.begin(115200);
  pinMode(5, OUTPUT);  // set the LED pin mode

  delay(10);

  // We start by connecting to a WiFi network

  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected.");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  server.begin();
}

void loop() {
  NetworkClient client = server.accept();  // listen for incoming clients

  if (client) {                     // if you get a client,
    Serial.println("New Client.");  // print a message out the serial port
    String currentLine = "";        // make a String to hold incoming data from the client
    while (client.connected()) {    // loop while the client's connected
      if (client.available()) {     // if there's bytes to read from the client,
        char c = client.read();     // read a byte, then
        Serial.write(c);            // print it out the serial monitor
        if (c == '\n') {            // if the byte is a newline character

          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // the content of the HTTP response follows the header:
            client.print("Click <a href=\"/H\">here</a> to turn the LED on pin 5 on.<br>");
            client.print("Click <a href=\"/L\">here</a> to turn the LED on pin 5 off.<br>");

            // The HTTP response ends with another blank line:
            client.println();
            // break out of the while loop:
            break;
          } else {  // if you got a newline, then clear currentLine:
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }

        // Check to see if the client request was "GET /H" or "GET /L":
        if (currentLine.endsWith("GET /H")) {
          digitalWrite(5, HIGH);  // GET /H turns the LED on
        }
        if (currentLine.endsWith("GET /L")) {
          digitalWrite(5, LOW);  // GET /L turns the LED off
        }
      }
    }
    // close the connection:
    client.stop();
    Serial.println("Client Disconnected.");
  }
}

```

## **Code Breakdown**
### **1. Wi-Fi Setup**
```cpp
const char* ssid = "Your_SSID";      // Replace with your Wi-Fi network name
const char* password = "Your_Password"; // Replace with your Wi-Fi password
WiFi.begin(ssid, password);
```
- Connects to the specified **Wi-Fi** network.

### **2. Web Server Initialization**

```cpp
NetworkServer server(80);
server.begin();
```
- Starts a web server on port **80**

### **3. Handling Client Requests**

```cpp
NetworkClient client = server.accept();
if (client) {
  // Read client request
  // Send webpage with control links
}

```
- Accepts **incoming** connections.
- Reads the **HTTP request** to determine **LED** control

### **4. Controlling the LED**

```cpp
if (currentLine.endsWith("GET /H")) {
  digitalWrite(5, HIGH); // Turn LED ON
}
if (currentLine.endsWith("GET /L")) {
  digitalWrite(5, LOW); // Turn LED OFF
}

```
- Turns the LED **ON** when **/H** is received.
- Turns the LED **OFF** when **/L** is received.

## **Try It Yourself!**
### **1. Access the Web Server**
- Upload the code to your ESP32-S3.
- Open the **Serial Monitor** to find the **IP address**.
- Enter the IP in a **web browser**.

### **2. Control the LED**
- Click `"Turn ON"` to send `GET /H`.
- Click `"Turn OFF"` to send `GET /L`.

### **3. Expand the Project**
- Add a **toggle button** instead of separate links.
- Integrate with **Blynk or MQTT** for IoT applications.

---
## **Also See:**
- [ESP32-S3 Web Server Basics](/en/iot/webserver.md)  
- [Controlling Multiple LEDs Over Wi-Fi](/en/iot/multiple_leds.md)  
- [ESP32 IoT Dashboard](/en/iot/dashboard.md)  
