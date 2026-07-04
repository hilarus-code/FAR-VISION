import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'full' | 'monogram';
  color?: string;
  className?: string;
}

export function Logo({ variant = 'full', color = '#D4AF37', ...props }: LogoProps) {
  if (variant === 'monogram') {
    return (
      <svg
        viewBox="35 15 130 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
        {...props}
      >
        {/* Outer Circular Ring with subtle gold gradient look */}
        <circle
          cx="100"
          cy="80"
          r="54"
          stroke={color}
          strokeWidth="3.5"
          className="transition-all"
        />
        
        {/* Minimalist glasses inside */}
        {/* Left lens */}
        <circle
          cx="79"
          cy="80"
          r="14"
          stroke={color}
          strokeWidth="3"
        />
        {/* Right lens */}
        <circle
          cx="121"
          cy="80"
          r="14"
          stroke={color}
          strokeWidth="3"
        />
        {/* Connecting bridge */}
        <path
          d="M 93 80 Q 100 73 107 80"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Left arm */}
        <path
          d="M 65 80 Q 57 78 51 83"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right arm */}
        <path
          d="M 135 80 Q 143 78 149 83"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props}
    >
      {/* Outer Circular Ring */}
      <circle
        cx="100"
        cy="80"
        r="54"
        stroke={color}
        strokeWidth="3.5"
        className="transition-all"
      />
      
      {/* Minimalist spectacles inside */}
      {/* Left lens */}
      <circle
        cx="79"
        cy="80"
        r="14"
        stroke={color}
        strokeWidth="3"
      />
      {/* Right lens */}
      <circle
        cx="121"
        cy="80"
        r="14"
        stroke={color}
        strokeWidth="3"
      />
      {/* Bridge */}
      <path
        d="M 93 80 Q 100 73 107 80"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left temple */}
      <path
        d="M 65 80 Q 57 78 51 83"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right temple */}
      <path
        d="M 135 80 Q 143 78 149 83"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Brand Name Text: tracked out serif style */}
      <text
        x="100"
        y="160"
        textAnchor="middle"
        fill={color}
        fontFamily="'Playfair Display', 'Didot', 'Georgia', serif"
        fontWeight="700"
        fontSize="19"
        letterSpacing="0.14em"
      >
        FAR-VISION
      </text>

      {/* Underline stroke below the brand name */}
      <line
        x1="45"
        y1="172"
        x2="155"
        y2="172"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
