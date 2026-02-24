import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Code, Wrench, Cloud, Network, Brain } from 'lucide-react';

const skillCategories = [
  {
    icon: Network,
    title: 'Domain Knowledge',
    skills: ['SDN', 'OpenFlow', '5G/6G Concepts', 'O-RAN', 'B5G Networks', 'Mobility Management'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Brain,
    title: 'AI/ML',
    skills: ['TensorFlow', 'Scikit-learn', 'Time Series Analysis', 'Model Training', 'Deep Learning', 'Classification & Regression'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    title: 'Programming',
    skills: ['Python', 'C/C++', 'Java', 'JavaScript', 'SQL', 'PHP', 'HTML/CSS'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Wrench,
    title: 'Developer Tools',
    skills: ['VS Code', 'NetBeans', 'Android Studio', 'WHM/CPanel', 'AWS Cloud', 'Git'],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Cloud,
    title: 'Technologies',
    skills: ['Linux', 'GitHub', 'WordPress', 'Yii2', 'Wireshark', 'Docker'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Cpu,
    title: 'Implementation',
    skills: ['Mininet-WiFi', 'IEEE Innovation Testbed', 'IoT', 'UERANSIM', 'NetSim', 'ESP32'],
    color: 'from-red-500 to-rose-500',
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Technical Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Skills &{' '}
            <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl glass hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
