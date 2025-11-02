import React from 'react';

const Navigation: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#fafafa]/90 backdrop-blur-sm py-6 border-b border-neutral-200 mb-12 sm:mb-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 flex justify-between items-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-bold tracking-tight text-lg">
          JK.
        </button>
        <div className="flex gap-4 sm:gap-8 text-sm font-medium text-neutral-600">
          <button onClick={() => scrollToSection('about')} className="hover:text-neutral-900 transition-colors">About</button>
          <button onClick={() => scrollToSection('highlights')} className="hover:text-neutral-900 transition-colors">Press</button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-neutral-900 transition-colors">Experience</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
