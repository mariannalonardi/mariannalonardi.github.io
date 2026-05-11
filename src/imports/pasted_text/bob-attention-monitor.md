## Abstract

bob is a large language object designed to support user focus through embodied interaction and real-time surveillance. The project combines computer vision, animation and physical prototyping to create a character that actively monitors attention during work sessions. Using webcam-based pose estimation and object detection, bob detects distraction behaviors such as looking away, standing up or using a phone. When attention drops, the character interrupts the user through sound, movement and language, shifting from a secondary screen to the main interface. The system explores discomfort, presence and control as tools for attention management.

---

## Video

[final video bob 1280x720.mp4](attachment:12143ad9-19cd-4a51-9b6f-c6c5ae1b503b:final_video_bob_1280x720.mp4)

---

## Selected images

![DSC08237.png](attachment:0841744e-d650-43fc-afcc-24c39f39fc2c:DSC08237.png)

![DSC08262-2.tif](attachment:e1508247-2664-4130-a8a5-ce8fb07ef379:DSC08262-2.tif)

![DSC08279.tif](attachment:34e668a1-16e5-4519-aa7e-801f14e6432a:DSC08279.tif)

![DSC08250.tif](attachment:160ca9a1-c226-488f-8242-6f6fd0e8676f:DSC08250.tif)

---

## Concept

The ideation process started from the question:

**How can we materialize attention and make distraction visible and uncomfortable?**

We explored existing focus tools and digital assistants, but most of them rely on passive feedback. Our goal was instead to create an **active and embodied presence**, capable of “watching” the user and reacting in real time.

bob is conceived as a **large language object**: not just a chatbot, but a character with a body, a personality and a physical position in space. He behaves like a grumpy sheriff who controls your behavior and punishes distraction.

The core idea is simple:

- if the user stays focused, bob keeps walking calmly inside his house;
- if the user gets distracted, bob literally falls out of his space and invades the main screen.

The concept is strongly based on **surveillance, discomfort and interruption** as tools to bring attention back.

![WhatsApp Image 2026-02-06 at 09.03.14 (2).jpeg](attachment:5306d73c-92b8-478f-af54-2af460c5cd04:WhatsApp_Image_2026-02-06_at_09.03.14_(2).jpeg)

![WhatsApp Image 2026-02-06 at 09.03.14 (1).jpeg](attachment:5438bc63-480a-46f9-b67d-b66105837b99:WhatsApp_Image_2026-02-06_at_09.03.14_(1).jpeg)

![WhatsApp Image 2026-02-06 at 09.03.13.jpeg](attachment:93fddbd4-3376-4de1-8c4a-d02d5bfe3f46:ebe4b55a-7031-48d6-ae7b-9f02c8a769b0.png)

---

## System overview

The system is composed of three main elements:

1. **The PC screen**
    - Displays the working environment of the user
    - Shows a focus timer
    - Hosts bob’s final intervention (text and voice)
2. **The smartphone screen**
    - Physically attached to the PC via a 3D-printed structure
    - Acts as bob’s “house”
    - Plays a looping animation of bob walking and peeking out from a door
3. **Computer vision system**
    - Uses the PC webcam to monitor the user
    - Detects posture, gaze direction and presence
    - Detects distraction events (looking away, standing up, using the phone)

![Documento.png](attachment:cd9ffe05-b76b-42b1-94dc-00f58fe9f37e:Documento.png)

![Documento3.png](attachment:bf4a08e3-8b5a-4394-b855-5e7530777031:Documento3.png)

[First attempt with a simple animation and the first test of a cell phone holder](attachment:13d1e667-6f5b-4504-97d7-0a3e805450a9:WhatsApp_Video_2026-02-06_at_09.03.01.mp4)

First attempt with a simple animation and the first test of a cell phone holder

---

## User journey

The user journey is intentionally minimal and repetitive, reinforcing the idea of constant control.

**Main interactions**

1. Start a focus session
2. Stay focused while working
3. Get interrupted if distracted
4. Manually activate pause mode when needed

When the focus session starts, the system enters a **surveillance mode**.

An eye icon appears at the bottom of the screen:

- **open eye** → the user is being watched
    
    ![Screenshot 2026-02-06 alle 09.25.11.png](attachment:0850a5e6-f06f-42b8-a574-ad010dfd2494:Screenshot_2026-02-06_alle_09.25.11.png)
    
- **closed eye** → pause mode is active
    
    ![Screenshot 2026-02-06 alle 09.30.59.png](attachment:52d2f784-8767-439b-b768-09a1ebb58a03:Screenshot_2026-02-06_alle_09.30.59.png)
    

The timer tracks how long the user remains focused.

![Screenshot 2026-02-06 alle 09.41.25.png](attachment:bec38d9a-1b0b-4a83-8019-99b89cb294fa:Screenshot_2026-02-06_alle_09.41.25.png)

**Interaction logic**

While the user is focused:

- bob stays inside the smartphone screen
- The animation loops quietly
- No sound is produced
- The focus timer increases

When distraction is detected:

- bob falls from the phone screen into the PC screen
- A siren sound starts playing
- bob delivers a verbal and textual warning
- The focus timer pauses

This sudden interruption is meant to be annoying, invasive and impossible to ignore.

![Bob-userjourney.png](attachment:4af7cbc0-6060-4c9c-834c-556c3c1a070e:Bob-userjourney.png)

---

## Prototyping phase

### 3D Modelling and Fabrication

The physical housing for the smartphone was designed in **Fusion 360**. The structure mimics a small house for bob and is designed to be easily attached to different monitors. The smartphone needed to feel like a **separate space**, yet visually connected to the PC. 

A custom **3D-printed structure** was designed to:

- Hold the phone vertically
- Simulate a small “house” for the character
- Integrate visually with the computer setup

![WhatsApp Image 2026-02-06 at 09.03.13 (1).jpeg](attachment:3a6b96bc-2e85-4419-baee-8fa98f649d11:WhatsApp_Image_2026-02-06_at_09.03.13_(1).jpeg)

![WhatsApp Image 2026-02-06 at 09.02.48 (3).jpeg](attachment:53429fa3-a50f-455f-bee0-656d7398142b:WhatsApp_Image_2026-02-06_at_09.02.48_(3).jpeg)

![WhatsApp Image 2026-02-06 at 09.02.58.jpeg](attachment:cd2acc5f-7e01-4ddb-a013-ad6c4aece8fc:WhatsApp_Image_2026-02-06_at_09.02.58.jpeg)

![WhatsApp Image 2026-02-06 at 09.02.49 (2).jpeg](attachment:e2ca02e7-dd0a-4a16-94f3-b984cba55de8:WhatsApp_Image_2026-02-06_at_09.02.49_(2).jpeg)

### User Interface

The interface is intentionally minimal to avoid adding cognitive load.

Main UI elements:

- Focus timer on the PC screen
- Eye icon for surveillance status
- Text feedback during interruptions
    
    ![iMac 24 inch (2).png](attachment:bd8b588a-a18d-4150-b941-d9e0c114b69b:iMac_24_inch_(2).png)
    

![iMac 24 inch (3).png](attachment:b9c00cbf-e744-4b83-afea-462436d44ec2:iMac_24_inch_(3).png)

![iMac 24 inch (1).png](attachment:3c30ddac-9bad-43a9-913d-0d010a70f61a:iMac_24_inch_(1).png)

### Branding and Animation

**bob** is designed as a small and stylized character, whose visual simplicity contrasts with an intentionally authoritarian attitude. His personality is inspired by a bad-tempered sheriff: constantly present, judgmental and intrusive. bob does not assist the user politely, but instead enforces focus through surveillance and interruption, acting without asking permission.

![bob_illustration.jpg](attachment:fb438022-74ef-4e55-b3c4-a101d1315f8c:bob_illustration.jpg)

His behavior is expressed through a limited set of recurring animations. During focus sessions, bob performs an idle walking loop inside the smartphone screen, reinforcing the idea of a contained and controlled space. He occasionally peeks through a door, suggesting constant monitoring and anticipation. When a distraction is detected, a falling animation is triggered: bob drops from the phone screen to the PC screen. This movement visually represents the loss of focus and the breakdown of the user’s “safe space,” transforming a passive presence into an active and invasive intervention.

![iPhone 13 Pro.png](attachment:c27a3f4c-31ec-4176-b49f-84c5628d514b:iPhone_13_Pro.png)

![WhatsApp Image 2026-02-06 at 09.02.59 (1).jpeg](attachment:ce9ef202-4087-471d-b022-85664964be17:WhatsApp_Image_2026-02-06_at_09.02.59_(1).jpeg)

![WhatsApp Image 2026-02-06 at 09.02.59 (3).jpeg](attachment:6b9f3c06-9e6f-42ec-b4d6-0ebe43ec1446:WhatsApp_Image_2026-02-06_at_09.02.59_(3).jpeg)

[SmartphoneandScreenAnimation.mp4](attachment:d104a3d2-7977-4a7e-88ff-71115a41f7e2:SmartphoneandScreenAnimation.mp4)

[Animated logo](attachment:3f7651ff-d196-41b7-8f1d-db4d184ab70d:bobAnimation.mp4)

Animated logo

### Machine Learning and JavaScript Coding of Logic

The project uses real-time computer vision to detect user behavior. The system continuously tracks a set of key body points, specifically the nose and shoulders, using real-time pose estimation. By analyzing changes in their relative position and orientation, it infers the user’s level of attention and physical engagement with the workstation. Deviations from the expected posture are interpreted as distraction events, such as looking away from the screen, standing up, or leaving the working position.

In parallel, an object detection approach is used to identify whether the user is holding a phone. The presence of the device in the user’s hands is treated as an additional signal of distraction. All visual cues are combined within the system’s logic to determine whether the user is focused or distracted, triggering the corresponding behavioral response of the character.

[Senza nome.mov](attachment:58f2e3b9-013f-4e29-97b9-5b0493cedcba:Senza_nome.mov)

![Screenshot 2026-02-06 alle 09.50.40.png](attachment:29b92479-a95c-4c83-9864-a0df4bc80d50:Screenshot_2026-02-06_alle_09.50.40.png)

**Technologies used:**

- **MediaPipe** for pose estimation
- Webcam input from the PC
- JavaScript-based logic for real-time evaluation
    
    ![Screenshot 2026-02-06 alle 10.27.42.png](attachment:b5e44375-b7c7-4e6c-84ed-a7219637b83b:Screenshot_2026-02-06_alle_10.27.42.png)
    

---

## Resources

**Source code**

[BOB.zip](attachment:eadbfdff-1c59-48db-9b1b-70c65e2dfb4c:BOB.zip)

---

## References

[MediaPipe](https://chuoling.github.io/mediapipe/)