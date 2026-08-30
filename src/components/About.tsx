// src/components/About.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Users, BookOpen, Network, Activity, ShieldCheck, Cpu } from 'lucide-react';
import scholarData from '@/data/scholarData.json';
import { SpotlightCard } from './animations/SpotlightCard';
import { CountUp } from './animations/CountUp';
import { DoodleUnderline } from './doodles/DoodleUnderline';

const stats = [
  {
    icon: GraduationCap,
    value: 'Ph.D.',
    label: 'Pursuing @ IIIT-NR',
    sub: 'Beyond 5G & SDN Networks',
    isNumber: false,
  },
  {
    icon: BookOpen,
    value: scholarData.metrics.publicationsCount,
    suffix: '+',
    label: 'Peer-Reviewed Works',
    sub: `${scholarData.metrics.totalCitations} Google Scholar Citations`,
    isNumber: true,
  },
  {
    icon: Award,
    value: 1,
    label: 'Patents Published',
    sub: 'Post-Quantum Key Management',
    isNumber: true,
  },
  {
    icon: Users,
    value: 40,
    prefix: '+',
    suffix: '%',
    label: 'IEEE Branch Growth',
    sub: 'Student Branch Chair, IIIT-NR',
    isNumber: true,
  },
];

const researchPillars = [
  {
    icon: Network,
    title: 'B5G/6G Mobility & SDN Handover',
    desc: 'Proactive OpenFlow rule pre-caching and deep learning handover prediction (iDecide/AnDet) ensuring 0% packet loss at 350+ km/h speeds.',
    tag: 'SDN & OpenFlow 1.3',
  },
  {
    icon: Activity,
    title: 'Contactless WiFi CSI Sensing',
    desc: 'Harvesting 64-subcarrier raw Channel State Information (CSI) from ESP32 WiFi frames to estimate vital signs and respiratory rates non-invasively.',
    tag: 'IoT & Edge Signal Processing',
  },
  {
    icon: ShieldCheck,
    title: 'Post-Quantum Lattice Cryptography',
    desc: 'Indian Patent No. 202521028285. Reinforcement Learning dynamic re-keying with Module-Lattice KEM (Kyber-1024) against Shor/Grover quantum threats.',
    tag: 'Quantum Security & RL',
  },
  {
    icon: Cpu,
    title: 'Edge AI & O-RAN Architecture',
    desc: 'Disaggregated O-RAN Radio Intelligent Controllers (RIC) and real-time deep edge intelligence integrating YOLOv12 and UERANSIM 5G Core.',
    tag: 'O-RAN & Edge Computing',
  },
];

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono liquid-pill text-primary mb-2.5">
            <span>RESEARCH PHILOSOPHY & PROFILE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 font-display">
            Pioneering Next-Gen{' '}
            <span className="relative inline-block text-gradient">
              Wireless Systems
              <DoodleUnderline color="hsl(var(--primary))" />
            </span>
          </h2>
        </motion.div>

        {/* Narrative & Stats Bento */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16">
          {/* Narrative Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex"
          >
            <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between w-full space-y-4">
              <div className="space-y-3.5 sm:space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  I am an Assistant Professor at <span className="text-foreground font-semibold">ITM University Raipur</span> and a Ph.D. Researcher at <span className="text-foreground font-semibold">Dr. Shyama Prasad Mukherjee IIIT Naya Raipur</span>, specializing in <span className="text-foreground font-semibold">Beyond 5G (B5G) / 6G Networks</span> and <span className="text-foreground font-semibold">Software-Defined Networking (SDN)</span>.
                </p>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  As a former Junior Research Fellow (JRF) funded by the <span className="text-foreground font-semibold">IIITB COMET Foundation</span>, I design AI/ML-driven mobility management and proactive handover frameworks that eliminate connection drops for high-speed transport (350+ km/h) and dense cellular grids.
                </p>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  My work spans hands-on Mininet-WiFi emulation, ESP32 contactless IoT Channel State Information (CSI) sensing, and post-quantum cryptographic security.
                </p>
              </div>

              {/* Research Domain Tags */}
              <div className="pt-4 border-t border-border/40">
                <span className="text-[11px] font-mono text-muted-foreground block mb-2 uppercase tracking-wider">
                  Core Research Domains:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    'Beyond 5G & 6G',
                    'SDN (Ryu & OpenFlow)',
                    'Predictive Handover (iDecide)',
                    'Edge AI / YOLOv12',
                    'Contactless WiFi CSI Sensing',
                    'Post-Quantum Cryptography',
                    'O-RAN Architecture',
                  ].map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="px-2.5 sm:px-3 py-1 text-xs font-mono rounded-xl bg-secondary/60 text-foreground border border-border/60 hover:border-primary/40 transition-colors cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex"
              >
                <SpotlightCard className="p-4 sm:p-6 w-full flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-secondary/80 text-primary flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div className="text-xl sm:text-3xl font-bold text-foreground mb-0.5 font-display">
                      {stat.isNumber ? (
                        <CountUp
                          end={Number(stat.value)}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      ) : (
                        stat.value
                      )}
                    </div>
                    <div className="text-xs font-semibold text-foreground/90 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground font-mono mt-2.5 pt-2 border-t border-border/30 truncate">
                    {stat.sub}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 4 Core Research Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display">
              Key Research Pillars
            </h3>
            <span className="text-xs font-mono text-muted-foreground hidden sm:block">
              Theoretical Formulation ➔ Emulation ➔ Real-world Testbeds
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchPillars.map((pillar) => (
              <SpotlightCard
                key={pillar.title}
                className="p-5 flex flex-col justify-between group hover:border-primary/40 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider block mb-1">
                    {pillar.tag}
                  </span>
                  <h4 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-display">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
