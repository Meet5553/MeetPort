import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const categories = ["All", "Cinematography", "Editing", "Commercial", "Social Media"];

const projects = [
  { id: 1, title: 'Neon Nights', category: 'Cinematography', color: 'from-purple-900/60 to-black' },
  { id: 2, title: 'Urban Echo', category: 'Commercial', color: 'from-blue-900/60 to-black' },
  { id: 3, title: 'Fluid Motion', category: 'Editing', color: 'from-teal-900/60 to-black' },
  { id: 4, title: 'Brand Story', category: 'Commercial', color: 'from-yellow-900/60 to-black' },
  { id: 5, title: 'Vibe Check', category: 'Social Media', color: 'from-pink-900/60 to-black' },
  { id: 6, title: 'Raw Cut', category: 'Editing', color: 'from-gray-800/60 to-black' },
];

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-background relative z-20 px-6 md:px-12 border-t border-white/5">
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-cinematic font-bold tracking-tighter"
          >
            Selected <span className="text-gray-600">Works</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 mt-8 md:mt-0"
          >
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-[0.2em] pb-2 border-b-2 transition-all duration-300 ${activeCategory === cat ? 'border-accent-purple text-white shadow-[0_2px_10px_rgba(147,51,234,0.5)]' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`relative aspect-[3/4] rounded-xl overflow-hidden group bg-gradient-to-br ${project.color} cursor-none bg-black`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-700 z-10 mix-blend-overlay" />
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                  <div className="w-14 h-14 rounded-full glassmorphism flex items-center justify-center mb-6 hover:scale-110 hover:bg-white/10 transition-all duration-300">
                     <Play size={20} className="text-white ml-1 filter drop-shadow-md" />
                  </div>
                  <span className="text-accent-gold text-xs tracking-[0.3em] uppercase mb-3 block font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-cinematic font-bold text-white tracking-wide leading-none">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
