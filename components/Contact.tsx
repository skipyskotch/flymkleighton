
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-graphite-950 py-32 px-6 text-slate-900 dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-amber-600 dark:text-amber-500 text-xs font-black tracking-[0.5em] uppercase mb-6 block">Direct Inquiry</span>
          <h1 className="text-7xl md:text-9xl font-serif font-black mb-10 leading-[0.85] tracking-tighter transition-colors duration-500">FILE YOUR <br/><span className="text-amber-600 dark:text-amber-500 italic">FLIGHT PLAN.</span></h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto transition-colors duration-500">
            Ready to commit to your training or acquisition? Provide your details below and Michael will contact you personally.
          </p>
        </div>

        <div className="bg-white dark:bg-graphite-900 p-12 md:p-20 rounded-[4rem] border border-slate-200 dark:border-white/5 shadow-2xl transition-all duration-500">
          <form className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                <input type="text" className="w-full bg-slate-50 dark:bg-graphite-950/40 border-b border-slate-200 dark:border-white/20 px-4 py-4 focus:border-amber-500 outline-none transition-all font-light text-lg text-slate-900 dark:text-white" placeholder="John Pilot" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number</label>
                <input type="tel" className="w-full bg-slate-50 dark:bg-graphite-950/40 border-b border-slate-200 dark:border-white/20 px-4 py-4 focus:border-amber-500 outline-none transition-all font-light text-lg text-slate-900 dark:text-white" placeholder="555.000.0000" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Program Interest</label>
              <select className="w-full bg-slate-50 dark:bg-graphite-950/40 border-b border-slate-200 dark:border-white/20 px-4 py-4 focus:border-amber-500 outline-none transition-all font-light text-lg appearance-none text-slate-900 dark:text-white">
                <option className="dark:bg-graphite-950">14-Day PPL Mastery</option>
                <option className="dark:bg-graphite-950">Advanced Ratings (IFR/Multi)</option>
                <option className="dark:bg-graphite-950">Aircraft Acquisition Audit</option>
                <option className="dark:bg-graphite-950">Time Building Mentorship</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Message</label>
              <textarea rows={4} className="w-full bg-slate-50 dark:bg-graphite-950/40 border-b border-slate-200 dark:border-white/20 px-4 py-4 focus:border-amber-500 outline-none transition-all font-light text-lg text-slate-900 dark:text-white" placeholder="Describe your aviation goals..."></textarea>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
               <div className="text-left">
                  <p className="text-slate-700 dark:text-slate-400 font-bold text-sm tracking-tighter transition-colors duration-500">Direct Line: 561.704.2008</p>
                  <p className="text-slate-500 dark:text-slate-600 text-xs uppercase tracking-widest transition-colors duration-500">Available 08:00 - 18:00 EST</p>
               </div>
               <button className="px-16 py-6 bg-slate-900 dark:bg-amber-500 text-white dark:text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-amber-600 transition-all shadow-2xl">
                 Submit Inquiry
               </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
