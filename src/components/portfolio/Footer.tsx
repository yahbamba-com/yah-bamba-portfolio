'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left"
          >
            <span className="text-2xl font-bold gradient-text-animated">
              Yah Bamba
            </span>
            <p className="text-sm text-white/40 mt-1">
              Architecte de Solutions Digitales & Financières
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center sm:text-right"
          >
            <p className="text-sm text-white/40 flex items-center gap-1">
              © {currentYear} Yah Bamba. {t.footer.rights}.
            </p>
            <p className="text-xs text-white/30 mt-1 flex items-center justify-center sm:justify-end gap-1">
              {t.footer.made_with} <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            </p>
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={scrollToTop}
            className="hidden sm:flex w-10 h-10 rounded-full glass items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-white/5"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
            <a href="#hero" className="hover:text-white transition-colors">Accueil</a>
            <a href="#projects" className="hover:text-white transition-colors">Projets</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#journey" className="hover:text-white transition-colors">À propos</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
