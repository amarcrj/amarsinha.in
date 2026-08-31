// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  FileText,
  Github,
  Linkedin,
  Mail,
  Award,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import scholarData from '@/data/scholarData.json';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Publications', href: '#publications' },
    { label: 'Research', href: '#research' },
    { label: 'Experience', href: '#experience' },
    { label: 'Teaching', href: '#teaching' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-border/80 bg-background/20 backdrop-blur-xl py-10 sm:py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Tier 1: Brand, Mission & Social Links */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-border/50 text-center lg:text-left">
          
          {/* Identity & Research Mission */}
          <div className="space-y-2 max-w-lg">
            <div className="flex items-center justify-center lg:justify-start gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="font-display font-bold text-lg text-foreground tracking-tight">
                Amar Sinha
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                Ph.D. Fellow
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Assistant Professor at <strong className="text-foreground font-semibold">ITM University Raipur</strong> & Ph.D. Researcher at <strong className="text-foreground font-semibold">Dr. SPM IIIT Naya Raipur</strong>. Advancing Beyond 5G/6G Networks, SDN Emulation, and Applied Edge Intelligence.
            </p>
          </div>

          {/* Social & Academic Connect Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <motion.a
              href={scholarData.profile.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3.5 py-2 rounded-xl liquid-pill text-foreground hover:text-primary transition-all flex items-center gap-2 text-xs font-semibold"
              title="Google Scholar Profile"
            >
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>Scholar ({scholarData.metrics.totalCitations})</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/amarcrj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3.5 py-2 rounded-xl liquid-pill text-foreground hover:text-primary transition-all flex items-center gap-2 text-xs font-semibold"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-primary" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/amarcrj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3.5 py-2 rounded-xl liquid-pill text-foreground hover:text-primary transition-all flex items-center gap-2 text-xs font-semibold"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4 text-primary" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="mailto:amar@iiitnr.edu.in"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3.5 py-2 rounded-xl liquid-pill text-foreground hover:text-primary transition-all flex items-center gap-2 text-xs font-semibold"
              title="Email Amar Sinha"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>Email</span>
            </motion.a>

            <motion.a
              href="/AMAR_CV.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3.5 py-2 rounded-xl glass border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-2 text-xs font-semibold"
              title="Curriculum Vitae"
            >
              <FileText className="w-4 h-4" />
              <span>CV</span>
            </motion.a>
          </div>

        </div>

        {/* Tier 2: Academic Metrics Strip & Institutional Affiliations */}
        <div className="py-5 flex flex-wrap items-center justify-between gap-4 border-b border-border/40 text-xs text-muted-foreground">
          
          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 font-mono text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-foreground font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>IIITB COMET Grant</span>
            </span>
            <span className="text-border">•</span>
            <span>{scholarData.metrics.publicationsCount}+ Peer-Reviewed Works</span>
            <span className="text-border">•</span>
            <span>{scholarData.metrics.patentCount} Patent Published</span>
            <span className="text-border">•</span>
            <span>IEEE Student Branch Chair</span>
          </div>

          {/* Institutional Affiliation */}
          <div className="text-[11px] font-mono text-muted-foreground text-center lg:text-right">
            Dr. SPM IIIT Naya Raipur & ITM University Raipur
          </div>

        </div>

        {/* Tier 3: Navigation Links & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          
          {/* Quick Section Jump Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Copyright Notice */}
          <p className="text-xs text-muted-foreground/80 text-center sm:text-right">
            © {new Date().getFullYear()} Amar Sinha. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};
