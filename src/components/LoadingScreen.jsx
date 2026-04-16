import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import AvatarPlaceholder from '../canvas/AvatarPlaceholder';
import { Environment } from '@react-three/drei';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation to 100% over ~3 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Randomize the progress speed sightly for realism
        const increment = Math.floor(Math.random() * 3) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* 3D Background / Avatar Placeholder */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="city" />
          <AvatarPlaceholder />
        </Canvas>
      </div>

      {/* Fog/Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/80 to-background"></div>

      {/* Loading UI */}
      <div className="relative z-20 flex flex-col items-center mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-400 font-sans uppercase tracking-[0.3em] text-xs md:text-sm mb-6 text-glow"
        >
          Entering the Visual World of
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-4xl md:text-6xl font-cinematic font-bold text-white mb-16 tracking-wider text-glow-gold"
        >
          MEET THAKKAR
        </motion.h1>

        {/* Cinematic Loading Bar */}
        <div className="w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-accent-purple shadow-[0_0_10px_#9333ea]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        <div className="mt-4 text-xs tracking-[0.2em] text-gray-500 font-sans">
          {progress.toString().padStart(3, '0')}%
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
