import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';

const stats = [
  { icon: BookOpen, value: '6+', label: 'Publications' },
  { icon: Award, value: '1', label: 'Patents' },
  { icon: Users, value: '40%', label: 'IEEE Membership Growth' },
  { icon: GraduationCap, value: 'Ph.D.', label: 'Ongoing Research' },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Advancing{' '}
            <span className="text-gradient">Wireless Networks</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an innovative researcher with expertise in <span className="text-foreground font-medium">Beyond 5G (B5G)</span> mobile networks,
              <span className="text-foreground font-medium"> Software-Defined Networking (SDN)</span>,
              AI-driven handover decision-making algorithms, and wireless network simulations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a proven track record in developing Mininet WiFi-based testbeds, applying learning models
              for mobility management, and enhancing overall network performance, I bridge the gap between
              theoretical research and practical implementation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my <span className="text-foreground font-medium">Ph.D. at IIIT Naya Raipur</span>,
              I'm passionate about pushing the boundaries of next-generation wireless communication through
              AI/ML-driven solutions.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['SDN', 'B5G/6G', 'AI/ML', 'IoT', 'O-RAN', 'Quantum Computing'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm rounded-full glass text-primary border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-6 rounded-2xl glass hover:shadow-card-hover transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
