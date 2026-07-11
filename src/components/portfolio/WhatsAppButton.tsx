'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export function WhatsAppButton() {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = '+2250160000997';
  const whatsappMessage = language === 'fr' 
    ? 'Bonjour Yah, je souhaite discuter de mon projet...'
    : 'Hello Yah, I would like to discuss my project...';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      
      {/* Glow Effect */}
      <div className="absolute -inset-2 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
      
      {/* Button */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-[#25D366]/50 transition-all duration-300 group-hover:scale-110">
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            <div className="px-4 py-2 rounded-xl bg-white text-gray-900 text-sm font-medium shadow-lg">
              {language === 'fr' ? 'Discutons sur WhatsApp' : 'Chat on WhatsApp'}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
