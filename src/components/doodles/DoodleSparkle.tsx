// src/components/doodles/DoodleSparkle.tsx
import React from 'react';

interface DoodleSparkleProps {
  className?: string;
  size?: number;
}

export const DoodleSparkle: React.FC<DoodleSparkleProps> = ({
  className = '',
  size = 20,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none text-primary ${className}`}
    >
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
};
