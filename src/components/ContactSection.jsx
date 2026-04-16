import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link, MessageSquare, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-32 bg-background relative z-20 px-6 md:px-12 border-t border-white/5">
       <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
             
             {/* Left Text */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="w-full lg:w-5/12"
             >
                <h2 className="text-5xl md:text-7xl font-cinematic font-bold tracking-tighter mb-8 text-glow-gold">
                   Let's create <br/> something <br/> <span className="text-gray-500">cinematic.</span>
                </h2>
                <p className="text-gray-400 font-sans font-light text-lg mb-12">
                   Open for conceptual, commercial, and creative collaborations worldwide. Drop a message to discuss your next project.
                </p>

                <div className="space-y-6">
                   <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group w-fit">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
                         <Mail size={18} />
                      </div>
                      <span className="font-sans tracking-widest text-sm uppercase">Email</span>
                   </a>
                   <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group w-fit">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
                         <Link size={18} />
                      </div>
                      <span className="font-sans tracking-widest text-sm uppercase">Links</span>
                   </a>
                   <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group w-fit">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
                         <MessageSquare size={18} />
                      </div>
                      <span className="font-sans tracking-widest text-sm uppercase">Social</span>
                   </a>
                </div>
             </motion.div>

             {/* Right Form */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, delay: 0.2 }}
               className="w-full lg:w-7/12"
             >
                <form className="space-y-8 glassmorphism p-8 md:p-12 rounded-2xl">
                   <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-gray-500 ml-2">Name</label>
                      <input 
                         type="text" 
                         className="w-full bg-black/50 border border-white/10 rounded-lg px-6 py-4 outline-none focus:border-accent-gold transition-colors text-white font-sans placeholder-gray-700"
                         placeholder="Enter your name"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-gray-500 ml-2">Email</label>
                      <input 
                         type="email" 
                         className="w-full bg-black/50 border border-white/10 rounded-lg px-6 py-4 outline-none focus:border-accent-gold transition-colors text-white font-sans placeholder-gray-700"
                         placeholder="Enter your email"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-gray-500 ml-2">Message</label>
                      <textarea 
                         rows="4"
                         className="w-full bg-black/50 border border-white/10 rounded-lg px-6 py-4 outline-none focus:border-accent-gold transition-colors text-white font-sans placeholder-gray-700 resize-none"
                         placeholder="Tell me about your project..."
                      ></textarea>
                   </div>
                   <button 
                      type="button"
                      className="group w-full relative py-5 bg-white text-black font-semibold uppercase tracking-wider overflow-hidden rounded-lg mt-4"
                   >
                     <div className="absolute inset-0 bg-accent-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                     <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-500">
                        Send Message <ArrowUpRight size={18} />
                     </span>
                   </button>
                </form>
             </motion.div>

          </div>
       </div>
    </section>
  );
};

export default ContactSection;
