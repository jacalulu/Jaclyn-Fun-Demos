import React from 'react';
import { LinkedInIcon, SubstackIcon, XIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-50 py-24 sm:py-32 mt-32 rounded-t-[3rem] sm:rounded-t-[5rem]">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl mb-8 leading-tight">
              Let's shape the future.
            </h2>
            <p className="text-neutral-400 text-lg sm:text-xl max-w-md leading-relaxed">
              Always open to discussing transformative AI, product strategy, or just exchanging interesting ideas.
            </p>
          </div>

          <div className="flex flex-col justify-end items-start md:items-end gap-6">
             <a href="https://jaclyn.substack.com/" target="_blank" rel="noopener noreferrer" 
                className="group flex items-center gap-4 text-2xl sm:text-3xl font-serif hover:text-[#FF6719] transition-colors duration-300">
                <span>Read my Substack</span>
                <SubstackIcon className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-2" />
             </a>
             <a href="https://www.linkedin.com/in/jaclynkonzelmann/" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 text-2xl sm:text-3xl font-serif hover:text-[#0077B5] transition-colors duration-300">
                <span>LinkedIn</span>
                <LinkedInIcon className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-2" />
             </a>
             <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 text-2xl sm:text-3xl font-serif hover:text-neutral-300 transition-colors duration-300">
                <span>X / Twitter</span>
                <XIcon className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-2" />
             </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-neutral-800 text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Jaclyn Konzelmann</p>
          <p className="mt-4 sm:mt-0">Designed & Built with AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;