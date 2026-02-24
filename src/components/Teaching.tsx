import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ugCourses = [
  {
    code: 'CS101',
    name: 'Introduction to Programming',
    description: 'Fundamentals of programming using Python and C',
  },
  {
    code: 'CS201',
    name: 'Data Structures',
    description: 'Arrays, linked lists, trees, graphs, and algorithms',
  },
  {
    code: 'CS301',
    name: 'Computer Networks',
    description: 'Network protocols, TCP/IP, and network architecture',
  },
  {
    code: 'CS401',
    name: 'Operating Systems',
    description: 'Process management, memory management, and file systems',
  },
];

const pgCourses = [
  {
    code: 'CS601',
    name: 'Data Mining and Machine Learning',
    description: 'Pattern recognition, clustering, classification, and deep learning',
  },
  {
    code: 'CS602',
    name: 'Software-Defined Networking',
    description: 'SDN architecture, OpenFlow, and network programmability',
  },
  {
    code: 'CS603',
    name: 'ML for Communication Networks',
    description: 'AI-driven network optimization and intelligent handover decisions',
  },
  {
    code: 'CS604',
    name: 'Advanced Wireless Networks',
    description: 'B5G/6G technologies, O-RAN, and next-gen communication systems',
  },
];

const CourseCard = ({ course, index }: { course: typeof ugCourses[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="p-6 rounded-2xl glass hover:shadow-card-hover transition-all duration-300 group"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <BookOpen className="w-6 h-6 text-primary" />
      </div>
      <div>
        <span className="text-xs font-medium text-primary uppercase tracking-wider">{course.code}</span>
        <h4 className="text-lg font-semibold mt-1">{course.name}</h4>
        <p className="text-sm text-muted-foreground mt-2">{course.description}</p>
      </div>
    </div>
  </motion.div>
);

export const Teaching = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="teaching" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Academic Teaching</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Teaching{' '}
            <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Delivering comprehensive courses across undergraduate and postgraduate programs, 
            focusing on cutting-edge technologies and practical applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="ug" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8 bg-card/50 border border-border">
              <TabsTrigger 
                value="ug" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <BookOpen className="w-4 h-4" />
                Undergraduate
              </TabsTrigger>
              <TabsTrigger 
                value="pg"
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <GraduationCap className="w-4 h-4" />
                Postgraduate
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ug" className="mt-0">
              <div className="grid md:grid-cols-2 gap-6">
                {ugCourses.map((course, index) => (
                  <CourseCard key={course.code} course={course} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pg" className="mt-0">
              <div className="grid md:grid-cols-2 gap-6">
                {pgCourses.map((course, index) => (
                  <CourseCard key={course.code} course={course} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
