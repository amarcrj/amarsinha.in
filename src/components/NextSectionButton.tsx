// src/components/NextSectionButton.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export const NextSectionButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [sections, setSections] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const allSections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
    setSections(allSections);

    const checkVisibility = () => {
      if (allSections.length === 0) return;

      const currentScroll = window.scrollY + window.innerHeight / 2;
      let currentIndex = -1;

      for (let i = 0; i < allSections.length; i++) {
        const sectionTop = allSections[i].offsetTop;
        const sectionBottom = sectionTop + allSections[i].offsetHeight;
        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
          currentIndex = i;
          break;
        }
      }

      if (currentIndex === allSections.length - 1) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  const scrollToNextSection = () => {
    if (sections.length === 0) return;

    const currentScroll = window.scrollY + window.innerHeight / 2;
    let nextIndex = -1;

    for (let i = 0; i < sections.length; i++) {
      const sectionTop = sections[i].offsetTop;
      if (sectionTop > currentScroll) {
        nextIndex = i;
        break;
      }
    }

    if (nextIndex !== -1 && nextIndex < sections.length) {
      sections[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToNextSection}
          className="fixed z-50 p-3 md:p-4 rounded-full 
                     bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm 
                     border border-gray-200 dark:border-gray-700
                     shadow-lg hover:shadow-xl transition-all duration-300 group
                     focus:outline-none focus:ring-2 focus:ring-primary/50
                     bottom-8 right-8 md:bottom-8 md:right-8"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next section"
        >
          <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-200 
                               group-hover:text-primary transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};