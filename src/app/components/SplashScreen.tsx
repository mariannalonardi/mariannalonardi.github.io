import { motion } from "motion/react";
import { useEffect } from "react";
import profileImage from "figma:asset/7bf7a82dfd8ead0d6f4a05f8f71fb26212f3a79a.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  // Blocca lo scroll durante la splash screen
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden">
      {/* Foto profilo a destra */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="absolute right-[15%] top-1/2 -translate-y-1/2"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
          <img
            src={profileImage}
            alt="Marianna"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Testo che si muove e rimbalza */}
      <motion.div
        initial={{ x: -800, opacity: 0 }}
        animate={{
          x: [
            -800,  // Partenza fuori schermo a sinistra
            -200,  // Arriva al centro-sinistra
            5,     // L'ultima lettera si appoggia delicatamente al cerchio
            -100,  // Rimbalzo indietro deciso
            -30,   // Piccolo ritorno
            -60,   // Si stabilizza
          ],
          opacity: [0, 1, 1, 1, 1, 1],
        }}
        transition={{
          duration: 1.5,
          times: [0, 0.3, 0.55, 0.65, 0.75, 0.85],
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        onAnimationComplete={() => {
          setTimeout(() => {
            onComplete();
          }, 200);
        }}
        className="relative"
      >
        <h1 className="text-8xl md:text-9xl font-light tracking-tight whitespace-nowrap">
          <span className="text-gray-900">Hi, I'm </span>
          <span className="text-blue-600 font-normal">Marianna</span>
        </h1>
      </motion.div>

      {/* Effetto dissolvenza finale */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.5 }}
        className="absolute inset-0 bg-white"
      />
    </div>
  );
}