'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useInView } from '@/hooks/use-in-view';
import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = t.testimonials.items;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 section-bg" />
      
      {/* Decorative Quote */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-64 h-64 text-white" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Star className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-sm text-white/70 uppercase tracking-wider">{t.testimonials.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t.testimonials.subtitle}
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative glass-card rounded-3xl p-8 sm:p-12">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#8b5cf6] flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f59e0b] fill-[#f59e0b]" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 text-center sm:text-left italic">
                "{testimonials[activeIndex]?.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 justify-center sm:justify-start">
                <Avatar className="w-14 h-14 border-2 border-[#0066ff]/30">
                  <AvatarFallback className="bg-gradient-to-br from-[#0066ff] to-[#8b5cf6] text-white font-bold">
                    {testimonials[activeIndex]?.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-white font-semibold">
                    {testimonials[activeIndex]?.name}
                  </div>
                  <div className="text-white/50 text-sm">
                    {testimonials[activeIndex]?.role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-gradient-to-r from-[#0066ff] to-[#00d4ff]'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ y: -5 }}
              className={`text-left p-4 rounded-2xl transition-all duration-300 ${
                index === activeIndex
                  ? 'glass-card border-[#0066ff]/30'
                  : 'glass-card opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gradient-to-br from-[#0066ff] to-[#8b5cf6] text-white text-xs font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm text-white font-medium truncate">
                    {testimonial.name}
                  </div>
                </div>
              </div>
              <p className="text-xs text-white/50 line-clamp-2">
                "{testimonial.content}"
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
