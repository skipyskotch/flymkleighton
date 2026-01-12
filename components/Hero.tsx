
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-graphite-950 transition-colors duration-500">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=2500" 
          alt="Modern aircraft cockpit" 
          className="w-full h-full object-cover opacity-80 dark:opacity-50 scale-105 animate-slow-zoom transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 dark:from-graphite-950/80 via-transparent to-slate-50 dark:to-graphite-950 transition-all duration-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col items-center lg:items-start">
        <div className="inline-block px-4 py-1.5 border-l-2 border-amber-500 mb-8 animate-slide-in">
          <span className="text-amber-600 dark:text-amber-500 text-sm font-black tracking-[0.4em] uppercase">Michael Leighton Mastery</span>
        </div>
        
        <h1 className="text-[12vw] lg:text-[10rem] font-serif font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[0.8] animate-fade-in-up">
          ABOVE <br/>
          <span className="text-amber-600 dark:text-amber-500 italic">ORDINARY.</span>
        </h1>
        
        <div className="max-w-2xl animate-fade-in-up delay-200">
          <p className="text-xl lg:text-3xl text-slate-700 dark:text-slate-300 font-light mb-12 leading-tight">
            Professional flight instruction redefined. Signature 14-day PPL bootcamp for those who refuse to wait for the sky.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <button
              onClick={onCtaClick}
              className="px-12 py-5 bg-slate-900 dark:bg-amber-500 text-white dark:text-black text-sm font-black uppercase tracking-widest rounded-full hover:bg-amber-600 dark:hover:bg-white dark:hover:text-black transition-all shadow-2xl hover:-translate-y-1"
            >
              Enter The Cockpit
            </button>
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href='tel:5617042008'}>
              <div className="w-12 h-12 rounded-full border border-slate-300 dark:border-slate-800 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                <span className="text-amber-600 dark:text-amber-500">📞</span>
              </div>
              <span className="text-slate-900 dark:text-white font-bold tracking-tighter">561.704.2008</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-24 hidden lg:block rotate-90 origin-right pr-12">
        <span className="text-[10px] text-slate-400 dark:text-slate-600 font-black tracking-[1em] uppercase">KFPR — Fort Pierce — FL</span>
      </div>
    </div>
  );
};