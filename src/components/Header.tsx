import { motion } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function Header({ activeSection, theme, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 z-[100] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm dark:bg-slate-950/80 dark:border-slate-800/60"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              AK
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.href
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}

              <button
                onClick={onToggleTheme}
                aria-label="Toggle dark mode"
                className="ml-2 flex items-center justify-center rounded-lg border border-slate-200 bg-white/80 p-2 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onToggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 rounded-lg border border-slate-200 bg-white/80 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.href
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
