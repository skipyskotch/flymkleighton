
import React from 'react';

export const AboutInstructor: React.FC = () => {
  return (
    <div className="bg-white dark:bg-graphite-950 transition-colors duration-500 pt-32 pb-32 text-slate-900 dark:text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-1000 shadow-2xl">
              <img 
                src="https://generativelanguage.googleapis.com/v1beta/files/scb7d187z578" 
                alt="Michael Leighton" 
                className="w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-graphite-950 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-10 -right-6 z-20 glass p-10 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-xl transition-all duration-500">
               <span className="block text-6xl font-black text-amber-600 dark:text-amber-500 mb-2">16K+</span>
               <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest">Instructional Hours</span>
            </div>
          </div>

          <div className="lg:w-1/2 mt-20 lg:mt-0">
            <span className="text-amber-600 dark:text-amber-500 font-black tracking-[0.5em] uppercase text-xs mb-6 block">Master Instructor</span>
            <h1 className="text-7xl lg:text-9xl font-serif font-black mb-10 leading-[0.85] tracking-tighter">
              MICHAEL <br/> LEIGHTON.
            </h1>
            
            <p className="text-3xl text-slate-700 dark:text-slate-300 font-light mb-12 leading-tight italic transition-colors duration-500">
              "The cockpit is a thinking man's environment. My job is to teach you to think ahead of the aircraft."
            </p>
            
            <div className="space-y-12 text-slate-500 dark:text-slate-400 font-light text-lg leading-relaxed transition-colors duration-500">
              <p>
                Since 1988, Michael has been bridging the gap between flight theory and real-world command. As both a Gold Seal Instructor and an A&P Mechanic, he brings a rare "inside-out" perspective to every lesson.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-slate-50 dark:bg-graphite-900 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-sm transition-all duration-500">
                  <span className="text-amber-500 text-3xl block mb-2">🎖️</span>
                  <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase mb-1">Gold Seal</h4>
                  <p className="text-xs transition-colors duration-500">FAA Elite Recognition</p>
                </div>
                <div className="p-8 bg-slate-50 dark:bg-graphite-900 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-sm transition-all duration-500">
                  <span className="text-amber-500 text-3xl block mb-2">🔧</span>
                  <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase mb-1">A&P / IA</h4>
                  <p className="text-xs transition-colors duration-500">Mechanical Mastery</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
               <a href="tel:5617042008" className="inline-block px-12 py-6 bg-slate-900 dark:bg-amber-500 text-white dark:text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-amber-600 transition-all shadow-xl">
                 Contact Directly
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};