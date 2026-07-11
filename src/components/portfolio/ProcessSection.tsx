'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useInView } from '@/hooks/use-in-view';
import { MessageSquare, Search, Lightbulb, Code, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discussion',
    description: 'Écoute active de vos besoins et objectifs pour comprendre votre vision',
    color: '#0066ff',
    step: '01',
  },
  {
    icon: Search,
    title: 'Analyse',
    description: 'Étude approfondie de votre marché, concurrence et opportunités',
    color: '#00d4ff',
    step: '02',
  },
  {
    icon: Lightbulb,
    title: 'Conception',
    description: 'Architecture technique et design UX optimisés pour vos utilisateurs',
    color: '#8b5cf6',
    step: '03',
  },
  {
    icon: Code,
    title: 'Développement',
    description: 'Code propre, testé et documenté avec méthodologie agile',
    color: '#00ff88',
    step: '04',
  },
  {
    icon: Rocket,
    title: 'Lancement',
    description: 'Déploiement sécurisé et formation de votre équipe',
    color: '#f59e0b',
    step: '05',
  },
  {
    icon: BarChart,
    title: 'Suivi',
    description: 'Support continu et optimisations basées sur les données',
    color: '#ef4444',
    step: '06',
  },
];

export function ProcessSection() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#0066ff]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-glow-pulse" />
            <span className="text-sm text-white/70 uppercase tracking-wider">Méthodologie</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Comment je transforme vos idées
            <span className="gradient-text block">en solutions concrètes</span>
          </h2>
        </motion.div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div
                className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `linear-gradient(135deg, ${step.color}30, transparent)` }}
              />
              
              {/* Card */}
              <div className="relative h-full glass-card rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                  {step.step}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  <step.icon className="w-6 h-6" style={{ color: step.color }} />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>

                {/* Progress Line */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/30">Étape {step.step}</span>
                    <div className="flex gap-1">
                      {steps.map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            i <= index ? 'bg-[#0066ff]' : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Prêt à démarrer votre projet ?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discutons de votre projet
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
