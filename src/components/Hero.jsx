import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import AvatarPlaceholder from '../canvas/AvatarPlaceholder';
import { Environment } from '@react-three/drei';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/30 via-black to-black opacity-90 mix-blend-multiply" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-20 sepia-[.3] hue-rotate-[-30deg]"
        >
          {/* Fallback to dark CSS if no video source is accessible locally */}
        </video>
      </div>

      {/* 3D Element Container - Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute right-[-10%] md:right-0 top-0 w-full md:w-[60%] h-[120%] md:h-[100%] z-10 opacity-30 md:opacity-60 pointer-events-none"
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="city" />
          <AvatarPlaceholder />
        </Canvas>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        <motion.div
           style={{ y: y2, opacity }}
           className="max-w-4xl"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-accent-gold font-sans tracking-[0.3em] text-xs md:text-sm uppercase mb-6"
          >
            Crafting stories through visuals
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-cinematic font-bold text-white mb-4 uppercase tracking-tighter leading-[0.9]"
          >
            Meet<br />Thakkar
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-3xl text-gray-400 font-sans font-light mb-12 tracking-wide"
          >
            Cinematographer & Video Editor
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="group relative px-8 py-4 bg-white text-black font-semibold uppercase tracking-wider overflow-hidden">
              <div className="absolute inset-0 bg-accent-purple transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-500">
                View Work <Play size={16} fill="currentColor" />
              </span>
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-3">
              Contact Me <ArrowRight size={18} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-12 md:left-24 z-20 flex flex-col items-center gap-2 opacity-50"
      >
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white/0 to-white/50" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-cinematic origin-left rotate-90 mt-8 text-glow">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
