# Executing the Code

In this section, we will test our E-Cube by running a pre-written code for E-Cube. 

## Prerequisites

Before Programming, Make sure you have properly setup the environment from [Environment Setup](environmentsetup.md).

Connect the E-Cube to your PC using the USB Cable provided.

## Code Download

Download the ECube Code from the [Antarikchya GitHub](https://github.com/Antarikchya-Prathisthan-Nepal/ecube/tree/main)

<div style="text-align: center;"><img src="../../public/github1.png" title="On Board Computer" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

- Follow the link
- Press on the green `code` button
- Press on Download ZIP
- Extract the code
- Open sensor_readings.ino

This is a pre-written code for E-Cube. When you open the file, it should directly open the installed Arduino IDE. 

## Running the code

Head to [Environment Setup](environmentsetup.md) for the setting up environment guide.

### Select the Board and Port
1. Go to **Tools > Board > ESP32 Arduino > ESP32S3 Dev Module**.
2. Go to **Tools > Port** and select the port where your E-Cube is connected
2. Ensure the **"USB CDC on Boot"** feature is enabled.


The following options in the tools section of Arduino IDE are recommended for ECube.
<div style="text-align: center;"><img src="../../public/recommendedconfig.png" title="On Board Computer" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

Upload the code. Look out for the `done uploading` message in terminal.

## Once Your Code is Uploaded
After successfully uploading your code, you can monitor the output using the Serial Monitor or Serial Plotter.

### Opening the Serial Monitor
1. Use the shortcut **Ctrl + Shift + M** (Windows/Linux) or **Cmd + Shift + M** (Mac).
2. Alternatively, go to **Tools > Serial Monitor** in the Arduino IDE.
3. Ensure the correct baud rate (e.g., **115200**) is selected to match the one in your code.
4. Observe the printed output in real-time.

### Using the Serial Plotter
1. Open the Serial Plotter with **Ctrl + Shift + L** (Windows/Linux) or **Cmd + Shift + L** (Mac).
2. Alternatively, go to **Tools > Serial Plotter**.
3. The Serial Plotter graphically represents numerical data sent via `Serial.println(value)`, making it useful for sensor data visualization.
4. Ensure values are properly formatted in your code to avoid display issues.

<div style="text-align: center;"><img src="../../public/serialplotter.png" title="On Board Computer" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

Toggle between different options at the header to isolate and observe specific readings from the sensor. 

### Also See:

- [Environment Setup](/en/operationguide/environmentsetup.md)
- [Boot and Reset](/en/operationguide/bootnreset.md)
- [Switches](/en/operationguide/switches.md)

[Back to Home](./index.md)