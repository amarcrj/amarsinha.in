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
import { CountUp } from './animations/CountUp';
import { TiltCard } from './animations/TiltCard';
import { SpotlightCard } from './animations/SpotlightCard';
import { NetworkBackground } from './animations/NetworkBackground';
import { DoodleUnderline } from './doodles/DoodleUnderline';
import { DoodleArrow } from './doodles/DoodleArrow';

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
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-28 pb-12 sm:pb-16"
    >
      {/* Interactive Network Mesh Background */}
      <NetworkBackground />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Credentials (Col-span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left relative"
          >
            {/* Liquid Pill Status Badge (Adaptive on narrow screens) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10.5px] sm:text-xs font-medium liquid-pill text-foreground shadow-sm max-w-full leading-tight text-center"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="hidden sm:inline">Assistant Professor @ ITM University • Ph.D. Researcher @ IIIT-NR</span>
              <span className="sm:hidden">Assistant Professor @ ITM • Ph.D. Scholar @ IIIT-NR</span>
            </motion.div>

            {/* Name & Academic Title with Doodle Underline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12] font-display break-words">
                Amar Sinha
              </h1>

              <div className="relative inline-block mt-2 sm:mt-2.5 max-w-full">
                <p className="text-sm sm:text-xl font-semibold text-primary leading-snug break-words">
                  Beyond 5G Networks • Software-Defined Networking • Applied AI/ML
                </p>
                <DoodleUnderline color="hsl(var(--primary))" />
              </div>
            </div>

            {/* Concise Bio Narrative */}
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Researching proactive mobility management, OpenFlow SDN architectures, and edge intelligence to advance next-generation ultra-reliable wireless communication.
            </p>

            {/* 4-Card Liquid Glass Metrics Bar with Animated Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-1 max-w-xl mx-auto lg:mx-0 w-full">
              <SpotlightCard className="p-2.5 sm:p-3.5 text-center">
                <div className="text-lg sm:text-2xl font-bold text-foreground font-display">
                  <CountUp end={scholarData.metrics.totalCitations} />
                </div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground font-mono mt-0.5 uppercase tracking-wider">Citations</div>
              </SpotlightCard>

              <SpotlightCard className="p-2.5 sm:p-3.5 text-center">
                <div className="text-lg sm:text-2xl font-bold text-foreground font-display">
                  <CountUp end={scholarData.metrics.hIndex} />
                </div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground font-mono mt-0.5 uppercase tracking-wider">h-index</div>
              </SpotlightCard>

              <SpotlightCard className="p-2.5 sm:p-3.5 text-center">
                <div className="text-lg sm:text-2xl font-bold text-foreground font-display">
                  <CountUp end={8} suffix="+" />
                </div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground font-mono mt-0.5 uppercase tracking-wider">Works</div>
              </SpotlightCard>

              <SpotlightCard className="p-2.5 sm:p-3.5 text-center">
                <div className="text-lg sm:text-2xl font-bold text-foreground font-display">Chair</div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground font-mono mt-0.5 uppercase tracking-wider">IEEE Branch</div>
              </SpotlightCard>
            </div>

            {/* Action Buttons with Doodle Arrow Callout */}
            <div className="relative pt-1 sm:pt-2">
              {/* Playful Doodle Arrow pointing to publications */}
              <div className="absolute -top-7 -right-4 sm:-right-8 hidden xl:flex items-center">
                <DoodleArrow
                  text="Check my research!"
                  arrowClassName="rotate-12 w-10 h-10 -scale-x-100"
                  textClassName="text-[11px]"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full">
                <motion.button
                  onClick={scrollToPubs}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 sm:px-5 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-xs shadow-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Publications</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.a
                  href={scholarData.profile.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 sm:px-5 py-3 rounded-2xl glass hover:bg-secondary/70 text-foreground font-semibold text-xs transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>Google Scholar</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </motion.a>

                <motion.a
                  href="/AMAR_CV.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 sm:px-5 py-3 rounded-2xl glass hover:bg-secondary/70 text-foreground font-semibold text-xs transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span>Curriculum Vitae</span>
                </motion.a>
              </div>
            </div>

            {/* Social Links Pill Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-1 sm:pt-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl liquid-pill text-muted-foreground hover:text-primary transition-all"
                  title={link.label}
                >
                  <link.icon className="w-4 h-4 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3D Physics Tilt Liquid Glass Portrait Card (Col-span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <TiltCard className="w-full max-w-[280px] sm:max-w-sm mx-auto">
              
              {/* Outer Liquid Glass Frame */}
              <div className="p-2.5 sm:p-4 rounded-[26px] sm:rounded-[34px] liquid-glass-card relative shadow-2xl">
                
                {/* Top Floating Glass Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 z-20 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full liquid-pill flex items-center gap-1.5 text-[9.5px] sm:text-[11px] font-semibold text-foreground shadow-md whitespace-nowrap">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
                  <span>Ph.D. Fellow • IIITB COMET Grant</span>
                </div>

                {/* Portrait Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-secondary/30">
                  <img
                    src={profilePhoto}
                    alt="Amar Sinha"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay at bottom for readable badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Floating Glass Badge */}
                <div className="mt-2 sm:mt-3 p-2 sm:p-3 rounded-2xl glass flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-left text-xs">
                    <div className="font-bold text-foreground text-[10.5px] sm:text-xs">IIIT Naya Raipur & ITM University</div>
                    <div className="text-[9.5px] sm:text-[11px] text-muted-foreground font-mono">B5G Networks & AI/ML Research</div>
                  </div>
                </div>

              </div>

            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};