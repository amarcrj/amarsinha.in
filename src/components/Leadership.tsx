import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, Shield } from 'lucide-react';

const leadership = [
  {
    icon: Users,
    role: 'Student Branch Chair',
    organization: 'IEEE Student Branch',
    location: 'Dr. Shyama Prasad Mukherjee IIIT Naya Raipur',
    period: '2024 – Present',
    achievements: [
      'Organized 5+ technical workshops',
      'Increased active membership by 40%',
      'Managed executive committee of 5 members',
    ],
  },
  {
    icon: Award,
    role: 'Post Graduate Representative',
    organization: 'Students Activity Center (SAC)',
    location: 'IIIT Naya Raipur',
    period: '2024 – 2025',
    achievements: [
      'Represented 50+ PG students in institute council',
      'Led initiatives improving research facilities',
      'Enhanced student-faculty collaboration',
    ],
  },
  {
    icon: Shield,
    role: 'Ph.D. Student Member',
    organization: 'Anti-Ragging Committee',
    location: 'IIIT Naya Raipur',
    period: '2024 – 2025',
    achievements: [
      'Facilitated awareness sessions for 300+ new entrants',
      'Supported student welfare initiatives',
      'Upheld anti-ragging regulations',
    ],
  },
];

const memberships = [
  'Graduate Student Member, IEEE',
  'IEEE Young Professionals',
  'Student Member, ACM',
  'IEEE ComSoc',
  'IEEE Systems Council',
  'IEEE CTSoc',
  'IEEE Future Networks Community',
];

export const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Community Impact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Leadership &{' '}
            <span className="text-gradient">Memberships</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {leadership.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl glass hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">{item.period}</span>
              <h3 className="text-lg font-semibold mt-2">{item.role}</h3>
              <p className="text-sm text-muted-foreground mt-1">{item.organization}</p>
              <p className="text-xs text-muted-foreground/70">{item.location}</p>
              <ul className="mt-4 space-y-2">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Professional Memberships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-8 rounded-2xl glass text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Professional Memberships</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {memberships.map((membership) => (
              <span
                key={membership}
                className="px-4 py-2 text-sm rounded-full glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {membership}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
