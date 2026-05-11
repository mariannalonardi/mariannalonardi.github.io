## Abstract

The Philips EL3302 is a portable cassette recorder and player that symbolizes the era of analog audio. It is a compact and portable vintage device, launched in the mid-1960s, known for being one of the first to promote the compact cassette standard. Designed for recording and playing cassettes, the EL3302 features simple mechanical controls. It was appreciated for its robust mechanics, precise electronics, and compact design, which made it ideal for voice recordings, interviews, and dictation. Today, this device remains an interesting example of historical audio technology focused on usability, combining mechanical precision and essential functionality. 

## Selected images

![DSC_0099.jpg](attachment:f8e3f44d-e3db-4f07-b276-b4c04bac96f6:DSC_0099.jpg)

![DSC_9989.jpg](attachment:d80247ae-f138-4e1a-8209-6f93a5d3c25a:DSC_9989.jpg)

![DSC_0053.jpg](attachment:0c2e6538-a4e0-4ca4-a041-5c514f92bf8e:DSC_0053.jpg)

![DSC_0037.jpg](attachment:ad82cc1e-301e-4b56-bc3d-f883e4950cc6:DSC_0037.jpg)

![DSC_0029_2.jpg](attachment:4de15ba1-a714-4f26-85b4-cc58caa2b176:DSC_0029_2.jpg)

![DSC_0010.jpg](attachment:ce88c3a4-c787-4d70-95c7-c4b60a8cb2c1:DSC_0010.jpg)

![DSC_0008.jpg](attachment:695608b5-b67e-49e4-8f08-e394911786af:DSC_0008.jpg)

## Video

[video_high.mp4](attachment:20de8d7c-5c8a-4b93-9c0b-2d2c4ee0e43e:video_high.mp4)

## Original object

![image.png](attachment:4e0f8eb4-0c18-4607-87c2-5dbed28d14ab:image.png)

## Concept

For this project, a vintage audio object was selected and analyzed as a case study for physical prototyping and design interpretation. The object chosen is the Philips EL3302, a portable cassette recorder. Originally designed as a device for both recording and playback, the EL3302 features a compact form factor and a robust, clear structure.

The object was selected for its historical and cultural significance as one of the first devices associated with the spread of the compact cassette standard. This object represents a crucial moment in the spread of audio recording and listening, making sound capture accessible outside of professional environments.

The project focused on the playback experience, emphasizing the interactions between user and device. In its redesigned version, the Philips EL3302 functions exclusively as a cassette player. The internal electronics are managed by a DFPlayer module, which interfaces with the speaker system, playback control buttons, ON/OFF switch, and battery. Volume control is managed separately via a Raspberry Pi Pico 2, connected to an analog potentiometer. This choice allowed the project to highlight the physical interaction of the original object.

The resulting prototype can be understood as a recontextualization of a historical audio object, in which the original design language and user interaction are highlighted.

## User journey

Let’s explore how it works. This section describes the interaction flow between the user and the redesigned Philips EL3302, focusing on the listening experience and the physical controls of the device.

**Power On / Off**

The interaction begins with the ON/OFF switch, which activates the device. Once powered on, the user can immediately interact with the cassette player.

**Volume Control**

Audio output is regulated through a rotary potentiometer, allowing continuous and precise control of the playback volume. 

**Play / Pause**

Playback is controlled via a front-mounted multifunction button. By pushing the button upwards, the user can start or pause audio playback. This gesture-based interaction replaces multiple separate controls, simplifying the interface while maintaining clarity and ease of use.

**Track Navigation – Forward**

To move forward in the audio content, the user pulls the same front button towards the right. This action advances the playback to the next track.

**Track Navigation – Backward**

Pulling the front button towards the left causes the playback to move to the previous track. The symmetrical left-right mapping supports intuitive navigation and reduces the cognitive effort required to understand the control.

## Prototyping phase

The initial phase of prototyping the device focused on exploring the front button functionality. The primary challenge was mapping multiple playback gestures—play/pause, track forward, and track backward—onto a single control while keeping the button intuitive and easy to operate.

### Paper sketching

![PXL_20251217_180056920.jpg](attachment:799bf876-150f-4c79-b992-3c377a60dec2:PXL_20251217_180056920.jpg)

The prototyping process began with paper sketches, which were essential for exploring possible solutions in the restyling of the Philips EL3302. This phase allowed the team to focus specifically on the front multifunction button, defining gestures for play/pause, next track, and previous track. Through these sketches, the team was able to identify potential mechanical solutions and evaluate spatial constraints, which informed subsequent design decisions regarding the internal layout and button ergonomics. Additionally, the internal arrangement and possible layer divisions were considered to determine whether to use 3D printing or laser cutting for specific components. The team also explored the best methods for securing the potentiometer within the device.

![PXL_20251217_180132781.jpg](attachment:1cb9d0d4-07b8-4968-92b0-8f0c635e6d0e:PXL_20251217_180132781.jpg)

![PXL_20251217_180123271.jpg](attachment:7fe5d391-94c4-433d-8cc5-d42de4dcb2d3:PXL_20251217_180123271.jpg)

![PXL_20251217_180138148.jpg](attachment:162bdf3f-2e6d-429d-9c83-c9e3386a08de:PXL_20251217_180138148.jpg)

### Cardboard prototype

Cardboard model was constructed to physically test the front button mechanism. Building the prototype layer by layer enabled the team to experiment with the button’s movement and tactile feedback, ensuring each gesture was distinct and reliable. While this approach clarified the operation of the button, it also revealed challenges in positioning the electronic components, highlighting areas where adjustments were needed to maintain both functionality and compactness.

![PXL_20251218_081439084.jpg](attachment:14a4897f-671c-47e0-91a6-743fa837133b:PXL_20251218_081439084.jpg)

![PXL_20251218_081553161.jpg](attachment:ecbcb067-d57d-403f-9773-750386fee469:PXL_20251218_081553161.jpg)

[PXL_20251218_081700782.mp4](attachment:d17295b1-91d7-416e-8520-281db303ed25:PXL_20251218_081700782.mp4)

![PXL_20251218_081401575.jpg](attachment:6e4f0cd6-5dc0-48ea-b1b3-378cd83a4219:PXL_20251218_081401575.jpg)

### First Fusion prototype

To resolve uncertainties regarding internal spacing and component integration, the team switched to Fusion 360 to model the device in 3D. This step enabled precise positioning of electronic components, including the DFPlayer module, Raspberry Pi Pico 2, and potentiometer, relative to the front multifunction button. Building the digital prototype around the electronics was key to defining the structure of the object and, in particular, the front button.

![Test Pulsante v8.png](attachment:ec098aa1-9cbc-48ef-9e57-823aa3685f5c:3fe9d2f8-ad49-4469-9c32-dfd37b5fb1b6.png)

![Lato pulsante on_off, Appoggio potenzionmetro v8.png](attachment:ec421c2f-6635-41fa-b47e-925395f741fa:0460ea37-b9a1-4dc9-b230-3cc39581f327.png)

![Lasercut parametric box v17.png](attachment:802eb89a-64ec-4fb7-a203-2da07001eaa5:d6fd1eb6-5a57-4e39-999e-a6933943f11e.png)

## Designed solutions

**Front Button**

The front multifunction button was the central focus of the prototyping phase, as it needed to integrate play/pause, next track, and previous track functions within a single compact control. The main challenge was to ensure that every gesture could be performed reliably, while maintaining tactile feedback, ergonomic use, and electronic functionality.

**First front button prototype**

![Test Pulsante .png](attachment:1c8884e7-5b49-4eaa-949b-7a6d2c6dc33d:09c1715f-d2e5-4505-911e-c1a1836cfa61.png)

![IMG_7988 (1).jpg](attachment:54e8e4cf-d7dd-4882-9428-20d1a73a5bb5:1ad6c1fb-6db7-4ed3-8d11-86e5ca1806f9.png)

**Final front button**

![Final prototype bottone.png](attachment:b46439a3-6d21-40cc-b0d9-b826f5245c60:24dc77af-cf7b-4c54-bbb5-efb0b08cc63c.png)

[IMG_9177.MOV](attachment:547959e2-401b-4e80-89a7-638f7c25749a:IMG_9177.mov)

**Details of the front button**

![Final prototype details.png](attachment:fe2ba956-f930-4a89-81b7-d00e30d21027:009fbd8c-24bc-4a09-8cda-7d7dafcce5fc.png)

[IMG_9257.MOV](attachment:004caaf1-f59d-40cf-90c8-0851fca2df98:IMG_9257.mov)

**3D printed base**

![The prototype was divided into two main parts. The upper section was produced using 3D printing.](attachment:ac706c1c-c3cb-4681-8605-729da13b95c5:157263ef-fe14-467b-a0b4-f0e624a101bf.png)

The prototype was divided into two main parts. The upper section was produced using 3D printing.

![IMG_9259.jpg](attachment:390778ab-78be-43c1-a507-f5dac08efaab:IMG_9259.jpg)

[IMG_9247.MOV](attachment:03bf4651-0d9d-44c3-8603-ade1059e2be9:IMG_9247.mov)

![IMG_9254.jpg](attachment:5adc69ab-3aed-4cb9-9524-c3ae6a855f7a:IMG_9254.jpg)

**Laser cutted faces**

![
The lower part of the prototype, which contains the electronic components and the potentiometer, was fabricated using a laser cutter and 4 mm thick wooden panels. 

](attachment:939ca0ea-7a15-478b-8f9b-ab2285469226:5a004a21-b76d-4490-9450-d4ed6f4fc75a.png)

The lower part of the prototype, which contains the electronic components and the potentiometer, was fabricated using a laser cutter and 4 mm thick wooden panels. 

[IMG_9224.MOV](attachment:e8a15763-fb03-4030-b308-756487c159d5:IMG_9224.mov)

**Potentiometer holder**

![Final prototype.png](attachment:33eebfef-9667-41fa-9114-7c05f4dc2ae2:42d1970d-bcc1-40b5-b88a-058778a898b1.png)

![IMG_9246.jpg](attachment:dcfde708-0333-4213-82b1-e674e112d628:IMG_9246.jpg)

![IMG_9244.jpg](attachment:61658362-7db8-4228-91a5-0172741d0302:IMG_9244.jpg)

**Electronics soldering**

![IMG_7827 (1).jpg](attachment:d9077c7c-d1ea-4581-828e-b1b7ae44ad78:IMG_7827_(1).jpg)

![IMG_7836 (1).jpg](attachment:c2d173f4-e43d-44e3-990f-6dc99e720077:IMG_7836_(1).jpg)

![IMG_7980 (1).jpg](attachment:ae119c44-a5b7-4005-9727-448d03883421:IMG_7980_(1).jpg)

**How the structure is closed**

![Sections of the 3D prototype](attachment:524973ea-0f9e-4390-9b96-253a8444ba20:5499bdba-c7d0-475b-927c-e74f44610ae1.png)

Sections of the 3D prototype

![Final prototype v11.png](attachment:eea8f785-ea48-4019-939a-404b6095026b:42179203-0579-47ae-8717-49ef2b817501.png)

![IMG_9266.jpg](attachment:7e1516cd-43b6-46c4-97fa-f1a8cb8b5888:IMG_9266.jpg)

![Section of the real object](attachment:ede63444-d647-4ced-9544-3cce1286cb1f:8e48b796-5d0d-4b2b-baa0-ba8c3f8021dc.png)

Section of the real object

![Photo of all the components needed to assemble the object](attachment:70cda2da-4fde-4500-ba15-b94970996182:IMG_9221.jpg)

Photo of all the components needed to assemble the object

[timelapse2_export.mp4](attachment:8220237c-8c9a-4941-8e89-12683a829e5b:timelapse2_export.mp4)

## Fusion Process

[timeline_velocizzato.mp4](attachment:323b4159-0f2b-4e40-aa59-e37fbebfcedb:timeline_velocizzato.mp4)

## Animation

[Animazione FInale.mp4](attachment:8e456a79-415c-45eb-980d-2cf2b22954a3:Animazione_FInale.mp4)

## Render

![Render 2.png](attachment:b3bf67b4-e6e9-48f7-84b2-1b91f7b4e827:Render_2.png)

![Render 4.png](attachment:2decf864-1ade-45fe-8103-202cc06afc41:Render_4.png)

![Render 6.png](attachment:3429273f-2ad4-4ae5-83cf-bb596ae1ef87:Render_6.png)

![Render 9.png](attachment:516ece02-817d-4808-be7c-0c9f9b781070:Render_9.png)

## **Technical drawings**

[Disegni tecnici.pdf](attachment:a183de8c-39da-40a4-89b6-d060b14184fe:Disegni_tecnici.pdf)

## Resource