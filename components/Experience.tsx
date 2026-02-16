import React from 'react';
import { FadeIn } from './FadeIn';

interface ExperienceProps {
  id?: string;
}

export const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <section id={id} className="flex flex-col gap-10 md:gap-12 py-4 md:py-8 scroll-mt-24">
      <FadeIn>
        <header className="mb-4 md:mb-8 flex items-center gap-4">
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-stone-400">
            Professional History
          </h3>
          <div className="h-px bg-stone-200 flex-grow max-w-[100px]"></div>
        </header>
      </FadeIn>

      {/* Role 1: Healthcare */}
      <FadeIn delay={200}>
        <article className="group relative pl-6 md:pl-8 border-l border-stone-200">
          <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-stone-200 group-hover:bg-stone-500 transition-colors duration-700"></div>
          
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3 md:mb-4">
            <div>
              <h4 className="font-serif text-2xl md:text-3xl text-stone-900 mb-1">
                <a 
                  href="https://www.modernheartandvascular.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-stone-600 transition-colors border-b border-transparent hover:border-stone-300 pb-0.5"
                >
                  Modern Heart & Vascular
                </a>
              </h4>
              <p className="font-sans text-stone-500 font-medium text-sm">Patient Representative</p>
            </div>
            <span className="font-sans text-xs tracking-widest text-stone-400 mt-1 md:mt-0 uppercase">2025 — Present</span>
          </div>
          
          <ul className="list-disc pl-4 space-y-2 font-sans text-stone-600 text-sm md:text-base font-light marker:text-stone-300 leading-relaxed">
            <li>
              <strong className="text-stone-800 font-normal">Patient Flow Management:</strong> Manages high-density inbound/outbound communications and scheduling for a cardiovascular practice.
            </li>
            <li>
              <strong className="text-stone-800 font-normal">Regulatory Compliance:</strong> Enforces strict <a href="https://www.hhs.gov/hipaa/for-professionals/index.html" target="_blank" rel="noopener noreferrer" className="underline decoration-stone-300 hover:decoration-stone-500 hover:text-stone-800 transition-all cursor-pointer">HIPAA protocols</a> regarding patient data privacy and medical documentation.
            </li>
            <li>
              <strong className="text-stone-800 font-normal">Care Coordination:</strong> Facilitates communication between clinical staff and patients to ensure treatment plan adherence.
            </li>
          </ul>
        </article>
      </FadeIn>

      {/* Role 2: Retail */}
      <FadeIn delay={400}>
        <article className="group relative pl-6 md:pl-8 border-l border-stone-200">
          <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-stone-200 group-hover:bg-stone-500 transition-colors duration-700"></div>
          
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3 md:mb-4">
             <div>
              <h4 className="font-serif text-2xl md:text-3xl text-stone-900 mb-1">
                Retail Operations
              </h4>
              <div className="flex gap-2 mt-1">
                 <a 
                   href="https://www.forever21.com/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="font-sans text-[10px] tracking-[0.1em] uppercase text-stone-500 border border-stone-200 px-2 py-0.5 rounded-full hover:border-stone-400 hover:text-stone-800 transition-colors"
                 >
                  Forever 21
                </a>
                <a 
                  href="https://www.hollisterco.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] tracking-[0.1em] uppercase text-stone-500 border border-stone-200 px-2 py-0.5 rounded-full hover:border-stone-400 hover:text-stone-800 transition-colors"
                >
                  Hollister
                </a>
              </div>
            </div>
            <span className="font-sans text-xs tracking-widest text-stone-400 mt-2 md:mt-0 uppercase">2023 — 2025</span>
          </div>

          <ul className="list-disc pl-4 space-y-2 font-sans text-stone-600 text-sm md:text-base font-light marker:text-stone-300 leading-relaxed">
            <li>
              <strong className="text-stone-800 font-normal">Inventory Logistics:</strong> Directed inventory systems, stockroom organization, and high-volume shipment processing.
            </li>
            <li>
              <strong className="text-stone-800 font-normal">Operational Efficiency:</strong> Optimized visual merchandising and floor operations to meet corporate standards.
            </li>
            <li>
              <strong className="text-stone-800 font-normal">Staff Development:</strong> Trained new personnel on operational procedures and customer service protocols.
            </li>
          </ul>
        </article>
      </FadeIn>
    </section>
  );
};