// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-border/80 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dr. Amar Sinha. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>IIIT Naya Raipur & ITM University</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
