import React from 'react';
import { FadeIn } from './FadeIn';

interface HeroProps {
  id?: string;
}

export const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <section id={id} className="flex flex-col justify-center pt-20 md:pt-32 pb-4 md:pb-8 scroll-mt-24">
      <FadeIn delay={200}>
        <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-stone-500 mb-6">
          Patient Operations & Experience
        </p>
      </FadeIn>
      
      <FadeIn delay={400}>
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-stone-900 leading-[0.95] md:leading-[0.9] tracking-tight mb-8">
          Aileen <br />
          <span className="italic font-light opacity-90">Hernandez</span>
        </h1>
      </FadeIn>

      <div className="h-px w-16 md:w-24 bg-stone-300 my-6 md:my-8 opacity-0 animate-fade-in" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}></div>

      <FadeIn delay={800}>
        <h2 className="font-serif text-xl md:text-3xl text-stone-600 max-w-md leading-relaxed">
          Operational precision for high-volume <br className="hidden md:block"/> 
          <span className="text-stone-900 italic">healthcare environments.</span>
        </h2>
      </FadeIn>
    </section>
  );
};