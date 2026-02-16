import React from 'react';
import { FadeIn } from './FadeIn';

interface SkillClusterProps {
  title: string;
  skills: string[];
}

const SkillCluster: React.FC<SkillClusterProps> = ({ title, skills }) => (
  <div className="flex flex-col gap-3 md:gap-4">
    <h5 className="font-serif text-lg italic text-stone-500 border-b border-stone-200 pb-2 mb-2">
      {title}
    </h5>
    <ul className="flex flex-col gap-1.5 md:gap-2">
      {skills.map((skill) => (
        <li key={skill} className="font-sans text-stone-800 text-sm md:text-base font-light tracking-wide">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

interface SkillsProps {
  id?: string;
}

export const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (
    <section id={id} className="py-4 md:py-8 w-full scroll-mt-24">
      <FadeIn>
        <header className="mb-8">
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-stone-400">
            Competencies
          </h3>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">
          <SkillCluster 
            title="Patient Relations" 
            skills={[
              "Call Management",
              "Conflict De-escalation",
              "Scheduling Logistics",
              "Care Coordination"
            ]} 
          />
          <SkillCluster 
            title="Operations & Compliance" 
            skills={[
              "HIPAA Protocols",
              "Medical Documentation",
              "Inventory Management",
              "Visual Merchandising"
            ]} 
          />
          <SkillCluster 
            title="Core Skills" 
            skills={[
              "Time Management",
              "Problem Solving",
              "Team Collaboration",
              "Bilingual"
            ]} 
          />
        </div>
      </FadeIn>
    </section>
  );
};