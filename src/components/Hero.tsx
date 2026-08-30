// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  FileText,
  ExternalLink,
  BookOpen,
  ArrowRight,
  Sparkles,
  Building2,
} from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
import scholarData from '@/data/scholarData.json';

const socialLinks = [
  { icon: Mail, href: 'mailto:amar@iiitnr.edu.in', label: 'Email' },
  { icon: GraduationCap, href: scholarData.profile.scholarUrl, label: 'Google Scholar' },
  { icon: Linkedin, href: 'https://linkedin.com/in/amarcrj', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/amarcrj', label: 'GitHub' },
];

export const Hero: React.FC = () => {
  const scrollToPubs = () => {
    const el = document.getElementById('publications');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center bg-gradient-hero overflow-hidden pt-24 sm:pt-28 pb-16"
    >
      {/* Liquid Glass Ambient Fluid Blobs (Dynamic Refraction Layer) */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none animate-fluid-1" />
      <div className="absolute bottom-1/4 right-1/4 w-80 sm:w-[28rem] h-80 sm:h-[28rem] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none animate-fluid-2" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-violet-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Credentials (Col-span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
          >
            {/* Liquid Pill Status Badge */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium liquid-pill text-foreground shadow-sm max-w-full truncate"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="truncate">Assistant Professor @ ITM University • Ph.D. Researcher @ IIIT-NR</span>
            </motion.div>

            {/* Name & Academic Title */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Amar Sinha
              </h1>
              <p className="text-base sm:text-xl font-semibold text-primary mt-2 sm:mt-2.5 leading-snug">
                Beyond 5G Networks • Software-Defined Networking • Applied AI/ML
              </p>
            </div>

            {/* Concise Bio Narrative */}
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Researching proactive mobility management, OpenFlow SDN architectures, and edge intelligence to advance next-generation ultra-reliable wireless communication.
            </p>

            {/* 4-Card Liquid Glass Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1 max-w-xl mx-auto lg:mx-0">
              <div className="p-3 sm:p-3.5 rounded-2xl glass text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground">{scholarData.metrics.totalCitations}</div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground font-mono mt-0.5 uppercase tracking-wider">Citations</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl glass text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground">{scholarData.metrics.hIndex}</div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground font-mono mt-0.5 uppercase tracking-wider">h-index</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl glass text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground">8+</div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground font-mono mt-0.5 uppercase tracking-wider">Works</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl glass text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground">Chair</div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground font-mono mt-0.5 uppercase tracking-wider">IEEE Branch</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={scrollToPubs}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-xs shadow-glow hover:opacity-95 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Publications</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={scholarData.profile.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl glass hover:bg-secondary/70 text-foreground font-semibold text-xs transition-all flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </a>

              <a
                href="/AMAR_CV.pdf"
                target="_blank"
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl glass hover:bg-secondary/70 text-foreground font-semibold text-xs transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-muted-foreground" />
                <span>Curriculum Vitae</span>
              </a>
            </div>

            {/* Social Links Pill Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl liquid-pill text-muted-foreground hover:text-primary transition-all"
                  title={link.label}
                >
                  <link.icon className="w-4 h-4 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Liquid Glass Portrait Card (Col-span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              
              {/* Outer Liquid Glass Frame */}
              <div className="p-3 sm:p-4 rounded-[28px] sm:rounded-[34px] liquid-glass-card relative">
                
                {/* Top Floating Glass Badge */}
                <div className="absolute -top-3.5 left-4 sm:left-6 z-20 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full liquid-pill flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-foreground shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Ph.D. Fellow • IIITB COMET Grant</span>
                </div>

                {/* Portrait Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-secondary/30">
                  <img
                    src={profilePhoto}
                    alt="Amar Sinha"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Gradient Overlay at bottom for readable badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Floating Glass Badge */}
                <div className="mt-2.5 sm:mt-3 p-2.5 sm:p-3 rounded-2xl glass flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="text-left text-xs">
                    <div className="font-bold text-foreground text-[11px] sm:text-xs">IIIT Naya Raipur & ITM University</div>
                    <div className="text-[10px] sm:text-[11px] text-muted-foreground font-mono">B5G Networks & AI/ML Research</div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};