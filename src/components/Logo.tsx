import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div 
      className={`logo-plm ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: '4px',
        userSelect: 'none'
      }}
    >
      <span 
        style={{ 
          fontFamily: "var(--font-display)", 
          fontWeight: 'normal', 
          fontSize: '1.9rem', 
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
          textTransform: 'lowercase'
        }}
      >
        vyora
      </span>
      <span 
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--brand-pink)',
          borderRadius: '50%',
          display: 'inline-block'
        }}
      />
    </div>
  );
};
