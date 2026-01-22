import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Impact } from './components/Impact';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const finishLoading = () => {
      window.setTimeout(() => setIsLoading(false), 450);
    };

    if (document.readyState === 'complete') {
      finishLoading();
      return;
    }

    window.addEventListener('load', finishLoading);
    return () => window.removeEventListener('load', finishLoading);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[200] grid place-items-center bg-white"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="h-10 w-10 rounded-full border-2 border-blue-200 border-t-blue-600 animate-spin" />
              <div className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Loading
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
