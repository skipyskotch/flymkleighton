
import React from 'react';

export const AircraftConsulting: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-graphite-950 min-h-screen py-32 text-slate-900 dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <div>
            <span className="text-amber-600 dark:text-amber-500 text-xs font-black tracking-[0.4em] uppercase mb-6 block">Acquisition Strategy</span>
            <h1 className="text-7xl lg:text-9xl font-serif font-black mb-10 leading-[0.85] tracking-tighter">
              AIRCRAFT <br/><span className="text-amber-600 dark:text-amber-500 italic">AUDITS.</span>
            </h1>
            <p className="text-2xl text-slate-700 dark:text-slate-300 font-light leading-tight mb-12 transition-colors duration-500">
              Don't buy a liability. Michael provides expert mechanical and logbook audits for a transparent flat fee. No commissions, no conflicts.
            </p>
            <div className="flex gap-6">
               <div className="p-8 bg-white dark:bg-graphite-900 rounded-[2.5rem] flex-1 border border-slate-200 dark:border-white/5 shadow-sm transition-all duration-500">
                  <span className="text-amber-500 text-3xl block mb-2">🛡️</span>
                  <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase mb-1">Unbiased</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Zero Commission Model</p>
               </div>
               <div className="p-8 bg-white dark:bg-graphite-900 rounded-[2.5rem] flex-1 border border-slate-200 dark:border-white/5 shadow-sm transition-all duration-500">
                  <span className="text-amber-500 text-3xl block mb-2">🔍</span>
                  <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase mb-1">Technical</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">A&P / IA Logbook Review</p>
               </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden rotate-[-2deg] shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1200" 
                alt="Aircraft Hangar" 
                className="w-full aspect-square object-cover opacity-90 dark:opacity-80 transition-opacity duration-700"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-full h-full border border-amber-500/20 rounded-[4rem] z-0 transition-all duration-500"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'The Flat Fee', desc: 'Michael charges a transparent flat rate regardless of the aircraft price. This ensures his advice is purely focused on your safety and satisfaction.' },
            { title: 'Pre-Buy Ops', desc: 'From the wingspan to the engine mounts, every inch is scrutinized. We go where the aircraft is, conducting nationwide audits.' },
            { title: 'Negotiation', desc: 'Armed with a technical report, you gain the upper hand in pricing. We identify the hidden costs so you don\'t have to pay for them later.' }
          ].map((item, idx) => (
            <div key={idx} className="p-16 bg-white dark:bg-graphite-900 border border-slate-200 dark:border-white/5 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500">
              <h3 className="text-2xl font-serif font-black mb-6 text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed transition-colors duration-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
