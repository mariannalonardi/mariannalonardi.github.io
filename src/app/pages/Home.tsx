import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, Layers, Lightbulb, Users, Mail, MapPin, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ProjectsCascade } from "../components/ProjectsCascade";
import profileImage from "figma:asset/7bf7a82dfd8ead0d6f4a05f8f71fb26212f3a79a.png";
import moonymateImage from "figma:asset/5d0ba5b935c9d789ec3c75806b2ac374ea5c2316.png";
import bob4Image from "figma:asset/f56b7c42a0ed5efa8b56afd65acb5de5d4d983a3.png";
import philips1Image from "figma:asset/f11964c4d2d1acb9cf4c35772cda81492e135afc.png";
import ubs5Image from "figma:asset/98033c068986b3b6ff0d07047366acb3a142b4a7.png";
import provid1Image from "figma:asset/820d9ca4e72060137f6dd3baa19213113bb37c6a.png";
import green1Image from "figma:asset/d5ffd0e670acfec897f8e2908b4b899101244acb.png";
import green4Image from "figma:asset/d1d5621a7f44f4bb3f5a50077cc2bb09433b16bc.png";
import Mindy1Image from "../../imports/Mindy1.png";
import Data3Image from "../../imports/Data3.png";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centered Design",
      description: "Creating meaningful experiences through research, testing, and iterative design.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Physical + Digital",
      description: "Bridging digital interfaces with physical installations and interactive objects.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Interactive Prototyping",
      description: "From Figma to Arduino: bringing ideas to life through rapid prototyping.",
    },
  ];

  const skills = [
    "Figma",
    "User Research",
    "Usability Testing",
    "Prototyping",
    "Arduino",
    "3D Fabrication",
    "Vinyl Cutter",
    "Laser Cutter",
    "HTML/CSS",
    "Python",
    "JavaScript",
    "Data Visualization",
  ];

  const projects = [
    {
      id: 1,
      title: "MoonyMate",
      description: "Interactive 15×15 cm cube designed to help children aged 3 to 7 complete their bedtime routine through physical interaction, lights, sound, and movement.",
      image: moonymateImage,
      tags: ["Arduino", "Physical Computing", "3D Modeling", "Child Interaction", "Product Design"],
    },
    {
      id: 2,
      title: "Mindy",
      description: "Mindy is a mobile application designed to support people living with panic attacks and anxiety disorders. It unifies crisis tools, expert resources, and community support in one accessible experience.",
      image: Mindy1Image,
      tags: ["Mental Health", "Mobile App", "UX/UI Design", "User Research", "Prototyping", "Figma"],
    },
    {
      id: 3,
      title: "bob",
      description: "Large language object that monitors user focus through embodied interaction and real-time surveillance using computer vision, animation, and physical prototyping.",
      image: bob4Image,
      tags: ["Machine Learning", "Animation", "UI Design", "3D Modeling", "MediaPipe", "Code"],
    },
    {
      id: 4,
      title: "Philips EL3302",
      description: "Redesign of a vintage 1960s cassette recorder as a modern cassette player using physical prototyping, 3D printing, laser cutting, and Arduino electronics.",
      image: philips1Image,
      tags: ["3D Modeling", "Fabrication", "Laser Cutting", "Arduino", "Product Design"],
    },
    {
      id: 5,
      title: "UBS Cross-Border Banking",
      description: "Mobile banking interface redesign for Italian-Swiss cross-border workers. Simplifies everyday banking with multi-currency management, transparent exchange rates, smart automation, and financial education.",
      image: ubs5Image,
      tags: ["UI/UX Design", "Mobile App", "User Research", "Prototyping", "Figma", "User Testing"],
    },
    {
      id: 6,
      title: "PROVID 3000",
      description: "Design installation exploring Google Street View glitches as contemporary ghosts through urban exploration in Lugano. Interactive handheld device combining Arduino sensors, GPS, real-time environmental data, and exhibition design.",
      image: provid1Image,
      tags: ["Physical Computing", "Arduino", "Urban Exploration", "Web Interface", "Exhibition Design", "Museum Installation"],
    },
    {
      id: 7,
      title: "2BGreen",
      description: "Mobile application helping citizens manage waste collection and recycling. Developed through user research, stakeholder analysis, and iterative design process.",
      image: green4Image,
      tags: ["UI/UX Design", "Mobile App", "User Research", "Figma", "Prototyping", "Sustainability"],
    },
    {
      id: 8,
      title: "Arboreal Metrics Paradox",
      description: "Interactive 2D and 3D data visualization exploring the balance between environmental efficiency, biodiversity, and public perception in urban green spaces through the trees of Parco Ciani in Lugano. Users can compare species data and create their own vision of an ideal urban park.",
      image: Data3Image,
      tags: ["Data Visualization", "Coding", "3D Visualization", "Environmental Storytelling", "Participatory Design", "Information Design", "Scraping"],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHNrZXRjaGVzJTIwd2lyZWZyYW1lc3xlbnwxfHx8fDE3NzQyNzU4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Tazzina di caffè che saluta con scritta */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
              className="w-16 h-16 md:w-20 md:h-20"
            >
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {/* Tazza di caffè */}
                <g>
                  {/* Corpo della tazza */}
                  <path
                    d="M 25 40 L 30 75 Q 30 80 35 80 L 65 80 Q 70 80 70 75 L 75 40 Z"
                    fill="#3B82F6"
                    stroke="white"
                    strokeWidth="3"
                  />

                  {/* Manico */}
                  <path
                    d="M 75 45 Q 85 45 85 55 Q 85 65 75 65"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Superficie del caffè */}
                  <ellipse
                    cx="50"
                    cy="40"
                    rx="25"
                    ry="5"
                    fill="#8B4513"
                    stroke="white"
                    strokeWidth="2"
                  />

                  {/* Vapore che saluta - curva 1 */}
                  <motion.path
                    d="M 40 30 Q 38 20 40 10"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 1, 0],
                      opacity: [0, 0.8, 0.8, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Vapore che saluta - curva 2 */}
                  <motion.path
                    d="M 50 35 Q 52 25 50 12"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 1, 0],
                      opacity: [0, 0.8, 0.8, 0]
                    }}
                    transition={{
                      duration: 3,
                      delay: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Vapore che saluta - curva 3 */}
                  <motion.path
                    d="M 60 30 Q 62 22 60 8"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 1, 0],
                      opacity: [0, 0.8, 0.8, 0]
                    }}
                    transition={{
                      duration: 3,
                      delay: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </g>
              </svg>
            </motion.div>
            <p className="text-xl md:text-2xl text-white">
              Hi, I'm Marianna!
            </p>
          </motion.div>

          {/* Interaction Designer con animazione da destra */}
          <motion.h1
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            className="text-5xl md:text-7xl mb-6"
          >
            Interaction Designer
          </motion.h1>

          {/* Testo MAIND con animazione ritardata */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl md:text-2xl mb-2 text-gray-200"
          >
            MAIND Student at SUPSI
          </motion.p>

          {/* Testo bridge con effetto arco */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-8 relative h-24 flex items-end justify-center"
          >
            <svg viewBox="0 0 800 100" className="w-full max-w-3xl">
              <defs>
                <path
                  id="bridgePath"
                  d="M 50,90 Q 400,10 750,90"
                  fill="transparent"
                />
              </defs>
              <text className="text-xl md:text-2xl fill-gray-200" style={{ fontFamily: 'inherit' }}>
                <textPath href="#bridgePath" startOffset="50%" textAnchor="middle">
                  Creating experiences that bridge digital and physical worlds
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Bottoni con animazione ritardata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-full"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors rounded-full border border-white/20"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-16 text-gray-900">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl mb-6 text-gray-900">About Me</h1>
              <p className="text-lg text-gray-600 mb-6">
                I am an <strong>Interaction Designer</strong> currently pursuing a Master's in Interaction Design at SUPSI, with a background in Interfaces and Communication Technologies. My work explores the <strong>intersection</strong> of <strong>digital</strong> and <strong>physical design</strong>, combining user-centered research, UX/UI design, and hands-on prototyping to create meaningful interactive experiences.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I approach design as a <strong>holistic process</strong>, from understanding users through research and usability testing to developing concepts that take shape as both interfaces and tangible prototypes. I work across digital and physical media, using tools such as <strong>Figma</strong>, <strong>3D fabrication</strong> and microcontrollers like <strong>Arduino</strong>.
              </p>
              <p className="text-lg text-gray-600">
                I aim to design experiences that are not only visually <strong>engaging</strong>, but also <strong>intuitive</strong>, <strong>purposeful</strong>, and genuinely <strong>helpful</strong>, connecting people, technology, and context in meaningful ways.
              </p>
            </div>
            <div className="relative h-[500px]">
              <img
                src={profileImage}
                alt="Marianna Lonardi"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-gray-900">Skills & Tools</h2>
          <div className="max-w-5xl mx-auto">
            {/* Prima riga */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {skills.slice(0, 6).map((skill, index) => {
                const serpentineIndex = index * 2; // 0, 2, 4, 6, 8, 10
                const animationDuration = 2; // 2 secondi per skill
                const totalCycle = skills.length * animationDuration; // 24 secondi totali

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.3, scale: 1 }}
                    animate={{
                      backgroundColor: [
                        "rgb(239 246 255)", // blue-50
                        "rgb(59 130 246)",  // blue-500
                        "rgb(239 246 255)", // blue-50
                      ],
                      color: [
                        "rgb(29 78 216)",   // blue-700
                        "rgb(255 255 255)", // white
                        "rgb(29 78 216)",   // blue-700
                      ],
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: animationDuration,
                      repeat: Infinity,
                      repeatDelay: totalCycle - animationDuration,
                      delay: serpentineIndex * animationDuration,
                      ease: "easeInOut",
                    }}
                    className="px-6 py-3 rounded-full border border-blue-200"
                  >
                    {skill}
                  </motion.div>
                );
              })}
            </div>

            {/* Seconda riga */}
            <div className="flex flex-wrap justify-center gap-4">
              {skills.slice(6).map((skill, index) => {
                const serpentineIndex = (index * 2) + 1; // 1, 3, 5, 7, 9, 11
                const animationDuration = 2; // 2 secondi per skill
                const totalCycle = skills.length * animationDuration; // 24 secondi totali

                return (
                  <motion.div
                    key={index + 6}
                    initial={{ opacity: 0.3, scale: 1 }}
                    animate={{
                      backgroundColor: [
                        "rgb(239 246 255)", // blue-50
                        "rgb(59 130 246)",  // blue-500
                        "rgb(239 246 255)", // blue-50
                      ],
                      color: [
                        "rgb(29 78 216)",   // blue-700
                        "rgb(255 255 255)", // white
                        "rgb(29 78 216)",   // blue-700
                      ],
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: animationDuration,
                      repeat: Infinity,
                      repeatDelay: totalCycle - animationDuration,
                      delay: serpentineIndex * animationDuration,
                      ease: "easeInOut",
                    }}
                    className="px-6 py-3 rounded-full border border-blue-200"
                  >
                    {skill}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-gray-900">Education & Experience</h2>
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-8">
              <div className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                
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
              </div>

              <div className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                
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

              <div className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h1 className="text-5xl mb-6 text-gray-900">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of projects spanning digital interfaces, physical objects, and 
            interactive experiences.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <ProjectsCascade projects={projects} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-5xl mb-6 text-gray-900">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I am currently looking for an internship opportunity where I can further develop my skills in UX/UI design, interactive prototyping, and the creation of meaningful user experiences across digital and physical contexts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl mb-8 text-gray-900 text-center">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-gray-900">Email</h3>
                  <a
                    href="mailto:mariannalonardi03@gmail.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    mariannalonardi03@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-gray-900">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/marianna-lonardi-783157355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Marianna Lonardi
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-gray-900">Location</h3>
                  <p className="text-gray-600">Ticino, Switzerland</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-blue-50 rounded-2xl">
              <h3 className="text-xl mb-4 text-gray-900">Availability</h3>
              <p className="text-gray-600 mb-4">
                I'm currently seeking opportunities to apply my interaction design skills 
                in a professional setting and continue learning.
              </p>
              <p className="text-gray-600">
                <strong>Open to:</strong>
              </p>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>• Full-time internships</li>
                <li>• Junior interaction designer positions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}