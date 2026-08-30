// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  GraduationCap,
  FileText,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import scholarData from '@/data/scholarData.json';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer className="relative border-t border-border/80 bg-card/40 backdrop-blur-xl py-6 sm:py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Flex Bar: Info + Socials + Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-border/50">
          
          {/* Brand & Designation */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="font-display font-bold text-base text-foreground tracking-tight">
                Amar Sinha
              </span>
            </div>
            <span className="hidden sm:inline text-border font-mono">|</span>
            <p className="text-xs text-muted-foreground">
              Assistant Professor @ ITM University • Ph.D. Researcher @ IIIT-NR
            </p>
          </div>

          {/* Social Icons & Back to Top in One Clean Row */}
          <div className="flex items-center gap-2 shrink-0">
            <motion.a
              href={scholarData.profile.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl liquid-pill text-muted-foreground hover:text-primary transition-colors"
              title="Google Scholar"
            >
              <GraduationCap className="w-3.5 h-3.5" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/amarcrj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl liquid-pill text-muted-foreground hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </motion.a>

            <motion.a
              href="https://github.com/amarcrj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl liquid-pill text-muted-foreground hover:text-primary transition-colors"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </motion.a>

            <motion.a
              href="mailto:amar@iiitnr.edu.in"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl liquid-pill text-muted-foreground hover:text-primary transition-colors"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </motion.a>

            <motion.a
              href="/AMAR_CV.pdf"
              target="_blank"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl liquid-pill text-muted-foreground hover:text-primary transition-colors"
              title="Curriculum Vitae"
            >
              <FileText className="w-3.5 h-3.5" />
            </motion.a>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-1 px-3 py-1.5 rounded-xl glass border border-border hover:border-primary/40 text-foreground hover:text-primary text-xs font-semibold flex items-center gap-1.5 transition-all"
              title="Scroll to top"
            >
              <span className="text-[11px]">Top</span>
              <ArrowUp className="w-3 h-3" />
            </motion.button>
          </div>

        </div>

        {/* Sub-bar: Navigation Links & Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          
          {/* Quick inline navigation pills */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] sm:text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Copyright text */}
          <p className="text-[11px] text-muted-foreground/80 text-center sm:text-right">
            © {new Date().getFullYear()} Amar Sinha • All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};
