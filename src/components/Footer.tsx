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
  BookOpen,
  Award,
  Network,
  Cpu,
} from 'lucide-react';
import scholarData from '@/data/scholarData.json';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About Research', href: '#about' },
    { label: 'Publications & Patents', href: '#publications' },
    { label: 'SDN & Testbed Systems', href: '#research' },
    { label: 'Experience & JRF Track', href: '#experience' },
    { label: 'Teaching & Mentorship', href: '#teaching' },
    { label: 'Leadership & IEEE', href: '#leadership' },
    { label: 'Contact Information', href: '#contact' },
  ];

  const researchTopics = [
    'Beyond 5G / 6G Mobility',
    'OpenFlow 1.3 & Ryu SDN',
    'Predictive Handover (iDecide)',
    'ESP32 WiFi CSI Sensing',
    'Post-Quantum Key Management',
    'O-RAN Disaggregation',
  ];

  return (
    <footer className="relative border-t border-border/80 bg-card/25 backdrop-blur-xl pt-14 pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Grid: Brand, Navigation, Research Topics & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-border/60">
          
          {/* Col 1: Bio & Institutional Identity (5 cols) */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-display font-bold text-lg text-foreground tracking-tight">
                Amar Sinha
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto md:mx-0">
              Assistant Professor at <strong className="text-foreground font-semibold">ITM University Raipur</strong> & Ph.D. Researcher at <strong className="text-foreground font-semibold">Dr. SPM IIIT Naya Raipur</strong>. Specializing in Beyond 5G/6G Networks, SDN Emulation, and Edge AI.
            </p>

            {/* Academic Credentials Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-xl liquid-pill text-foreground border border-border/80">
                IIITB COMET Grant JRF
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-xl liquid-pill text-foreground border border-border/80">
                IEEE Student Branch Chair
              </span>
            </div>

            {/* Social / External Academic Icons */}
            <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
              <motion.a
                href={scholarData.profile.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl liquid-pill text-muted-foreground hover:text-primary transition-colors"
                title="Google Scholar"
              >
                <GraduationCap className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/amarcrj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl liquid-pill text-muted-foreground hover:text-primary transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://github.com/amarcrj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl liquid-pill text-muted-foreground hover:text-primary transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="mailto:amar@iiitnr.edu.in"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl liquid-pill text-muted-foreground hover:text-primary transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/AMAR_CV.pdf"
                target="_blank"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl liquid-pill text-muted-foreground hover:text-primary transition-colors"
                title="Curriculum Vitae"
              >
                <FileText className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Col 2: Navigation Sitemap (3 cols) */}
          <div className="md:col-span-3 text-center md:text-left space-y-3">
            <h4 className="font-display text-xs font-bold text-foreground uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Research Topics (4 cols) */}
          <div className="md:col-span-4 text-center md:text-left space-y-3">
            <h4 className="font-display text-xs font-bold text-foreground uppercase tracking-wider">
              Research Focus
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
              {researchTopics.map((topic) => (
                <span
                  key={topic}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-secondary/50 text-muted-foreground border border-border/50"
                >
                  {topic}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground pt-2">
              Open to collaborative research, Ph.D. mentorship, and grant proposals.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="text-center sm:text-left space-y-0.5">
            <p>© {new Date().getFullYear()} Amar Sinha. All rights reserved.</p>
            <p className="text-[11px] text-muted-foreground/80">
              Dr. Shyama Prasad Mukherjee IIIT Naya Raipur & ITM University Raipur
            </p>
          </div>

          {/* Back to Top Floating Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="px-4 py-2 rounded-full glass border border-border hover:border-primary/40 text-foreground hover:text-primary text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
