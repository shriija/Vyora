import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section 
      className="graph-grid"
      style={{
        borderBottom: '2.5px solid var(--border-color)',
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-2xl)',
        position: 'relative',
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Floating Cherry Emoji 🍒 */}
      <div 
        className="float-doodle"
        style={{
          position: 'absolute',
          top: '12%',
          left: '32%',
          fontSize: '2rem',
          userSelect: 'none',
          pointerEvents: 'none'
        }}
      >
        🍒
      </div>

      {/* Floating Speech Bubble Emoji 💬 */}
      <div 
        className="float-doodle"
        style={{
          position: 'absolute',
          top: '8%',
          right: '32%',
          fontSize: '2rem',
          userSelect: 'none',
          pointerEvents: 'none',
          animationDelay: '1.5s'
        }}
      >
        💬
      </div>

      {/* Rotating Metallic Disco Ball 🪩 */}
      <div 
        className="float-doodle"
        style={{
          position: 'absolute',
          bottom: '22%',
          right: '28%',
          fontSize: '2.5rem',
          userSelect: 'none',
          pointerEvents: 'none',
          animationDelay: '0.7s'
        }}
      >
        🪩
      </div>

      {/* Center layout grid */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Blue Marker Tag */}
        <div style={{ marginBottom: '18px' }}>
          <div className="blue-marker-tag">
            WHERE WE BUILD BEFORE WE ASK FOR YOUR TRUST
          </div>
        </div>

        {/* Serif PLM H1 */}
        <h1 
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            color: 'var(--text-primary)',
            fontWeight: 'normal',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            marginBottom: 'var(--space-md)',
            textTransform: 'lowercase'
          }}
        >
          <span className="pink-highlight">we redesign</span> <br />
          for local storefronts <br />
          <span className="pink-highlight">before we pitch.</span>
        </h1>

        {/* Sub-headline description */}
        <p 
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 500,
            maxWidth: '620px',
            margin: '0 auto var(--space-lg) auto',
            lineHeight: 1.5
          }}
        >
          Custom websites built line-by-line for cafés, salons, bakeries, clinics, and neighborhood favorites.
        </p>

        {/* Pill buttons */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="mailto:heyvyora@gmail.com?subject=Free Redesign Request"
            className="plm-btn-primary"
            style={{ fontSize: '0.85rem', padding: '10px 24px' }}
          >
            Get a Free Section Redesign
          </a>
          <a 
            href="#work"
            className="plm-btn-secondary"
            style={{ fontSize: '0.85rem', padding: '10px 24px' }}
          >
            Explore Portfolio Demos
          </a>
        </div>

      </div>

    </section>
  );
};
