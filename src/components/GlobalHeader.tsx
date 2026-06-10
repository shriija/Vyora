import React from 'react';
import { Logo } from './Logo';

export const GlobalHeader: React.FC = () => {
  return (
    <header 
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '2px solid var(--border-color)',
        padding: '12px var(--space-lg)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}
    >
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
        {/* Left Column: Serif Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <Logo />
        </a>

        {/* Center: Navigation Links in Caps */}
        <nav 
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center'
          }}
          aria-label="Main Navigation"
        >
          {['work', 'process', 'mission', 'team'].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-pink)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right Column: Pink Pill Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <a 
            href="mailto:teamvyora@gmail.com"
            className="plm-btn-primary"
            style={{
              padding: '6px 16px',
              fontSize: '0.75rem'
            }}
          >
            Join The Club
          </a>
        </div>
      </div>
    </header>
  );
};
