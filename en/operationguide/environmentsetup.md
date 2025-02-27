# Setting Up the Integrated Development Environment (IDE)

An IDE is a software application that facilitates programming. Follow these steps to set up the Arduino IDE for E-Cube:

## Download the IDE
Visit the [Arduino website](https://www.arduino.cc/en/software) and install the latest version of the Arduino IDE.

### Extract and Install the Software
Follow the installation instructions for your operating system to install the Arduino IDE.

## Configure Preferences
1. Open the Arduino IDE.
2. Go to **File > Preferences**.
3. In the **Additional Board Manager URLs** section, paste the following link:
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```


## Install ESP32 Board Package
1. Navigate to **Tools > Board > Board Manager**.
2. Search for **"ESP32 by Espressif Systems"**.
3. Click **Install** to install the package.

## Select the Board
1. Go to **Tools > Board > ESP32 Arduino > ESP32S3 Dev Module**.
2. Ensure the **"USB CDC on Boot"** feature is enabled.

## Select the Port
1. Connect your ESP32S3 Dev Module to your computer via USB.
2. Open the Arduino IDE and go to **Tools > Port**.
3. Select the appropriate COM port (e.g., **COM3** or **/dev/ttyUSB0** for Linux/macOS).
4. If no port appears, ensure drivers for your ESP32 board are installed.

## Debugging: If No Port Appears
If no port appears, try the following troubleshooting steps:
- Ensure you are using a **data USB cable** (some cables are power-only and won't work for communication).
- Install the necessary **USB-to-serial drivers** for your board (e.g., **CP210x** or **CH340** drivers, depending on your ESP32 model).
- Restart your Arduino IDE and reconnect the board.
- Try a different USB port on your computer.
- Check **Device Manager (Windows)** or **ls /dev/ttyUSB* (Linux/macOS)** to see if the board is detected.
- Press the **BOOT** button on the ESP32S3 module while connecting it.

## Options

The following options in the tools section of Arduino IDE are recommended for ECube.
<div style="text-align: center;"><img src="../../public/recommendedconfig.png" title="On Board Computer" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

Your Arduino IDE is now set up for E-Cube programming! 

### Also See:

- [Executing the Code](/en/operationguide/executingthecode.md)
- [Boot and Reset](/en/operationguide/bootnreset.md)
- [Switches](/en/operationguide/switches.md)

[Back to Home](./index.md)