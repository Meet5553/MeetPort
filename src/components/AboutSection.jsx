import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-black relative z-20 px-6 md:px-12 border-t border-white/5 overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

       <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
             
             {/* Portrait Image Placeholder */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="w-full lg:w-5/12 aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl group"
             >
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                {/* Fallback pattern */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
                   <p className="text-gray-500 font-sans tracking-[0.3em] uppercase text-xs mb-2">Cinematic Portrait</p>
                   <p className="text-gray-400 font-cinematic text-lg glow">Meet Thakkar</p>
                </div>
             </motion.div>

             {/* Bio Text */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="w-full lg:w-7/12"
             >
                <h2 className="text-sm text-accent-gold uppercase tracking-[0.3em] mb-6">The Vision</h2>
                <h3 className="text-4xl md:text-6xl font-cinematic font-bold mb-10 leading-tight tracking-tighter">
                   Every frame <br />
                   <span className="text-gray-600">tells a story.</span>
                </h3>
                
                <div className="space-y-6 text-lg text-gray-400 font-sans font-light leading-relaxed">
                   <p>
                      With over 4 years of experience behind the lens and in the editing suite, I specialize in crafting visual experiences that transcend the ordinary. My approach blends technical precision with raw, emotive storytelling.
                   </p>
                   <p>
                      From commercial campaigns to immersive social media content, my goal is to pull the audience into the narrative, making them feel every beat and transition. Let's create something unforgettable.
                   </p>
                </div>

                <div className="mt-14 flex gap-12 md:gap-20">
                   <div>
                      <h4 className="text-5xl md:text-6xl font-cinematic font-bold text-white mb-3 text-glow">4+</h4>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Years Experience</p>
                   </div>
                   <div>
                      <h4 className="text-5xl md:text-6xl font-cinematic font-bold text-white mb-3 text-glow">50+</h4>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Projects Delivered</p>
                   </div>
                </div>
             </motion.div>

          </div>
       </div>
    </section>
  );
};

export default AboutSection;
