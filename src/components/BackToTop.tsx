// src/components/BackToTop.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const heroSection = document.getElementById('hero');
      const heroBottom = heroSection ? heroSection.getBoundingClientRect().bottom : window.innerHeight;
      if (window.scrollY > heroBottom - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed z-50 p-3 md:p-4 rounded-full 
                     bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm 
                     border border-gray-200 dark:border-gray-700
                     shadow-lg hover:shadow-xl transition-all duration-300 group
                     focus:outline-none focus:ring-2 focus:ring-primary/50
                     bottom-24 right-8 md:bottom-8 md:right-24"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-200 
                             group-hover:text-primary transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};