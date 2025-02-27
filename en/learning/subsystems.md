# Subsystems

## Introduction

&nbsp; &nbsp;&nbsp; Subsystems of a satellite generally refers to the various functional components or modules that
make up a satellite. These subsystems are specialized units within the satellite that perform
specific tasks and work together to ensure the satellite’s proper functioning and mission
accomplishment. Just like a human body, a satellite is composed of several interconnected
systems, each with its own unique purpose and functionality. Hence, the term subsystem also
touches upon the modular nature of satellite design and it’s understanding. These subsystems
are often developed and integrated separately, but they must work in harmony to achieve
the overall mission objectives of the satellite. While talking about the subsystems, the focus
is on the different areas of expertise and engineering disciplines involved in satellite design
and operation. It acknowledges that each subsystem requires specialized knowledge and
skill sets, including power systems, communication systems, attitude control, thermal control,
command and data handling, structure, propulsion, and payload.

&nbsp; &nbsp;&nbsp; Understanding and managing the interactions and interfaces between these subsystems
are crucial for a successful satellite mission. Proper coordination and integration of these
subsystems ensure that the satellite can generate power, communicate with the ground,
maintain its desired attitude, manage temperature, process data, withstand structural loads,
maneuver in space, and fulfill its specific mission objectives. In summary, when someone
mentions "satellite subsystems," they are referring to the individual components and systems
that together form a complete satellite and perform specific functions necessary for its
operation and mission success.
  
&nbsp; &nbsp;&nbsp;A satellite is made up of several subsystems, and they are listed below:
  - Electrical Power System (EPS)
  - Structure System
  - Communication System
  - ADCS
  - OBC System
  - Thermal System
  - Payload System
  <br>

  ## Electric Power System
 

The EPS is a crucial subsystem for the proper functioning of a CubeSat. It is responsible
for collecting, storing, and distributing the electrical power needed by other systems on the
satellite to operate effectively. The EPS is also responsible for monitoring the overall health of
the satellite, and protecting it and its subsystems from the high levels of radiation in space.

Below we discuss about the most important of EPS:


  - <b>Power Sources:</b>The primary source of power for a CubeSat’s EPS is energy collected
from solar panels. These panels are typically made of photovoltaic cells, which convert
sunlight into electrical energy. The solar panels are typically mounted on the exterior of
the CubeSat, and are designed to track the sun as the CubeSat orbits the Earth, in order
to maximize the amount of energy collected. In addition to solar panels, CubeSats also
typically include rechargeable batteries to store the energy collected by the solar panels.
These batteries are used to provide power to the CubeSat during periods when it is
not in direct sunlight, such as during eclipses or when it is in the Earth’s shadow. The
batteries also provide a buffer to smooth out any variations in the power supply from
the solar panels, and provide power during periods of peak demand by the payload
on-board the CubeSat.

  - <b>Power Control and Distribution: </b>The EPS is responsible for regulating and distributing the power collected and stored by the solar panels and batteries to other systems
throughout the CubeSat as needed. This is done through a power control and distribution unit. The power control and distribution unit is responsible for monitoring the
power supply from the solar panels and batteries, and distributing the power to the
various subsystems of the CubeSat as needed. It also includes a power conditioning
unit, which is responsible for converting the power supply from the solar panels and
batteries into the appropriate voltage levels for different systems and sensors.

  - <b>Monitoring and Protection: </b>The EPS also plays an important role in monitoring the
overall health of the CubeSat. This includes collecting routine information from various
subsystems and sensors, such as voltages, currents, and temperatures, and communicating this information back to the ground as part of the telemetry for the CubeSat
operators to monitor the overall health of the system and guard against potential faults
or poor performance. The high levels of radiation in space can cause ”single event
latch-up” in the semiconductor devices on the CubeSat, this can damage some of the
components on the CubeSat if the power is not turned off quickly enough. To protect
against this, the EPS also includes overcurrent and overvoltage protection circuits to
protect the CubeSat and its subsystems from these events.

<b> Electrical Requirements</b>

In order to ensure the safety of the CubeSat during launch and operation, there are certain
electrical requirements that are recommended for the standard CubeSat form factor that EPS
should adhere to. These include:

- No electronics may be active during launch to prevent any electrical or RF interference
with the launch vehicle and primary payloads. CubeSats with rechargeable batteries
must be fully deactivated during launch or launch with discharged batteries.

- One deployment switch is required (two are recommended) for each CubeSat. The
deployment switch should be located at designated points.

- Developers who wish to perform testing and battery charging after integration must provide ground support equipment (GSE) that connects to the CubeSat through designated
data ports.

- A remove before flight (RBF) pin is required to deactivate the CubeSats during integration outside the Poly-PicoSatellite Orbital Deployer (P-POD). The pin will be removed
once the CubeSats are placed inside the P-POD. RBF pins must fit within the designated
data ports without protruding more than 6.5 mm from the rails when fully inserted.

- A remove before flight (RBF) pin is required to deactivate the CubeSats during integration outside the Poly-PicoSatellite Orbital Deployer (P-POD). The pin will be removed
once the CubeSats are placed inside the P-POD. RBF pins must fit within the designated
data ports without protruding more than 6.5 mm from the rails when fully inserted.

&nbsp; &nbsp;&nbsp; In conclusion, the EPS is a crucial subsystem for the proper functioning of a CubeSat. It is
responsible for collecting, storing, and distributing power, monitoring the overall health of the
satellite, and protecting it and its subsystems from the high levels of radiation in space. The
EPS must also adhere to certain electrical requirements to ensure the safety of the CubeSat
during launch and operation, while also being designed to minimize power consumption
and maximize energy efficiency to extend the CubeSat’s lifespan in orbit.

<br>

## Structure System

A structure sub-system in a cubesat refers to the physical framework of the satellite, which
includes the frame, body, and other structural components that hold the various subsystems in
place and provide protection for the satellite during launch and operation. This subsystem is
critical for maintaining the structural integrity of the CubeSats and ensuring it can withstand
the various forces and stresses it will encounter in space. The structure subsystem is extremely
important in CubeSats, as it provides the basic framework for the rest of the satellite’s
subsystems and enables the satellite to maintain its shape and integrity in space.

&nbsp; &nbsp; In humans, the structural system is made up of the body itself, including the skeleton,
muscles, and skin. The skeleton provides support for the body, while the muscles allow
for movement, and the skin protects the internal organs from external shocks. Similarly, in
satellites, the structural subsystem serves two main roles: to protect the internal equipment
so that it can withstand launch and the space environment, and to support the internal
equipment so that it can function. The structural subsystem provides the physical framework
for the satellite, and includes the frame, body, and other structural components that hold
the various subsystems in place and provide protection for the satellite during launch and
operation.

&nbsp; &nbsp; The structural subsystem is critical for maintaining the structural integrity of the satellite
and ensuring it can withstand the various forces and stresses it will encounter in space. The
structural subsystem must also be able to withstand the forces encountered during launch
and deployment, such as vibrations, acceleration, and shock. The structural subsystem is
essential for the safe and successful operation of a satellite in space.

&nbsp; &nbsp; Unlike conventional satellites, while designing a CubeSat structure system, we have to keep
in account of the SWaP requirements. Also, as nano- and pico-satellites are not actually the
primary payloads of a launcher and are merely piggybacking loads, the launchers also have
their own set of requirements or restrictions. discussing the structural system of a satellite,
one must also pay attention to these key aspects that are listed and briefly explained below:

- <b>CubeSat Structure:</b> The structure of a CubeSat typically consists of an aluminum or
carbon fiber composite chassis, also known as the "CubeSat structure" or "bus." The
structure provides a rigid framework and mounting points for integrating the various
subsystems and payloads. It is designed to be lightweight and compact while ensuring
adequate structural integrity during launch and in space.

- <b>Panels and Rails</b> CubeSat structures often include removable panels and rails on the
external faces of the chassis. These panels can be opened or removed to access the
internal components during integration or maintenance. The rails provide attachment
points for subsystems, such as power systems, communication systems, and sensors.

- <b>Deployable Solar Panels:</b> Many CubeSats are equipped with deployable solar panels
to generate electrical power. These solar panels are typically stored in a folded configu-
ration and are deployed once the CubeSat is in orbit. The solar panels provide energy
to the onboard systems and recharge the batteries.

- <b>Antenna Deployment:</b> CubeSats require antennas for communication purposes. The
antennas may be deployed through various mechanisms, such as tape springs or shape
memory alloys, to extend them from the compact form to their operational configuration
after launch.

- <b>Vibration and Shock Mitigation</b> CubeSats must withstand the vibrations and shocks
experienced during launch. To mitigate these forces, the structure incorporates shock
mounts, vibration isolators, and other damping mechanisms. These components help
protect the CubeSat’s sensitive subsystems and payloads from damage.

- <b>Integration and Testing:</b> CubeSat structure systems undergo rigorous integration and
testing processes to ensure their functionality and reliability. The integration involves
securely mounting the subsystems and payloads onto the structure while considering
proper alignment and interfaces. Testing includes mechanical and thermal vacuum tests
to validate the structure’s performance under expected environmental conditions.

- <b>Standardized Mechanical Interfaces:</b> CubeSats use standardized mechanical interfaces,
such as the P-POD or NanoRacks CubeSat Deployer (NRCSD), for deployment from the
launch vehicle. These interfaces provide a secure and reliable means of deploying the
CubeSat into its designated orbit.

While designing the CubeSat structure, one must thus be aware of the SWaP requirements and also the launcher requirements. Generally, the structures provide are lightweight, reliable and compact platform to conduct a successful mission with the resources in hand. The standards for CubeSats help in the due process of designing a satellite.

<br>

## Communication Systems

The communication system is responsible for transmitting and receiving data from the Cube-
Sat to the ground station. This system is crucial for the CubeSat mission, as it allows the
CubeSat to communicate with the ground station and transmit data and telemetry. The com-
munication system typically consists of antennas, transceivers, modulation and demodulation
units and a communication protocol such as AX.25 for packet radio communication. The
transceiver is responsible for sending and receiving data, while the antenna is responsible for
transmitting and receiving signals. The communication protocol is responsible for ensuring
that the data is transmitted and received correctly. This chapter will provide an in-depth
understanding of the communication subsystem in CubeSats, including its components,
design considerations, and best practices.

The role of the communication subsystem is to facilitate communication between the
CubeSat and the ground station. This includes receiving uplinked commands from the
ground station and downlinking housekeeping and mission data to the ground station. An
example of this would be a CubeSat receiving a command to take a picture from its onboard
camera, and then transmitting the picture back to the ground station for analysis.

The communication subsystem must be able to transmit and receive data at the necessary
speeds and frequencies, and it must be able to operate within the power and weight constraints
of the CubeSat. Additionally, the subsystem must be able to withstand the harsh conditions of
space, such as radiation and temperature extremes. An example of this would be a CubeSat
communication subsystem that is designed to operate at temperatures ranging from -40 to 85
degrees Celsius and has a radiation tolerance of 50 krad.

The packet data communication protocol is responsible for ensuring the correct transmission
and receipt of data. This includes selecting the appropriate protocol, such as AX.25, and
determining the necessary packet size and transmission rate. An example of this would be
using a packet size of 256 bytes and a transmission rate of 9600 baud for a CubeSat with
limited data storage capacity.

The data transmission speed between the ground station and the CubeSat is determined
based on the CubeSat’s mission requirements and the capabilities of the communication
equipment. Factors such as the distance between the ground station and the CubeSat, the
size of the data to be transmitted, and the desired transmission rate are taken into account
when calculating the data transmission speed. An example of this would be a CubeSat in low
Earth orbit that needs to transmit high-resolution images back to the ground station at a rate
of 1Mbps.

<b>Ground Stations</b>

Ground stations are the ground-based facilities that are used to communicate with and control CubeSats. They include the necessary equipment, such as antennas and receivers to communicate with the CubeSat, as well as the software and hardware to process the data received from the CubeSat. An example of a ground station would be a facility located at a high altitude, where the atmospheric conditions are optimal for communication with a CubeSat in low Earth orbit.

The design process of a ground station includes determining the required communication capabilities, such as data transmission speed and frequency, as well as selecting the appro- priate communication equipment and software. The design also includes considerations for the ground station’s location, such as its proximity to the CubeSat’s orbit and the availability
of power and internet connections. A ground station must have the necessary equipment and software to communicate with the CubeSat, such as antennas, receivers, and processing
software. It must also have a reliable power source and internet connection. Additionally, the ground station must be located in an area with a clear line of sight to the CubeSat’s orbit.

<b>Antenna and Link Budgets</b>

The design of the CubeSat antenna is a crucial aspect of the communication subsystem. The antenna must be able to transmit and receive signals at the necessary frequencies and with the required gain. Factors such as the CubeSat’s orbit, the size and weight constraints of the CubeSat, and the desired communication range must be taken into account when designing the antenna. For example, a CubeSat in a low Earth orbit may require a small, lightweight antenna with a lower gain, while a CubeSat in a higher orbit may require a larger, more powerful antenna with a higher gain.

Link budget is the calculation of the amount of power required at the transmitter and the sensitivity required at the receiver to establish a successful communication link. It includes factors such as the transmitter power, the receiver sensitivity, the path loss, and the atmospheric conditions. The link budget design is an important step in the communication subsystem design process, as it helps to ensure that the CubeSat will be able to communicate effectively with the ground station.

The communication method and frequency used by a CubeSat will depend on the mission requirements and the available communication equipment. Factors such as the desired data transmission rate, the CubeSat’s orbit, and the availability of frequencies must be taken into account when determining the communication method and frequency. An example of this would be a CubeSat in a low Earth orbit that uses UHF frequencies for communication, while a CubeSat in a higher orbit may use S-band or X-band frequencies.

<b>Communication Standards</b>

There are various communication standards that have been developed specifically for Cube- Sats, such as the CubeSat Space Protocol (CSP) and the CubeSat Communication Protocol (CCP). These standards provide guidelines for the design and operation of the communication subsystem and can help to ensure compatibility between different CubeSats and ground stations. Error correction and data compression are important techniques that can be used to improve the efficiency and reliability of the communication subsystem. Error correction techniques, such as forward error correction (FEC), can be used to detect and correct errors that may occur during data transmission. Data compression techniques, such as lossless or lossy compression, can be used to reduce the size of the data being transmitted, which can help to increase the data transmission speed.

Security is a critical aspect of the communication subsystem, as it ensures the integrity and
confidentiality of the data being transmitted. This can include encryption techniques, such
as AES, to protect against unauthorized access, and authentication methods, such as digital
signatures, to ensure that the data is coming from a trusted source.


In conclusion, the communication subsystem in CubeSats plays a vital role in the successful
operation of the satellite. The subsystem must be designed to meet the mission requirements
while also taking into account the CubeSat’s size and resource constraints. By understanding
the components, design considerations, and best practices for communication subsystems in
CubeSats, engineers and scientists can ensure that their CubeSat missions are successful.
<br>


## ADCS

The ADCS is responsible for maintaining the CubeSat’s orientation in space and pointing
its payload in the correct direction. This system is crucial for the CubeSat’s mission, as
it ensures that the CubeSat’s payloads are pointed in the correct direction to collect data
or communicate with the ground station. The attitude control system typically consists of
sensors, actuators, and control algorithms. Attitude determination involves measuring the
CubeSat’s attitude, which includes its orientation, angular velocity, and position relative to
a reference frame. Attitude control involves adjusting the satellite’s orientation to achieve
desired pointing directions or stability.

While designing a functional ADCS, a system that senses its position or attitude should be
designed. That is the first step. Then, should the sensed data not be favorable, an actuator
should be employed to maintain the desired position and an algorithm must be made as such
that the whole system maintains itself, as a system, without any external influence. Here we
now discuss the main components and also the functionalities of a ADCS :

- <b>Sensors:</b> The attitude determination process relies on various sensors to measure the
CubeSat’s attitude parameters. These sensors may include:
   - *Gyroscopes or rate sensors*: To measure the angular velocity or rate of rotation of the CubeSat.
   - *Magnetometers*: To measure the magnetic field to determine the satellite’s orientation with respect to the Earth’s magnetic field.
   - *Sun sensors*: To detect the direction of sunlight to determine the CubeSat’s orientation relative to the Sun.
   - *Inertial measurement units (IMUs)*: To combine multiple sensors, such as accelerometers, gyroscopes, and magnetometers, to provide comprehensive attitude measurements.

- <b>Data Processing:</b> The ADCS processes the snsor data to calculate the CubeSat's attitude. This involves data fusion algorithms that combine the measuremenets from different sensors to obtain a more accurate and reliable estimate of the attitude. Various filtering techniques, such as Kalman filtering or complementary filtering, are commonly employed to optimize the attitude determination process. 

- <b>Control Actuators:</b> The attitude control aspect of the ADCS utilizes actuators to adjust and maintain the CubeSat’s orientation. Commonly used actuators include:
   - *Reaction wheels*: These spinning wheels can change the satellite’s angular momentum by accelerating or decelerating their rotation. By controlling the angular momentum, the CubeSat’s orientation can be adjusted.
   - *Magnetorquers*: These devices use electromagnetic forces generated by onboard electromagnets to interact with the Earth’s magnetic field. By selectively activating the magnetorquers, the CubeSat can generate torque and control its orientation.
   - *Thrusters*: In some cases, CubeSats may be equipped with small thrusters that use compressed gas or electric propulsion to provide additional attitude control capabilities.

- <b>Control Algorithms:</b> ADCS incorporates control algorithms to calculate the necessary actuator commands based on the desired attitude and the measured attitude. These algorithms aim to minimize the error between the desired attitude and the actual attitude, providing stable and accurate control

- <b>Power and Communication:</b> ADCS also requires power and communication links to operate. It is typically connected to the CubeSat's power supplu and onboard computer system for data processing and actuator control. The ADC system may also interface with the CubeSat's communication subsystem to receive commands and provide attitude-related telemetry data to the ground station. 

The ADCS plays a critical role in CubeSat missions that require precise pointing, imaging, or data acquisition. It enables the satellite to maintain a desired orientation, stabilize its attitude, or adjust its pointing direction for scientific observations, Earth imaging, or communication purposes.

<br>

## OBC System

The OBC system is a crucial component of any CubeSat mission, serving as the central control
unit for the satellite’s avionics and payload systems. The OBC system runs the on-board
software that controls the vital functions of the CubeSat, such as attitude and orbit control,
telemetry data management, telecommunication actions, system housekeeping, and on-board
time synchronization. In this chapter, we will discuss the state of the art of OBCs in CubeSats,
the types of hardware and software used, and the major role and requirements that must be
considered when designing an OBC for a 1U CubeSat.

In recent years, there has been a trend towards using more advanced and powerful OBCs
in CubeSats. This is driven by the increasing complexity of CubeSat missions and the need or greater processing power and memory capacity. The use of 32-bit microcontrollers is
becoming more common in CubeSat OBCs, as they offer increased processing power and
memory compared to 8-bit and 16-bit microcontrollers. Additionally, more advanced software
and operating systems, such as real-time operating system (RTOS), are being used to improve
the reliability and performance of OBCs.

The hardware used in an OBC typically includes a microprocessor, memory banks, and
an interfacing chip to connect the computer to other subsystems. A range of standard and
non-standard interface formats are used, such as RS485, CAN, SpaceWire, SPI, and I2C. The
OBC can be provided as an integrated unit in the CubeSat bus and avionics system or as a
modular device that can work with various other pieces of multi-vendor equipment. The
software used in an OBC typically includes a RTOS that manages all the software applications
and provides the flight software for the CubeSat. Popular RTOSs used in CubeSat OBCs
include FreeRTOS, which is free, open-source, lightweight, and compatible with a wide range
of microcontroller types.

<b>Role of OBCs in CubeSats</b>

The OBC plays several key roles in the effective operation of a CubeSat. These functions include:

  - <b>Attitude and Orbit control:</b> The OBC is responsible for controlling the attitude and
orbit of the CubeSat, ensuring that it stays within the desired parameters.

  - <b>Telemtry data management:</b> The OBC is responsible for receiving, processing, and storing telemetry data from the CubeSat’s various subsystems, such as the power distribution system, the communication system, and the payload.

  - <b>Telecommunication actions:</b> The OBC is responsible for managing the CubeSat’s communication systems, including sending and receiving telecommands and telemetry data
to and from the ground station.

  - <b>System Housekeeping:</b> The OBC is responsible for monitoring the health and performance of the CubeSat’s subsystems and for performing any necessary housekeeping tasks, such as data backups and system updates.

  - <b>On-board time synchronization:</b> The OBC is responsible for maintaining accurate timekeeping on the CubeSat, which is crucial for accurate orbit prediction and coordination
of activities.

  - <b>Failure detection, isolation, and recovery:</b> The OBC is responsible for detecting and isolating any failures that occur on the CubeSat, and for initiating recovery procedures to bring the CubeSat back to normal operation.

<b>Requirements for Designing an OBC for a 1U CubeSat</b>

When designing an OBC for a 1U CubeSat, several key requirements must be considered to
ensure that the OBC will be able to perform its functions effectively. It is also important to
consider the use of industry standards such as the CubeSat Design Specification (CDS) and
the CubeSat Bus Standard (CSBS). Adhering to these standards can help ensure that the OBC
is compatible with other CubeSat subsystems and can be easily integrated into the overall
CubeSat design. Another important aspect to consider is the development process, it should
include a detailed requirements analysis, design, implementation, and verification phases.
This process should be carried out with a high degree of collaboration between the different
teams involved in the project, such as the mechanical, electrical, and software teams.
 
 In addition, the OBC hardware and software should be thoroughly tested before launch
to ensure that it will work as intended in the space environment. This includes testing for
radiation tolerance, thermal cycling, vibration, and shock.These requirements include:

  - <b>Processing capability:</b> The OBC must have sufficient processing power to handle the
demands of the CubeSat’s payload and subsystems.

  - <b>Memory:</b> The OBC must have enough memory to store the data generated by the
CubeSat’s payload and subsystems, as well as any housekeeping data.

  - <b>Interoperability and interfacing capabilities:</b> The OBC must be able to interface effectively with the CubeSat’s other subsystems, such as the power distribution system and
the communication system.

  - <b>Reliability of software:</b> The software running on the OBC must be reliable to ensure
that the CubeSat can operate effectively.

  - <b>Power requirements:</b> The OBC must be able to operate within the power constraints of
the CubeSat.

  - <b>Size and weight:</b> The OBC must be small and lightweight enough to fit within the 1U
CubeSat’s mass and volume constraints.

  - <b>Radiation tolerance:</b> The OBC must be able to withstand the harsh radiation environment of space without suffering any damage or degradation in performance.

  - <b>Single point of failure (SPOF):</b> The OBC should be designed in such a way that it is able to withstand a SPOF without compromising the overall functionality of the
CubeSat.

  - <b>Thermal management:</b> The OBC must be able to operate within the CubeSat’s thermal
constraints, which can vary depending on the CubeSat’s orbit and orientation.


  - <b>Power manangement:</b> The OBC must be able to effectively manage the power consump-
tion of the CubeSat’s subsystems, in order to ensure that the CubeSat can operate for
the duration of its mission.

  - <b>Fault tolerance:</b> The OBC must be able to tolerate faults in the CubeSat’s subsystems
and continue to operate effectively.

  - <b>Security:</b> The OBC must be designed with security in mind, to protect the CubeSat
against cyber-attacks and unauthorized access.

<br>

## Thermal System

The thermal subsystem in a CubeSat is responsible for managing and regulating the satellite’s
temperature in the harsh environment of space. It ensures that the components and systems
of the CubeSat operate within their temperature limits, preventing overheating or extreme
cold conditions that could impact performance or cause failures. Here are some key aspects
of the thermal subsystem in a CubeSat:

  - <b>Thermal Design:</b> The thermal design of a CubeSat involves determining the heat generation and dissipation characteristics of the onboard systems and components. It includes identifying the critical heat sources, such as electronic components, power systems, and payloads, and designing strategies to manage their thermal loads. Generally, thermal management is done with two different processes and they are discussed below:

    - Passive Thermal Control: Passive thermal control techniques aim to regulate the satellite’s temperature without active components or power consumption. These techniques include:
        - *Insulation*: The CubeSat structure is typically equipped with thermal insulation materials to minimize heat transfer between the internal and external environments Insulation helps maintain a stable temperature inside the satellite.
        - *Radiative Surfaces*: The outer surfaces of the CubeSat structure are often designed with specific coatings or materials that enhance or reduce the emission and absorption of thermal radiation. This helps in managing the heat gain or loss from the satellite.
    - Active Thermal Control: Active thermal control techniques involve the use of active components and mechanisms to actively manage the satellite’s temperature. These techniques include:
        - *Heaters*: Heaters are used to generate controlled amounts of heat in specific areas of the CubeSat. They are employed to prevent components from getting too cold, remove condensation, or maintain optimal operating temperatures.
        - *Heat Sinks and Heat Pipes*: Heat sinks made of thermally conductive materials, such as aluminum or copper, are used to absorb and dissipate heat from high-temperature components. Heat pipes, which are sealed copper pipes containing a working fluid, are also employed to efficiently transfer heat from one location to another within the CubeSat structure.
        - *Temperature Sensors*: Temperature sensors are integrated into various locations inside the CubeSat to monitor the temperature of critical components. This information is used to regulate the active thermal control mechanisms and ensure that temperatures remain within acceptable limits.
   
  - <b>Thermal Coatings:</b> Specialized coatings on the satellite’s surfaces can enhance or reduce
thermal radiation, depending on the specific requirements. For example, selective
coatings can be used to maximize heat absorption from the Sun or minimize heat
emission to space.

  - <b>Thermal Modeling and Analysis:</b> Thermal modeling and analysis are conducted to
simulate the temperature distribution within the CubeSat and identify potential hotspots
or areas of concern. Computer-aided thermal analysis tools are used to evaluate the
impact of different thermal management strategies, validate the thermal design, and
optimize the thermal subsystem.

  - <b>Testing and Verification:</b> The thermal subsystem undergoes rigorous testing to ensure
its effectiveness and reliability. Thermal vacuum testing, where the CubeSat is subjected
to simulated space conditions, allows for the validation of the thermal design and
performance under extreme temperatures.

The thermal subsystem The thermal subsystem is essential for maintaining the proper functioning and longevity
of a CubeSat. By managing the temperature environment, it helps to protect the sensitive
electronics, payloads, and other systems, ensuring their operational integrity and maximizing
the overall mission success.

<br>

## Payload System

The payload of a CubeSat refers to the scientific instruments or commercial equipment that
the satellite is designed to carry out its mission. In this chapter, we will discuss the importance
of payloads in CubeSats, the different types of payloads, and the requirements that need to
be followed while designing the payloads and the bus system to integrate them.

It’s important to understand the difference between the payload and the bus system.
The bus system refers to the infrastructure that supports and connects the subsystems that
enable the CubeSat to perform its mission, such as the power system, communication system,
and control system. The payload, however, refers to the specific scientific instruments or
commercial equipment that the CubeSat is designed to carry out its mission. The bus
system provides the necessary support and connection for the payloads to function and
to be integrated into the CubeSat. Payloads play a crucial role in CubeSat missions as
they enable the satellite to perform its intended mission. They can be scientific payloads,
commercial payloads, or technology demonstration payloads that enable us to showcase
various technologies that will be used in the satellites. Designing payloads and the bus
system to integrate them should consider compatibility, size and weight, power requirements,
thermal requirements, data requirements, and safety. A well-designed payload integrated
with a well-designed bus system is essential for the successful operation of a CubeSat.

<b>Types of Payloads</b>

There are several types of payloads that can be integrated into a CubeSat, including:

  - <b>Scientific payloads:</b> These payloads are designed to perform specific scientific experiments or observations. Examples include: cameras for Earth observation, spectrometers for atmospheric studies, and magnetometers for space weather research. 

  - <b>Commerical payoads:</b> These payloads are designed for commercial applications, such
as remote sensing, telecommunications, and navigation. Examples include: high resolution cameras, radar systems, and GPS receivers.

  - <b>Technology demonstration paylaods:</b> These payloads are designed to test and demonstrate new technologies in space. Examples include: advanced propulsion systems and
new materials.

  - <b>Educaation and Outreach Payloads:</b> CubeSats provide a valuable opportunity for educational institutions and organizations to engage students and the public in space-related
activities. These CubeSats may carry payloads designed for educational purposes, such as cameras for capturing images, student-built experiments, or amateur radio equipment fDesign Requirementsor communication.

<b>Design Requirements</b>

When designing the payloads and the bus system to integrate them, it is important to consider
several requirements, some of them are mentioned below:

   Moving forward towards building a nanosatellite, we will be dealing with the design,
fabrication and deployment procedure of the device. First and foremost, integrating the
idea of designing nanosatellites to paper or documentation of the idea is important. For
this, proper structural and electrical design of the components is required. Structural and
electrical design of the nanosatellite comprises predetermined dimensions that are to be used
in building the satellite. The design overview will help in manufacturing the nanosatellite as
we will be able to get a detailed idea about the various components.

<table>
   <tr>
      <td> Compatibility:</td>
      <td>The payloads should be compatible with the bus system and the other subsystems of the CubeSat.</td>
   </tr>
   <tr>
      <td>Size and weight:</td> 
      <td>The payloads should be designed to fit within the size and weight constraints of the CubeSat.</td>
   </tr>
   <tr>
      <td>Power requirements:</td>
      <td>The payloads should be designed to consume an acceptable amount of power, and to be able to operate with the power provided by the bus system.</td>
   </tr>
   <tr>
      <td>Thermal requirements:</td>
      <td>The payloads should be designed to operate within the thermal constraints of the CubeSat, and to not interfere with the thermal control subsystem.</td>
   </tr>
   <tr>
      <td>Data requirements:</td>
      <td>The payloads should be designed to provide the necessary data for the mission, and to be able to communicate with the communication subsystem.</td>
   </tr>
   <tr>
      <td>Safety:</td>
      <td>The payloads should be designed to be safe during launch and operation, and to not interfere with the safety subsystem.</td>
   </tr>
</table>

<div style="position: relative; min-height: 10vh;">
   <p style="position: absolute; width: 100%; text-align: center;">
      Table 2.1: Design requirements of Payload in a CubeSat
   </p>
</div>

<br>

### Also See:

- [Testing and Analysis](/en/learning/testingnanalysis.md)
- [Bus Systems](/en/learning/bussystems.md)
- [Orbit of Cube SAT](/en/learning/orbit.md)