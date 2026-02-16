import React from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Phone, ArrowUpRight, FileText } from 'lucide-react';

interface ContactLinkProps {
  href: string;
  label: string;
  icon: React.ElementType;
  subLabel?: string;
  isDownload?: boolean;
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, label, icon: Icon, subLabel, isDownload }) => (
  <a 
    href={href} 
    className="group relative flex items-center gap-5 p-4 -mx-4 rounded-xl transition-all duration-300 hover:bg-stone-100"
    {...(isDownload ? { download: "Aileen_Hernandez_Resume.pdf" } : {})}
  >
    <div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center group-hover:border-stone-400 transition-colors shadow-sm">
      <Icon size={18} strokeWidth={1} className="text-stone-400 group-hover:text-stone-900 transition-colors" />
    </div>
    
    <div className="flex flex-col">
      <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-0.5">
        {subLabel}
      </span>
      <span className="font-serif text-xl md:text-2xl text-stone-800">
        {label}
      </span>
    </div>

    {!isDownload && (
      <ArrowUpRight 
        size={18} 
        strokeWidth={1} 
        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-stone-400" 
      />
    )}
  </a>
);

interface ContactProps {
  id?: string;
}

export const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="py-8 md:py-12 flex flex-col items-start w-full border-t border-stone-200 mt-8 scroll-mt-24">
      <FadeIn>
        <div className="mb-8 md:mb-10">
          <h3 className="font-serif text-3xl md:text-5xl text-stone-900">
            Professional Inquiries
          </h3>
          <p className="mt-4 font-sans text-stone-500 font-light max-w-md">
             Available for immediate engagement in healthcare operations roles.
          </p>
        </div>
        
        <div className="flex flex-col gap-1 w-full max-w-lg">
          <ContactLink 
            href="mailto:aileenn.hernandez05@icloud.com" 
            label="aileenn.hernandez05@icloud.com"
            subLabel="Email"
            icon={Mail}
          />

          <ContactLink 
            href="tel:+12817130222" 
            label="281-713-0222"
            subLabel="Phone"
            icon={Phone}
          />
          
          <ContactLink 
            href="/resume.pdf" 
            label="Download Resume"
            subLabel="Document"
            icon={FileText}
            isDownload
          />
        </div>

        <div className="mt-16 flex flex-col gap-1 opacity-60">
            <p className="font-sans text-[10px] text-stone-400 uppercase tracking-widest">
                Location
            </p>
            <p className="font-serif text-stone-500">
                Houston, Texas (Open to Remote)
            </p>
        </div>
      </FadeIn>
    </section>
  );
};