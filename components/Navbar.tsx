
import React, { useState } from 'react';
import { Page } from '../App';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: Page.Home },
    { label: '14-Day Mastery', value: Page.PPL14 },
    { label: 'Ratings', value: Page.OtherRatings },
    { label: 'Acquisitions', value: Page.Aircraft },
    { label: 'Instructor', value: Page.About },
  ];

  return (
    <nav className="fixed w-full z-50 top-6 px-4 pointer-events-none">
      <div className="max-w-6xl mx-auto glass rounded-full px-6 py-3 flex justify-between items-center pointer-events-auto shadow-2xl border border-slate-200/50 dark:border-white/10 transition-all duration-500">
        <div className="flex items-center cursor-pointer group" onClick={() => onNavigate(Page.Home)}>
          <div className="w-8 h-8 bg-amber-500 flex items-center justify-center rounded-sm mr-3 transition-transform group-hover:rotate-45">
            <span className="text-black font-black text-xs">ML</span>
          </div>
          <span className="text-lg font-serif font-black tracking-tighter text-slate-900 dark:text-white">FLYMKLEIGHTON</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                activePage === item.value 
                ? 'text-amber-600 dark:text-amber-500 bg-amber-500/10' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="h-4 w-[1px] bg-slate-300 dark:bg-white/10 mx-4"></div>

          <button
            onClick={toggleTheme}
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.05 16.05l.707.707M7.757 7.757l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => onNavigate(Page.Contact)}
            className="ml-4 px-6 py-2 bg-slate-900 dark:bg-amber-500 text-white dark:text-black text-[10px] font-black uppercase rounded-full hover:bg-amber-600 transition-colors shadow-lg"
          >
            Connect
          </button>
        </div>

        <div className="flex lg:hidden items-center space-x-2 pointer-events-auto">
          <button onClick={toggleTheme} className="p-2 text-slate-900 dark:text-white">
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-900 dark:text-white"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round"/> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round"/>}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 glass rounded-[2.5rem] p-8 pointer-events-auto shadow-2xl border border-slate-200 dark:border-white/10 transition-all">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => { onNavigate(item.value); setIsOpen(false); }}
                className={`text-left py-2 font-black uppercase tracking-widest text-sm ${activePage === item.value ? 'text-amber-500' : 'text-slate-600 dark:text-slate-300'}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { onNavigate(Page.Contact); setIsOpen(false); }}
              className="w-full py-4 bg-amber-500 text-black font-black uppercase rounded-2xl"
            >
              Start Your Training
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};