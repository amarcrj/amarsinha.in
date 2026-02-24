import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amar@iiitnr.edu.in',
    href: 'mailto:amar@iiitnr.edu.in',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-7679496474',
    href: 'tel:+917679496474',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'IIIT Naya Raipur, Chhattisgarh, India',
    href: null,
  },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/amarcrj', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/amarcrj', label: 'GitHub' },
  { icon: Globe, href: 'https://www.amarsinha.in', label: 'Website' },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Let's{' '}
            <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Open to research collaborations, speaking opportunities, and discussions about B5G networks and AI/ML.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 rounded-2xl glass text-center hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{item.label}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors mt-2 block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground mt-2">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
