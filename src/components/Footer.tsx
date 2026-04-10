import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Amar Sinha. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-6"
          >
            <span className="text-sm text-muted-foreground">
              Designed with passion for research
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
