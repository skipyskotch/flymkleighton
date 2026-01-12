
import React from 'react';

export const PPL14Days: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-graphite-950 min-h-screen text-slate-900 dark:text-white transition-colors duration-500">
      <div className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&q=80&w=2500" 
            className="w-full h-full object-cover opacity-80 dark:opacity-40 animate-slow-zoom transition-opacity duration-700"
            alt="Aircraft in flight"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-graphite-950 via-transparent to-slate-50 dark:to-graphite-950 transition-all duration-500"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl px-6">
          <div className="w-12 h-1 bg-amber-500 mx-auto mb-12"></div>
          <h1 className="text-7xl md:text-[10rem] font-serif font-black mb-8 leading-[0.8] tracking-tighter">
            THE <span className="text-amber-600 dark:text-amber-500 italic">14 DAY</span> <br/>MANIFESTO.
          </h1>
          <p className="text-xl md:text-3xl text-slate-700 dark:text-slate-300 font-light max-w-3xl mx-auto leading-tight transition-colors duration-500">
            Immersion is not a shortcut. It is the most effective way to build muscle memory and aeronautical judgment. 
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-24 mb-40">
          <div className="space-y-12">
            <h2 className="text-5xl font-serif font-black italic">The Power of Coincidence</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed transition-colors duration-500">
              Standard schools suffer from the "Latency Gap." You study theory on Monday, but don't fly until Friday. By then, the connection is lost.
            </p>
            <div className="p-10 border border-amber-500/20 bg-amber-500/5 rounded-[3rem]">
              <h3 className="text-amber-600 dark:text-amber-500 font-black tracking-widest text-xs uppercase mb-4">The Solution</h3>
              <p className="text-2xl font-serif">We fly twice daily. Every ground lesson is immediately validated in the cockpit. Theory and practice collide in real-time.</p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { num: '01', title: 'Eliminate Decay', text: 'No knowledge drop-off between lessons. Progress is compound and exponential.' },
              { num: '02', title: 'Total Immersion', text: 'You live, breathe, and sleep aviation for two weeks. Distractions are removed.' },
              { num: '03', title: 'Mastery', text: 'You finish the course not just with a license, but with the confidence of a seasoned pilot.' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white dark:bg-graphite-900/50 border border-slate-200 dark:border-white/5 rounded-[2.5rem] shadow-sm flex flex-col justify-between transition-all duration-500">
                <span className="text-amber-600 dark:text-amber-500 font-black text-3xl">{item.num}</span>
                <div className="mt-4">
                  <h4 className="font-black uppercase tracking-widest mb-2 text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors duration-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-amber-500 p-16 lg:p-32 rounded-[4rem] text-center text-white dark:text-black shadow-2xl transition-all duration-500">
          <h3 className="text-6xl md:text-8xl font-serif font-black mb-12 leading-none tracking-tighter">COMMAND THE <br/> SKY NOW.</h3>
          <a href="tel:5617042008" className="inline-block px-16 py-6 bg-white dark:bg-graphite-950 text-black dark:text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-amber-500 dark:hover:bg-white dark:hover:text-black transition-all">
            Secure Your Dates
          </a>
          <p className="mt-12 font-black text-xs tracking-widest uppercase opacity-60">Limited slots available per quarter.</p>
        </div>
      </div>
    </div>
  );
};
