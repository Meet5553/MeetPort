import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Showreel = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-black overflow-hidden flex justify-center items-center cursor-pointer group">
      <motion.div 
        style={{ scale, opacity }}
        className="w-[90%] md:w-[80%] aspect-video relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.15)] group-hover:shadow-[0_0_80px_rgba(147,51,234,0.3)] transition-shadow duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 to-accent-teal/20 mix-blend-overlay z-10 pointer-events-none" />
        
        {/* Placeholder if video doesn't load */}
        <div className="absolute inset-0 bg-gray-900 -z-10 flex flex-col items-center justify-center">
          <p className="text-gray-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 text-glow">Cinematic Showreel 2026</p>
        </div>

        {/* Play Icon Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
           <div className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md bg-white/5 hover:bg-white/10 transition-colors scale-90 group-hover:scale-100 duration-500">
              <svg className="w-8 h-8 text-white ml-2 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
           </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Showreel;
