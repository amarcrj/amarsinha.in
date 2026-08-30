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
        /* NO backgroundColor - blend modes composite against body/page bg */
      }}
    >
      {/* Layer 1 - Screen / Multiply */}
      <div
        className="aura-layer-1"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 42% 48% at 68% 48%, rgba(45,140,137,0.34) 0%, rgba(25,76,75,0.16) 42%, transparent 78%)',
          pointerEvents: 'none',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />

      {/* Layer 2 - Screen / Multiply */}
      <div
        className="aura-layer-2"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 20% 24% at 66% 48%, rgba(78,166,161,0.12) 0%, transparent 72%)',
          opacity: 0.8,
          pointerEvents: 'none',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />

      {/* Film-grain overlay - SVG feTurbulence noise, overlay blend */}
      <div
        className="aura-grain"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          mixBlendMode: 'overlay',
          opacity: 0.75,
          pointerEvents: 'none',
        }}
      >
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

      {/* Page Content sits above the absolute layers */}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};
