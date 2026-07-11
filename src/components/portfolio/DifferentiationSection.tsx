'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useInView } from '@/hooks/use-in-view';
import { Check, X, Zap, Shield, Target, Clock } from 'lucide-react';

const strengths = [
  { icon: Target, key: 'listening', color: '#0066ff' },
  { icon: Zap, key: 'custom', color: '#00d4ff' },
  { icon: Clock, key: 'execution', color: '#8b5cf6' },
  { icon: Shield, key: 'quality', color: '#00ff88' },
];

const refused = [
  { key: 'promises' },
  { key: 'unstructured' },
  { key: 'compromise' },
];

export function DifferentiationSection() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.3 });

  return (
    <section
      id="differentiation"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 section-bg" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#0066ff]/5 to-transparent rounded-full" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Main Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              <span className="text-white/60">{t.differentiation.title}</span>
            </h2>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-animated">
              {t.differentiation.subtitle}
            </p>
          </motion.div>

          {/* Right: Strengths vs Refused */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Strengths */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#00ff88]" />
                Ce que j'offre
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {strengths.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <span className="text-white/80 text-sm font-medium">
                      {(t.differentiation.points as any)[item.key]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Refused */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card rounded-2xl p-6 border-red-500/20"
            >
              <h3 className="text-lg font-semibold text-white/60 mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-red-400" />
                {t.differentiation.refused.title}
              </h3>
              <div className="space-y-3">
                {refused.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 text-white/50"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                    <span className="text-sm">
                      {(t.differentiation.refused as any)[item.key]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
