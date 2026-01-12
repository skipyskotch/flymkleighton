
import React from 'react';

export const BeyondPPL: React.FC = () => {
  const ratings = [
    {
      title: "Instrument Rating",
      subtitle: "IFR PRECISION",
      desc: "Master the art of flying solely by reference to instruments. Navigate the complex National Airspace System with total confidence, regardless of visibility.",
      details: "10-Day accelerated program for written-complete candidates.",
      img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1200",
      tag: "THE NEXT STEP"
    },
    {
      title: "Multi-Engine",
      subtitle: "TWIN POWER",
      desc: "Transition to complex, multi-engine aircraft. Master asymmetric thrust, advanced systems, and engine-out emergency procedures.",
      details: "Focused on VMC mastery and high-performance safety standards.",
      img: "https://images.unsplash.com/photo-1599424423755-15980e66b885?auto=format&fit=crop&q=80&w=1200",
      tag: "ADVANCED OPS"
    },
    {
      title: "Commercial Pilot",
      subtitle: "PROFESSIONAL STANDARD",
      desc: "Refine your skills to a commercial level. Perfect your maneuvers and decision-making for a career in the flight deck.",
      details: "Prerequisites: 250 Total Hours and Private Pilot Certificate.",
      img: "https://images.unsplash.com/photo-1517030330234-94c4fa948ec3?auto=format&fit=crop&q=80&w=1200",
      tag: "CAREER TRACK"
    }
  ];

  return (
    <div className="bg-white dark:bg-graphite-950 pt-32 pb-48 text-slate-900 dark:text-white min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">
            <span className="text-amber-600 dark:text-amber-500 text-sm font-black tracking-[0.4em] uppercase mb-6 block">Beyond the PPL</span>
            <h1 className="text-7xl md:text-[8rem] font-serif font-black mb-0 leading-[0.8] tracking-tighter">
              MASTER THE <br/>
              <span className="text-amber-600 dark:text-amber-500 italic">ELEMENTS.</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-slate-500 dark:text-slate-400 font-light text-xl leading-relaxed border-l border-amber-500/30 pl-8 transition-colors duration-500">
              Your license is only the beginning. These ratings are the building blocks of an elite pilot's career.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Large Feature Card */}
          <div className="lg:col-span-7 group relative overflow-hidden rounded-[3.5rem] bg-slate-100 dark:bg-graphite-900 h-[600px] shadow-sm hover:shadow-2xl transition-all duration-700">
            <img 
              src={ratings[0].img} 
              alt={ratings[0].title} 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-graphite-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 lg:p-16">
              <span className="inline-block px-4 py-1 bg-amber-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                {ratings[0].tag}
              </span>
              <h2 className="text-5xl lg:text-7xl font-serif font-black mb-4 leading-none">{ratings[0].title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 font-light max-w-lg mb-8 transition-colors duration-500">
                {ratings[0].desc}
              </p>
              <div className="flex items-center gap-4 text-amber-600 dark:text-amber-500 font-black text-xs uppercase tracking-widest">
                <span>Requirements & Fees</span>
                <span className="w-8 h-[1px] bg-amber-500"></span>
              </div>
            </div>
          </div>

          {/* Side Stack */}
          <div className="lg:col-span-5 grid gap-8">
            {ratings.slice(1).map((rating, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-[3rem] bg-slate-100 dark:bg-graphite-900 p-10 flex flex-col justify-end shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img 
                  src={rating.img} 
                  alt={rating.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="relative z-10">
                  <span className="text-amber-600 dark:text-amber-500 text-[10px] font-black tracking-widest uppercase mb-2 block">
                    {rating.tag}
                  </span>
                  <h3 className="text-4xl font-serif font-black mb-4">{rating.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-light text-sm max-w-xs transition-colors duration-500">
                    {rating.desc}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Call to Action Mini Card */}
            <div className="bg-amber-500 p-10 rounded-[3rem] flex flex-col justify-center items-center text-center">
              <h4 className="text-black font-black text-2xl font-serif mb-4 italic">Custom Training?</h4>
              <p className="text-black/70 text-sm font-bold mb-6">Bespoke curriculum for specific aircraft types and avionics.</p>
              <a 
                href="tel:5617042008" 
                className="px-8 py-3 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Footnote Section */}
        <div className="mt-32 grid md:grid-cols-3 gap-16 border-t border-slate-200 dark:border-white/5 pt-16 transition-colors duration-500">
          <div>
            <h5 className="text-amber-600 dark:text-amber-500 font-black text-[10px] uppercase tracking-widest mb-6">Eligibility</h5>
            <p className="text-slate-500 dark:text-slate-400 font-light text-sm leading-relaxed">
              All candidates must hold a current FAA Medical Certificate and have completed their written exams for the accelerated 10-day timeline.
            </p>
          </div>
          <div>
            <h5 className="text-amber-600 dark:text-amber-500 font-black text-[10px] uppercase tracking-widest mb-6">Equipment</h5>
            <p className="text-slate-500 dark:text-slate-400 font-light text-sm leading-relaxed">
              Training is conducted in G1000-equipped glass cockpit aircraft or your own aircraft for customized transition training.
            </p>
          </div>
          <div>
            <h5 className="text-amber-600 dark:text-amber-500 font-black text-[10px] uppercase tracking-widest mb-6">Scheduling</h5>
            <p className="text-slate-500 dark:text-slate-400 font-light text-sm leading-relaxed">
              Due to high demand, IFR and Multi-Engine blocks are scheduled 4-6 weeks in advance. A retainer is required to secure your block.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
