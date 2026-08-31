// src/components/Contact.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, GraduationCap } from 'lucide-react';
import scholarData from '@/data/scholarData.json';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amar@iiitnr.edu.in',
    href: 'mailto:amar@iiitnr.edu.in',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-7679496474',
    href: 'tel:+917679496474',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'IIIT Naya Raipur, India',
    href: null,
  },
];

const socialLinks = [
  { icon: GraduationCap, href: scholarData.profile.scholarUrl, label: 'Google Scholar' },
  { icon: Linkedin, href: 'https://linkedin.com/in/amarcrj', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/amarcrj', label: 'GitHub' },
  { icon: Globe, href: 'https://www.amarsinha.in', label: 'Website' },
];

export const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest font-mono">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Open to research collaborations, joint grants, keynote invitations, and discussions about Beyond 5G & Applied AI/ML.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="p-6 rounded-3xl glass text-center border border-border/70 hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 group flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary/80 text-primary flex items-center justify-center mb-3.5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors mt-1.5 block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground mt-1.5">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl glass hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-200 border border-border/70"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={link.label}
              >
                <link.icon className="w-5 h-5 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
