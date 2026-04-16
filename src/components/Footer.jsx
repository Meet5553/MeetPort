import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12 px-6 md:px-12 border-t border-white/5 relative z-20">
       <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          <div>
             <h3 className="font-cinematic text-2xl font-bold tracking-wider text-white">MEET THAKKAR</h3>
             <p className="text-gray-500 font-sans text-xs tracking-widest uppercase mt-2">Cinematographer. Editor.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs font-sans tracking-[0.2em] uppercase text-gray-500">
             <a href="#" className="hover:text-white transition-colors">Showreel</a>
             <a href="#" className="hover:text-white transition-colors">Portfolio</a>
             <a href="#" className="hover:text-white transition-colors">About</a>
             <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
             <span className="text-gray-600 font-sans text-xs tracking-[0.2em] uppercase">© 2026 All Rights Reserved</span>
             <button 
                onClick={scrollToTop} 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
             >
                <ArrowUp size={16} />
             </button>
          </div>

       </div>
    </footer>
  );
};

export default Footer;
