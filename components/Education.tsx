import React from 'react';
import { FadeIn } from './FadeIn';

interface EducationProps {
  id?: string;
}

export const Education: React.FC<EducationProps> = ({ id }) => {
  return (
    <section id={id} className="py-4 md:py-8 w-full scroll-mt-24">
      <FadeIn>
        <header className="mb-6">
           <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-stone-400">
            Academic Background
          </h3>
        </header>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-stone-200">
           <div>
              <h4 className="font-serif text-2xl text-stone-800 mb-1">
                <a 
                  href="https://www.sanjac.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-stone-600 transition-colors border-b border-transparent hover:border-stone-300 pb-0.5"
                >
                  San Jacinto College
                </a>
              </h4>
              <p className="font-sans text-stone-500 font-light text-sm tracking-wide">
                Associate of Arts (In Progress)
              </p>
           </div>
           <div className="mt-2 md:mt-0">
             <span className="font-sans text-xs tracking-widest text-stone-400 uppercase">Houston, TX</span>
           </div>
        </div>
      </FadeIn>
    </section>
  )
}