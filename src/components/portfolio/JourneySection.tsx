'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useInView } from '@/hooks/use-in-view';
import { Briefcase, TrendingUp, Code, Rocket, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const timelineItems = [
  {
    icon: Briefcase,
    title: 'Analyste Financier',
    description: 'Gestion de portefeuille & Analyse des risques',
    color: '#0066ff',
  },
  {
    icon: TrendingUp,
    title: 'Expert Advisor Developer',
    description: 'Automatisation de stratégies de trading',
    color: '#00d4ff',
  },
  {
    icon: Code,
    title: 'Développeur Fullstack',
    description: 'Web & Mobile • IA • Fintech',
    color: '#8b5cf6',
  },
  {
    icon: Rocket,
    title: 'Architecte de Solutions',
    description: 'Solutions sur mesure pour entreprises',
    color: '#00ff88',
  },
];

export function JourneySection() {
  const { t, language } = useLanguage();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="journey"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Gradient Orb */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0066ff]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <GraduationCap className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm text-white/70 uppercase tracking-wider">{t.journey.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {language === 'fr' 
              ? 'Mon parcours unique'
              : 'My unique journey'
            }
          </h2>
        </motion.div>

        {/* Journey Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -inset-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border border-dashed border-white/10 rounded-3xl"
                />
              </div>

              {/* Photo Container */}
              <div className="relative rounded-3xl overflow-hidden">
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0066ff] via-[#00d4ff] to-[#8b5cf6] rounded-3xl blur opacity-20" />
                
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/profile-about.jpg"
                    alt="Yah Bamba - Parcours professionnel"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                </div>
              </div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-xs text-white/50">
                    {language === 'fr' ? 'Années d\'expérience' : 'Years of experience'}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-4 -left-4 glass-card rounded-xl px-4 py-2"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
                  <span className="text-sm text-white/80">
                    {language === 'fr' ? 'Finance + Tech' : 'Finance + Tech'}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {t.journey.intro}
            </h3>
            
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-white/70 leading-relaxed"
              >
                {t.journey.paragraph1}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-white/70 leading-relaxed"
              >
                {t.journey.paragraph2}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-white/70 leading-relaxed"
              >
                {t.journey.paragraph3}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-lg text-white/90 font-medium leading-relaxed gradient-text"
              >
                {t.journey.paragraph4}
              </motion.p>
            </div>

            {/* Timeline */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-sm text-white/50 uppercase tracking-wider mb-4">
                {language === 'fr' ? 'Évolution' : 'Evolution'}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-white/40">{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
