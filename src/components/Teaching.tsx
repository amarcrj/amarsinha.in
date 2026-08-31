// src/components/Teaching.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Send,
  Terminal,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SpotlightCard } from './animations/SpotlightCard';

const ugCourses = [
  {
    code: 'CS101',
    name: 'Introduction to Programming',
    description: 'Fundamentals of structured programming using C & Python with algorithmic thinking.',
    tools: ['Python 3', 'GCC / C99', 'GDB Debugger'],
    topics: ['Control structures', 'Pointer arithmetic', 'Memory management', 'File I/O'],
  },
  {
    code: 'CS201',
    name: 'Data Structures & Algorithms',
    description: 'Core abstract data types, asymptotic complexity analysis, and tree/graph structures.',
    tools: ['C++', 'Valgrind', 'VS Code'],
    topics: ['AVL Trees', 'Graph traversals', 'Dynamic programming', 'Hash tables'],
  },
  {
    code: 'CS301',
    name: 'Computer Networks',
    description: 'OSI/TCP-IP models, routing protocols, flow control, and packet-level network analysis.',
    tools: ['Wireshark', 'Cisco Packet Tracer', 'Socket API'],
    topics: ['TCP/UDP mechanics', 'BGP & OSPF routing', 'Congestion control', 'Subnetting'],
  },
  {
    code: 'CS401',
    name: 'Operating Systems',
    description: 'Kernel architectures, concurrent process synchronization, virtual memory, and file systems.',
    tools: ['Linux POSIX', 'Pthreads', 'Shell Scripting'],
    topics: ['Semaphores & Mutexes', 'Page replacement algorithms', 'System calls'],
  },
];

const pgCourses = [
  {
    code: 'CS601',
    name: 'Data Mining & Machine Learning',
    description: 'Statistical learning theory, supervised/unsupervised clustering, deep neural architectures.',
    tools: ['Scikit-Learn', 'PyTorch', 'Jupyter Lab'],
    topics: ['Support Vector Machines', 'Deep Convolutional Nets', 'SHAP/LIME Explainable AI', 'PCA'],
  },
  {
    code: 'CS602',
    name: 'Software-Defined Networking (SDN)',
    description: 'Disaggregated control-data plane, OpenFlow 1.3 protocol, and programmable data planes.',
    tools: ['Mininet-WiFi', 'Ryu Controller', 'Open vSwitch'],
    topics: ['Flow table orchestration', 'Northbound REST APIs', 'Controller load balancing'],
  },
  {
    code: 'CS603',
    name: 'ML for Communication Networks',
    description: 'Applying predictive AI models for radio resource management and mobility handover.',
    tools: ['TensorFlow', 'UERANSIM', 'Simu5G'],
    topics: ['Predictive Handover (iDecide)', 'Reinforcement Learning in RAN', 'QoS anomaly detection'],
  },
  {
    code: 'CS604',
    name: 'Advanced Wireless & 6G Networks',
    description: 'Next-generation cellular architectures, O-RAN disaggregation, and mmWave beamforming.',
    tools: ['Open5GS', 'NetSim', 'MATLAB 5G Toolbox'],
    topics: ['O-RAN RIC Architecture', 'Non-Terrestrial Networks (NTN)', 'Semantic Communications'],
  },
];

const CourseCard = ({
  course,
  index,
}: {
  course: typeof ugCourses[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="flex"
  >
    <SpotlightCard className="p-6 flex flex-col justify-between h-full w-full group hover:border-primary/40 transition-all duration-300">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="text-xs font-mono font-bold text-primary px-3 py-1 rounded-full bg-secondary/80 border border-border/60">
            {course.code}
          </span>
          <span className="text-[11px] font-mono text-muted-foreground">Semester Core</span>
        </div>

        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {course.name}
        </h4>
        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
          {course.description}
        </p>

        {/* Core Topics */}
        <div className="mt-4 pt-3 border-t border-border/40">
          <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1.5">
            Key Syllabus Topics:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {course.topics.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2.5 py-0.5 rounded-lg bg-secondary/50 text-foreground/80 font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lab Tools */}
      <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
          <Terminal className="w-3.5 h-3.5 text-primary" />
          <span>Tools: {course.tools.join(', ')}</span>
        </div>
      </div>
    </SpotlightCard>
  </motion.div>
);

export const Teaching: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="teaching" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-widest font-mono">
            Academic Pedagogy & Mentorship
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2.5">
            Teaching & <span className="text-gradient">Coursework</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
            Delivering hands-on curriculum across undergraduate and postgraduate computer science programs at ITM University and IIIT Naya Raipur.
          </p>
        </motion.div>

        {/* Course Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Tabs defaultValue="pg" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8 sm:mb-10 bg-secondary/60 border border-border p-1 rounded-full">
              <TabsTrigger
                value="pg"
                className="flex items-center justify-center gap-2 rounded-full text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                <GraduationCap className="w-4 h-4" />
                Postgraduate
              </TabsTrigger>
              <TabsTrigger
                value="ug"
                className="flex items-center justify-center gap-2 rounded-full text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                <BookOpen className="w-4 h-4" />
                Undergraduate
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pg" className="mt-0">
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
                {pgCourses.map((course, index) => (
                  <CourseCard key={course.code} course={course} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ug" className="mt-0">
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
                {ugCourses.map((course, index) => (
                  <CourseCard key={course.code} course={course} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Prospective Students & Research Openings Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto mt-12 sm:mt-14"
        >
          <SpotlightCard className="p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  RESEARCH OPPORTUNITIES OPEN
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-foreground">
                  Looking for Research Interns & Ph.D. / M.Tech Collaborators
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
                  Interested in publishing high-impact papers in Beyond 5G/6G Networks, SDN Emulation (Mininet), Post-Quantum Cryptography, or Edge AI? Reach out with your CV and research statement.
                </p>
              </div>

              <motion.a
                href="mailto:amar@iiitnr.edu.in?subject=Research%20Collaboration%20Inquiry%20-%20Amar%20Sinha"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-5 sm:px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-90 transition-all flex items-center gap-2 shrink-0 shadow-glow"
              >
                <Send className="w-4 h-4" />
                <span>Apply for Mentorship</span>
              </motion.a>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};
