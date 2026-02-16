import React from 'react';
import { FadeIn } from './FadeIn';

interface NarrativeProps {
  id?: string;
}

export const Narrative: React.FC<NarrativeProps> = ({ id }) => {
  return (
    <section id={id} className="py-2 md:py-6 scroll-mt-24">
      <FadeIn>
        <div className="border-l-[2px] border-stone-200 pl-6 md:pl-12 py-2 md:py-4">
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-stone-400 mb-6">
            Professional Profile
          </h3>
          <p className="font-serif text-2xl md:text-4xl text-stone-800 leading-tight md:leading-tight mb-8">
            Patient Operations Specialist with expertise in high-volume medical administration and regulatory compliance.
          </p>
          
          <div className="flex flex-col gap-4 max-w-prose">
            <p className="font-sans text-base md:text-lg text-stone-600 leading-relaxed font-light">
              Demonstrates proficiency in HIPAA protocols, care coordination, and sensitive patient communications within cardiovascular health settings. Combines operational agility with clinical administrative precision to optimize patient flow and service delivery.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};