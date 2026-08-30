// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, FileText, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import scholarData from '@/data/scholarData.json';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Publications', href: '#publications' },
  { name: 'Research Systems', href: '#research' },
  { name: 'Experience', href: '#experience' },
  { name: 'Teaching', href: '#teaching' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['about', 'publications', 'research', 'experience', 'teaching', 'leadership', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`max-w-5xl mx-auto rounded-full transition-all duration-500 pointer-events-auto px-4 sm:px-6 py-2.5 sm:py-3 ${
          isScrolled
            ? 'glass shadow-2xl bg-background/80 backdrop-blur-2xl border border-white/10 dark:border-white/10'
            : 'glass bg-background/50 backdrop-blur-xl border border-white/5 dark:border-white/5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo with pulsing glowing orb */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-foreground group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-primary to-indigo-500 flex items-center justify-center text-primary-foreground font-display font-extrabold text-xs shadow-glow">
              AS
            </div>
            <span className="font-display font-bold tracking-tight text-sm hidden sm:inline-block">
              Amar Sinha
            </span>
          </motion.a>

          {/* Desktop Nav Items with Sliding Highlight */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.href.replace('#', '');
              const isHovered = hoveredIndex === idx;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {/* Sliding Background Pill */}
                  {(isHovered || (isActive && hoveredIndex === null)) && (
                    <motion.div
                      layoutId="navbar-pill"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-secondary/80 -z-10 border border-white/10"
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <ThemeToggle />

            {/* Google Scholar Quick Chip */}
            <motion.a
              href={scholarData.profile.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold liquid-pill text-foreground hover:text-primary rounded-full transition-all"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              title="Google Scholar Profile"
            >
              <GraduationCap className="w-3.5 h-3.5 text-primary" />
              <span>Scholar ({scholarData.metrics.totalCitations})</span>
            </motion.a>

            {/* Resume CTA */}
            <motion.a
              href="/AMAR_CV.pdf"
              target="_blank"
              className="px-3.5 sm:px-4 py-1.5 text-xs font-bold bg-primary text-primary-foreground rounded-full shadow-glow hover:opacity-95 transition-all flex items-center gap-1.5"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              className="p-1.5 rounded-full glass lg:hidden text-foreground ml-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer (Floating Liquid Card) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden max-w-sm mx-auto mt-2 p-4 rounded-3xl liquid-glass-card pointer-events-auto shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold text-foreground hover:text-primary transition-colors py-2 px-3 rounded-xl hover:bg-secondary/60"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t border-border/50 mt-1">
                <a
                  href={scholarData.profile.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-xs font-semibold glass rounded-xl text-center flex items-center justify-center gap-1.5"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-primary" />
                  <span>Scholar</span>
                </a>
                <a
                  href="/AMAR_CV.pdf"
                  target="_blank"
                  className="flex-1 py-2 text-xs font-semibold bg-primary text-primary-foreground rounded-xl text-center"
                >
                  CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
