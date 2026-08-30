// src/components/About.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';
import scholarData from '@/data/scholarData.json';

const stats = [
  {
    icon: GraduationCap,
    value: 'Ph.D.',
    label: 'Pursuing @ IIIT-NR',
    sub: 'Beyond 5G & SDN Networks',
  },
  {
    icon: BookOpen,
    value: `${scholarData.metrics.publicationsCount}+`,
    label: 'Peer-Reviewed Works',
    sub: `${scholarData.metrics.totalCitations} Google Scholar Citations`,
  },
  {
    icon: Award,
    value: '1',
    label: 'Patents Published',
    sub: 'Post-Quantum Key Management',
  },
  {
    icon: Users,
    value: '+40%',
    label: 'IEEE Branch Growth',
    sub: 'Student Branch Chair, IIIT-NR',
  },
];

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest font-mono">
            Research Philosophy & Vision
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Pioneering Next-Gen <span className="text-gradient">Wireless Systems</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-stretch">
          {/* Narrative Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex"
          >
            <div className="p-6 md:p-8 rounded-3xl glass border border-border/70 shadow-lg flex flex-col justify-between w-full space-y-4">
              <div className="space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  I am an Assistant Professor at <span className="text-foreground font-semibold">ITM University Raipur</span> and a Ph.D. Researcher at <span className="text-foreground font-semibold">Dr. Shyama Prasad Mukherjee IIIT Naya Raipur</span>, specializing in <span className="text-foreground font-semibold">Beyond 5G (B5G) / 6G Networks</span> and <span className="text-foreground font-semibold">Software-Defined Networking (SDN)</span>.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  As a former Junior Research Fellow (JRF) funded by the <span className="text-foreground font-semibold">IIITB COMET Foundation</span>, I design AI/ML-driven mobility management and proactive handover frameworks that eliminate connection drops for high-speed transport (350+ km/h) and dense cellular grids.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  My work spans hands-on Mininet-WiFi emulation, ESP32 contactless IoT Channel State Information (CSI) sensing, and post-quantum cryptographic security.
                </p>
              </div>

              {/* Research Domain Tags */}
              <div className="pt-4 border-t border-border/40">
                <span className="text-xs font-mono text-muted-foreground block mb-2 uppercase tracking-wider">
                  Core Research Domains:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Beyond 5G & 6G',
                    'SDN (Ryu & OpenFlow)',
                    'Predictive Handover (iDecide)',
                    'Edge AI / YOLOv12',
                    'Contactless WiFi CSI Sensing',
                    'Post-Quantum Cryptography',
                    'O-RAN Architecture',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-xl bg-secondary/60 text-foreground border border-border/60 hover:border-primary/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-6 rounded-3xl glass border border-border/70 hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-secondary/80 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-foreground/90 leading-snug">
                    {stat.label}
                  </div>
                </div>
                <div className="text-[11px] text-muted-foreground font-mono mt-3 pt-2 border-t border-border/30">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
