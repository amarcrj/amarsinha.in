// src/components/CommandPalette.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Command,
  BookOpen,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  ExternalLink,
  Code,
  Copy,
  Check,
  Zap,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import scholarData from '@/data/scholarData.json';

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Research' | 'Actions' | 'External';
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  shortcut?: string;
  badge?: string;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [copiedBib, setCopiedBib] = useState(false);
  const { toast } = useToast();

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyTopBibtex = () => {
    const topPub = scholarData.publications[0];
    if (topPub?.bibtex) {
      navigator.clipboard.writeText(topPub.bibtex);
      setCopiedBib(true);
      toast({
        title: 'BibTeX Copied to Clipboard!',
        description: `Copied citation for: ${topPub.title}`,
      });
      setTimeout(() => setCopiedBib(false), 2000);
      setIsOpen(false);
    }
  };

  const commands: CommandItem[] = [
    {
      id: 'nav-news',
      title: 'Recent News & Announcements',
      category: 'Navigation',
      icon: Zap,
      action: () => scrollToSection('news'),
      badge: 'Latest',
    },
    {
      id: 'nav-pubs',
      title: 'Explore Publications & Patents',
      category: 'Navigation',
      icon: BookOpen,
      action: () => scrollToSection('publications'),
      shortcut: '8 Papers',
    },
    {
      id: 'nav-testbed',
      title: 'View Experimental Hardware Testbeds',
      category: 'Research',
      icon: Code,
      action: () => scrollToSection('research'),
      badge: 'Architecture',
    },
    {
      id: 'nav-exp',
      title: 'Experience & JRF Fellowship (COMET)',
      category: 'Navigation',
      icon: Briefcase,
      action: () => scrollToSection('experience'),
    },
    {
      id: 'nav-teaching',
      title: 'Courses & Student Mentorship',
      category: 'Navigation',
      icon: GraduationCap,
      action: () => scrollToSection('teaching'),
    },
    {
      id: 'nav-leadership',
      title: 'IEEE Leadership & Memberships',
      category: 'Navigation',
      icon: Award,
      action: () => scrollToSection('leadership'),
    },
    {
      id: 'nav-contact',
      title: 'Contact Amar Sinha',
      category: 'Navigation',
      icon: Mail,
      action: () => scrollToSection('contact'),
    },
    {
      id: 'act-bibtex',
      title: 'Copy Latest Publication BibTeX',
      category: 'Actions',
      icon: copiedBib ? Check : Copy,
      action: copyTopBibtex,
      badge: '1-Click',
    },
    {
      id: 'ext-scholar',
      title: 'Open Google Scholar Profile',
      category: 'External',
      icon: ExternalLink,
      action: () => {
        window.open('https://scholar.google.com/citations?user=8jKlx8sAAAAJ&hl=en', '_blank');
        setIsOpen(false);
      },
      badge: '13 Citations',
    },
    {
      id: 'ext-github',
      title: 'Open GitHub Profile (@amarcrj)',
      category: 'External',
      icon: ExternalLink,
      action: () => {
        window.open('https://github.com/amarcrj', '_blank');
        setIsOpen(false);
      },
    },
    {
      id: 'ext-linkedin',
      title: 'Connect on LinkedIn',
      category: 'External',
      icon: ExternalLink,
      action: () => {
        window.open('https://linkedin.com/in/amarcrj', '_blank');
        setIsOpen(false);
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Trigger floating button on desktop */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl glass hover:bg-secondary text-xs font-medium text-muted-foreground hover:text-foreground transition-all duration-200 border border-border/80 shadow-lg"
        title="Open Command Palette (Cmd+K)"
      >
        <Command className="w-3.5 h-3.5 text-primary" />
        <span>Menu</span>
        <kbd className="px-1.5 py-0.5 rounded bg-secondary text-[10px] text-muted-foreground border border-border">
          ⌘K
        </kbd>
      </button>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              className="w-full max-w-lg rounded-2xl bg-card border border-border shadow-2xl overflow-hidden relative z-10"
            >
              {/* Search input header */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
                <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Search sections, papers, or links..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-sm focus:outline-none"
                />
                <kbd className="px-2 py-0.5 rounded bg-secondary text-[10px] font-mono text-muted-foreground">
                  ESC
                </kbd>
              </div>

              {/* Command List */}
              <div className="max-h-72 overflow-y-auto p-2 space-y-1">
                {filteredCommands.length === 0 ? (
                  <div className="py-8 text-center text-xs text-muted-foreground">
                    No matching commands found.
                  </div>
                ) : (
                  filteredCommands.map((cmd) => (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-secondary text-xs transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-secondary/80 text-muted-foreground group-hover:text-foreground">
                          <cmd.icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="font-medium text-foreground">
                            {cmd.title}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {cmd.badge && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-secondary text-muted-foreground">
                            {cmd.badge}
                          </span>
                        )}
                        {cmd.shortcut && (
                          <span className="text-[11px] font-mono text-muted-foreground">
                            {cmd.shortcut}
                          </span>
                        )}
                      </div>
                    </button>
                  ))
                )}
              </div>

              {/* Modal footer */}
              <div className="px-4 py-2.5 bg-secondary/30 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Amar Sinha • Academic Portfolio</span>
                <span className="font-mono">Use ↑↓ and Enter</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
