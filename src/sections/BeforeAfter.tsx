import React from 'react';

export const BeforeAfter: React.FC = () => {
  return (
    <section 
      id="transformation"
      style={{
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-2xl)',
        backgroundColor: '#FFFFFF',
        borderBottom: '2.5px solid var(--border-color)',
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
          <div style={{ marginBottom: '10px' }}>
            <span className="blue-marker-tag">
              [ 01 / A REDESIGN BEFORE A PROPOSAL ]
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
            we show you what's <span className="pink-highlight">possible</span>.
          </h2>
          <p 
            style={{ 
              color: 'var(--text-secondary)', 
              maxWidth: '580px',
              margin: '8px auto 0 auto',
              fontSize: '0.95rem',
              lineHeight: 1.5 
            }}
          >
            We don't pitch with boring slide decks. We analyze a section of your current website, redesign it from scratch, and show you the difference.
          </p>
        </div>

        {/* Spiral Notebook Container with PLM Styles */}
        <div className="notebook-container">
          {/* Spiral binder wire overlay */}
          <div className="notebook-spiral" />

          {/* Left Page (Legacy Outdated Site) - Yellowish grid */}
          <div className="notebook-left-page">
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '35px', width: '1.5px', backgroundColor: 'rgba(239, 68, 68, 0.15)' }} />

            <div style={{ paddingLeft: '30px' }}>
              <span 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.7rem', 
                  color: 'var(--text-secondary)', 
                  fontWeight: 'bold',
                  display: 'block',
                  marginBottom: '15px'
                }}
              >
                [ OUTDATED / LEGACY WEBSITE ]
              </span>

              {/* Legacy card representation */}
              <div 
                style={{
                  border: '2px solid var(--border-color)',
                  backgroundColor: '#FFFFFF',
                  padding: '12px',
                  borderRadius: '6px',
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                  boxShadow: '3px 3px 0px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1.5px solid rgba(0,0,0,0.05)', paddingBottom: '6px', marginBottom: '8px', fontSize: '0.75rem' }}>
                  <span style={{ fontWeight: 'bold' }}>Welcome to Cafe Central</span>
                  <span>☎ 555-0199</span>
                </div>
                <div style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>
                  We serve community coffee, warm pastries, fresh bakery cookies, lunch combos, sandwiches, salads, catering. PDF menu file size 12MB. Click here for details.
                </div>
              </div>

              {/* Red-ink annotation notes */}
              <div>
                <h4 style={{ fontFamily: 'var(--font-script)', fontSize: '1.35rem', color: '#C2410C', marginBottom: '6px' }}>
                  The Problems:
                </h4>
                <ul 
                  style={{ 
                    fontFamily: 'var(--font-script)', 
                    fontSize: '1.25rem', 
                    color: '#C2410C', 
                    listStyleType: 'circle',
                    paddingLeft: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <li>Layout breaks completely on phone screens</li>
                  <li>Heavy PDF menus block search engines</li>
                  <li>Takes 8 seconds to load on mobile data</li>
                  <li>Cluttered layout stuffed with keyword lists</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Page (The Redesign) - Clean blueprint graph grid */}
          <div className="notebook-right-page">
            <span 
              style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.7rem', 
                color: 'var(--brand-green)', 
                fontWeight: 'bold',
                display: 'block',
                marginBottom: '15px'
              }}
            >
              [ REDESIGNED / BY VYORA ]
            </span>

            {/* Vyora redesigned mockup layout */}
            <div 
              style={{
                border: '2px solid var(--border-color)',
                backgroundColor: 'var(--brand-pink)', /* PLM Pink card representation */
                padding: '12px',
                borderRadius: '8px',
                boxShadow: '3px 3px 0px var(--border-color)',
                marginBottom: '20px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1.5px dashed var(--border-color)', paddingBottom: '6px', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '0.85rem', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}>CENTRAL.</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-primary)' }}>MENU / VISIT</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                <h5 style={{ fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '2px' }}>Baked fresh, daily.</h5>
                Fifteen years of community recipes, optimized for your phone screen.
              </div>
            </div>

            {/* Green/Blue-ink annotations */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-script)', fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                The Solutions:
              </h4>
              <ul 
                style={{ 
                  fontFamily: 'var(--font-script)', 
                  fontSize: '1.25rem', 
                  color: 'var(--text-primary)', 
                  listStyleType: 'circle',
                  paddingLeft: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <li>100% mobile-friendly responsive menu navigation</li>
                <li>Fully indexable digital menu details for local SEO</li>
                <li>Loads instantly in under 0.8 seconds</li>
                <li>Clear direct calls to action (order online, get directions)</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
