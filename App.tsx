import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Narrative } from './components/Narrative';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Artificial delay to ensure fonts load and to set the "slow" pacing immediately
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen w-full transition-opacity duration-[2000ms] ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      
      <main className="max-w-screen-xl mx-auto px-5 md:px-12 lg:px-24 flex flex-col items-center pt-16 md:pt-20">
        {/* The One Column of Focus - Tightened gaps for document/resume feel */}
        <div className="w-full max-w-2xl flex flex-col gap-10 md:gap-20 pb-20 md:pb-32">
          <Hero id="hero" />
          <Narrative id="narrative" />
          <Experience id="experience" />
          <Skills id="skills" />
          <Education id="education" />
          <Contact id="contact" />
        </div>
      </main>
      
      {/* Subtle grain texture overlay for tactile feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
}