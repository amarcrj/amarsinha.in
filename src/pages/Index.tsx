// src/pages/Index.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { NewsUpdates } from '@/components/NewsUpdates';
import { About } from '@/components/About';
import { TestbedShowcase } from '@/components/research/TestbedShowcase';
import { Publications } from '@/components/Publications';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Teaching } from '@/components/Teaching';
import { Leadership } from '@/components/Leadership';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CommandPalette } from '@/components/CommandPalette';

const Index: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      const sectionId = location.pathname.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary relative overflow-x-hidden">
      {/* Background Global Liquid Ambient Glow Orbs */}
      <div className="fixed top-1/4 -left-32 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-[140px] pointer-events-none animate-fluid-1 -z-10" />
      <div className="fixed top-3/4 -right-32 w-[36rem] h-[36rem] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none animate-fluid-2 -z-10" />
      <div className="fixed top-1/2 left-1/3 w-[24rem] h-[24rem] bg-violet-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <Navbar />
      <Hero />
      <NewsUpdates />
      <About />

      {/* Publications & Academic Papers */}
      <Publications />

      {/* Experimental Architecture & Systems */}
      <section id="research" className="section-padding relative overflow-hidden bg-card/15 border-y border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <TestbedShowcase />
        </div>
      </section>

      <Experience />
      <Skills />
      <Teaching />
      <Leadership />
      <Contact />
      <Footer />

      {/* Cmd+K Command Palette */}
      <CommandPalette />
    </div>
  );
};

export default Index;
