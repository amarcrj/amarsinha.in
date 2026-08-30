// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, FileText } from 'lucide-react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-md bg-background/85 backdrop-blur-xl border-b border-border/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3.5">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-2.5 text-base font-bold text-foreground"
            whileHover={{ scale: 1.02 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="tracking-tight">Amar Sinha</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center gap-3 pl-3 border-l border-border/60">
              <ThemeToggle />
              <motion.a
                href={scholarData.profile.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-semibold glass border border-border/80 text-foreground hover:text-primary rounded-xl hover:bg-secondary/70 transition-colors flex items-center gap-1.5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                title="Google Scholar Profile"
              >
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                <span>Scholar ({scholarData.metrics.totalCitations})</span>
              </motion.a>
              <motion.a
                href="/AMAR_CV.pdf"
                target="_blank"
                className="px-3.5 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity flex items-center gap-1.5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              className="p-2 rounded-xl glass text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-2xl border-t border-border/80 shadow-2xl"
          >
            <div className="container mx-auto px-6 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3">
                <a
                  href={scholarData.profile.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-xs font-semibold glass border border-border/80 text-foreground rounded-xl text-center flex items-center justify-center gap-1.5"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-primary" />
                  <span>Google Scholar</span>
                </a>
                <a
                  href="/AMAR_CV.pdf"
                  target="_blank"
                  className="flex-1 py-2 text-xs font-semibold bg-primary text-primary-foreground rounded-xl text-center"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
