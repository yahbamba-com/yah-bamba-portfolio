'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useInView } from '@/hooks/use-in-view';
import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export function ContactSection() {
  const { t, language } = useLanguage();
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success(t.contact.form.success);

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
    }, 3000);
  };

  const whatsappNumber = '+2250160000997';
  const whatsappMessage = language === 'fr' 
    ? 'Bonjour Yah, je souhaite discuter de mon projet...'
    : 'Hello Yah, I would like to discuss my project...';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066ff]/10 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <MessageCircle className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm text-white/70 uppercase tracking-wider">{t.contact.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contact.subtitle}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 glass-card rounded-2xl hover:border-[#25D366]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">{t.contact.whatsapp}</div>
                  <div className="text-white font-semibold">+225 01 60 00 09 97</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:yahbamba8@gmail.com"
                className="group flex items-center gap-4 p-5 glass-card rounded-2xl hover:border-[#0066ff]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0066ff]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-[#0066ff]" />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">{t.contact.email_label}</div>
                  <div className="text-white font-semibold">yahbamba8@gmail.com</div>
                </div>
              </a>

              {/* Phone */}
              <div className="group flex items-center gap-4 p-5 glass-card rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">{t.contact.phone_label}</div>
                  <div className="text-white font-semibold">+225 01 60 00 09 97</div>
                </div>
              </div>
            </div>

            {/* Vision Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#0066ff]/10 to-[#8b5cf6]/10 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{t.vision.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {t.vision.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="glass-card rounded-3xl p-6 sm:p-8">
                {/* Name */}
                <div className="space-y-2 mb-5">
                  <Label htmlFor="name" className="text-white/70">
                    {t.contact.form.name}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#0066ff] focus:ring-[#0066ff]/20"
                    placeholder="Jean-Pierre Kouassi"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 mb-5">
                  <Label htmlFor="email" className="text-white/70">
                    {t.contact.form.email}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#0066ff] focus:ring-[#0066ff]/20"
                    placeholder="jean.pierre@exemple.com"
                    required
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-2 mb-5">
                  <Label className="text-white/70">{t.contact.form.project}</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#0066ff] focus:ring-[#0066ff]/20">
                      <SelectValue placeholder="Sélectionner un type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#12121a] border-white/10">
                      {t.contact.project_types.map((type, index) => (
                        <SelectItem
                          key={index}
                          value={type}
                          className="text-white hover:bg-white/10 focus:bg-white/10"
                        >
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget */}
                <div className="space-y-2 mb-5">
                  <Label className="text-white/70">{t.contact.form.budget}</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#0066ff] focus:ring-[#0066ff]/20">
                      <SelectValue placeholder="Sélectionner une fourchette" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#12121a] border-white/10">
                      {t.contact.budgets.map((budget, index) => (
                        <SelectItem
                          key={index}
                          value={budget}
                          className="text-white hover:bg-white/10 focus:bg-white/10"
                        >
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2 mb-6">
                  <Label htmlFor="message" className="text-white/70">
                    {t.contact.form.message}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#0066ff] focus:ring-[#0066ff]/20 min-h-[120px] resize-none"
                    placeholder="Décrivez votre projet, vos objectifs et vos contraintes..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full py-6 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0052cc] hover:to-[#00b8e6] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.4)]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {t.contact.form.success}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t.contact.form.submit}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
