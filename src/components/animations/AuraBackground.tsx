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
          DARK MODE: "Quiet Glow" Nebula Layers (2 Layers + Film Grain)
          ======================================================== */}
      <div className="aura-dark-layer-1" aria-hidden="true" />
      <div className="aura-dark-layer-2" aria-hidden="true" />

      {/* Film-grain overlay for Dark Mode */}
      <div className="aura-dark-grain" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.7"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="0.181 0.608 0.061 0 0.075
                    0.181 0.608 0.061 0 0.075
                    0.181 0.608 0.061 0 0.075
                    0     0     0     1 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

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
