// src/pages/Index.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
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
import { AuraBackground } from '@/components/animations/AuraBackground';

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
    <AuraBackground>
      <Navbar />
      <Hero />
      <About />

      {/* Publications & Academic Papers */}
      <Publications />

      {/* Experimental Architecture & Systems */}
      <section id="research" className="section-padding relative overflow-hidden border-y border-border/40">
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
    </AuraBackground>
  );
};

export default Index;
