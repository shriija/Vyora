import React from 'react';
import { Logo } from './Logo';

export const GlobalHeader: React.FC = () => {
  return (
    <header className="global-header">
      <div className="global-header-container">
        {/* Left Column: Serif Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <Logo />
        </a>

        {/* Center: Navigation Links in Caps */}
        <nav className="header-nav" aria-label="Main Navigation">
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a 
            href="mailto:heyvyora@gmail.com"
            className="plm-btn-primary header-cta-button"
          >
            Join The Club
          </a>
        </div>
      </div>
    </header>
  );
};
