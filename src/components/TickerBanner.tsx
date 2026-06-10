import React from 'react';

export const TickerBanner: React.FC = () => {
  const tickerText = "BUILT FOR LOCAL BUSINESSES • MOBILE-FIRST • FAST LOADS • SEO READY • NO TEMPLATES • WE REDESIGN BEFORE WE PITCH • ";
  
  // Repeat the text to ensure it covers the screen width for marquee animation
  const blockText = Array(4).fill(tickerText).join("");

  return (
    <div className="ticker-banner">
      <div className="ticker-track">
        <div className="ticker-content">{blockText}</div>
        <div className="ticker-content" aria-hidden="true">{blockText}</div>
      </div>
    </div>
  );
};

