import React from 'react';

export const Mission: React.FC = () => {
  return (
    <section 
      id="mission"
      style={{
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-2xl)',
        backgroundColor: '#FFFFFF',
        borderBottom: '2.5px solid var(--border-color)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-md)', textAlign: 'center' }}>
          <div style={{ marginBottom: '10px' }}>
            <span className="blue-marker-tag">
              [ 04 / WHY WE EXIST ]
            </span>
          </div>
          <h2 
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 2.8rem)', 
              fontFamily: 'var(--font-display)',
              fontWeight: 'normal',
              color: 'var(--text-primary)',
              textTransform: 'lowercase',
              marginTop: '5px'
            }}
          >
            why <span className="pink-highlight">vyora?</span>
          </h2>
        </div>

        {/* Scattered Scrapbook Workspace */}
        <div className="scrapbook-container">
          <div className="scrapbook-grid">
            
            {/* 1. Vision Card */}
            <div className="scrapbook-card card-vision">
              <div className="tape-strip blue" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'normal', fontSize: '1.25rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                🧠 Vision
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                Every local favorite deserves a website they're proud to share.
              </p>
            </div>

            {/* 2. Aura Card */}
            <div className="scrapbook-card card-aura">
              <div className="tape-strip pink" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'normal', fontSize: '1.25rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                ✨ Aura
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                Warm, memorable design that reflects the personality of the business.
              </p>
            </div>

            {/* 3. Center Dictionary Entry */}
            <div className="dictionary-card">
              {/* Tape at the top of dictionary entry */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(-1deg)',
                  height: '20px',
                  width: '80px',
                  backgroundColor: 'rgba(250, 235, 215, 0.7)',
                  border: '1px dashed rgba(0, 0, 0, 0.1)'
                }}
              />
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 'normal', color: 'var(--text-primary)' }}>
                  <span style={{ color: 'var(--brand-blue)' }}>vy</span>
                  <span style={{ color: 'var(--brand-pink)' }}>ora</span>.
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  (vee-yor-a)
                </span>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.55rem', 
                    fontWeight: 'bold',
                    backgroundColor: 'rgba(59, 130, 246, 0.12)', 
                    color: '#000000', 
                    padding: '2px 6px',
                    borderRadius: '4px',
                    marginRight: '6px',
                    textTransform: 'uppercase'
                  }}
                >
                  vision
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-secondary)', marginRight: '6px' }}>+</span>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.55rem', 
                    fontWeight: 'bold',
                    backgroundColor: 'rgba(236, 72, 153, 0.12)', 
                    color: '#000000', 
                    padding: '2px 6px',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}
                >
                  aura
                </span>
              </div>

              <p 
                style={{ 
                  fontSize: '0.92rem', 
                  color: 'var(--text-primary)', 
                  lineHeight: '1.45',
                  fontFamily: 'var(--font-sans)',
                  borderLeft: '2.5px solid var(--border-color)',
                  paddingLeft: '10px'
                }}
              >
                the belief that every local business deserves a digital presence that feels as special as the place itself.
              </p>
            </div>

            {/* 4. Engineering Card */}
            <div className="scrapbook-card card-engineering">
              <div className="tape-strip yellow" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'normal', fontSize: '1.25rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                💻 Engineering
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                Fast, hand-coded websites without bloated templates.
              </p>
            </div>

            {/* 5. Community Card */}
            <div className="scrapbook-card card-community">
              <div className="tape-strip green" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'normal', fontSize: '1.25rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                🤝 Community
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                We work with neighborhood businesses, not faceless corporations.
              </p>
            </div>

            {/* 6. Relationships Card */}
            <div className="scrapbook-card card-relationships">
              <div className="tape-strip pink" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 'normal', fontSize: '1.25rem', marginBottom: '6px', color: 'var(--text-primary)' }}>
                ☕ Relationships
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                Conversations first. Contracts second.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Statement Narrative */}
        <div 
          style={{ 
            maxWidth: '650px', 
            margin: 'var(--space-xl) auto 0 auto', 
            textAlign: 'center', 
            borderTop: '2px dashed var(--border-color)', 
            paddingTop: 'var(--space-lg)',
            paddingLeft: 'var(--space-md)',
            paddingRight: 'var(--space-md)'
          }}
        >
          <p 
            style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: 'clamp(1rem, 2.2vw, 1.15rem)', 
              color: 'var(--text-primary)', 
              lineHeight: '1.6',
              fontWeight: 500
            }}
          >
            We are five Computer Science students who believe neighborhood favorites deserve the same level of digital craftsmanship as global brands.
          </p>
        </div>

      </div>
    </section>
  );
};
