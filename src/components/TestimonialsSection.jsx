import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Creative Director, XYZ Agency",
    text: "Meet transformed our entire brand narrative. His ability to capture emotion and cinematic lighting elevated our campaign beyond what we thought possible.",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Independent Filmmaker",
    text: "Working with Meet was a revelation. His editing pace and color grading brought an incredible premium feel to our documentary. Truly a master of his craft.",
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Marketing Head, LuxBrands",
    text: "Reliable, incredibly creative, and technically flawless. Meet took our raw concepts and delivered a visual masterpiece that resonated deeply with our audience.",
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-scroll loop
  React.useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-black relative z-20 px-6 md:px-12 overflow-hidden border-t border-white/5">
       <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-accent-purple/5 to-transparent pointer-events-none" />
       
       <div className="container mx-auto max-w-5xl">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24"
          >
             <div>
                <h2 className="text-4xl md:text-6xl font-cinematic font-bold tracking-tighter mb-4">Client <span className="text-gray-600">Stories</span></h2>
                <p className="text-gray-400 font-sans tracking-wide">What people say about the work.</p>
             </div>
             
             <div className="flex gap-4 mt-8 md:mt-0">
                <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300">
                   <ChevronLeft size={20} />
                </button>
                <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300">
                   <ChevronRight size={20} />
                </button>
             </div>
          </motion.div>

          <div className="relative min-h-[350px]">
             <AnimatePresence mode="wait">
                <motion.div
                   key={currentIndex}
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -50 }}
                   transition={{ duration: 0.5, ease: "easeInOut" }}
                   className="absolute inset-x-0 top-0"
                >
                   <div className="glassmorphism p-8 md:p-16 rounded-3xl w-full relative group hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-shadow duration-500">
                      <Quote className="absolute top-6 left-6 md:top-12 md:left-12 text-white/5 w-16 h-16 md:w-24 md:h-24 rotate-180 -z-10" />
                      
                      <p className="text-xl md:text-3xl font-cinematic font-medium text-gray-200 leading-relaxed mb-10 pt-4">
                         "{testimonials[currentIndex].text}"
                      </p>
                      
                      <div className="flex items-center gap-5">
                         <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center overflow-hidden shadow-lg">
                            <span className="font-cinematic text-xl text-gray-300">{testimonials[currentIndex].name.charAt(0)}</span>
                         </div>
                         <div>
                            <h4 className="font-sans font-semibold text-white tracking-wide">{testimonials[currentIndex].name}</h4>
                            <p className="text-xs text-gray-500 tracking-[0.1em] uppercase mt-1">{testimonials[currentIndex].role}</p>
                         </div>
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>
          </div>
       </div>
    </section>
  );
};

export default TestimonialsSection;
