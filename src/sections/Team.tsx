import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  focus: string;
  detail: string;
  avatarBg: string;
  image: string;
  scrapbookLabel: string;
  scrapbookValue: string;
}

export const Team: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Shrija",
      role: "PM + DESIGN",
      focus: "Layout Architecture",
      detail: "Coordinates visual schedules, design systems, and alignment guides. Keeps the editorial grids clean.",
      avatarBg: "var(--brand-pink)",
      image: "/team-member-1.png",
      scrapbookLabel: "fav design tool",
      scrapbookValue: "figma (100+ tabs)"
    },
    {
      name: "Sadaf",
      role: "PM + PARTNERSHIPS",
      focus: "Local Relations",
      detail: "Manages neighborhood communications and ensures client storefront goals translate to engineers.",
      avatarBg: "var(--brand-blue)",
      image: "/team-member-2.png",
      scrapbookLabel: "fav local spot",
      scrapbookValue: "downtown plant nursery"
    },
    {
      name: "Priya",
      role: "GROWTH + OUTREACH",
      focus: "Community Outreach",
      detail: "Discovers local favorites and sketches concept builds to show shops their full potential.",
      avatarBg: "var(--brand-green)",
      image: "/team-member-3.png",
      scrapbookLabel: "fav café order",
      scrapbookValue: "iced vanilla matcha"
    },
    {
      name: "Varshini",
      role: "DEV + EXECUTION",
      focus: "TypeScript & UI",
      detail: "Translates mockup layouts into semantic, fast, and lightweight code. Focuses on mobile loads.",
      avatarBg: "var(--brand-yellow)",
      image: "/team-member-4.png",
      scrapbookLabel: "fav dev tool",
      scrapbookValue: "vs code (catppuccin)"
    },
    {
      name: "Greeshma",
      role: "DEV + OPERATIONS",
      focus: "SEO & Infra",
      detail: "Manages domain setup, secure hosting, Google Maps updates, and search index submissions.",
      avatarBg: "var(--brand-pink)",
      image: "/team-member-5.png",
      scrapbookLabel: "fav café order",
      scrapbookValue: "flat white"
    }
  ];

  return (
    <section 
      id="team"
      style={{
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-2xl)',
        backgroundColor: '#FFFFFF',
        borderBottom: '2.5px solid var(--border-color)',
        position: 'relative'
      }}
    >
      <div className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-2xl)', textAlign: 'center', padding: '0 var(--space-lg)' }}>
          <div style={{ marginBottom: '10px' }}>
            <span className="blue-marker-tag">
              [ 05 / COFOUNDERS ]
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
            meet our <span className="pink-highlight">members</span>.
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
            Five final-year Computer Science students working together. We code, design, and share coffee together with every client.
          </p>
        </div>

        {/* Members Carousel / Grid matching PLM theme */}
        <div className="team-list">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              {/* Circular Avatar Badge with thin outline */}
              <div 
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: member.avatarBg,
                  border: '2px solid var(--border-color)',
                  margin: '0 auto 15px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '2px 2px 0px rgba(0,0,0,0.05)',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Serif lowercase name */}
              <h3 
                style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.4rem', 
                  color: 'var(--text-primary)', 
                  textTransform: 'lowercase',
                  fontWeight: 'normal',
                  lineHeight: '1.2',
                  marginBottom: '2px'
                }}
              >
                {member.name}
              </h3>

              {/* Role tag in monospace */}
              <span 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.55rem', 
                  color: 'var(--text-secondary)',
                  fontWeight: 'bold',
                  letterSpacing: '0.05em',
                  display: 'block',
                  marginBottom: '10px',
                  textTransform: 'uppercase'
                }}
              >
                {member.role}
              </span>

              {/* Bio detail text */}
              <p 
                style={{ 
                  fontSize: '0.78rem', 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.4',
                  textAlign: 'center' 
                }}
              >
                {member.detail}
              </p>

              {/* Scrapbook handwriting detail */}
              <div 
                style={{
                  borderTop: '1px dashed var(--border-color)',
                  marginTop: '12px',
                  paddingTop: '10px',
                  fontFamily: 'var(--font-script)',
                  fontSize: '1.18rem',
                  color: 'var(--text-primary)',
                  lineHeight: '1.2',
                  transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(1.5deg)'
                }}
              >
                <span 
                  style={{ 
                    fontSize: '0.55rem', 
                    fontFamily: 'var(--font-mono)', 
                    display: 'block', 
                    color: 'var(--text-secondary)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em',
                    marginBottom: '2px'
                  }}
                >
                  {member.scrapbookLabel}
                </span>
                "{member.scrapbookValue}"
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
