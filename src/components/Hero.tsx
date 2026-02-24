import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, ChevronDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import profilePhoto from '@/assets/profile-photo.jpg';

const socialLinks = [
  { icon: Mail, href: 'mailto:amar@iiitnr.edu.in', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com/in/amarcrj', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/amarcrj', label: 'GitHub' },
  { icon: Globe, href: 'https://www.amarsinha.in', label: 'Website' },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow animate-glow-pulse" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="mt-4 md:mt-4 mb-6"
            >
              <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto ring-4 ring-primary/30 ring-offset-4 ring-offset-background shadow-glow">
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

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6 px-4 py-2 rounded-full glass text-sm text-primary"
            >
              Ph.D. Researcher • AI/ML Engineer
            </motion.div>

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

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
};
