import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect } from "react";
import moonymateImage from "figma:asset/5d0ba5b935c9d789ec3c75806b2ac374ea5c2316.png";
import moonymate2Image from "figma:asset/0b000395c5bdf1b2a14749f05a7663296ab9869b.png";
import moonymate3Image from "figma:asset/fb9a72b7cd041ba7da585a46f740a21ae50bbce9.png";
import moonymate4Image from "figma:asset/db33ec75ab9968e0302f8604cd6a869dbb689fbf.png";
import moonymate5Image from "figma:asset/5700b0e767c4b15e6d7e8fb7e3c6f58f8360b637.png";
import moonymateJourneyImage from "figma:asset/c62f1586212b9df86270fd8eb0d12ea0f76fb180.png";
import bobJourneyImage from "figma:asset/faeeab3d85607fc3f75d47f290aba26d8aafc138.png";
import bobLogoImage from "figma:asset/8523781d3f04aa57104aebe12d0cee6cbd0b4df7.png";
import bob1Image from "figma:asset/4d3a31556127014768f257b269c7a60efd4c8c4c.png";
import bob2Image from "figma:asset/8d583916e749ed87012818b3adba70dab4e97eb2.png";
import bob3Image from "figma:asset/35b008118763e2fafb3dc34c95b39ef3fedf7a3c.png";
import bob4Image from "figma:asset/f56b7c42a0ed5efa8b56afd65acb5de5d4d983a3.png";
import green1Image from "figma:asset/d5ffd0e670acfec897f8e2908b4b899101244acb.png";
import green2Image from "figma:asset/cbed11af16b2fc3bd1fc9afff76edcb809d42602.png";
import green3Image from "figma:asset/746b331ae8c7d5b923dc08048d881bf719a46600.png";
import green4Image from "figma:asset/83e16d46fa9ad7b1f11928c5f6d38bd14623be27.png";
import philips1Image from "figma:asset/f11964c4d2d1acb9cf4c35772cda81492e135afc.png";
import philips2Image from "figma:asset/922ca4ee0d34ef1f43a81bd9f81f2c476c6807ab.png";
import philips3Image from "figma:asset/291d3c4255b98c773902f1133c7491522bfdcf3c.png";
import philips4Image from "figma:asset/166f3f48febca8b78f058f4a432d9b5cee352b4c.png";
import ubs1Image from "figma:asset/30c3e73a2d8bfc65ea89b1de105eb1f5ffb67b05.png";
import ubs2Image from "figma:asset/34078a39db8e1e5a723f625c25e3e2cb76ff6669.png";
import ubs3Image from "figma:asset/f0f88a4b99e9c0824269919ca7d77a425b134fb8.png";
import ubs4Image from "figma:asset/65f5528bf920a7aa425960293d558777fa586e4e.png";
import ubs5Image from "figma:asset/98033c068986b3b6ff0d07047366acb3a142b4a7.png";
import provid1Image from "figma:asset/820d9ca4e72060137f6dd3baa19213113bb37c6a.png";
import provid2Image from "figma:asset/2b1d91366a4da1b358a552cc44656879066d7c4c.png";
import provid3Image from "figma:asset/c5644e77e31cee35257418a888274d35761f09a8.png";
import provid4Image from "figma:asset/e0386355290489de91c9a95b0e85c8218b165fc3.png";
import provid5Image from "figma:asset/7bfda5b57b6a4c82b8b241db465c1de38823b0a7.png";
import philipsSketchImage from "../../imports/PXL_20251217_180132781.jpg";
import philipsComponentsImage from "../../imports/IMG_9221.jpg";
import philipsSketch1Image from "../../imports/PXL_20251217_180138148.jpg";
import philipsSketch2Image from "../../imports/PXL_20251217_180123271.jpg";
import philipsPrototypeVideo from "../../imports/PXL_20251218_081700782.mp4";
import philipsSketch3Image from "../../imports/PXL_20251217_180132781-1.jpg";
import philipsFusion1Image from "../../imports/IMG_9259.jpg";
import philipsFusion2Image from "../../imports/Final_prototype_base.png";
import philipsFusion3Image from "../../imports/Final_prototype_details.png";
import philipsFusion4Image from "../../imports/Final_prototype_bottone.png";
import philips3DVideo from "../../imports/IMG_9177.mp4";
import philipsFusion5Image from "../../imports/IMG_9259-1.jpg";
import philipsFinal1Image from "../../imports/Final_prototype_v.png";
import philipsFinal2Image from "../../imports/IMG_9244.jpg";
import philipsFinal3Image from "../../imports/IMG_7836__1_.jpg";
import philipsFinal4Image from "../../imports/IMG_7980__1_.jpg";
import moonymateSketchImage from "../../imports/WhatsApp_Image_2026-01-30_at_12.45.44.jpeg.png";
import moonymateLightsVideo from "../../imports/Lights.mp4";
import moonymateLasercutImage from "../../imports/Lasercut.jpeg";
import moonymateElectronicsImage from "../../imports/Electronics.jpeg";
import moonymateMotorVideo from "../../imports/Motoservo.mp4";
import moonymateLasercut2Image from "../../imports/Lasercut-1.jpeg";
import moonymateAppImage from "../../imports/iPhone_13_Pro.png";
import bobCharacterImage from "../../imports/WhatsApp_Image_2026-02-06_at_09.03.14__2_.jpeg";
import bobHolderImage from "../../imports/WhatsApp_Image_2026-02-06_at_09.02.58.jpeg";
import bobDemoVideo from "../../imports/Senza_nome.mp4";
import bobUIImage from "../../imports/iPhone_13_Pro-1.png";
import bobUI2Image from "../../imports/bob_ui_2.png";
import ubsIntroImage from "../../imports/ubs_intro.png";
import ubsResearchImage from "../../imports/ubs_research.png";
import ubsDesignImage from "../../imports/ubs_design.png";
import ubsUserflowImage from "../../imports/ubs_userflow.png";
import ubsPrototype1Image from "../../imports/ubs_prototype1.png";
import ubsPrototype2Image from "../../imports/ubs_prototype2.png";
import ubsPrototype3Image from "../../imports/ubs_prototype3.png";
import providPhoto1Image from "../../imports/provid_photo1.png";
import providPhoto2Image from "../../imports/provid_photo2.png";
import providGifImage from "../../imports/provid_gif.png";
import providPrototypeImage from "../../imports/provid_prototype.png";
import providElectronics1Image from "../../imports/provid_electronics1.png";
import providElectronics2Image from "../../imports/provid_electronics2.png";
import providInterface1Image from "../../imports/provid_interface1.png";
import providInterface2Image from "../../imports/provid_interface2.png";
import green2b1Image from "../../imports/2bgreen_1.png";
import green2b2Image from "../../imports/2bgreen_2.png";
import green2b3Image from "../../imports/2bgreen_3.png";
import green2b4Image from "../../imports/2bgreen_4.png";
import green2b5Image from "../../imports/Screenshot 2026-05-11 120142.png";
import green2b6Image from "../../imports/Screenshot 2026-05-11 120155.png";
import Mindy1Image from "../../imports/Mindy1.png";
import Mindy2Image from "../../imports/Mindy2.png";
import Mindy3Image from "../../imports/Mindy3.png";
import Mindy4Image from "../../imports/Mindy4.png";
import Mindy5Image from "../../imports/Mindy5.png";
import Mindy6Image from "../../imports/Mindy6.png";
import Mindy7Image from "../../imports/Mindy7.png";
import Mindy8Image from "../../imports/Mindy8.png";
import Mindy9Image from "../../imports/Mind Map (2).jpg";
import Mindy20Image from "../../imports/Mindy20.png";
import Mindy10Image from "../../imports/Mindy10.png";
import Data1Image from "../../imports/Data1.png";
import Data2Image from "../../imports/Data2.png";
import Data3Image from "../../imports/Data3.png";
import Data4Image from "../../imports/Data4.png";
import Image1 from "../../imports/image (1).png";
import Image2 from "../../imports/image (2).png";
import Image3 from "../../imports/image (3).png";
import Image4 from "../../imports/image (4).png";
import Image5 from "../../imports/image (5).png";
import Image6 from "../../imports/image(6).png";
import DatasetImage from "../../imports/dataset.png";
import RankImage from "../../imports/rank.png";

export default function ProjectDetail() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const navigate = useNavigate();

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Dati dei progetti (da condividere con Projects.tsx in futuro)
  const projects = [
    {
      id: 1,
      title: "MoonyMate",
      description: "Interactive 15×15 cm cube designed to help children aged 3 to 7 complete their bedtime routine through physical interaction, lights, sound, and movement.",
      image: moonymateImage,
      gallery: [
        moonymateImage,
        moonymate2Image,
        moonymate3Image,
        moonymate4Image,
        moonymate5Image,
      ],
      videoUrl: "https://drive.google.com/file/d/1eg8QPetarWgZ8ZZQ3N8wOphOx4QQ_uOY/preview",
      tags: ["Arduino", "Physical Computing", "3D Modeling", "Child Interaction", "Product Design"],
      role: "Interaction Designer & Product Designer",
      timeline: "January 2026",
      context: "Academic Project - SUPSI MAIND",
      challenge: "Bedtime can be a challenging moment for both children and parents. Repeating the same instructions every evening often leads to stress, distraction, and resistance. The challenge was to support children in building independence while turning the bedtime routine into a playful, reassuring, and structured experience.",
      solution: "MoonyMate is a tangible interactive object that combines physical manipulation, visual feedback, sound, and storytelling. Children rotate the cube through 4 bedtime tasks (preparing backpack, putting on pajamas, brushing teeth, turning off light). After completing each action, the child presses a button on the side, activating LEDs that confirm success. Once all tasks are done, a moon rises from the top of the cube through a servo mechanism, and a bedtime story plays through integrated speakers. The cube then functions as a comforting night light. A companion mobile app allows parents to turn the cube on and off, and schedule automatic activation times when they're not at home.",
      processText: [
        "The project started with the identification of a common challenge within bedtime routines for children aged 3–7, focusing on creating an experience that could support relaxation and autonomy through playful interaction.",
        "Initial concepts explored the relationship between form, interaction, and feedback, leading to the development of a cube-shaped object with rotational interactions, tactile buttons, and light-based responses. Early sketches and interaction studies helped define the overall user experience, with particular attention to simplicity, intuitiveness, and engagement for young users.",
        "The product was then modeled in Fusion 360, combining an internal wooden structure for the electronics with an external plexiglass shell. The interactive system integrated Arduino-based electronics, including LED strips and rings, buttons, a servo motor, speakers, and a DFPlayer module to create responsive audiovisual interactions.",
        "Alongside the physical object, a companion mobile application was developed to allow parents to manage activation and scheduling remotely. The fabrication process combined laser-cut wood, 3D-printed elements, and vinyl-cut graphics to create a visually playful and cohesive product.",
        "The project concluded with several assembly and testing iterations focused on improving durability, usability, and the overall interaction quality for children."
      ],
      process: [],
      technicalDetails: "Powered by Arduino. Components include: 16-LED strip around cube, 24-LED circular ring on top, 5 physical buttons, 90-degree mini servo motor for moon mechanism, speakers with DFPlayer module for audio. Internal structure made of laser-cut wood, external shell in plexiglass for light diffusion. 3D-printed moon element. Wi-Fi connection to mobile app for parental control.",
    },
    {
      id: 3,
      title: "bob",
      description: "Large language object that monitors user focus through embodied interaction and real-time surveillance using computer vision, animation, and physical prototyping.",
      image: bob4Image, 
      gallery: [
        bob2Image,
        bob3Image,
        bobLogoImage,
        bob1Image,
      ],
      videoUrl: "https://drive.google.com/file/d/1EkWXhtJFF9ZN7zsgCQSOXL4wj-m18Jv4/preview",
      tags: ["Machine Learning", "Animation", "UI Design", "3D Modeling", "MediaPipe", "Code"],
      role: "Interaction Designer, Developer",
      timeline: "February 2026",
      context: "Academic Project - SUPSI MAIND",
      challenge: "How can we materialize attention and make distraction visible and uncomfortable? Most existing focus tools rely on passive feedback. The goal was to create an active and embodied presence, capable of 'watching' the user and reacting in real time, using surveillance, discomfort, and interruption as tools to bring attention back.",
      solution: "bob is conceived as a 'large language object', not just a chatbot, but a character with a body, personality, and physical position in space. He behaves like a grumpy sheriff who controls behavior and punishes distraction. When the user stays focused, bob walks calmly inside his house (smartphone screen attached to PC). When distracted (looking away, standing up, using phone), bob literally falls from the phone screen into the main PC screen with siren sounds and verbal warnings. The system uses webcam-based pose estimation and object detection to monitor behavior in real-time.",
      processText: [
        "The project began as an exploration of attention, surveillance, and embodied interaction, investigating how focus could be materialized through an active and sometimes intrusive digital presence. This led to the creation of bob, a character designed with an intentionally authoritarian personality inspired by the figure of a bad-tempered sheriff, constantly observing and reacting to the user's behavior.",
        "To support this narrative, a custom smartphone holder was modeled in Fusion 360, designed as a small house-like structure for bob. The character's behavior was brought to life through animated walking loops and falling sequences, expressing both continuous monitoring and intervention when distractions were detected.",
        "The interactive system combined computer vision and object detection technologies to track user attention in real time. Using MediaPipe pose estimation, the system monitored the position of the nose and shoulders, while additional phone detection was implemented to identify distraction signals beyond body movement.",
        "A minimal interface was designed to communicate the system state through a focus timer and surveillance indicators, including an eye icon representing bob's active monitoring. The final system integrated animations and interactions across both smartphone and desktop environments, synchronized through JavaScript logic to create a cohesive and immersive experience."
      ],
      process: [],
      technicalDetails: "Real-time computer vision using MediaPipe for pose estimation. Webcam tracks key body points (nose, shoulders) to infer attention level. Object detection identifies phone usage. JavaScript-based logic evaluates behavior and triggers character responses. Custom 3D-printed smartphone holder designed in Fusion 360. Multi-screen setup: smartphone displays looping animation, PC shows timer and interruption interface. Siren sounds and text-to-speech warnings for distraction events.",
    },
    {
      id: 4,
      title: "Philips EL3302",
      description: "Redesign of a vintage 1960s cassette recorder as a modern cassette player using physical prototyping, 3D printing, laser cutting, and Arduino electronics.",
      image: philips1Image,
      gallery: [
        philips1Image,
        philips4Image,
        philips3Image,
        philips2Image,
      ],
      videoUrl: "https://drive.google.com/file/d/1JCJxjag3g6uCIF6ap9Cn0f97Kwgjr1WR/preview",
      tags: ["3D Modeling", "Fabrication", "Laser Cutting", "Arduino", "Product Design"],
      role: "Physical Interaction Designer & Fabricator",
      timeline: "December 2025",
      context: "Academic Project - SUPSI MAIND",
      challenge: "The Philips EL3302 is a portable cassette recorder launched in the mid-1960s, known for being one of the first devices to promote the compact cassette standard. The challenge was to recontextualize this historical audio object through physical prototyping and design interpretation, highlighting the physical interaction and design language of the original device while creating a modern, functional cassette player.",
      solution: "The redesigned Philips EL3302 functions exclusively as a cassette player, emphasizing the playback experience and user-device interactions. The internal electronics are managed by a DFPlayer module interfacing with speakers, playback control buttons, ON/OFF switch, and battery. Volume control uses a Raspberry Pi Pico 2 connected to an analog potentiometer. The prototype combines 3D printing for the upper section with laser-cut 4mm wooden panels for the lower part containing electronics. A custom front multifunction button was designed to map play/pause, next track, and previous track onto a single intuitive control through gesture-based interactions (push up for play/pause, pull right for next, pull left for previous).",
      processText: [
        "The project began with the analysis of the Philips EL3302, selected as a case study for its historical role in the diffusion of the compact cassette format. From this research, the concept evolved around the playback experience and the physical interaction with the device, leading to the decision to design a player-focused object centered on tactile engagement.",
        "Early ideas were explored through paper sketches and cardboard prototypes to study button interactions, internal component placement, and the overall ergonomics of the device. These iterations helped define the multifunction button system and evaluate different fabrication approaches.",
        "The final design was developed in Fusion 360, integrating components such as the DFPlayer module, Raspberry Pi Pico 2, potentiometer, speakers, and power system into a compact and functional structure. Particular attention was given to the design of the multifunction button, developed to support multiple gestures while maintaining clarity and usability.",
        "The fabrication process combined 3D printing and laser-cut wood to create both the external shell and internal structure. The project concluded with the assembly and testing of the electronic components, focusing on interaction quality, tactile feedback, and audio performance."
      ],
      process: [],
      technicalDetails: "Electronics: DFPlayer module for audio playback, Raspberry Pi Pico 2 for volume control via analog potentiometer, integrated speakers, ON/OFF switch, battery power. Fabrication: Upper section 3D-printed, lower section laser-cut from 4mm wood panels. Custom-designed multifunction front button with three-directional gesture control (vertical push, horizontal left/right pull). Structure maintains compact form factor inspired by original 1960s design while housing modern electronics.",
    },
    {
      id: 5,
      title: "UBS Cross-Border Banking",
      description: "Mobile banking interface redesign for Italian-Swiss cross-border workers. Simplifies everyday banking with multi-currency management, transparent exchange rates, smart automation, and financial education.",
      image: ubs5Image,
      gallery: [
        ubs5Image,
        ubs2Image,
        ubs3Image,
        ubs4Image,
        ubs1Image,
      ],
      videoUrl: "https://drive.google.com/file/d/1SZEp_vU7KO23-9EElYFY8lJgM_rGbyv1/preview",
      tags: ["UI/UX Design", "Mobile App", "User Research", "Prototyping", "Figma", "User Testing"],
      role: "UX/UI Designer & Researcher",
      timeline: "October 2025",
      context: "Academic Project, SUPSI MAIND",
      challenge: "Cross-border workers between Italy and Switzerland face significant banking complexity: managing two bank accounts, converting between CHF and EUR, understanding fees and exchange rates are part of their daily routine. The current UBS app covers core banking needs but doesn't fully address cross-border challenges. Users experience fragmented monitoring, limited visibility on cross-border tools, complex multi-currency overviews, and unclear total costs. Even simple actions become time-consuming and stressful, reducing confidence and trust in the banking experience. The challenge was to build trust through a simplified, intuitive UBS app experience that reduces friction in everyday banking while maintaining UBS brand consistency.",
      solution: "The solution introduces a dedicated experience within the UBS app designed specifically for cross-border workers. The redesigned interface supports users in understanding, monitoring, and optimizing currency exchanges between CHF and EUR through three main pillars: Transparency (clearly visualizing exchange rates and related fees), Decision Support (integrated account showing both currencies, alerts, historical data, and automated exchange options), and Empowerment (learning and reward system building financial awareness over time). Key features include instant salary and exchange rate monitoring, unified multi-currency dashboard, smart notifications when optimal exchange conditions are met, automated exchange options, cost visibility with clear fee breakdowns, and gamified financial education ('Learn & Earn'). By centralizing these features inside the UBS ecosystem, the solution prevents users from relying on external fintech apps and strengthens trust in the bank as a long-term financial partner.",
      processText: [
        "The project focused on improving financial management for cross-border workers navigating banking systems across two countries. The process began with extensive user research, including desk research, surveys, and in-person interviews, to better understand users' daily financial challenges, behaviors, and expectations.",
        "Insights gathered during the research phase were translated into experience maps that highlighted key touchpoints such as salary management, currency exchange, bill payments, and expense monitoring. This analysis revealed several friction points related to clarity, control, and decision-making when managing multiple currencies and accounts.",
        "A benchmark analysis of traditional and digital banking applications, including multi-currency platforms such as Yuh, helped identify opportunities for a more transparent and user-centered experience. Based on these findings, the project defined its core objective: simplifying financial management while increasing users' confidence and sense of control.",
        "The interface and design system were developed following UBS branding guidelines, focusing on a clean visual language, clear information hierarchy, and a professional yet accessible tone. User flows were designed to support flexible interactions, including exchange rate monitoring, balance tracking, personalized savings targets, and both manual and automated currency conversion options.",
        "The solution was prototyped in Figma through an interactive high-fidelity prototype that simulated core features such as exchange alerts, automatic conversions, educational \"Learn & Earn\" sections, and investment entry points. The prototype was then tested with real cross-border workers through task-based usability sessions focused on clarity, error prevention, and perceived control.",
        "The project evolved through iterative validation cycles, refining features based on user feedback and prioritizing functions that demonstrated the strongest value in terms of transparency, automation, and usability."
      ],
      process: [],
      technicalDetails: "Digital artifact designed as mobile app evolution within existing UBS ecosystem. Interaction through touch interfaces with smart notifications and natural-language guidance. Supports CHF/EUR currencies, integrates with Swiss and Italian banking systems. Design follows UBS brand guidelines with clean minimal interface, clear typography hierarchy, neutral trustworthy color palette. Features include real-time exchange rate monitoring, multi-currency unified dashboard, configurable alerts (minimum/maximum exchange targets), automated conversion triggers, historical trend visualization, gamified learning modules with progress tracking, investment plan integration. Prototype developed in Figma with complete user flow documentation and interaction specifications. Solution scalable to other cross-border contexts (Switzerland-France, Switzerland-Germany).",
    },
    {
      id: 6,
      title: "PROVID 3000",
      description: "Design installation exploring Google Street View glitches as contemporary ghosts through urban exploration in Lugano. Interactive handheld device combining Arduino sensors, GPS, real-time environmental data, and exhibition design.",
      image: provid1Image,
      gallery: [
        provid1Image,
        provid5Image,
        provid3Image,
        provid2Image,
        provid4Image,
      ],
      videoUrl: "https://drive.google.com/file/d/1efBJ8xZT9A0sy6GBUDx4lsOE8riAKJhO/preview",
      tags: ["Physical Computing", "Arduino", "Urban Exploration", "Web Interface", "Exhibition Design", "Museum Installation"],
      role: "Interaction Designer, Developer, Exhibition Designer",
      timeline: "February 2026",
      context: "Academic Project, SUPSI MAIND, Designing Spatial Experiences",
      challenge: "Maps promise clarity and seamless representation, yet digital errors emerge: duplicated limbs, warped bodies, architectural tears. These glitches on Google Street View reveal the limits of algorithmic vision. The challenge was to treat these anomalies not as failures, but as contemporary ghosts, traces of what the system could not fully understand. How can we materialize these digital errors and transform them into both a physical exploration experience and a museum exhibition?",
      solution: "PROVID 3000 is a design installation consisting of two interconnected parts: the interactive device and the exhibition space. The device is a speculative handheld object that acts as a 'ghost detector' for Street View glitches. Built from hacked metal handles (stainless steel and iron) with leather grips and fluorescent yellow accents, it combines smartphone sensors with Arduino modules. Users explore locations around Lugano where Street View anomalies appear, guided by a custom web interface. The device translates environmental variations, like temperature, humidity, sound, electromagnetic fields and wind, into light, vibration, and sound feedback. When within 30 meters of a glitch location, the device triggers a 7-second vibration and LED sequence, confirming a 'ghost capture'. The exhibition component displays large-format Street View posters showing documented glitches, the physical device as an artifact, demonstration videos of urban exploration sessions, and documentation of the detection process. This dual approach creates a hybrid experience between human senses and machine vision, shifting attention from digital representation to embodied perception.",
      processText: [
        "The project began with research into Google Street View glitches and related artistic references, exploring how digital mapping errors could be transformed into a speculative urban exploration experience. This research led to the creation of a database of ten glitch locations around Lugano, each documented through GPS coordinates and Street View references.",
        "The concept evolved into the design of a fictional \"ghost-hunting\" device capable of detecting and navigating these digital anomalies in physical space. Early ideas were explored through cardboard prototypes before developing the final artifact, combining metal handles, leather grips, and vinyl-cut graphics to create an object that felt both functional and narrative-driven.",
        "The interactive system integrated Arduino-based electronics with multiple environmental sensors, including temperature and humidity sensors, a sound detector, electromagnetic field sensor, anemometer, vibration motors, and LEDs. Custom code enabled real-time communication between the device and a smartphone through Ably WebSocket technology, supporting GPS proximity detection and live sensor data streaming.",
        "To visualize the experience, a web-based interface was designed as a three-panel HUD featuring ghost previews, directional radar, and environmental data displays. Physical controls, including a rotary encoder and buttons, allowed users to navigate the interface directly through the device itself.",
        "The project was tested through urban exploration sessions across Lugano, documenting both the interaction experience and the detection of glitch locations. The final outcome expanded into an exhibition installation for the SACEBA Gallery, featuring large-format Street View posters, demonstration videos, and the device presented as the central interactive artifact connecting the digital discoveries to the physical exhibition space."
      ],
      process: [],
      technicalDetails: "Hardware: Arduino ESP32 with Wi-Fi, temperature/humidity sensor, sound level detector, electromagnetic field sensor, anemometer, vibration motors, LEDs, rotary encoder, 2 push buttons, ON/OFF switch. Materials: Stainless steel and iron handles, leather grips, fluorescent yellow paint, vinyl-cut graphics. Software: Arduino firmware with Ably MQTT communication, web client (HTML/CSS/JavaScript) hosted on Vercel, real-time WebSocket pub/sub messaging. Web interface uses Google Maps API for navigation, Street View Static API for location thumbnails, and navigator.geolocation for proximity detection (30m threshold). System architecture follows peer-to-peer pattern with capability-based channels for vibration commands, encoder events, button presses, power state, and sensor data. Exhibition: Large-format prints, museum-quality artifact display, video documentation on screens.",
    },
    {
      id: 7,
      title: "2BGreen",
      description: "Mobile application helping citizens manage waste collection and recycling. Developed through user research, stakeholder analysis, and iterative design process.",
      image: green1Image,
      gallery: [
        green1Image,
        green2Image,
        green3Image,
        green4Image,
      ],
      videoUrl: "https://drive.google.com/file/d/17_ldi6nMcOTzcwf9TLVZ8XeSonVDgdwt/preview",
      tags: ["UI/UX Design", "Mobile App", "User Research", "Figma", "Prototyping", "Sustainability"],
      role: "UI/UX Designer & Prototyper",
      timeline: "2024",
      context: "Academic Project - University of Trento, Graphic Interface Design Course",
      challenge: "Waste collection and recycling management is often confusing for citizens. Different municipalities have different rules, collection schedules vary, and people struggle to remember when and how to dispose of specific materials. This leads to incorrect waste sorting, missed collection days, and reduced recycling rates. The challenge was to design a solution that simplifies waste management, educates users about proper disposal, and encourages sustainable behavior through an intuitive mobile experience.",
      solution: "2BGreen is a mobile application that helps citizens manage their household waste collection efficiently. The app provides personalized collection calendars based on user location, sends timely notifications before collection days, offers a visual guide for correct waste sorting with searchable materials database, and gamifies sustainable behavior through achievement badges and environmental impact tracking. Users can scan barcodes to identify correct disposal methods, report collection issues directly to local services, and receive official communications from the municipality. The interface uses color-coded categories matching standard waste bin colors, making the system immediately recognizable and easy to use.",
      processText: [
        "The project began with an analysis of waste management systems and municipal services, exploring how different Italian cities address waste collection, recycling, and citizen engagement. This initial research helped identify existing solutions, service gaps, and opportunities for improving the overall user experience.",
        "A broader business analysis was then conducted to understand the ecosystem of stakeholders involved, including municipalities, waste collection companies, citizens, and environmental organizations. This phase highlighted the complexity of communication and coordination between public services and everyday users.",
        "To better understand users' behaviors and challenges, interviews and surveys were carried out with citizens focusing on waste disposal habits, common frustrations, and informational needs. Insights gathered during the research phase informed the creation of personas representing different demographic groups and usage scenarios.",
        "Based on these findings, the project evolved into the design of a user-centered digital solution aimed at simplifying waste management interactions and improving accessibility to information and services. The final outcome was developed as a high-fidelity interactive prototype in Figma, featuring detailed screens, flows, and interactions designed to support clarity, usability, and engagement."
      ],
      process: [],
      technicalDetails: "High-fidelity interactive prototype developed in Figma. Features include personalized collection calendar with notification system, visual waste sorting guide with search functionality, barcode scanning for material identification, location-based municipal rules integration, gamification elements with badges and environmental impact metrics, issue reporting system, educational content library. Interface follows material design principles with color-coded waste categories (organic, paper, plastic, glass, unsorted). Responsive layouts optimized for mobile devices. Complete user flows documented for onboarding, daily use, material lookup, and issue reporting scenarios.",
    },
    {
      id: 2,
      title: "Mindy",
      description: "Mindy is a mobile application designed to support people living with panic attacks and anxiety disorders. It unifies crisis tools, expert resources, and community support in one accessible experience.",
      image: Mindy1Image,
      gallery: [
        Mindy2Image,
        Mindy3Image,
        Mindy4Image,
        Mindy5Image,
        Mindy6Image,
        Mindy7Image,
        Mindy8Image,
      ],
      videoUrl: "https://drive.google.com/file/d/1_ZT-gP-aJxJha8fM_SUORmR7_9Caye45/preview",
      tags: ["Mental Health", "Mobile App", "UX/UI Design", "User Research", "Prototyping", "Figma"],
      role: "UX/UI Designer",
      timeline: "May 2025",
      context: "Academic Project - University of Trento, Interaction Human-Machine Course",
      challenge: "People who experience panic attacks and anxiety often rely on a fragmented set of tools, separate apps for breathing exercises, videos for meditation, social media for advice, and professional therapy for structured support. No single solution addresses the full spectrum of needs: acting in the moment of a crisis, tracking patterns over time, and building long-term coping strategies. The challenge was to design a unified tool that could serve users both during acute episodes and in their daily mental wellness routine, while remaining approachable, non-clinical, and genuinely useful, without replacing professional care, but complementing it.",
      solution: "Mindy is a mobile app that centralizes panic attack and anxiety management into one calm, personalized space. During a crisis, users can immediately access guided breathing exercises, soundscapes, and meditation sessions tailored to intensity and duration. A personal diary allows users to log episodes and track triggers, symptoms, and progress over time. Beyond acute support, Mindy offers a curated library of informational articles on mental health, a community space for peer support and shared experiences, and an integrated map to locate nearby psychologists and mental health professionals. Gamification elements encourage consistent use, helping users build sustainable habits rather than turning to the app only in emergencies. The interface is designed to be warm, non-intimidating, and immediately actionable, because in a moment of panic, clarity matters.",
      processText: [
        "The project began with a domain analysis of panic attacks and anxiety disorders, building a detailed taxonomy that mapped diagnoses, symptom types (physical, cognitive, emotional), triggers, treatment approaches, and complementary techniques. This structured the knowledge base underlying the app's content and features.",
        "A stakeholder analysis identified the key actors in the ecosystem, end users, psychologists, employers, and public institutions, shaping the product's scope and business model. The target audience was defined as people aged 18–60 who experience panic attacks or anxiety and seek both immediate support and daily management tools.",
        "User research was conducted through interviews with 9 volunteer participants using elicitation methods including laddering, scenario analysis, free listing, and netnography. Common themes emerged around coping techniques, the role of sleep, attitudes toward professional support, and existing technology habits. Two personas were developed from these insights: Ambra, a student skeptical of standardized psychological tools who uses breathing and sound to self-regulate; and Domenico, a working professional managing anxiety after a personal loss, who values both professional guidance and meditation apps.",
        "A conceptual map was then developed to organize the app's information architecture, connecting features like the panic management activities, personal diary, expert map, community, and informational content into a coherent system. The final outcome was a high-fidelity interactive prototype built in Figma, covering the home screen, user profile, personal diary, articles section, community, expert map, and crisis management activities including breathing, sounds, and meditation.",
      ],
      process: [],
      technicalDetails: "High-fidelity Figma prototype for a mental health mobile app. Includes crisis support tools, diary logging, expert resource mapping, community features, and habit-building gamification designed for accessible, non-clinical interaction.",
    },
    {
      id: 8,
      title: "Arboreal Metrics Paradox",
      description: "Interactive 2D and 3D data visualization exploring the balance between environmental efficiency, biodiversity, and public perception in urban green spaces through the trees of Parco Ciani in Lugano. Users can compare species data and create their own vision of an ideal urban park.",
      image: Data3Image,
      gallery: [
        Data4Image,
        Data2Image,
        Data1Image,
      ],
      videoUrl: "https://drive.google.com/file/d/1vTJimLI2dBzPkHZZaEk8i5aw4Xoq_TMx/preview", 
      tags: ["Data Visualization", "Coding", "3D Visualization", "Environmental Storytelling", "Participatory Design", "Information Design", "Scraping"],
      role: "Interaction Designer & Data Visualization",
      timeline: "2026",
      context: "Academic Project, SUPSI MAIND, Making use of Data Course",
      challenge: "Urban green spaces are often designed through conflicting priorities. Some perspectives prioritize high-performing tree species for their measurable environmental benefits, while others advocate for preserving local biodiversity and native ecosystems. At the same time, public perception and aesthetic preferences strongly influence how people experience and value urban nature. The challenge was to translate this complex and multidimensional debate into an accessible and engaging interactive experience. The project needed to make scientific and environmental data understandable for a broader audience while encouraging citizens to reflect on the social, ecological, and emotional implications behind urban planning decisions.",
      solution: "The solution is an interactive platform combining 2D and immersive 3D visualizations to explore urban tree species through multiple perspectives. The system visualizes environmental efficiency through CO₂ absorption and cooling capacity, biodiversity through native and non-native classifications, and popularity through images collected from public platforms such as Google Maps and TripAdvisor. Users can navigate the data spatially, compare species, and switch to a participatory mode where they create their own version of Parco Ciani by selecting trees according to different priorities such as efficiency, biodiversity, or popularity. This transforms the visualization from a static representation of data into a participatory and debate-driven experience, where users actively contribute their perspective on the future of urban green spaces.",
      processText: [
        "The project began with a research phase focused on the relationship between urban ecology, biodiversity, and public perception within green spaces. Environmental debates surrounding native versus high-performance non-native species were analyzed alongside existing studies on urban cooling, CO₂ absorption, and ecological resilience.",
        "To support the visualization, a custom dataset was created by combining multiple sources of information. Environmental and botanical data were collected from institutional platforms such as Infoflora and Lugano VerdeVale, while popularity indicators were derived from user-generated images and reviews gathered from Google Maps and TripAdvisor. Additional spatial analysis was conducted by calculating the geographic distance between Switzerland and the native origin of each species, introducing a measurable dimension related to biodiversity and “localness”.",
        "The collected data was cleaned, merged, and structured into a unified dataset containing environmental metrics, biodiversity attributes, popularity indicators, and spatial information. Visual clustering techniques were used to organize and connect image-based content with corresponding tree species and environmental values.",
        "The visualization system was designed across two interconnected layers. The first layer is a 2D Cartesian visualization where species are positioned according to environmental efficiency and geographic origin, while image clusters and heatmaps communicate popularity and ecological performance. The second layer expands the experience into an immersive 3D environment where users can spatially explore tree species through scale variations, environmental sound feedback, and narrative descriptions.",
        "A participatory interaction layer was also introduced, allowing users to create and save their own personalized versions of Parco Ciani by selecting tree species according to different values and priorities. Through this mechanism, the project transforms environmental data into an interactive debate where multiple perspectives coexist and become visible through user interaction.",
      ],
      process: [],
      technicalDetails: "Interactive platform combining 2D and 3D visualizations to explore urban tree species through environmental efficiency, biodiversity, popularity, and participatory design. Includes spatial data comparisons, narrative storytelling, and user-generated park configurations.",
    },
  ];

  const project = projects.find((p) => p.id === Number(id));

  const handleBackToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: 'projects' } });
  };

  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-gray-900">Project Not Found</h1>
          <Link to="/projects" className="text-blue-600 hover:text-blue-700">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Back Button */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {/* Cover Image */}
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-5xl mb-6 text-gray-900">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{project.description}</p>

              {/* Challenge */}
              <div className="mb-8">
                <h2 className="text-2xl mb-4 text-gray-900">Challenge</h2>
                <p className="text-gray-600 text-lg">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h2 className="text-2xl mb-4 text-gray-900">Solution</h2>
                <p className="text-gray-600 text-lg">{project.solution}</p>

                {/* MoonyMate Journey Image - Only show for MoonyMate project */}
                {project.id === 1 && (
                  <div className="mt-6">
                    <img
                      src={moonymateJourneyImage}
                      alt="MoonyMate Bedtime Routine Journey"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                )}

                {/* bob Journey Image - Only show for bob project */}
                {project.id === 3 && (
                  <div className="mt-6">
                    <img
                      src={bobJourneyImage}
                      alt="bob Focus Monitoring Journey"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                )}

                {/* Philips Components Image - Only show for Philips project */}
                {project.id === 4 && (
                  <div className="mt-6">
                    <img
                      src={philipsComponentsImage}
                      alt="Philips EL3302 Components and Fabrication"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                )}
              </div>

              {/* Gallery Grid - Show other images if gallery exists */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl mb-4 text-gray-900">Gallery</h2>

                  {/* Horizontal scrolling gallery for all projects */}
                  <div className="relative">
                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
                      {project.gallery.map((img, index) => (
                        <div
                          key={index}
                          className="relative flex-shrink-0 w-auto h-96 rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow snap-start"
                          onClick={() => {
                            setLightboxImage(img);
                            setLightboxOpen(true);
                          }}
                        >
                          <ImageWithFallback
                            src={img}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="h-full w-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Process */}
              <div className="mb-8">
                <h2 className="text-2xl mb-4 text-gray-900">Process</h2>
                {(project as any).processText ? (
                  <div className="space-y-6">
                    {(project as any).processText.map((paragraph: string, index: number) => (
                      <div key={index}>
                        <p className="text-gray-600 text-lg leading-relaxed">{paragraph}</p>
                        {project.id === 2 && index === 3 && (
                          <div className="mt-6">
                            <img
                              src={Mindy9Image}
                              alt="Mindy Mind Map"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 2 && index === 0 && (
                          <div className="mt-6 flex justify-center">
                            <img
                              src={Mindy20Image}
                              alt="Mindy Mind Map"
                              className="max-w-md rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 2 && index === 2 && (
                          <div className="mt-6">
                            <img
                              src={Mindy10Image}
                              alt="Mindy Mind Map"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 3 && index === 0 && (
                          <div className="mt-6">
                            <img
                              src={bobCharacterImage}
                              alt="bob Character Design"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 8 && index === 0 && (
                          <div className="mt-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <img src={Image1} alt="Arboreal Image 1" className="w-full rounded-2xl shadow-lg" />
                              <img src={Image2} alt="Arboreal Image 2" className="w-full rounded-2xl shadow-lg" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <img src={Image3} alt="Arboreal Image 3" className="w-full rounded-2xl shadow-lg" />
                              <img src={Image6} alt="Arboreal Image 6" className="w-full rounded-2xl shadow-lg" />
                            </div>
                          </div>
                        )}
                        {project.id === 3 && index === 1 && (
                          <div className="mt-6">
                            <img
                              src={bobHolderImage}
                              alt="bob Smartphone Holder"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 8 && index === 1 && (
                          <div className="mt-6">
                            <img
                              src={DatasetImage}
                              alt="Arboreal Dataset"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 8 && index === 2 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <img src={Image4} alt="Arboreal Image 4" className="w-full rounded-2xl shadow-lg" />
                            <img src={Image5} alt="Arboreal Image 5" className="w-full rounded-2xl shadow-lg" />
                          </div>
                        )}
                        {project.id === 8 && index === 4 && (
                          <div className="mt-6">
                            <img
                              src={RankImage}
                              alt="Arboreal Rank Visualization"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 3 && index === 2 && (
                          <div className="mt-6">
                            <video
                              src={bobDemoVideo}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 3 && index === 3 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <img
                              src={bobUIImage}
                              alt="bob User Interface"
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={bobUI2Image}
                              alt="bob Interface Design"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 5 && index === 0 && (
                          <div className="mt-6">
                            <img
                              src={ubsIntroImage}
                              alt="UBS Cross-Border Context"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 5 && index === 1 && (
                          <div className="mt-6">
                            <img
                              src={ubsResearchImage}
                              alt="UBS User Research"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 5 && index === 2 && (
                          <div className="mt-6">
                            <img
                              src={ubsDesignImage}
                              alt="UBS Design System"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 5 && index === 3 && (
                          <div className="mt-6">
                            <img
                              src={ubsUserflowImage}
                              alt="UBS User Flow"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 5 && index === 4 && (
                          <div className="mt-6 space-y-4">
                            <div className="rounded-2xl shadow-lg overflow-hidden">
                              <img
                                src={ubsPrototype1Image}
                                alt="UBS Prototype Screen 1"
                                className="w-full object-cover object-bottom"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="rounded-2xl shadow-lg overflow-hidden">
                                <img
                                  src={ubsPrototype2Image}
                                  alt="UBS Prototype Screen 2"
                                  className="w-full object-cover object-bottom"
                                />
                              </div>
                              <div className="rounded-2xl shadow-lg overflow-hidden">
                                <img
                                  src={ubsPrototype3Image}
                                  alt="UBS Prototype Screen 3"
                                  className="w-full object-cover object-bottom"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                        {project.id === 6 && index === 0 && (
                          <div className="mt-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <img
                                src={providPhoto1Image}
                                alt="PROVID 3000 Research 1"
                                className="w-full rounded-2xl shadow-lg"
                              />
                              <img
                                src={providGifImage}
                                alt="PROVID 3000 Database"
                                className="w-full rounded-2xl shadow-lg"
                              />
                            </div>
                            <img
                              src={providPhoto2Image}
                              alt="PROVID 3000 Research 2"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 6 && index === 1 && (
                          <div className="mt-6">
                            <img
                              src={providPrototypeImage}
                              alt="PROVID 3000 Prototype"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 6 && index === 2 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <img
                              src={providElectronics1Image}
                              alt="PROVID 3000 Electronics 1"
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={providElectronics2Image}
                              alt="PROVID 3000 Electronics 2"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 6 && index === 3 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <img
                              src={providInterface1Image}
                              alt="PROVID 3000 Interface 1"
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={providInterface2Image}
                              alt="PROVID 3000 Interface 2"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 7 && index === 0 && (
                          <div className="mt-6">
                            <img
                              src={green2b2Image}
                              alt="2BGreen Analysis 2"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 7 && index === 1 && (
                          <div className="mt-6">
                            <img
                              src={green2b1Image}
                              alt="2BGreen Analysis 1"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 7 && index === 2 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <img
                              src={green2b3Image}
                              alt="2BGreen Personas 1"
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={green2b4Image}
                              alt="2BGreen Personas 2"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 7 && index === 3 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <img
                              src={green2b5Image}
                              alt="img"
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={green2b6Image}
                              alt="2BGreen Personas 2"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 1 && index === 1 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <video
                              src={moonymateLightsVideo}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={moonymateSketchImage}
                              alt="MoonyMate Sketch"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 1 && index === 2 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <video
                              src={moonymateMotorVideo}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={moonymateElectronicsImage}
                              alt="MoonyMate Electronics"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 1 && index === 3 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <img
                              src={moonymateLasercut2Image}
                              alt="MoonyMate Lasercut Assembly"
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={moonymateAppImage}
                              alt="MoonyMate Mobile App"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 4 && index === 0 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <img
                              src={philipsSketch1Image}
                              alt="Philips EL3302 Technical Drawing 1"
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={philipsSketch2Image}
                              alt="Philips EL3302 Technical Drawing 2"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 4 && index === 1 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <video
                              src={philipsPrototypeVideo}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={philipsSketch3Image}
                              alt="Philips EL3302 Conceptual Sketches"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 4 && index === 2 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <img
                              src={philipsFusion4Image}
                              alt="Philips EL3302 Final Prototype Button"
                              className="w-full h-96 object-contain rounded-2xl shadow-lg"
                            />
                            <img
                              src={philipsFusion3Image}
                              alt="Philips EL3302 Final Prototype Details"
                              className="w-full h-96 object-contain rounded-2xl shadow-lg"
                            />
                            <video
                              src={philips3DVideo}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={philipsFusion5Image}
                              alt="Philips EL3302 Fusion 360 Model"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                        {project.id === 4 && index === 3 && (
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <img
                              src={philipsFinal1Image}
                              alt="Philips EL3302 Final Prototype Vertical"
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={philipsFinal2Image}
                              alt="Philips EL3302 Fabrication Process"
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={philipsFinal3Image}
                              alt="Philips EL3302 Final Assembly 1"
                              className="w-full rounded-2xl shadow-lg"
                            />
                            <img
                              src={philipsFinal4Image}
                              alt="Philips EL3302 Final Assembly 2"
                              className="w-full rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {project.process.map((step, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-blue-600 flex-shrink-0">→</span>
                        <span className="text-gray-600 text-lg">{step}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Video Section */}
              {project.videoUrl && (
                <div className="mb-8">
                  <h2 className="text-2xl mb-4 text-gray-900">Project Video</h2>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
                      src={project.videoUrl}
                      title={`${project.title} Video`}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                <h3 className="text-xl mb-6 text-gray-900">Project Details</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Role</p>
                    <p className="text-gray-900">{project.role}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">Timeline</p>
                    <p className="text-gray-900">{project.timeline}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">Context</p>
                    <p className="text-gray-900">{project.context}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-2">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6 text-gray-900">Explore More Projects</h2>
          <button
            onClick={handleBackToProjects}
            className="inline-block px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-full cursor-pointer"
          >
            View All Projects
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={lightboxImage}
              alt="Full size image"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}