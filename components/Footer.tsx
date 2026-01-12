
import React from 'react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-100 dark:bg-graphite-950 text-slate-900 dark:text-white py-32 transition-colors duration-500 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="max-w-md">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-amber-500 text-black flex items-center justify-center font-black text-xs mr-3">ML</div>
              <span className="text-2xl font-serif font-black tracking-tighter text-slate-900 dark:text-white">FLYMKLEIGHTON</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-light text-lg leading-relaxed mb-12 transition-colors duration-500">
              Elite flight instruction from Fort Pierce, Florida. Transforming enthusiasts into commanders since 1988.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-600 dark:text-slate-300">
                <li><button onClick={() => onNavigate(Page.Home)} className="hover:text-amber-500 transition-colors">Home</button></li>
                <li><button onClick={() => onNavigate(Page.PPL14)} className="hover:text-amber-500 transition-colors">Mastery</button></li>
                <li><button onClick={() => onNavigate(Page.Aircraft)} className="hover:text-amber-500 transition-colors">Acquisitions</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Inquiries</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-600 dark:text-slate-300">
                <li><a href="tel:5617042008" className="hover:text-amber-500 transition-colors">561.704.2008</a></li>
                <li><a href="mailto:flymkleighton@gmail.com" className="hover:text-amber-500 transition-colors">flymkleighton@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-slate-200 dark:border-white/10 flex justify-between items-center text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest transition-colors duration-500">
          <p>© {new Date().getFullYear()} Michael Leighton</p>
          <p>KFPR FL USA</p>
        </div>
      </div>
    </footer>
  );
};
