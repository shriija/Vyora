import React from 'react';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  colorVar: string;
  tilt: string;
  actionText: string;
}

export const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      step: "01",
      title: "Discover",
      description: "COFFEE & DIALOGUE",
      detail: "We meet at your local storefront to study your workflow, client talk, and neighborhood character, translating those real-world values directly to the screen.",
      colorVar: "var(--brand-pink)",
      tilt: "rotate(-1.5deg)",
      actionText: "let's kick off"
    },
    {
      step: "02",
      title: "Design",
      description: "BESPOKE SKETCHES",
      detail: "We sketch customized grid systems for your shop's aesthetic. We review layout sheets, typography hierarchies, and custom menus together before coding.",
      colorVar: "var(--brand-blue)",
      tilt: "rotate(1deg)",
      actionText: "review layouts"
    },
    {
      step: "03",
      title: "Build",
      description: "PURE TS + CSS CODE",
      detail: "We hand-code every module using fast, semantic React, TypeScript, and CSS. No page builders, heavy templates, or bloated plugins to slow down queries.",
      colorVar: "var(--brand-green)",
      tilt: "rotate(-1deg)",
      actionText: "watch progress"
    },
    {
      step: "04",
      title: "Grow",
      description: "LAUNCH & FINDABILITY",
      detail: "We deploy secure hosting, manage domain names, index storefronts on search consoles, and configure local listings so nearby neighbors find you first.",
      colorVar: "var(--brand-yellow)",
      tilt: "rotate(2deg)",
      actionText: "launch live"
    }
  ];

  return (
    <section 
      id="process"
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
        <div style={{ marginBottom: 'var(--space-2xl)', textAlign: 'center' }}>
          <div style={{ marginBottom: '10px' }}>
            <span className="blue-marker-tag">
              [ 03 / OUR METHODOLOGY ]
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
            our simple <span className="pink-highlight">process</span>.
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
            No complex enterprise systems or jargon. Simple, direct design and development steps optimized for local storefronts.
          </p>
        </div>

        {/* Process Cards Grid matching PLM card structure */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '24px',
            position: 'relative'
          }}
        >
          {steps.map((item, index) => (
            <div 
              key={index} 
              style={{
                backgroundColor: item.colorVar,
                border: '2px solid var(--border-color)',
                boxShadow: '4px 4px 0px var(--border-color)',
                padding: 'var(--space-lg) var(--space-md) var(--space-md) var(--space-md)',
                transform: item.tilt,
                borderRadius: '12px',
                position: 'relative',
                minHeight: '270px',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '6px 6px 0px var(--border-color)';
                e.currentTarget.style.transform = `${item.tilt} scale(1.02) translateY(-3px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '4px 4px 0px var(--border-color)';
                e.currentTarget.style.transform = item.tilt;
              }}
            >
              <div>
                {/* Big Step Number in Serif font */}
                <div 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.4rem',
                    color: 'var(--text-primary)',
                    lineHeight: '1',
                    marginBottom: '8px',
                    opacity: 0.95
                  }}
                >
                  {item.step}
                </div>

                {/* H3 Title */}
                <h3 
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    marginBottom: '2px'
                  }}
                >
                  {item.title}
                </h3>

                {/* Scope Tag in Monospace */}
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '10px'
                  }}
                >
                  {item.description}
                </span>

                {/* Description Detail */}
                <p 
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5'
                  }}
                >
                  {item.detail}
                </p>
              </div>

              {/* White pill button badge at bottom of card */}
              <div style={{ marginTop: '15px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid var(--border-color)',
                    borderRadius: '20px',
                    padding: '3px 12px',
                    fontSize: '0.65rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'bold',
                    color: 'var(--text-primary)',
                    textTransform: 'lowercase'
                  }}
                >
                  {item.actionText}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
