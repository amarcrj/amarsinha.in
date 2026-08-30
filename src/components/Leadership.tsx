// src/components/Leadership.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, Shield } from 'lucide-react';
import { SpotlightCard } from './animations/SpotlightCard';

const leadership = [
  {
    icon: Users,
    role: 'Student Branch Chair',
    organization: 'IEEE Student Branch',
    location: 'Dr. Shyama Prasad Mukherjee IIIT Naya Raipur',
    period: '2024 – Present',
    achievements: [
      'Organized 5+ technical workshops on B5G, SDN, and Edge AI.',
      'Increased active branch membership by 40%.',
      'Managed executive committee and technical outreach programs.',
    ],
  },
  {
    icon: Award,
    role: 'Post Graduate Representative',
    organization: 'Students Activity Center (SAC)',
    location: 'IIIT Naya Raipur',
    period: '2024 – 2025',
    achievements: [
      'Represented 50+ postgraduate research scholars in institute council.',
      'Led initiatives modernizing network research lab facilities.',
      'Enhanced academic student-faculty collaboration pipelines.',
    ],
  },
  {
    icon: Shield,
    role: 'Ph.D. Student Member',
    organization: 'Anti-Ragging & Welfare Committee',
    location: 'IIIT Naya Raipur',
    period: '2024 – 2025',
    achievements: [
      'Facilitated orientation and awareness sessions for 300+ incoming scholars.',
      'Supported graduate student welfare and ethical academic guidelines.',
      'Upheld institutional statutory regulations and campus integrity.',
    ],
  },
];

const memberships = [
  'Graduate Student Member, IEEE',
  'IEEE Communications Society (ComSoc)',
  'IEEE Young Professionals',
  'Student Member, ACM',
  'IEEE Systems Council',
  'IEEE Consumer Technology Society (CTSoc)',
  'IEEE Future Networks Community',
];

export const Leadership: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="leadership" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-widest font-mono">
            Service & Community
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2.5">
            Leadership & <span className="text-gradient">Professional Service</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
            Active stewardship in IEEE student chapters, institutional councils, and international technical societies.
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12 max-w-6xl mx-auto">
          {leadership.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              className="flex"
            >
              <SpotlightCard className="p-6 flex flex-col justify-between w-full group hover:border-primary/40 transition-all duration-300">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-secondary/80 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                    {item.period}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mt-1.5">{item.role}</h3>
                  <p className="text-xs font-semibold text-primary/90 mt-0.5">{item.organization}</p>
                  <p className="text-[11px] text-muted-foreground">{item.location}</p>

                  <ul className="mt-4 space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Professional Memberships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <SpotlightCard className="p-6 sm:p-8 text-center">
            <h3 className="text-xs font-bold text-foreground mb-4 uppercase tracking-wider font-mono text-primary">
              Professional Society Memberships
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {memberships.map((membership) => (
                <motion.span
                  key={membership}
                  whileHover={{ scale: 1.04 }}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-xl bg-secondary/50 text-foreground border border-border/50 hover:border-primary/40 transition-colors cursor-default"
                >
                  {membership}
                </motion.span>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};
