import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import PortfolioGrid from './components/PortfolioGrid';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of assets (3D models, videos)
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const scrollTimer = setTimeout(() => {
        const showreel = document.getElementById('showreel');
        if (showreel && window.scrollY < 100) {
          showreel.scrollIntoView({ behavior: 'smooth' });
        }
      }, 6000);
      return () => clearTimeout(scrollTimer);
    }
  }, [loading]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="content" className="w-full">
            <Hero />
            <Showreel />
            <PortfolioGrid />
            <AboutSection />
            <SkillsSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default App;
