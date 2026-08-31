// src/components/animations/AuraBackground.tsx
import React from 'react';

interface AuraBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const AuraBackground: React.FC<AuraBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* ========================================================
          GLOBAL FIXED AURA BACKDROP (Consistent across all scrolling)
          ======================================================== */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
        aria-hidden="true"
        style={{
          minHeight: '100vh',
          width: '100vw',
        }}
      >
        {/* DARK MODE: "Abyssal Void" Mesh Layers (4 Layers) */}
        <div className="aura-dark-layer-1" />
        <div className="aura-dark-layer-2" />
        <div className="aura-dark-layer-3" />
        <div className="aura-dark-layer-4" />

        {/* LIGHT MODE: "Mint Cloud" Nebula Layers (3 Layers) */}
        <div className="aura-light-layer-1" />
        <div className="aura-light-layer-2" />
        <div className="aura-light-layer-3" />
      </div>

      {/* Page Content sits cleanly above the fixed global backdrop */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
