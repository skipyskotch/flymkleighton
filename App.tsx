
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AboutInstructor } from './components/AboutInstructor';
import { PPL14Days } from './components/PPL14Days';
import { BeyondPPL } from './components/BeyondPPL';
import { AircraftConsulting } from './components/AircraftConsulting';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export enum Page {
  Home = 'home',
  PPL14 = 'ppl-in-14-days',
  About = 'about-michael',
  OtherRatings = 'other-ratings',
  Aircraft = 'aircraft-consulting',
  Contact = 'contact'
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.scrollTo(0, 0);
  }, [isDark, currentPage]);

  const toggleTheme = () => setIsDark(!isDark);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <>
            <Hero onCtaClick={() => setCurrentPage(Page.PPL14)} />
            <Features onNavigate={setCurrentPage} />
          </>
        );
      case Page.About:
        return <AboutInstructor />;
      case Page.PPL14:
        return <PPL14Days />;
      case Page.OtherRatings:
        return <BeyondPPL />;
      case Page.Aircraft:
        return <AircraftConsulting />;
      case Page.Contact:
        return <Contact />;
      default:
        return <Hero onCtaClick={() => setCurrentPage(Page.PPL14)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-graphite-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 font-sans">
      <Navbar activePage={currentPage} onNavigate={setCurrentPage} isDark={isDark} toggleTheme={toggleTheme} />
      <main className="relative">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;