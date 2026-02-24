import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Publications } from '@/components/Publications';
import { Skills } from '@/components/Skills';
import { Teaching } from '@/components/Teaching';
import { Leadership } from '@/components/Leadership';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      const sectionId = location.pathname.substring(1); // remove leading slash
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Publications />
      <Skills />
      <Teaching />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
