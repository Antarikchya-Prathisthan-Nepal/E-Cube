# Sensor Data Fetcher

## Overview

The Sensor Data Fetcher is a Python-based application designed to interface with an ESP32 microcontroller, fetching real-time sensor data. By leveraging the `requests` and `BeautifulSoup` libraries, this script efficiently retrieves and logs various environmental parameters, making it an invaluable tool for data collection and analysis in IoT applications.

<br>

## Features

- **Real-time Data Collection**: Continuously fetches data from the ESP32 server every few seconds.
- **Multiple Sensor Readings**: Collects various readings, including temperature, humidity, angles, and pressure.
- **CSV Logging**: Automatically logs data into a CSV file for easy access and analysis.
- **Error Handling**: Implements robust error handling to manage potential issues with data fetching and parsing.

<br>

## Use Cases

- **Environmental Monitoring**: Ideal for projects involving weather stations or greenhouse monitoring where environmental data is crucial.
- **IoT Prototyping**: Useful for developers working on Internet of Things projects, allowing for quick iterations and testing of sensor integration.
- **Data Analysis**: The logged CSV data can be analyzed using data analysis tools or visualized in software like Excel or Python libraries such as Pandas.

<br>

## Components Explained

### 1. **Requests Library**

The `requests` library simplifies HTTP requests, allowing the script to easily communicate with the ESP32 server. It handles complex aspects of network communication, such as authentication and session management, ensuring reliable data retrieval.

### 2. **BeautifulSoup Library**

`BeautifulSoup` is a powerful library for parsing HTML and XML documents. In this script, it extracts sensor readings from the HTML response, enabling the script to interpret structured data returned by the ESP32.

### 3. **CSV Module**

The built-in `csv` module enables straightforward handling of CSV files. By writing data in a structured format, it facilitates easy access and analysis, making the collected data more usable.

<br>

## How It Works

1. **Initialization**: The script begins by defining the target URL, which points to the ESP32 server. It initializes a CSV file with appropriate headers if it does not exist.

2. **Data Fetching Loop**: Inside an infinite loop, the script fetches HTML data from the ESP32 server. This is done at regular intervals (every 4 seconds) to ensure timely updates.

3. **Data Parsing**: Once the HTML is retrieved, the script uses BeautifulSoup to parse the HTML and extract specific sensor readings based on their positions in the HTML structure.

4. **Data Logging**: Each set of sensor readings is logged into a CSV file along with a timestamp, allowing for historical data analysis.

5. **Error Management**: The script is equipped with error handling to manage scenarios where the server might be unreachable or if data cannot be parsed correctly.

<br>

## Benefits

- **Simplicity**: The script is straightforward to set up and modify, making it accessible to beginners while still being powerful enough for advanced users.
- **Flexibility**: It can be adapted to include additional sensors or to modify the data extraction logic to suit various applications.
- **Real-time Monitoring**: Enables users to monitor environmental conditions dynamically, enhancing responsiveness to changes.

<br>

## Installation Instructions

To get started with the Sensor Data Fetcher, ensure you have Python installed on your system. Follow these steps:

1. **Install Required Libraries**:
   Use pip to install the necessary Python libraries:
   ```bash
   pip install requests beautifulsoup4
   ```

   