import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import moonymateImage from "figma:asset/5d0ba5b935c9d789ec3c75806b2ac374ea5c2316.png";
import bobLogoImage from "figma:asset/8523781d3f04aa57104aebe12d0cee6cbd0b4df7.png";
import green1Image from "figma:asset/65f0dc37e7a0dab3b7da5ae850de8f150472d4b8.png";
import philips1Image from "figma:asset/f11964c4d2d1acb9cf4c35772cda81492e135afc.png";
import ubs1Image from "figma:asset/30c3e73a2d8bfc65ea89b1de105eb1f5ffb67b05.png";
import bob4Image from "figma:asset/f56b7c42a0ed5efa8b56afd65acb5de5d4d983a3.png";
import ubs5Image from "figma:asset/98033c068986b3b6ff0d07047366acb3a142b4a7.png";
import green4Image from "figma:asset/d1d5621a7f44f4bb3f5a50077cc2bb09433b16bc.png";
import provid1Image from "figma:asset/820d9ca4e72060137f6dd3baa19213113bb37c6a.png";
import Mindy1Image from "../../imports/Mindy1.png";
import Data3Image from "../../imports/Data3.png";

export default function Projects() {
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

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6 text-gray-900">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of projects spanning digital interfaces, physical objects, and 
            interactive experiences.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}