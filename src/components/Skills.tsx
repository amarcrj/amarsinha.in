// src/components/Skills.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Code, Wrench, Network, Brain, Shield } from 'lucide-react';
import { SpotlightCard } from './animations/SpotlightCard';

const skillCategories = [
  {
    icon: Network,
    title: 'Domain Expertise',
    skills: ['SDN Architecture', 'OpenFlow 1.3', '5G/6G Networks', 'O-RAN', 'Mobility Management', 'High-Speed Rail QoS'],
  },
  {
    icon: Brain,
    title: 'AI/ML & Optimization',
    skills: ['Deep Learning', 'PyTorch / TensorFlow', 'Time Series Forecasting', 'Explainable AI (SHAP/LIME)', 'YOLOv12 Edge Vision', 'Reinforcement Learning'],
  },
  {
    icon: Cpu,
    title: 'Hardware & Emulation',
    skills: ['Mininet-WiFi', 'ESP32 CSI Sensing', 'UERANSIM', 'Open5GS', 'NetSim', 'Wireshark Packet Analysis'],
  },
  {
    icon: Code,
    title: 'Programming & Scripting',
    skills: ['Python', 'C / C++', 'Java', 'Linux Shell / Bash', 'SQL', 'JavaScript / TypeScript'],
  },
  {
    icon: Shield,
    title: 'Security & Quantum',
    skills: ['Post-Quantum Cryptography', 'Lattice KEM (Kyber)', 'Anomaly Detection (AnDet)', 'Network Threat Mitigation'],
  },
  {
    icon: Wrench,
    title: 'Research Tools & Cloud',
    skills: ['Git & GitHub', 'LaTeX / Overleaf', 'VS Code', 'AWS Cloud', 'Docker', 'Linux POSIX Systems'],
  },
];

export const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-widest font-mono">
            Methodology & Toolset
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2.5">
            Technical & Research <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
            Practical mastery across network protocol engineering, deep learning model architectures, and experimental hardware testbeds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * index }}
              className="flex"
            >
              <SpotlightCard className="p-6 flex flex-col justify-between w-full group hover:border-primary/40 transition-all duration-300">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-secondary/80 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="text-xs px-2.5 py-1 rounded-xl bg-secondary/40 text-muted-foreground border border-border/40 font-mono hover:text-foreground hover:bg-secondary transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
