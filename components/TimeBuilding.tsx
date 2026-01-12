
import React from 'react';

export const TimeBuilding: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">Strategic Time Building</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Build quality hours with intent. Every hour counts when it's structured by experience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Quality Over Quantity",
              description: "Learn how to fly long-distance cross-countries, navigate complex airspace, and handle diverse weather conditions correctly.",
              icon: "🎯"
            },
            {
              title: "Economic Efficiency",
              description: "Michael provides guidance on the most cost-effective ways to build time, including strategic location choices.",
              icon: "💰"
            },
            {
              title: "Career Preparation",
              description: "Mentorship on airline interview prep, resume building, and professional pilot etiquette while you fly.",
              icon: "👨‍✈️"
            }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50 dark:bg-slate-900 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-slate-700 dark:text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-stretch bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="md:w-1/2 h-80 md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Night flight preparation"
            />
          </div>
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-6">Fly with a Purpose</h2>
            <p className="text-slate-700 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Don't reach your 1,500 hours without having seen real-world scenarios. 
              Michael uses his 16,000+ hours to ensure your time-building phase prepares you for the realities of the airline industry.
            </p>
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <a href="tel:5617042008" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold text-xl hover:translate-x-2 transition-transform">
                <span className="mr-3">📞</span> 561-704-2008
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
