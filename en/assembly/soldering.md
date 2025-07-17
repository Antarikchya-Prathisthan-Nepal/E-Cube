# Soldering Guide

## What is Soldering?

Soldering is a process of joining two or more electronic components together using a filler metal called solder. This technique creates a strong electrical and mechanical connection, making it essential for assembling electronic circuits. Solder typically consists of a combination of tin and lead, though lead-free alternatives are increasingly used for environmental and health reasons.

::: tip
Use a fine-tipped soldering iron for delicate components to achieve better control and precision.
:::

## Safety Warnings

::: warning
Soldering produces fumes that can be harmful if inhaled. Work in a well-ventilated area or use a fume extractor.
:::

::: warning
The soldering iron can reach extremely high temperatures. Always use the soldering stand when not in use, and never touch the tip.
:::

## Preparation

Firstly, gather all the necessary soldering components. Ideally you will require:
- a soldering iron
- soldering wire
- a soldering stand
- power supply for soldering iron

## Sensors Placement

Refer to the following image for the correct placement of the sensors. You will find the corresponding names engraved in the **EPS board** as well.


<div style="text-align: center;"><img src="../../public/epsstep.png" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

::: tip
You should notice that the outermost pins in sensors have square pads while the rest of the pins have round pads. The pin with the square pad is referred to as **Pin No. 1**.

You will find square pads in the slots in EPS board as well. This is to highlight the placement of **Pin No. 1**. Make sure that the **Pin No. 1** of sensor aligns with the **Pin No. 1** of the Board while placing the sensor.
:::

::: tip
In correct orientation, the components (small blocks of resistors and capacitors) in sensors are facing upwards.
:::

## Soldering Procedure

<div style="text-align: center;"><img src="../../public/solderingguide.jpg" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

Solder the pins one by one. Some things to keep in mind while soldering:

- Make sure the iron is properly heated before working with it.
- Clean the soldering iron tip before and after use to ensure good conductivity.
- Hold the soldering iron at an angle for better control and visibility.
- Heat the pin and pad simultaneously before applying solder.
- Use the right amount of solder—too much can cause bridges, too little may result in weak joints.
- Avoid excessive heating to prevent damage to components and PCB.
- Work in a well-ventilated area to avoid inhaling fumes.

## Soldering Steps

## 1. Heat the Soldering Iron

Turn on the soldering iron and let it heat up for a few minutes.

   ::: tip
   Always check the soldering iron temperature. For most solder types, a temperature between 350°C and 400°C is effective.
   :::

## 2. Component and Pins Soldering

This soldering is done between the header pins and the sensor components. Solder all the pins from the top. Be careful as to not damage the sensor components.

<div style="text-align: center;"><img src="../../public/soldersensor.jpg" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

## 3. Pins and Board Soldering

This soldering is done between the sensor and the board. 

#### a) Firstly, place any **ONE** of the sensors.
 
<div style="text-align: center;"><img src="../../public/step1.png" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>


::: tip
Work on one sensor at a time.
:::

#### b) Flip the board. 

<i> The soldering is done at the back of the EPS Board.</i>

<div style="text-align: center;"><img src="../../public/step1.5.png" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>
<div style="text-align: center;"><img src="../../public/solderboard.jpg" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

Repeat step 2 and 3 for all the sensors.


## 4. Deployement switch soldering

The third component that we need to solder is the deployement switch. The finished soldering looks something like this.

<div style="text-align: center;"><img src="../../public/s_depswitch.jpg" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

### Step 1 : Header pin unpacking and breaking

Inside your MPU6050 packet, you should receive two header pins. One of them is straight. The other one is bent to 90 degrees.

<div style="text-align: center;"><img src="../../public/s_1.jpg" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

The straight one goes to the sensor board as shown.

<div style="text-align: center;"><img src="../../public/s_2.jpg" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

Break off the third header pin such that only 3 pins are remaining. You can do it using hands or any tool of your convinience.

<div style="text-align: center;"><img src="../../public/s_3.jpg" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

### Step 2 : Header pin placement

Place the header pin in the back of OBC board as shown.


<div style="text-align: center;"><img src="../../public/s_4.jpg" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

### Step 3 : Soldering

Solder all the 3 pins of the header pin from the front side of OBC board.

<div style="text-align: center;"><img src="../../public/s_5.jpg" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

### Step 4: Wire Soldering

The header pins are soldered to wires, which are then soldered to the deployement switch. The wires are connected to the header pin from the back side of OBC board.

Refer to the image below for convinience.

<div style="text-align: center;"><img src="../../public/s_6.jpg" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

::: danger !! CAUTION !!

Make sure the labelings in OBC board beside the header pin match the corresponsing labeling in the deployement switch.
:::

<div style="text-align: center;"><img src="../../public/s_7.jpg" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>
<div style="text-align: center;"><img src="../../public/s_8.jpg" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

### Your deployement switch should look something like this

<div style="text-align: center;"><img src="../../public/s_depswitch.jpg" title="ECube render" style="max-width: 80%; height: auto; width: 600px; margin-top: 20px;" /></div>

The soldering portion is Complete😊! Head over to [Assembly Steps](/en/assembly/assembly_steps.md) for further steps!

[Back to Home](./index.md)