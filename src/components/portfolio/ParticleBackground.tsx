'use client';

import { useReducedMotion } from '@/hooks/use-reduced-motion';

export function ParticleBackground() {
  const { shouldReduceMotion } = useReducedMotion();

  // On mobile, render a simple static background
  if (shouldReduceMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Simple gradient for mobile - no animations */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
        
        {/* Static gradient orbs - no blur on mobile for better performance */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0066ff]/10 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#8b5cf6]/10 rounded-full" />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    );
  }

  // Desktop version with full animations
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />

      {/* Animated particles - reduced count */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Floating orbs - CSS animations instead of Framer Motion for better performance */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066ff]/5 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-[100px] animate-pulse-slow-alt" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d4ff]/3 rounded-full blur-[150px] animate-pulse-slow" />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
