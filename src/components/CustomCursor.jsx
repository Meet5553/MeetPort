import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const tagName = e.target.tagName;
      const isClickable = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(tagName) ||
                          e.target.closest('a') !== null || 
                          e.target.closest('button') !== null ||
                          e.target.classList.contains('cursor-pointer');
      
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 1,
      height: 32,
      width: 32,
      backgroundColor: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.4)",
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      opacity: 1,
      height: 60,
      width: 60,
      backgroundColor: "#fff",
      border: "1px solid transparent",
      mixBlendMode: "difference"
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10000]" 
        style={{ transform: `translate(${mousePosition.x - 3}px, ${mousePosition.y - 3}px)` }}
      />
    </>
  );
};

export default CustomCursor;
