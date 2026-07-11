'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { MagneticButton } from './MagneticButton';
import { useState, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import Image from 'next/image';

const roles = [
  'Architecte de Solutions',
  'Développeur Fullstack',
  'Expert Fintech',
  'Consultant Tech',
];

export function HeroSection() {
  const { t, language } = useLanguage();
  const { shouldReduceMotion, isMobile } = useReducedMotion();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Simplified background for mobile
  const BackgroundEffects = () => {
    if (shouldReduceMotion) {
      return (
        <div className="absolute inset-0 bg-[#0a0a0f]">
          {/* Static gradient orbs - no blur for mobile performance */}
          <div className="absolute top-0 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 rounded-full" />
          <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-[#8b5cf6]/20 to-[#a855f7]/20 rounded-full" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>
      );
    }

    return (
      <div className="absolute inset-0 bg-[#0a0a0f]">
        {/* Animated Gradient Orbs - reduced blur */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-[#0066ff] to-[#00d4ff] rounded-full blur-[100px]"
        />
        
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] rounded-full blur-[100px]"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00d4ff] to-[#00ff88] rounded-full blur-[150px]"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>
    );
  };

  // Photo section with reduced animations on mobile
  const PhotoSection = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative flex justify-center lg:justify-end"
    >
      {/* Decorative Elements - simplified on mobile */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 border border-dashed border-white/10 rounded-full"
            style={{ transform: 'scale(1.3)' }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 border border-dashed border-[#0066ff]/20 rounded-full"
            style={{ transform: 'scale(1.5)' }}
          />
        </div>
      )}

      {/* Photo Container */}
      <div className="relative">
        {/* Glow Effect - simplified on mobile */}
        {!shouldReduceMotion && (
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -inset-8 bg-gradient-to-br from-[#0066ff] via-[#00d4ff] to-[#8b5cf6] rounded-full blur-3xl opacity-30"
          />
        )}

        {/* Ring */}
        {!shouldReduceMotion && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#0066ff] via-[#00d4ff] to-[#8b5cf6] p-[2px]"
          >
            <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
          </motion.div>
        )}

        {/* Photo */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-white/10">
          <Image
            src="/images/profile-main.png"
            alt="Yah Bamba - Architecte de Solutions Digitales"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 256px, 320px"
          />
        </div>

        {/* Floating Badges - hidden on mobile for cleaner UI */}
        {!isMobile && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-8 top-1/4 glass-card rounded-xl px-4 py-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
                <span className="text-sm text-white/80">
                  {language === 'fr' ? 'Freelance' : 'Freelance'}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -right-8 bottom-1/4 glass-card rounded-xl px-4 py-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm text-white/80">⭐ 5.0</span>
                <span className="text-xs text-white/40">
                  {language === 'fr' ? 'Note client' : 'Client rating'}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card rounded-full px-6 py-2"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/60">React</span>
                <span className="text-xs text-white/60">Node</span>
                <span className="text-xs text-white/60">Flutter</span>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <BackgroundEffects />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]" />
              </span>
              <span className="text-sm text-white/80">
                {language === 'fr' ? 'Freelance • Disponible' : 'Freelance • Available'}
              </span>
            </motion.div>

            {/* Name with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
            >
              <span className="text-lg text-white/50 font-light">
                {language === 'fr' ? 'Bonjour, je suis' : 'Hello, I am'}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4"
            >
              <span className="text-white">Yah </span>
              <span className="gradient-text-animated">Bamba</span>
            </motion.h1>

            {/* Typing Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-10 mb-6"
            >
              <span className="text-2xl sm:text-3xl text-white/70">
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-2xl sm:text-3xl text-[#0066ff] ml-1"
              >
                |
              </motion.span>
            </motion.div>

            {/* Main Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl text-white/60 mb-8 max-w-xl"
            >
              {language === 'fr' 
                ? 'Je conçois des systèmes digitaux et financiers qui transforment des idées en entreprises performantes.'
                : 'I design digital and financial systems that transform ideas into successful businesses.'
              }
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
            >
              {['Web', 'Mobile', 'IA', 'Fintech'].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.08 }}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-white/80 hover:border-[#0066ff]/50 hover:text-white transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs - simplified on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {isMobile ? (
                // Direct buttons on mobile (no magnetic effect)
                <>
                  <Button
                    size="lg"
                    className="px-8 py-6 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0052cc] hover:to-[#00b8e6] text-white font-semibold rounded-xl"
                    onClick={() => scrollToSection('#projects')}
                  >
                    <span className="flex items-center gap-2">
                      {language === 'fr' ? 'Voir mes projets' : 'View my projects'}
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 border-white/20 text-white hover:bg-white/5 font-semibold rounded-xl"
                    onClick={() => scrollToSection('#contact')}
                  >
                    {language === 'fr' ? 'Me contacter' : 'Contact me'}
                  </Button>
                </>
              ) : (
                // Magnetic buttons on desktop
                <>
                  <MagneticButton>
                    <Button
                      size="lg"
                      className="group relative px-8 py-6 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0052cc] hover:to-[#00b8e6] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.5)]"
                      onClick={() => scrollToSection('#projects')}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {language === 'fr' ? 'Voir mes projets' : 'View my projects'}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                  </MagneticButton>

                  <MagneticButton>
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-6 border-white/20 text-white hover:bg-white/5 hover:border-white/40 font-semibold rounded-xl transition-all duration-300"
                      onClick={() => scrollToSection('#contact')}
                    >
                      {language === 'fr' ? 'Me contacter' : 'Contact me'}
                    </Button>
                  </MagneticButton>
                </>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {[
                { number: '50+', label: language === 'fr' ? 'Projets' : 'Projects' },
                { number: '30+', label: language === 'fr' ? 'Clients' : 'Clients' },
                { number: '5+', label: language === 'fr' ? 'Années' : 'Years' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.08 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl font-bold gradient-text-animated">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Photo */}
          <PhotoSection />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40 cursor-pointer hover:text-white/60 transition-colors"
          onClick={() => scrollToSection('#positioning')}
        >
          <span className="text-xs uppercase tracking-widest">
            {language === 'fr' ? 'Défiler' : 'Scroll'}
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
