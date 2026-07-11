'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const navItems = [
  { key: 'home', href: '#hero' },
  { key: 'projects', href: '#projects' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '#journey' },
  { key: 'contact', href: '#contact' },
];

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="relative group flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/logo.png"
                  alt="Yah Bamba Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xl font-bold gradient-text-animated">
                Yah Bamba
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-[#00d4ff]'
                      : 'text-white/70 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0066ff] to-[#00d4ff]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Language Switcher & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <motion.button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm font-medium text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72 glass-card"
            >
              <div className="flex flex-col pt-20 px-6 gap-2">
                {/* Logo in mobile menu */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src="/images/logo.png"
                      alt="Yah Bamba Logo"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-lg font-bold gradient-text">Yah Bamba</span>
                </div>

                {navItems.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-[#00d4ff] bg-white/5'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </motion.a>
                ))}

                {/* Language toggle in mobile */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                    className="flex items-center gap-2 text-white/70 hover:text-white"
                  >
                    <Globe className="w-5 h-5" />
                    <span>{language === 'fr' ? 'Switch to English' : 'Passer en Français'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
