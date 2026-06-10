import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  scope: string;
  description: string;
  liveUrl: string;
  previewBg: string;
  color: string;
  previewImage: string;
}

export const Portfolio: React.FC = () => {
  const [hoveredFolder, setHoveredFolder] = useState<number | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.folder-container-item')) {
        setHoveredFolder(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Student Resale Market",
      category: "COMMUNITY WEBAPP",
      scope: "Full-Stack UI/UX",
      description: "Localized marketplace helping students buy and sell textbooks, electronics, and dorm gear.",
      liveUrl: "https://campus-resell-rho.vercel.app/",
      previewBg: "#EBF3FC",
      color: "var(--brand-pink)",
      previewImage: "/preview-resale.png"
    },
    {
      id: 2,
      title: "Pet Rescue Platform",
      category: "ORGANIZATION HUB",
      scope: "Frontend Architecture",
      description: "Accessible coordination portal connecting rescue pets with prospective foster families.",
      liveUrl: "https://paw-sphere-two.vercel.app/",
      previewBg: "#F0F9EB",
      color: "var(--brand-blue)",
      previewImage: "/preview-rescue.png"
    },
    {
      id: 3,
      title: "Artisan Craft Store",
      category: "LOCAL E-COMMERCE",
      scope: "Responsive Layouts",
      description: "Minimalist digital storefront for local woodworkers and potters to show and sell crafts.",
      liveUrl: "https://kala-bazaar.vercel.app/",
      previewBg: "#FAF4E8",
      color: "var(--brand-green)",
      previewImage: "/preview-crafts.png"
    },
    {
      id: 4,
      title: "Student Learning Hub",
      category: "COLLABORATION SUITE",
      scope: "Interaction Flow",
      description: "Centralized workspace with homework boards, shared file vaults, and discussion rooms.",
      liveUrl: "https://study-vault-movo.vercel.app/",
      previewBg: "#F5F3FF",
      color: "var(--brand-yellow)",
      previewImage: "/preview-learning.png"
    },
    {
      id: 5,
      title: "Student Study Vault",
      category: "EXPERIMENTAL PORTAL",
      scope: "CSS Architecture",
      description: "High-contrast geometric learning workspace with distraction-free reading modes.",
      liveUrl: "https://auxp-chi.vercel.app/",
      previewBg: "#FFF1F2",
      color: "var(--brand-pink)",
      previewImage: "/preview-study.png"
    }
  ];

  return (
    <section 
      id="work"
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
              [ 02 / SELECTED PORTFOLIO ]
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
            explore our <span className="pink-highlight">concept builds</span>.
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
            We practice what we preach. Hover over the folders to open their index files, and click to explore the live deployed builds.
          </p>
        </div>

        {/* Folders Workspace Grid - Centered 3-2 layout */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '85px 45px',
            paddingTop: '135px', /* spacing for larger file preview translation */
            paddingBottom: '45px',
            maxWidth: '720px',
            margin: '0 auto'
          }}
        >
          {projects.map((project) => {
            const isHovered = hoveredFolder === project.id;

            return (
              <div
                key={project.id}
                className="folder-container-item"
                onMouseEnter={() => setHoveredFolder(project.id)}
                onMouseLeave={() => setHoveredFolder(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  if (hoveredFolder === project.id) {
                    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                  } else {
                    setHoveredFolder(project.id);
                  }
                }}
                style={{
                  width: '175px',
                  height: '135px',
                  position: 'relative',
                  cursor: 'pointer',
                  transform: isHovered ? 'scale(1.05) translateY(-5px) rotate(-1.5deg)' : 'none',
                  transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  zIndex: isHovered ? 9999 : undefined
                }}
              >
                {/* Scrapbook handwritten annotations / doodles for each folder */}
                {project.id === 1 && (
                  <div style={{ position: 'absolute', top: '-28px', left: '-20px', fontFamily: 'var(--font-script)', fontSize: '1.25rem', color: 'var(--brand-pink)', transform: 'rotate(-8deg)', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none' }}>
                    [ campus favorite ]
                  </div>
                )}
                {project.id === 2 && (
                  <div style={{ position: 'absolute', top: '-30px', right: '-25px', fontFamily: 'var(--font-script)', fontSize: '1.25rem', color: 'var(--brand-blue)', transform: 'rotate(12deg)', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none' }}>
                    🐾 cute UI!
                  </div>
                )}
                {project.id === 3 && (
                  <div style={{ position: 'absolute', bottom: '-28px', right: '-15px', fontFamily: 'var(--font-script)', fontSize: '1.35rem', color: 'var(--brand-green)', transform: 'rotate(-4deg)', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none' }}>
                    handmade vibes
                  </div>
                )}
                {project.id === 4 && (
                  <div style={{ position: 'absolute', bottom: '-30px', left: '-20px', fontFamily: 'var(--font-script)', fontSize: '1.25rem', color: 'var(--brand-yellow)', transform: 'rotate(8deg)', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none' }}>
                    productivity!
                  </div>
                )}
                {project.id === 5 && (
                  <div style={{ position: 'absolute', top: '-34px', left: '-30px', fontFamily: 'var(--font-script)', fontSize: '1.35rem', color: 'var(--brand-pink)', transform: 'rotate(-12deg)', fontWeight: 'bold', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none' }}>
                    ★ experimental build
                  </div>
                )}

                {/* 1. Large File Document Preview (Slides Up on Hover) */}
                <div
                  style={{
                    position: 'absolute',
                    width: '230px',
                    height: '200px',
                    left: '50%',
                    bottom: '25px',
                    backgroundColor: '#FFFFFF',
                    border: '2.5px solid var(--border-color)',
                    borderRadius: '6px',
                    padding: '12px',
                    boxShadow: isHovered ? '6px 6px 0px rgba(0,0,0,0.15)' : '3px 3px 0px rgba(0,0,0,0.1)',
                    transform: isHovered 
                      ? 'translateX(-50%) translateY(-135px) scale(1.15)' 
                      : 'translateX(-50%) translateY(0) scale(0.85)',
                    opacity: isHovered ? 1 : 0,
                    zIndex: isHovered ? 99999 : 1,
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                    pointerEvents: 'none'
                  }}
                >
                  <div style={{ borderBottom: '1px dashed var(--border-color)', paddingBottom: '4px' }}>
                    <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', fontWeight: 'bold' }}>
                      {project.category}
                    </span>
                    <h4 style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-primary)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', marginTop: '2px' }}>
                      {project.title}
                    </h4>
                  </div>
                  
                  {/* Large Website Screenshot Frame */}
                  <div 
                    style={{ 
                      height: '105px', 
                      backgroundColor: project.previewBg, 
                      borderRadius: '4px',
                      border: '1.5px solid var(--border-color)',
                      overflow: 'hidden',
                      position: 'relative',
                      margin: '6px 0'
                    }}
                  >
                    <img 
                      src={project.previewImage} 
                      alt={`${project.title} Preview`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top'
                      }}
                    />
                  </div>

                  <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--brand-green)', textAlign: 'center', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                    LAUNCH DEPLOY ↗
                  </span>
                </div>

                {/* 2. Flat Styled OS Folder (SVG representation) */}
                <svg
                  width="175"
                  height="135"
                  viewBox="0 0 180 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 3 }}
                >
                  <defs>
                    {/* Linear gradient to simulate realistic paper shadow */}
                    <linearGradient id="folder-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#000000" stopOpacity="0.12" />
                    </linearGradient>
                  </defs>

                  {/* Folder Back Tab */}
                  <path
                    d="M 5 30 L 5 10 C 5 5, 10 0, 15 0 L 55 0 C 60 0, 65 5, 68 10 L 78 22 C 80 25, 83 27, 86 27 L 165 27 C 170 27, 175 32, 175 37 L 175 130 C 175 135, 170 140, 165 140 L 15 140 C 10 140, 5 135, 5 130 Z"
                    fill={project.color}
                    stroke="var(--border-color)"
                    strokeWidth="2.5"
                  />
                  {/* Back tab shadow blend overlay */}
                  <path
                    d="M 5 30 L 5 10 C 5 5, 10 0, 15 0 L 55 0 C 60 0, 65 5, 68 10 L 78 22 C 80 25, 83 27, 86 27 L 165 27 C 170 27, 175 32, 175 37 L 175 130 C 175 135, 170 140, 165 140 L 15 140 C 10 140, 5 135, 5 130 Z"
                    fill="url(#folder-grad)"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                  
                  {/* Folder cover flap - slightly shifts open on hover */}
                  <path
                    d={isHovered 
                      ? "M 5 43 C 5 43, 12 143, 12 143 L 178 135 C 178 135, 175 43, 175 43 Z" 
                      : "M 5 38 L 5 130 C 5 135, 10 140, 15 140 L 165 140 C 170 140, 175 135, 175 130 L 175 38 C 175 33, 170 28, 165 28 L 90 28 C 85 28, 80 33, 76 38 Z"
                    }
                    fill={project.color}
                    fillOpacity={isHovered ? 0.92 : 1}
                    stroke="var(--border-color)"
                    strokeWidth="2.5"
                    style={{ transition: 'all 0.2s ease' }}
                  />
                  {/* Cover flap shadow blend overlay */}
                  <path
                    d={isHovered 
                      ? "M 5 43 C 5 43, 12 143, 12 143 L 178 135 C 178 135, 175 43, 175 43 Z" 
                      : "M 5 38 L 5 130 C 5 135, 10 140, 15 140 L 165 140 C 170 140, 175 135, 175 130 L 175 38 C 175 33, 170 28, 165 28 L 90 28 C 85 28, 80 33, 76 38 Z"
                    }
                    fill="url(#folder-grad)"
                    style={{ transition: 'all 0.2s ease', mixBlendMode: 'multiply' }}
                  />

                  {/* High-fidelity highlight line on folder front top edge */}
                  <path
                    d={isHovered 
                      ? "M 12 47 L 170 41" 
                      : "M 10 40 L 76 40 C 80 35, 85 30, 90 30 L 165 30"
                    }
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    style={{ transition: 'all 0.2s ease', opacity: 0.35 }}
                  />
                </svg>

                {/* Metal paperclip attached to the top-right of the folder flap */}
                <svg
                  width="26"
                  height="34"
                  viewBox="0 0 24 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '18px',
                    transform: isHovered ? 'rotate(28deg) scale(1.05)' : 'rotate(20deg)',
                    zIndex: 10,
                    pointerEvents: 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <path
                    d="M6,17 L6,25 C6,28.3 8.7,31 12,31 C15.3,31 18,28.3 18,25 L18,10 C18,5.6 14.4,2 10,2 C5.6,2 2,5.6 2,10 L2,24 C2,24.5 2.5,25 3,25 C3.5,25 4,24.5 4,24 L4,10 C4,6.7 6.7,4 10,4 C13.3,4 16,6.7 16,10 L16,25 C16,27.2 14.2,29 12,29 C9.8,29 8,27.2 8,25 L8,12 C8,11.5 7.5,11 7,11 C6.5,11 6,11.5 6,12 L6,17 Z"
                    fill="#E2E8F0"
                    stroke="var(--border-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* 3. Folder label sticker on front cover */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '22px',
                    left: '15px',
                    right: '15px',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid var(--border-color)',
                    padding: '3px 6px',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'var(--text-primary)',
                    zIndex: 9,
                    pointerEvents: 'none',
                    transform: isHovered ? 'rotate(-2.5deg) scale(1.02)' : 'rotate(-1deg)',
                    boxShadow: '2px 2px 0px rgba(0,0,0,0.15)',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  📁 {project.title}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
