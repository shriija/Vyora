import React, { useState } from 'react';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('heyvyora@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer 
      className="graph-grid"
      style={{
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-xl)',
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Envelope Paper Card Block styled in PLM colors */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            border: '2.5px solid var(--border-color)',
            borderRadius: '16px',
            boxShadow: '6px 6px 0px var(--border-color)',
            maxWidth: '680px',
            margin: '0 auto var(--space-xl) auto',
            padding: 'var(--space-xl) var(--space-lg) var(--space-lg) var(--space-lg)',
            position: 'relative',
            transform: 'rotate(0.5deg)',
            overflow: 'hidden'
          }}
        >
          {/* Diagonal Envelope Stripes Border at top */}
          <div 
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, height: '12px',
              backgroundImage: 'repeating-linear-gradient(-45deg, var(--brand-pink), var(--brand-pink) 10px, #FFF 10px, #FFF 20px, var(--brand-blue) 20px, var(--brand-blue) 30px, #FFF 30px, #FFF 40px)',
              borderBottom: '2.5px solid var(--border-color)'
            }}
          />

          {/* Postage Stamp Accent in corner */}
          <div 
            style={{
              position: 'absolute',
              top: '25px',
              right: '25px',
              width: '65px',
              height: '75px',
              border: '2px dashed var(--border-color)',
              backgroundColor: 'var(--brand-yellow)',
              borderRadius: '2px',
              transform: 'rotate(6deg)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px',
              boxShadow: '1px 1px 3px rgba(0,0,0,0.05)',
              pointerEvents: 'none'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>☕</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', fontWeight: 'bold', color: 'var(--text-primary)', textAlign: 'center', marginTop: '4px' }}>
              VYORA POST
            </span>
          </div>

          <div style={{ textAlign: 'center' }}>
            <span 
              style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.7rem', 
                color: 'var(--text-secondary)',
                letterSpacing: '0.05em',
                display: 'block',
                marginBottom: '10px'
              }}
            >
              [ INITIATE CONVERSATION ]
            </span>

            {/* Serif Invite Header */}
            <h2 
              style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                color: 'var(--text-primary)',
                fontWeight: 'normal',
                lineHeight: 1.15,
                marginBottom: '12px',
                textTransform: 'lowercase'
              }}
            >
              let's grab a <span className="pink-highlight">cup of coffee</span>.<br />
              the first one is on us.
            </h2>

            <p 
              style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.9rem',
                lineHeight: '1.6',
                maxWidth: '480px',
                margin: '0 auto var(--space-md) auto'
              }}
            >
              No high-pressure sales calls or complex contracts. Send us a message, share your current website, and let's talk custom engineering.
            </p>

            {/* Email link with underline */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <a 
                href="mailto:heyvyora@gmail.com?subject=Coffee and Web Design Conversation"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 4.5vw, 2.5rem)',
                  fontWeight: 'normal',
                  color: 'var(--text-primary)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '6px',
                  transition: 'color 0.2s ease',
                  textTransform: 'lowercase'
                }}
              >
                heyvyora@gmail.com
              </a>

              {/* Copy email button badge */}
              <button 
                onClick={copyEmail}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  border: '1.5px solid var(--border-color)',
                  padding: '3px 10px',
                  backgroundColor: 'var(--brand-pink)',
                  borderRadius: '20px',
                  boxShadow: '2px 2px 0px var(--border-color)',
                  transition: 'all 0.2s ease'
                }}
              >
                {copied ? '✓ COPIED' : '📋 CLICK TO COPY EMAIL'}
              </button>
            </div>
          </div>

        </div>

        {/* Lower footer copyright details */}
        <div 
          style={{ 
            borderTop: '2px solid var(--border-color)', 
            paddingTop: 'var(--space-md)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '15px',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            fontWeight: 'bold'
          }}
        >
          <div>
            © {new Date().getFullYear()} VYORA STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>INSTAGRAM: Coming Soon</span>
            <a 
              href="mailto:heyvyora@gmail.com" 
              style={{ textDecoration: 'underline', color: 'var(--text-primary)' }}
            >
              EMAIL US
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
