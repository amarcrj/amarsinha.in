import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Assistant Professor',
    organization: 'ITM University, Raipur',
    location: 'School of Engineering and Research, Naya Raipur',
    period: 'September 2025 – Present',
    points: [
      'Delivering UG and PG courses with focus on advanced technologies',
      'Mentoring students in academic projects and research activities',
      'Publishing high-quality research in SCI-indexed journals',
      'Collaborating with industry peers for technology-driven research',
    ],
  },
  {
    type: 'work',
    title: 'Junior Research Fellow (JRF)',
    organization: 'Dr. Shyama Prasad Mukherjee IIIT Naya Raipur',
    location: 'Funded by IIITB COMET Foundation',
    period: 'August 2022 – August 2025',
    points: [
      'Designed and implemented algorithms for SDN-enabled B5G networks',
      'Configured experimental testbeds for validating network solutions',
      'Authored research articles for SCI-indexed journals and conferences',
      'Filed patents on communication techniques and optimization frameworks',
    ],
  },
];

const education = [
  {
    degree: 'Ph.D. in Computer Science and Engineering',
    institution: 'Dr. Shyama Prasad Mukherjee IIIT Naya Raipur',
    period: 'January 2023 – Ongoing',
    grade: 'CGPA: 8.00',
    courses: ['Data Mining and ML', 'SDN', 'ML for Communication Networks'],
  },
  {
    degree: 'M.Tech. in Computer Science (CPS)',
    institution: 'Central University of Rajasthan',
    period: 'September 2020 – August 2022',
    grade: 'CGPA: 7.50',
  },
  {
    degree: 'B.Tech. in Computer Science and Engineering',
    institution: 'Asansol Engineering College (M.A.K.A.U.T.)',
    period: 'August 2017 – July 2020',
    grade: 'CGPA: 7.17',
  },
  {
    degree: 'Diploma in Computer Science and Technology',
    institution: 'ABS Academy of Polytechnic (W.B.S.C.T.V.E.S.D.)',
    period: 'August 2014 – July 2017',
    grade: 'CGPA: 8.00',
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Career Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Experience &{' '}
            <span className="text-gradient">Education</span>
          </h2>
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
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </motion.div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="relative pl-6 md:pl-8 pb-8 border-l-2 border-border last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary shadow-glow" />
                  <div className="p-6 rounded-2xl glass hover:shadow-card-hover transition-all duration-300">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{exp.period}</span>
                    <h4 className="text-xl font-semibold mt-2">{exp.title}</h4>
                    <p className="text-muted-foreground mt-1">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground/70">{exp.location}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">▹</span>
                          {point}
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
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
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
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-secondary border-2 border-primary" />
                  <div className="p-6 rounded-2xl glass hover:shadow-card-hover transition-all duration-300">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{edu.period}</span>
                    <h4 className="text-lg font-semibold mt-2">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                    <p className="text-sm text-primary mt-2">{edu.grade}</p>
                    {edu.courses && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.courses.map((course) => (
                          <span key={course} className="text-xs px-2 py-1 rounded bg-secondary/50 text-muted-foreground">
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
