import React from 'react';

export const Navigation: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Top', id: 'hero' },
    { label: 'Profile', id: 'narrative' },
    { label: 'History', id: 'experience' },
    { label: 'Competencies', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200/50 transition-all duration-500">
      <ul 
        className="flex items-center gap-6 md:gap-8 px-6 py-4 overflow-x-auto w-full md:justify-center justify-start [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {navItems.map((item) => (
          <li key={item.id} className="flex-shrink-0">
            <a
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="font-sans text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase text-stone-400 hover:text-stone-900 transition-colors duration-300"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};