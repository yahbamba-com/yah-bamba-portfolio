'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export function PremiumLoader() {
  const { shouldReduceMotion } = useReducedMotion();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Faster loading on mobile for better UX
    const loadTime = shouldReduceMotion ? 200 : 500;
    const interval = shouldReduceMotion ? 50 : 100;
    const increment = shouldReduceMotion ? 20 : 15;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), shouldReduceMotion ? 100 : 300);
          return 100;
        }
        return prev + Math.random() * increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  // Simplified loader for mobile
  if (shouldReduceMotion) {
    return (
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0f] flex flex-col items-center justify-center"
          >
            {/* Simple static logo */}
            <div className="w-16 h-16 rounded-full border-2 border-[#0066ff] flex items-center justify-center">
              <span className="text-xl font-bold gradient-text">YB</span>
            </div>

            {/* Simple name */}
            <div className="mt-6 text-center">
              <h1 className="text-2xl font-bold text-white">Yah Bamba</h1>
            </div>

            {/* Simple progress bar */}
            <div className="mt-6 w-40">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  className="h-full bg-[#0066ff]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Desktop version with full animations
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#0a0a0f] flex flex-col items-center justify-center"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#0066ff] to-[#8b5cf6] rounded-full blur-[200px]"
            />
          </div>

          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-24 h-24 rounded-full border-2 border-transparent border-t-[#0066ff] border-r-[#00d4ff]"
            >
              <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#8b5cf6] border-l-[#00ff88]" />
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-2xl font-bold gradient-text">YB</span>
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <h1 className="text-3xl font-bold text-white">Yah Bamba</h1>
            <p className="text-white/50 text-sm mt-1">Architecte de Solutions Digitales</p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            transition={{ delay: 0.7 }}
            className="mt-8 relative"
          >
            <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                className="h-full bg-gradient-to-r from-[#0066ff] via-[#00d4ff] to-[#8b5cf6]"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/30 text-xs mt-2 text-center"
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
