'use client';

import dynamic from 'next/dynamic';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { WhatsAppButton } from '@/components/portfolio/WhatsAppButton';

// Client-only components (use Math.random or browser APIs)
const PremiumLoader = dynamic(
  () => import('@/components/portfolio/PremiumLoader').then(mod => ({ default: mod.PremiumLoader })),
  { ssr: false }
);

const ScrollProgress = dynamic(
  () => import('@/components/portfolio/ScrollProgress').then(mod => ({ default: mod.ScrollProgress })),
  { ssr: false }
);

const ParticleBackground = dynamic(
  () => import('@/components/portfolio/ParticleBackground').then(mod => ({ default: mod.ParticleBackground })),
  { ssr: false }
);

// Lazy load non-critical components for better performance
const PositioningSection = dynamic(
  () => import('@/components/portfolio/PositioningSection').then(mod => ({ default: mod.PositioningSection })),
  { loading: () => <div className="min-h-[50vh]" /> }
);

const JourneySection = dynamic(
  () => import('@/components/portfolio/JourneySection').then(mod => ({ default: mod.JourneySection })),
  { loading: () => <div className="min-h-[50vh]" /> }
);

const DifferentiationSection = dynamic(
  () => import('@/components/portfolio/DifferentiationSection').then(mod => ({ default: mod.DifferentiationSection })),
  { loading: () => <div className="min-h-[50vh]" /> }
);

const ServicesSection = dynamic(
  () => import('@/components/portfolio/ServicesSection').then(mod => ({ default: mod.ServicesSection })),
  { loading: () => <div className="min-h-[50vh]" /> }
);

const ExpertiseSection = dynamic(
  () => import('@/components/portfolio/ExpertiseSection').then(mod => ({ default: mod.ExpertiseSection })),
  { loading: () => <div className="min-h-[50vh]" /> }
);

const ProcessSection = dynamic(
  () => import('@/components/portfolio/ProcessSection').then(mod => ({ default: mod.ProcessSection })),
  { loading: () => <div className="min-h-[50vh]" /> }
);

const ProjectsSection = dynamic(
  () => import('@/components/portfolio/ProjectsSection').then(mod => ({ default: mod.ProjectsSection })),
  { loading: () => <div className="min-h-[50vh]" /> }
);

const TestimonialsSection = dynamic(
  () => import('@/components/portfolio/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })),
  { loading: () => <div className="min-h-[50vh]" /> }
);

const ContactSection = dynamic(
  () => import('@/components/portfolio/ContactSection').then(mod => ({ default: mod.ContactSection })),
  { loading: () => <div className="min-h-[50vh]" /> }
);

const Footer = dynamic(
  () => import('@/components/portfolio/Footer').then(mod => ({ default: mod.Footer })),
  { loading: () => <div className="min-h-[20vh]" /> }
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Premium Loader */}
      <PremiumLoader />
      
      {/* Custom Cursor - DISABLED for performance */}
      {/* <CustomCursor /> */}
      
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section - Critical, load immediately */}
      <HeroSection />
      
      {/* Positioning Section */}
      <PositioningSection />
      
      {/* Journey / About Section */}
      <JourneySection />
      
      {/* Differentiation Section */}
      <DifferentiationSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Technical Expertise Section */}
      <ExpertiseSection />
      
      {/* Work Process Section */}
      <ProcessSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}