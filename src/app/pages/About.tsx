import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import profileImage from "figma:asset/7bf7a82dfd8ead0d6f4a05f8f71fb26212f3a79a.png";

export default function About() {
  const skills = [
    "Figma",
    "User Research",
    "Usability Testing",
    "Prototyping",
    "Arduino",
    "3D Fabrication",
    "Laser Cutter",
    "HTML/CSS",
    "Python",
    "JavaScript",
    "Data Visualization",
    "Vinyl Cutter",
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(-1);

  useEffect(() => {
    // Avvia subito la prima skill
    setCurrentSkillIndex(0);
    
    const timer = setInterval(() => {
      setCurrentSkillIndex((prev) => {
        if (prev < skills.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 5000); // 5 secondi tra ogni skill per testare

    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute top-0 right-0">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
              <img
                src={profileImage}
                alt="Marianna Lonardi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-2xl relative overflow-visible" style={{ minHeight: "200px" }}>
            <motion.h1
              className="text-6xl text-gray-900 absolute whitespace-nowrap"
              initial={{ x: -400, y: 0 }}
              animate={{
                x: [
                  -400,  // parte da fuori schermo a sinistra
                  -200,  // entra
                  0,     // centro
                  200,   // destra
                  400,   // continua a destra
                  600,   // si muove verso destra
                  800,   // continua
                  1000   // esce fuori schermo a destra
                ],
                y: [
                  50,    // inizia
                  30,    // sale un po'
                  60,    // scende (serpentina)
                  20,    // sale
                  70,    // scende
                  40,    // sale
                  80,    // scende
                  50     // si stabilizza
                ],
                opacity: [0, 1, 1, 1, 1, 1, 1, 0]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1]
              }}
            >
              Hi, I'm Marianna!
            </motion.h1>
            <div className="pt-32">
              <p className="text-lg text-gray-600 mb-6">
                I am an Interaction Designer currently pursuing a Master's in Interaction Design at SUPSI, with a background in Interfaces and Communication Technologies. My work explores the intersection of digital and physical design, combining user-centered research, UX/UI design, and hands-on prototyping to create meaningful interactive experiences.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I approach design as a holistic process, from understanding users through research and usability testing to developing concepts that take shape as both interfaces and tangible prototypes. I work across digital and physical media, using tools such as Figma, 3D fabrication and microcontrollers like Arduino.
              </p>
              <p className="text-lg text-gray-600">
                I aim to design experiences that are not only visually engaging, but also intuitive, purposeful, and genuinely helpful, connecting people, technology, and context in meaningful ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-gray-900">Skills & Tools</h2>
          <p className="text-center mb-8 text-gray-500">
            Attualmente illuminata: {currentSkillIndex >= 0 ? skills[currentSkillIndex] : "Nessuna"} ({currentSkillIndex + 1}/{skills.length})
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`px-6 py-3 rounded-full border text-center transition-all duration-1000 ${
                  index <= currentSkillIndex
                    ? "bg-blue-500 text-white border-blue-500 scale-100 opacity-100"
                    : "bg-gray-100 text-gray-400 border-gray-200 scale-95 opacity-50"
                }`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-gray-900">Education & Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl text-gray-900 mb-1">Master in Interaction Design (MAIND)</h3>
                  <p className="text-blue-600">SUPSI - Lugano, Switzerland</p>
                </div>
                <span className="text-gray-500 text-sm mt-2 md:mt-0">2025 - Present</span>
              </div>
              <p className="text-gray-600">
                Advanced program focused on interaction design, including UX design, 3D fabrication, 
                physical computing with Arduino, and creating interactive objects. 
                Combining digital and physical design methodologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl text-gray-900 mb-1">Bachelor in Interfaces and Communication Technologies</h3>
                  <p className="text-blue-600">University of Trento, Italy</p>
                </div>
                <span className="text-gray-500 text-sm mt-2 md:mt-0">2022 - 2025</span>
              </div>
              <p className="text-gray-600">
                Comprehensive study of interface design, user research, usability testing, 
                ergonomics, semiotics, and coding for digital experiences. Foundation 
                in user-centered design principles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl text-gray-900 mb-1">Research and UX Internship - StandByMe.2 Project</h3>
                  <p className="text-blue-600">University of Trento & Fondazione Bruno Kessler (FBK)</p>
                </div>
                <span className="text-gray-500 text-sm mt-2 md:mt-0">February - June 2024</span>
              </div>
              <p className="text-gray-600">
                Conducted pilot and evaluation studies for a digital storytelling platform 
                addressing gender-based violence awareness and street harassment prevention. 
                Focused on UX design and user research methodologies to create 
                educational tools for recognizing and preventing harassment situations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}