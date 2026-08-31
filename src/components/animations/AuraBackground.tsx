// src/components/animations/AuraBackground.tsx
import React from 'react';

interface AuraBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const AuraBackground: React.FC<AuraBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`aura-bg ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      {/* ========================================================
          DARK MODE: "Abyssal Void" Mesh Layers (4 Layers)
          ======================================================== */}
      <div className="aura-dark-layer-1" aria-hidden="true" />
      <div className="aura-dark-layer-2" aria-hidden="true" />
      <div className="aura-dark-layer-3" aria-hidden="true" />
      <div className="aura-dark-layer-4" aria-hidden="true" />

      {/* ========================================================
          LIGHT MODE: "Mint Cloud" Nebula Layers (3 Layers)
          ======================================================== */}
      <div className="aura-light-layer-1" aria-hidden="true" />
      <div className="aura-light-layer-2" aria-hidden="true" />
      <div className="aura-light-layer-3" aria-hidden="true" />

      {/* Page Content sits cleanly above all decorative layers */}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};
