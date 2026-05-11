import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface ProjectsCascadeProps {
  projects: Project[];
}

export function ProjectsCascade({ projects }: ProjectsCascadeProps) {
  const [phase, setPhase] = useState<"cascade" | "grid">("cascade");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    if (phase === "cascade") {
      if (currentIndex < projects.length) {
        const timer = setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
        }, 600); // Ridotto da 1200ms a 600ms per farli apparire più velocemente
        return () => clearTimeout(timer);
      } else {
        // Cascade completata, passa alla griglia
        const timer = setTimeout(() => {
          setPhase("grid");
        }, 800); // Ridotto da 1500ms a 800ms
        return () => clearTimeout(timer);
      }
    }
  }, [currentIndex, phase, projects.length, hasStarted]);

  // Trigger dell'animazione quando la sezione diventa visibile
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("projects-container");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  if (phase === "cascade") {
    return (
      <div id="projects-container" className="relative h-[600px] w-full flex items-center justify-center overflow-visible px-8">
        <AnimatePresence mode="sync">
          {projects.map((project, index) => {
            // Mostra le card fino all'indice corrente
            if (index >= currentIndex) return null;
            
            // Parametri dell'arco (curva a U)
            const totalProjects = projects.length;
            const normalizedPosition = index / (totalProjects - 1); // 0 a 1
            
            // Curva ad arco dal basso verso l'alto e di nuovo in basso (U)
            const arcHeight = 150; // Ridotto da 200 a 150
            const arcWidth = Math.min(1200, window.innerWidth * 0.85);
            
            // Posizione X lungo l'arco (da -arcWidth/2 a +arcWidth/2)
            const xPosition = (normalizedPosition - 0.5) * arcWidth;
            
            // Posizione Y lungo l'arco (parabola U) - centrato verticalmente
            const yPosition = arcHeight * 4 * Math.pow(normalizedPosition - 0.5, 2) - arcHeight/2;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.3, y: 400 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: xPosition,
                  y: yPosition 
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut" 
                }}
                className="absolute w-full max-w-[280px]"
                style={{ zIndex: projects.length - index }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-base font-semibold text-gray-900 text-center line-clamp-2">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div id="projects-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            to={`/projects/${project.id}`}
            className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group/card cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain group-hover/card:scale-105 transition-transform duration-300"
              />
            </div>
            <motion.div
              className="p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <h3 className="text-2xl mb-3 text-gray-900">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}