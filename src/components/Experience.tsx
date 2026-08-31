// src/components/Experience.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Award, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Assistant Professor',
    organization: 'ITM University, Raipur',
    location: 'School of Engineering and Research, Naya Raipur',
    period: 'September 2025 – Present',
    badge: 'Faculty Role',
    points: [
      'Delivering UG and PG courses in Machine Learning, SDN, Computer Networks, and 5G Systems.',
      'Guiding graduate student research projects and supervising practical network lab sessions.',
      'Publishing high-impact research in SCI/Scopus-indexed IEEE and Springer journals.',
      'Leading industry-academic research initiatives in B5G and Edge AI.',
    ],
  },
  {
    type: 'work',
    title: 'Junior Research Fellow (JRF)',
    organization: 'Dr. Shyama Prasad Mukherjee IIIT Naya Raipur',
    location: 'Funded by IIITB COMET Foundation Grant',
    period: 'August 2022 – August 2025',
    badge: 'Funded Grant Research',
    points: [
      'Architected AI/ML predictive handover algorithms for SDN-enabled Beyond 5G mobile networks.',
      'Constructed Mininet-WiFi experimental testbeds validating high-speed railway (350 km/h) wireless QoS.',
      'Authored 6+ papers for flagship IEEE conferences (ANTS, ICNC, INDICON, ICSC, IATMSI).',
      'Filed Indian Patent on AI-driven Post-Quantum Cryptographic Key Management System.',
    ],
  },
];

const education = [
  {
    degree: 'Ph.D. in Computer Science and Engineering',
    institution: 'Dr. Shyama Prasad Mukherjee IIIT Naya Raipur',
    period: 'January 2023 – Ongoing',
    grade: 'CGPA: 8.00 / 10.0',
    specialization: 'Beyond 5G Networks, SDN & AI-Driven Mobility Management',
    courses: ['Data Mining & ML', 'Software-Defined Networking', 'ML for Communication Networks'],
  },
  {
    degree: 'M.Tech. in Computer Science (CPS)',
    institution: 'Central University of Rajasthan',
    period: 'September 2020 – August 2022',
    grade: 'CGPA: 7.50 / 10.0',
    specialization: 'Cyber-Physical Systems & Distributed Networks',
  },
  {
    degree: 'B.Tech. in Computer Science and Engineering',
    institution: 'Asansol Engineering College (M.A.K.A.U.T.)',
    period: 'August 2017 – July 2020',
    grade: 'CGPA: 7.17 / 10.0',
  },
  {
    degree: 'Diploma in Computer Science and Technology',
    institution: 'ABS Academy of Polytechnic (W.B.S.C.T.V.E.S.D.)',
    period: 'August 2014 – July 2017',
    grade: 'CGPA: 8.00 / 10.0',
  },
];

export const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest font-mono">
            Academic Track & Trajectory
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A continuous journey of rigorous research fellowship, academic teaching, and foundational computer engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Academic Positions</h3>
                <p className="text-xs text-muted-foreground font-mono">Teaching & Funded JRF Roles</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="relative pl-6 md:pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
                >
                  {/* Glowing Node */}
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary shadow-glow ring-4 ring-primary/20" />

                  <div className="p-6 rounded-3xl glass border border-border/70 hover:border-primary/40 hover:shadow-card-hover transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                        {exp.period}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {exp.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold mt-2 text-foreground">{exp.title}</h4>
                    <p className="text-sm font-semibold text-primary/90 mt-0.5">{exp.organization}</p>
                    <p className="text-xs text-muted-foreground">{exp.location}</p>

                    <ul className="mt-4 space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">▹</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
                <p className="text-xs text-muted-foreground font-mono">Degrees & Research Focus</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="relative pl-6 md:pl-8 pb-8 border-l-2 border-border last:pb-0"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-card border-2 border-primary" />

                  <div className="p-6 rounded-3xl glass border border-border/70 hover:border-primary/40 hover:shadow-card-hover transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-secondary text-foreground">
                        {edu.grade}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold mt-2 text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{edu.institution}</p>

                    {edu.specialization && (
                      <p className="text-xs text-primary font-mono mt-2 bg-secondary/40 p-2 rounded-xl border border-border/40">
                        Focus: {edu.specialization}
                      </p>
                    )}

                    {edu.courses && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary/50 text-muted-foreground"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
