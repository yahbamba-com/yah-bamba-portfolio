'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useInView } from '@/hooks/use-in-view';

export function PositioningSection() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.3 });

  return (
    <section
      id="positioning"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 section-bg" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff] animate-glow-pulse" />
            <span className="text-sm text-white/70 uppercase tracking-wider">{t.positioning.title}</span>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0066ff]/5 via-[#00d4ff]/5 to-[#8b5cf6]/5 rounded-3xl blur-xl" />
            
            <div className="relative glass-card rounded-3xl p-8 sm:p-12">
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Yah Bamba</span>
                <span className="block text-lg sm:text-xl text-white/50 font-normal mt-2">
                  Architecte de Solutions Digitales & Financières
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                {t.positioning.description}
              </p>

              {/* Stats / Highlights */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { number: '5+', label: 'Années d\'expérience' },
                  { number: '50+', label: 'Projets réalisés' },
                  { number: '30+', label: 'Clients satisfaits' },
                  { number: '100%', label: 'Engagement qualité' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl sm:text-4xl font-bold gradient-text-animated">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
