import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ExternalLinkIcon, LinkedInIcon, SubstackIcon } from './components/Icons';
import { careerHighlights, experienceData } from './data';
import { CompanyExperience, Highlight, JobRole, Link } from './types';
import { Sparkles, BrainCircuit, Rocket, ArrowRight, MessageSquareQuote } from 'lucide-react';

// ---- UTILITY COMPONENTS ----

const SectionHeading: React.FC<{ children: React.ReactNode; id?: string; className?: string }> = ({ children, id, className = "" }) => (
  <h2 id={id} className={`font-serif text-4xl sm:text-5xl font-medium tracking-tight mb-12 sm:mb-16 scroll-mt-32 ${className}`}>
    {children}
  </h2>
);

const LinkBadge: React.FC<{ link: Link; className?: string }> = ({ link, className="" }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-neutral-800 text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow-md ${className}`}
  >
    {link.label} <ExternalLinkIcon className="w-3 h-3 opacity-60" />
  </a>
);

// ---- NEW: MARQUEE COMPONENT ----

const MarqueeItem: React.FC<{ icon: React.ReactNode; title: string; subtitle: string; colorClass: string }> = ({ icon, title, subtitle, colorClass }) => (
  <div className={`flex-shrink-0 w-[280px] sm:w-[350px] mx-4 p-6 sm:p-8 rounded-3xl ${colorClass} transition-transform hover:scale-[1.02] cursor-default`}>
    <div className="bg-white/90 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
      {icon}
    </div>
    <h3 className="font-serif text-2xl font-medium mb-2">{title}</h3>
    <p className="text-neutral-700 font-sans text-sm sm:text-base leading-relaxed opacity-90">{subtitle}</p>
  </div>
);

const Marquee: React.FC = () => {
  // Duplicating items for seamless loop
  const items = [
    { title: "Project Mariner", subtitle: "Exploring the future of human-agent interactions.", icon: <Sparkles className="w-6 h-6 text-indigo-600" />, color: "bg-indigo-100/50" },
    { title: "Gemini API", subtitle: "Launching tools for the next generation of AI devs.", icon: <BrainCircuit className="w-6 h-6 text-sky-600" />, color: "bg-sky-100/50" },
    { title: "Google AI Studio", subtitle: "Zero to one product development for Google Labs.", icon: <Rocket className="w-6 h-6 text-rose-600" />, color: "bg-rose-100/50" },
     { title: "Product Strategy", subtitle: "Leading 0 to 1 initiatives at massive scale.", icon: <MessageSquareQuote className="w-6 h-6 text-amber-600" />, color: "bg-amber-100/50" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-10 sm:py-16 bg-neutral-50 border-y border-neutral-200/50">
      <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, i) => (
            <MarqueeItem key={i} {...item} colorClass={item.color} />
        ))}
      </div>
    </div>
  );
};

// ---- NEW: INTERACTIVE HIGHLIGHT CARD ----

const HighlightCard: React.FC<{ highlight: Highlight; index: number }> = ({ highlight, index }) => {
    // Deterministic but varied styling based on index
    const styles = [
        'bg-blue-50 hover:bg-blue-100/80',
        'bg-amber-50 hover:bg-amber-100/80',
        'bg-rose-50 hover:bg-rose-100/80',
        'bg-emerald-50 hover:bg-emerald-100/80',
        'bg-violet-50 hover:bg-violet-100/80',
    ];
    const bgStyle = styles[index % styles.length];

    return (
      <div className={`group relative overflow-hidden rounded-3xl p-6 sm:p-8 ${bgStyle} transition-all duration-500 ease-out h-full flex flex-col justify-between min-h-[220px]`}>
          <div>
              <h3 className="font-serif text-xl sm:text-2xl leading-snug mb-4 group-hover:-translate-y-1 transition-transform duration-500">
                  {highlight.title}
              </h3>
          </div>

          {/* Reveal links on hover, sliding up from bottom */}
          <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <div className="flex flex-wrap gap-2">
                  {highlight.links.length > 0 ? highlight.links.map((link, i) => (
                      <LinkBadge key={i} link={link} />
                  )) : (
                      <span className="text-sm text-neutral-500 italic">Event / Internal</span>
                  )}
              </div>
          </div>
           {/* Decorational icon that fades out on hover */}
           <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-0 transition-opacity duration-500">
               <ArrowRight className="w-8 h-8" />
           </div>
      </div>
    );
}


// ---- EXPERIENCE COMPONENTS (Refined) ----

const ExperienceItem: React.FC<{ data: CompanyExperience }> = ({ data }) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-4 mb-8">
         <h3 className="text-2xl font-bold text-neutral-900">{data.company}</h3>
         <div className="h-px bg-neutral-200 flex-grow"></div>
    </div>
    <div className="space-y-12">
      {data.roles.map((role, idx) => (
        <RoleItem key={idx} role={role} isLast={idx === data.roles.length - 1} />
      ))}
    </div>
  </div>
);

const RoleItem: React.FC<{ role: JobRole; isLast: boolean }> = ({ role, isLast }) => (
  <div className="relative pl-8 sm:pl-10 group">
    {/* Sophisticated timeline line */}
    {!isLast && <div className="absolute left-[11px] top-3 bottom-[-48px] w-px bg-neutral-200 group-hover:bg-neutral-300 transition-colors" />}
    {/* Sophisticated timeline dot */}
    <div className="absolute left-0 top-[0.6rem] w-[23px] h-[23px] rounded-full border-[3px] border-neutral-50 bg-neutral-300 group-hover:bg-neutral-900 transition-colors" />

    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
      <h4 className="font-serif text-xl sm:text-2xl font-medium text-neutral-900">{role.title}</h4>
      <span className="text-sm uppercase tracking-wider text-neutral-500 font-semibold shrink-0 mt-1 sm:mt-0">{role.period}</span>
    </div>

    {role.description && (
      <p className="text-neutral-600 italic mb-4 font-serif text-lg">{role.description}</p>
    )}

    <ul className="space-y-4">
      {role.achievements.map((achievement, i) => (
        <li key={i} className="text-neutral-700 leading-relaxed flex flex-col sm:block">
          <span>{achievement.text}</span>
          {achievement.links && achievement.links.length > 0 && (
            <span className="inline-flex flex-wrap gap-2 mt-2 sm:mt-0 sm:ml-3">
               {achievement.links.map((link, j) => (
                 <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-neutral-400 hover:text-neutral-900 uppercase tracking-wider transition-colors">
                    [{link.label}]
                 </a>
               ))}
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

// ---- MAIN APP ----

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf9f6] selection:bg-amber-100 selection:text-amber-900">
      <Navigation />

      <main className="flex-grow w-full">

        {/* HERO SECTION */}
        <section className="max-w-5xl mx-auto px-6 sm:px-12 pt-12 sm:pt-24 mb-24 sm:mb-32">
          <div className="max-w-3xl animate-fade-in">
              <h1 className="font-serif text-6xl sm:text-8xl font-medium tracking-tight text-neutral-900 mb-8 leading-[0.95]">
                Building the future <br/> of AI products.
              </h1>
              <p className="text-xl sm:text-3xl text-neutral-600 font-light leading-relaxed mb-12 max-w-2xl">
                I'm <span className="font-medium text-neutral-900">Jaclyn Konzelmann</span>, Director of Product Management at Google Labs.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://jaclyn.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95"
                >
                  <SubstackIcon className="w-5 h-5" />
                  Thursday Thoughts on AI
                </a>
                <a
                  href="https://www.linkedin.com/in/jaclynkonzelmann/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-full font-medium transition-all hover:scale-105 active:scale-95"
                >
                  <LinkedInIcon className="w-5 h-5 text-[#0077B5]" />
                  Connect
                </a>
              </div>
          </div>
        </section>

        {/* MARQUEE / FEATURED */}
        <section className="mb-32">
             <div className="text-center mb-8">
                 <span className="uppercase tracking-widest text-xs font-bold text-neutral-400">Featured Work</span>
             </div>
            <Marquee />
        </section>

        <div className="max-w-5xl mx-auto px-6 sm:px-12">
            {/* ABOUT - Redesigned as a statement block */}
            <section id="about" className="mb-32 sm:mb-48 scroll-mt-32 grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                 <SectionHeading className="sticky top-32">About Me</SectionHeading>
              </div>
              <div className="md:col-span-8 prose prose-lg sm:prose-xl prose-neutral max-w-none leading-relaxed">
                <p className="font-serif text-3xl sm:text-4xl leading-snug text-neutral-900 mb-8">
                  I lead 0 to 1 initiatives like <span className="highlight-text bg-indigo-100 px-1">Project Mariner</span> and previously started <span className="highlight-text bg-rose-100 px-1">Google AI Studio</span> and the Gemini API.
                </p>
                <p className="text-neutral-600">
                  My career has spanned roles at Microsoft, co-founding a Y Combinator-backed startup,
                  and scaling products at Weebly. I'm passionate about building transformative AI experiences that feel completely natural to use.
                </p>
                <p className="text-neutral-600">
                  Beyond product, I'm a mother of three, balancing the dynamic worlds of deep tech and family life.
                </p>
              </div>
            </section>

            {/* HIGHLIGHTS - Bento Grid Style */}
            <section id="highlights" className="mb-32 sm:mb-48 scroll-mt-32">
              <SectionHeading>Press & Highlights</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
                {careerHighlights.map((item, index) => (
                     // Span 2 columns for the first few important ones to create visual variety if desired,
                     // otherwise standard grid. Let's make the first one bigger.
                   <div key={index} className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
                       <HighlightCard highlight={item} index={index} />
                   </div>
                ))}
              </div>
            </section>

            {/* EXPERIENCE - Cleaner Timeline */}
            <section id="experience" className="scroll-mt-32">
              <SectionHeading>Experience</SectionHeading>
              <div className="bg-white p-8 sm:p-12 rounded-[3rem] border border-neutral-100 shadow-sm">
                {experienceData.map((companyData, index) => (
                  <ExperienceItem key={index} data={companyData} />
                ))}
              </div>
            </section>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default App;