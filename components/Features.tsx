
import React from 'react';
import { Page } from '../App';

interface FeaturesProps {
  onNavigate: (page: Page) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  const services = [
    {
      title: '14-Day Mastery',
      subtitle: 'ZERO TO PILOT',
      description: 'An immersive, synchronized curriculum designed to condense months of struggle into two weeks of total focus.',
      page: Page.PPL14
    },
    {
      title: 'Advanced Ratings',
      subtitle: 'IFR & MULTI-ENGINE',
      description: 'Precision training for instrument and commercial operations, led by a 16,000-hour master instructor.',
      page: Page.OtherRatings
    },
    {
      title: 'Acquisitions',
      subtitle: 'AIRCRAFT CONSULTING',
      description: 'Avoid the pitfalls of ownership. Mechanical audits and procurement advice for a transparent flat fee.',
      page: Page.Aircraft
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-graphite-950 transition-colors duration-500 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="relative group p-12 lg:p-16 rounded-[3rem] border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-graphite-900 transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl"
              onClick={() => onNavigate(service.page)}
            >
              <div className="absolute top-0 right-0 p-8 text-amber-500/10 font-serif font-black text-8xl opacity-0 group-hover:opacity-100 transition-opacity">0{idx+1}</div>
              <span className="text-amber-600 dark:text-amber-500 text-xs font-black tracking-[0.3em] uppercase mb-4 block">{service.subtitle}</span>
              <h3 className="text-4xl font-serif font-black text-slate-900 dark:text-white mb-6 leading-none group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-10 text-lg transition-colors duration-500">{service.description}</p>
              <div className="inline-flex items-center gap-4 text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest border-b border-amber-500 pb-2">
                Explore Program <span>→</span>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-40 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 border border-amber-500/20 rounded-[4rem]"></div>
            <img 
              src="https://generativelanguage.googleapis.com/v1beta/files/scb7d187z578" 
              alt="Michael Leighton" 
              className="relative z-10 w-full rounded-[3.5rem] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 glass p-10 hidden md:block rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-white/5 transition-all duration-500">
              <span className="block text-5xl font-black text-amber-600 dark:text-amber-500 mb-2">16K+</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest">Instructional Hours Given</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-black text-amber-600 dark:text-amber-500 tracking-[0.5em] uppercase mb-8">The Instructor</h2>
            <h3 className="text-6xl md:text-8xl font-serif font-black text-slate-900 dark:text-white mb-10 leading-none">MICHAEL <br/> LEIGHTON.</h3>
            <p className="text-2xl text-slate-600 dark:text-slate-300 font-light italic mb-8 border-l-2 border-amber-500/50 pl-8 transition-colors duration-500">
              "I teach because the standard way of flight instruction is fundamentally broken. My students don't just learn to fly; they learn to command."
            </p>
            <button 
              onClick={() => onNavigate(Page.About)}
              className="px-10 py-5 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
            >
              Full Biography
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
