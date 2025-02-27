# **Extracting and Visualizing E-Cube Sensor Data with Python**

## **Introduction**  
E-Cube is an **educational nanosatellite model** that collects environmental and motion data through various sensors. This data is hosted on a **web portal** (`/en/experiments/wirelessndata/web_portal.md`). To analyze and process the sensor data, we can use Python to **fetch, store, and visualize** it.  

## In this project, we will:  
**Scrape real-time sensor data** from the hosted website  
**Save the data into a CSV file** for structured storage  
**Plot graphs** to analyze trends over time  

## **Why This Project is Important**  

Data collection and visualization are fundamental in scientific research, engineering, and IoT applications. This project demonstrates how to:  

- **Automate Data Logging** – Continuously record real-time sensor readings without manual intervention.  
- **Analyze Trends** – Identify patterns in environmental and motion data over time.  
- **Improve Decision-Making** – Use visualized data to make informed adjustments in system performance.  
- **Bridge Embedded Systems and Software** – Connect hardware (ESP32) with Python-based data processing tools.  

By understanding and implementing this project, you gain valuable skills in **sensor integration, data handling, and real-world data analysis**, which are critical for IoT, robotics, and space applications.  


## **Background: Why Use Python for Sensor Data Processing?**  
Microcontrollers like ESP32 often use **C or C++** for low-level operations, while Python is used for **data analysis, visualization, and automation**. Here’s how the two languages differ in this context:  

| Feature         | Python | C/C++ |
|---------------|--------|-------|
| Ease of Use | ✅ High-level, easy to write | ❌ Low-level, more complex |
| Performance | ❌ Slower, interpreted | ✅ Faster, compiled |
| Libraries | ✅ Extensive (Matplotlib, Pandas) | ❌ Limited |
| Memory Usage | ❌ Higher | ✅ Lower |
| Portability | ✅ Cross-platform | ❌ Platform-dependent |

For this project, **E-Cube runs on C (ESP32 firmware), but data processing is done in Python** due to its ease of use and powerful visualization tools.  

---

## **Setting Up a Python Workspace in VS Code**  
Before running the Python scripts, make sure you have a proper development environment:  

### **1. Install Python**  
Download and install Python from [python.org](https://www.python.org/downloads/). Ensure you check the box **"Add Python to PATH"** during installation.  

### **2. Install VS Code**  
Download and install **Visual Studio Code** from [code.visualstudio.com](https://code.visualstudio.com/).  

### **3. Install Python Extensions**  
- Open **VS Code**  
- Go to **Extensions (Ctrl+Shift+X)**  
- Search for **Python** and install the **Python extension**  

### **4. Set Up a Virtual Environment (Recommended)**  
Run the following in the terminal:  

```sh
python -m venv env
```
Activate it:

Windows: env\Scripts\activate
Mac/Linux: source env/bin/activate

### **5. Install Required Libraries**

```sh
pip install requests beautifulsoup4 pandas matplotlib
```

## Extracting and Storing Sensor Data

The following Python script scrapes sensor data from the website, extracts the required values, and saves them to a CSV file.

```py
import requests
from bs4 import BeautifulSoup
import csv
import time
import datetime

def fetch_data(url):
    try:
        print(f"Fetching data from: {url}")
        response = requests.get(url)
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return None

def parse_sensor_data(html_data):
    if html_data is None:
        return None
    try:
        soup = BeautifulSoup(html_data, 'html.parser')
        temperature = float(soup.find_all("span")[1].text)
        humidity = float(soup.find_all("span")[3].text)
        angle_x = float(soup.find_all("span")[5].text)
        angle_y = float(soup.find_all("span")[7].text)
        angle_z = float(soup.find_all("span")[9].text)
        pressure = float(soup.find_all("span")[11].text)
        return temperature, humidity, angle_x, angle_y, angle_z, pressure
    except (IndexError, ValueError) as e:
        print(f"Error parsing data: {e}")
        return None

def main():
    url = "http://192.168.1.64"
    with open("sensor_data.csv", "w", newline='') as csvfile:
        csv_writer = csv.writer(csvfile)
        csv_writer.writerow(["Timestamp", "Temperature", "Humidity", "Angle X", "Angle Y", "Angle Z", "Pressure"])
    while True:
        html_data = fetch_data(url)
        sensor_data = parse_sensor_data(html_data)
        if sensor_data is not None:
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            print(f"Sensor Data: {sensor_data}")
            with open("sensor_data.csv", "a", newline='') as csvfile:
                csv_writer = csv.writer(csvfile)
                csv_writer.writerow([timestamp] + list(sensor_data))
        time.sleep(4)

if __name__ == "__main__":
    main()
```

## Visualizing the Data

Once we have stored the sensor readings, we can use Matplotlib and Pandas to generate a graph.

```py
import pandas as pd
import matplotlib.pyplot as plt

# Load the CSV data
data = pd.read_csv('sensor_data.csv')

# Convert the 'Timestamp' column to datetime
data['Timestamp'] = pd.to_datetime(data['Timestamp'])

# Plot the data
plt.figure(figsize=(12, 6))
plt.plot(data['Timestamp'], data['Temperature'], label='Temperature (°C)', color='red')
plt.plot(data['Timestamp'], data['Humidity'], label='Humidity (%)', color='blue')
plt.plot(data['Timestamp'], data['Angle X'], label='Angle X', color='green')
plt.plot(data['Timestamp'], data['Angle Y'], label='Angle Y', color='purple')
plt.plot(data['Timestamp'], data['Angle Z'], label='Angle Z', color='orange')
plt.plot(data['Timestamp'], data['Pressure'], label='Pressure', color='brown')

plt.xlabel('Timestamp')
plt.ylabel('Sensor Readings')
plt.title('Sensor Data Over Time')
plt.legend()
plt.grid()
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('sensor_data_plot.png')
plt.show()
```
## Data plotting 

<div style="text-align: center;"><img src="/public/dataplot.png" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>


## **Code Breakdown**

Now, let’s break down the two Python scripts used in this project:  

1. **Fetching and Storing Data** – The first script retrieves sensor data from the hosted website and logs it into a CSV file.  
2. **Data Visualization** – The second script reads the CSV file and plots the recorded data using Matplotlib.  

### **1. Fetching and Storing Data Script Breakdown**
```python
import requests
from bs4 import BeautifulSoup
import csv
import time
import datetime
```

- ```requests```: Handles HTTP requests to fetch web data.

- ```BeautifulSoup```: Parses the fetched HTML to extract sensor readings.
- ```csv```: Allows writing sensor data into a CSV file.
- ```time```: Enables delays between data retrievals.
- ```datetime```: Timestamps the recorded data.

<br>

```python
def fetch_data(url):
    try:
        print(f"Fetching data from: {url}")
        response = requests.get(url)
        response.raise_for_status()  
        print(f"Fetched HTML Data: {response.text}")  
        return response.text
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return None
```
- ```fetch_data(url)```: Sends an HTTP request to the ESP32 web server and retrieves the HTML response.
- ```raise_for_status()```: Ensures the request was successful; otherwise, it raises an error.
- If an error occurs, it is caught in the except block.

<br>

```py
def main():
    url = "http://192.168.1.64"  

    with open("sensor_data.csv", "w", newline='') as csvfile:
        csv_writer = csv.writer(csvfile)
        csv_writer.writerow(["Timestamp", "Temperature", "Humidity", "Angle X", "Angle Y", "Angle Z", "Pressure"])
```
- Defines the ESP32 server IP.
- Creates a new CSV file with column headers if it doesn’t already exist.


<br>

```py
    while True:
        html_data = fetch_data(url)
        sensor_data = parse_sensor_data(html_data)

        if sensor_data is not None:
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')  
            print(f"Sensor Data: {sensor_data}")

            with open("sensor_data.csv", "a", newline='') as csvfile:
                csv_writer = csv.writer(csvfile)
                csv_writer.writerow([timestamp] + list(sensor_data))  

        time.sleep(4)  
```

- Continuously fetches data every 4 seconds and appends it to the CSV file.
- Uses datetime.now() to timestamp each entry.


## Data Visualization Script Breakdown

```py
import pandas as pd
import matplotlib.pyplot as plt
```

- ```pandas```: Reads and processes CSV data.
- ```matplotlib.pyplot```: Plots graphs for visualization.

<br>

```py
data = pd.read_csv('sensor_data.csv')

print("Columns in the CSV:", data.columns)
```
- Loads the CSV file into a Pandas DataFrame.
- Prints column names to debug any loading issues.

<br>

```py
data['Timestamp'] = pd.to_datetime(data['Timestamp'])
```

- Converts the timestamp column from string format to a proper datetime format.

<br>

```py
plt.figure(figsize=(12, 6))
plt.plot(data['Timestamp'], data['Temperature'], label='Temperature (°C)', color='red')
plt.plot(data['Timestamp'], data['Humidity'], label='Humidity (%)', color='blue')
plt.plot(data['Timestamp'], data['Angle X'], label='Angle X', color='green')
plt.plot(data['Timestamp'], data['Angle Y'], label='Angle Y', color='purple')
plt.plot(data['Timestamp'], data['Angle Z'], label='Angle Z', color='orange')
plt.plot(data['Timestamp'], data['Pressure'], label='Pressure', color='brown')
```

- Plots each sensor reading on the graph with unique colors for easy distinction.
- ```figsize=(12,6)```: Sets the graph size.


<br>

```py
plt.xlabel('Timestamp')
plt.ylabel('Sensor Readings')
plt.title('Sensor Data Over Time')
plt.legend()
plt.grid()
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('sensor_data_plot.png')
plt.show()
```

- Adds labels, a title, a grid, and rotates x-axis labels for clarity.
- Saves the graph as ```sensor_data_plot.png``` before displaying it.

<br>

```python
def parse_sensor_data(html_data):
    if html_data is None:
        return None

    try:
        soup = BeautifulSoup(html_data, 'html.parser')

        temperature = float(soup.find_all("span")[1].text)  
        humidity = float(soup.find_all("span")[3].text)     
        angle_x = float(soup.find_all("span")[5].text)      
        angle_y = float(soup.find_all("span")[7].text)      
        angle_z = float(soup.find_all("span")[9].text)      
        pressure = float(soup.find_all("span")[11].text)    

        return temperature, humidity, angle_x, angle_y, angle_z, pressure
    except (IndexError, ValueError) as e:
        print(f"Error parsing data: {e}")
        return None
```

- ```parse_sensor_data(html_data)```: Extracts sensor readings from the webpage.

- ```soup.find_all("span")```: Retrieves sensor values enclosed within ```<span>``` tags.

- If data extraction fails, an exception is caught, preventing script crashes.


## **What You Can Learn from This Project**  
**Web Scraping** – Extracting real-time data using **Requests & BeautifulSoup**  
**File Handling** – Writing structured **CSV files**  
**Data Visualization** – Creating **graphs with Matplotlib**  
**Time-Series Analysis** – Understanding trends and anomalies in **sensor data**  

## **See Also**  
- [E-Cube Web Portal](/en/experiments/wirelessndata/web_portal.md)  
- [I2C Communication Guide](/en/communication/i2c.md)  
- [Python Data Analysis](/en/python/data_analysis.md)  
