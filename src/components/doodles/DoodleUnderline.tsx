// src/components/doodles/DoodleUnderline.tsx
import React from 'react';

interface DoodleUnderlineProps {
  className?: string;
  color?: string;
}

export const DoodleUnderline: React.FC<DoodleUnderlineProps> = ({
  className = '',
  color = 'currentColor',
}) => {
  return (
    <svg
      viewBox="0 0 250 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute left-0 -bottom-2 w-full h-3 select-none pointer-events-none ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M3 14C50 4 150 2 247 11C180 6 80 10 15 17"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-85"
      />
    </svg>
  );
};
