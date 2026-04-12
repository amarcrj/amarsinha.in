// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import profilePhoto from '@/assets/profile-photo.jpg';
import CircularText from '@/components/ui/CircularText';

const socialLinks = [
  { icon: Mail, href: 'mailto:amar@iiitnr.edu.in', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com/in/amarcrj', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/amarcrj', label: 'GitHub' },
  { icon: Globe, href: 'https://www.amarsinha.in', label: 'Website' },
];

export const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow animate-glow-pulse" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Photo with surrounding circular text */}
            <div className="relative inline-block mb-12 md:mb-16">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
              >
                <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-primary/30 ring-offset-4 ring-offset-background shadow-glow">
                  <AvatarImage
                    src={profilePhoto}
                    alt="Amar Sinha"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-3xl md:text-4xl font-bold bg-primary/10 text-primary">
                    AS
                  </AvatarFallback>
                </Avatar>
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="pointer-events-auto">
                  <CircularText
                    text=" Ph.D. Researcher • AI/ML Engineer •"
                    spinDuration={20}
                    onHover="speedUp"
                    className="w-[200px] h-[200px] md:w-[240px] md:h-[240px]"
                    color={isDark ? "white" : "black"}
                  />
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">Amar Sinha</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Innovative researcher specializing in{' '}
              <span className="text-foreground">Beyond 5G Networks</span>,{' '}
              <span className="text-foreground">Software-Defined Networking</span>, and{' '}
              <span className="text-foreground">AI-driven Solutions</span> for next-generation wireless communication.
            </p>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center gap-4 mt-12 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};