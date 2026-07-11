'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useInView } from '@/hooks/use-in-view';
import { ExternalLink, ArrowRight, Zap, Target, TrendingUp, Calendar, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projects = [
  {
    key: 'entrefide',
    gradient: 'from-[#0066ff] to-[#8b5cf6]',
    tags: ['ERP', 'Web Platform', 'Finance'],
    icon: Zap,
    year: '2026',
    link: 'https://entreprisefide.com',
    logo: '/images/entreprisefide-logo.jpg',
  },
  {
    key: 'nour_commerce',
    gradient: 'from-[#00d4ff] to-[#00ff88]',
    tags: ['Web', 'Corporate', 'UI/UX'],
    icon: Target,
    year: '2026',
    link: '#',
    logo: '/images/nour-commerce-logo.jpg',
  },
  {
    key: 'trading_bot',
    gradient: 'from-[#8b5cf6] to-[#f59e0b]',
    tags: ['Fintech', 'IA', 'Trading'],
    icon: TrendingUp,
    year: '2020-2023',
    link: '#',
  },
  {
    key: 'future',
    gradient: 'from-[#f59e0b] to-[#ef4444]',
    tags: ['Innovation', 'Coming Soon'],
    icon: ArrowRight,
    year: '2026',
    link: '#',
  },
  {
    key: 'autres_realisations',
    gradient: 'from-[#10b981] to-[#06b6d4]',
    tags: ['Web', 'E-commerce', 'Corporate', 'UI/UX'],
    icon: Briefcase,
    year: '2020-2026',
    link: '#',
  },
];

export function ProjectsSection() {
  const { t, language } = useLanguage();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Gradient Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#0066ff] rounded-full blur-[180px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#8b5cf6] rounded-full blur-[150px]"
      />
      
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
            <span className="text-sm text-white/70 uppercase tracking-wider">{t.projects.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.projects.subtitle}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Des projets qui ont généré des résultats mesurables pour mes clients'
              : 'Projects that have generated measurable results for my clients'
            }
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div
                className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${project.gradient.includes('from-') ? '#0066ff' : '#8b5cf6'}20, transparent)`,
                }}
              />

              {/* Card */}
              <div className="relative h-full glass-card rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2">
                {/* Header */}
                <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  
                  {/* Animated Background */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-10 opacity-20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0" style={{ transform: 'rotate(45deg)' }} />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden"
                      >
                        {project.logo ? (
                          <Image 
                            src={project.logo} 
                            alt={t.projects[project.key as keyof typeof t.projects]?.title || project.key}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <project.icon className="w-10 h-10" />
                        )}
                      </motion.div>
                      <h3 className="text-2xl font-bold">
                        {t.projects[project.key as keyof typeof t.projects]?.title || project.key}
                      </h3>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-sm text-white/80 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      {t.projects.view_project}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="px-6 pt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/60 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Content */}
                <div className="p-6 pt-4 space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    {t.projects[project.key as keyof typeof t.projects]?.title || project.key}
                  </h3>

                  {/* Problem/Solution/Impact for real projects */}
                  {project.key !== 'future' && project.key !== 'trading_bot' && project.key !== 'autres_realisations' && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-semibold text-[#ff6b6b] uppercase tracking-wider">
                          {language === 'fr' ? 'Problème' : 'Problem'}
                        </span>
                        <p className="text-sm text-white/60 leading-relaxed mt-1">
                          {t.projects[project.key as keyof typeof t.projects]?.problem}
                        </p>
                      </div>
                      
                      <div>
                        <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">
                          {language === 'fr' ? 'Solution' : 'Solution'}
                        </span>
                        <p className="text-sm text-white/60 leading-relaxed mt-1">
                          {t.projects[project.key as keyof typeof t.projects]?.solution}
                        </p>
                      </div>
                      
                      <div>
                        <span className="text-xs font-semibold text-[#00ff88] uppercase tracking-wider">
                          {language === 'fr' ? 'Impact' : 'Impact'}
                        </span>
                        <p className="text-sm text-white/80 font-medium leading-relaxed mt-1">
                          {t.projects[project.key as keyof typeof t.projects]?.impact}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* For trading bot */}
                  {project.key === 'trading_bot' && (
                    <p className="text-white/60 leading-relaxed">
                      {language === 'fr' 
                        ? 'J\'ai programmé une vingtaine d\'Expert Advisors (EA) pour le trading automatisé, utilisant des algorithmes d\'intelligence artificielle pour l\'analyse de marché et l\'exécution de stratégies.'
                        : 'I programmed about twenty Expert Advisors (EA) for automated trading, using AI algorithms for market analysis and strategy execution.'
                      }
                    </p>
                  )}

                  {/* Autres Réalisations */}
                  {project.key === 'autres_realisations' && (
                    <div className="space-y-3">
                      <p className="text-white/60 leading-relaxed">
                        {language === 'fr' 
                          ? 'J\'ai créé, modifié, retouché et amélioré de nombreux sites web et applications pour divers clients : sites vitrines, e-commerce, plateformes corporate, applications métier...'
                          : 'I have created, modified, retouched and improved many websites and applications for various clients: showcase sites, e-commerce, corporate platforms, business applications...'
                        }
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2 text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                          {language === 'fr' ? 'Création de sites web' : 'Website creation'}
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                          {language === 'fr' ? 'Refonte & modernisation' : 'Redesign & modernization'}
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                          {language === 'fr' ? 'Optimisation SEO' : 'SEO optimization'}
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                          {language === 'fr' ? 'Amélioration UX/UI' : 'UX/UI improvement'}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Future Projects */}
                  {project.key === 'future' && (
                    <p className="text-white/60 leading-relaxed">
                      {t.projects.future.description}
                    </p>
                  )}
                </div>

                {/* Bottom Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-5 h-5 text-white/60" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
