// src/components/doodles/DoodleArrow.tsx
import React from 'react';

interface DoodleArrowProps {
  text?: string;
  className?: string;
  arrowClassName?: string;
  textClassName?: string;
}

export const DoodleArrow: React.FC<DoodleArrowProps> = ({
  text = 'Explore Papers!',
  className = '',
  arrowClassName = '',
  textClassName = '',
}) => {
  return (
    <div className={`inline-flex flex-col items-center select-none pointer-events-none ${className}`}>
      {text && (
        <span
          className={`font-display text-xs font-semibold italic text-primary tracking-wide mb-1 -rotate-6 ${textClassName}`}
        >
          {text}
        </span>
      )}
      <svg
        width="48"
        height="48"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`text-primary ${arrowClassName}`}
      >
        <path
          d="M8 8C14 22 24 38 42 40M42 40L33 32M42 40L35 47"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
