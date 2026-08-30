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
} from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
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
      className="relative min-h-[85vh] flex items-center justify-center bg-gradient-hero overflow-hidden pt-28 pb-16"
    >
      {/* Subtle background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Status Pill */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-secondary/80 text-foreground border border-border/80 mb-8 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Assistant Professor @ ITM University • Ph.D. Researcher @ IIIT-NR</span>
            </motion.div>

            {/* Profile Photo */}
            <div className="relative inline-block mb-8">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <div className="relative p-1 rounded-3xl bg-gradient-to-b from-primary/30 to-border/40 shadow-2xl">
                  <Avatar className="w-36 h-36 md:w-44 md:h-44 rounded-[22px] overflow-hidden">
                    <AvatarImage src={profilePhoto} alt="Amar Sinha" className="object-cover" />
                    <AvatarFallback className="text-3xl font-bold bg-secondary text-primary">
                      AS
                    </AvatarFallback>
                  </Avatar>
                </div>
              </motion.div>
            </div>

            {/* Name & Academic Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              Amar Sinha
            </h1>

            <p className="text-lg md:text-xl text-primary font-medium mb-4">
              Beyond 5G Networks • Software-Defined Networking • Applied AI/ML
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Researching proactive mobility management, OpenFlow SDN architectures, and edge intelligence to advance next-generation ultra-reliable wireless communication.
            </p>

            {/* Live Metrics Cards */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10 text-center"
            >
              <div className="p-4 rounded-2xl glass border border-border/60">
                <div className="text-2xl md:text-3xl font-bold text-foreground">{scholarData.metrics.totalCitations}</div>
                <div className="text-xs text-muted-foreground font-mono mt-0.5">Google Scholar Citations</div>
              </div>
              <div className="p-4 rounded-2xl glass border border-border/60">
                <div className="text-2xl md:text-3xl font-bold text-foreground">{scholarData.metrics.hIndex}</div>
                <div className="text-xs text-muted-foreground font-mono mt-0.5">h-index</div>
              </div>
              <div className="p-4 rounded-2xl glass border border-border/60">
                <div className="text-2xl md:text-3xl font-bold text-foreground">8+</div>
                <div className="text-xs text-muted-foreground font-mono mt-0.5">Articles & Patents</div>
              </div>
              <div className="p-4 rounded-2xl glass border border-border/60">
                <div className="text-2xl md:text-3xl font-bold text-foreground">Chair</div>
                <div className="text-xs text-muted-foreground font-mono mt-0.5">IEEE Student Branch</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-8"
            >
              <button
                onClick={scrollToPubs}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:opacity-95 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Publications</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={scholarData.profile.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl glass hover:bg-secondary/70 text-foreground font-semibold text-sm transition-all flex items-center gap-2 border border-border/80"
              >
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Google Scholar</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
              </a>

              <a
                href="/AMAR_CV.pdf"
                target="_blank"
                className="px-5 py-3 rounded-xl glass hover:bg-secondary/70 text-foreground font-semibold text-sm transition-all flex items-center gap-2 border border-border/80"
              >
                <FileText className="w-4 h-4 text-muted-foreground" />
                <span>Curriculum Vitae</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all duration-200 border border-border/60"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                >
                  <link.icon className="w-4 h-4 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};