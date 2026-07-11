'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useInView } from '@/hooks/use-in-view';
import { Globe, Smartphone, CreditCard, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    key: 'web',
    icon: Globe,
    gradient: 'from-[#0066ff] to-[#00d4ff]',
    glow: 'rgba(0, 102, 255, 0.2)',
  },
  {
    key: 'mobile',
    icon: Smartphone,
    gradient: 'from-[#8b5cf6] to-[#a855f7]',
    glow: 'rgba(139, 92, 246, 0.2)',
  },
  {
    key: 'fintech',
    icon: CreditCard,
    gradient: 'from-[#00d4ff] to-[#00ff88]',
    glow: 'rgba(0, 212, 255, 0.2)',
  },
];

export function ServicesSection() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#0066ff]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-glow-pulse" />
            <span className="text-sm text-white/70 uppercase tracking-wider">{t.services.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.services.subtitle}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div
                className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `linear-gradient(135deg, ${service.glow}, transparent)` }}
              />
              
              {/* Card */}
              <div className="relative h-full glass-card rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-[#12121a] flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {t.services[service.key as keyof typeof t.services]?.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 mb-6 leading-relaxed">
                  {t.services[service.key as keyof typeof t.services]?.description}
                </p>

                {/* Items List */}
                <ul className="space-y-2 mb-6">
                  {t.services[service.key as keyof typeof t.services]?.items?.map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-[#00ff88] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Benefits */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-white/50 italic">
                    {t.services[service.key as keyof typeof t.services]?.benefits}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
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
