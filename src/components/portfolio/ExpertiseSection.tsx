'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useInView } from '@/hooks/use-in-view';
import { Code2, Server, Smartphone, Brain, Wallet } from 'lucide-react';

const expertiseAreas = [
  {
    key: 'frontend',
    icon: Code2,
    color: '#0066ff',
    gradient: 'from-[#0066ff] to-[#00d4ff]',
  },
  {
    key: 'backend',
    icon: Server,
    color: '#00d4ff',
    gradient: 'from-[#00d4ff] to-[#8b5cf6]',
  },
  {
    key: 'mobile',
    icon: Smartphone,
    color: '#8b5cf6',
    gradient: 'from-[#8b5cf6] to-[#a855f7]',
  },
  {
    key: 'ai',
    icon: Brain,
    color: '#00ff88',
    gradient: 'from-[#00ff88] to-[#00d4ff]',
  },
  {
    key: 'fintech',
    icon: Wallet,
    color: '#f59e0b',
    gradient: 'from-[#f59e0b] to-[#ef4444]',
  },
];

export function ExpertiseSection() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="expertise"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 section-bg" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Code2 className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm text-white/70 uppercase tracking-wider">{t.expertise.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.expertise.subtitle}
          </h2>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                style={{ background: area.color, opacity: 0.15 }}
              />
              
              {/* Card */}
              <div className="relative h-full glass-card rounded-2xl p-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${area.color}20` }}
                  >
                    <area.icon className="w-5 h-5" style={{ color: area.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {t.expertise[area.key as keyof typeof t.expertise]?.title}
                  </h3>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {t.expertise[area.key as keyof typeof t.expertise]?.items?.map((tech: string, i: number) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 + i * 0.03 }}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/5 text-white/70 border border-white/10 hover:border-white/30 hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Tech Stack Display */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl glass-card p-8">
            {/* Animated Background Lines */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: '-100%',
                    right: '-100%',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <p className="text-lg text-white/60 mb-6">
                Technologies maîtrisées pour des solutions robustes
              </p>
              
              {/* Tech Icons Row */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                    className="group"
                  >
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#0066ff]/50 hover:bg-white/10 transition-all duration-300 cursor-default">
                      <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                        {tech}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
