import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Premiere Pro', level: 95, color: '#9999ff' },
  { name: 'After Effects', level: 85, color: '#9999ff' },
  { name: 'DaVinci Resolve', level: 90, color: '#ff6666' },
  { name: 'CapCut', level: 98, color: '#ffffff' }
];

const SkillsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative z-20 px-6 md:px-12">
       <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
             
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-20"
             >
                <h2 className="text-4xl md:text-6xl font-cinematic font-bold tracking-tighter mb-6">Technical <span className="text-gray-600">Mastery</span></h2>
                <p className="text-gray-400 font-sans font-light tracking-wide">The tools I use to bring stories to life.</p>
             </motion.div>

             <div className="space-y-12">
                {skills.map((skill, index) => (
                   <div key={skill.name}>
                      <div className="flex justify-between items-end mb-4">
                         <span className="text-sm font-sans font-medium text-gray-300 tracking-[0.1em] uppercase">{skill.name}</span>
                         <span className="text-xs font-mono text-gray-600 tracking-wider">{skill.level}%</span>
                      </div>
                      <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${skill.level}%` }}
                           viewport={{ once: true }}
                           transition={{ duration: 1.5, delay: index * 0.15, ease: "easeOut" }}
                           className="absolute top-0 left-0 h-full shadow-[0_0_15px_currentColor]"
                           style={{ backgroundColor: skill.color, color: skill.color }}
                         />
                      </div>
                   </div>
                ))}
             </div>

          </div>
       </div>
    </section>
  );
};

export default SkillsSection;
