import React from 'react';
import { GlobalHeader } from './components/GlobalHeader';
import { Hero } from './sections/Hero';
import { BeforeAfter } from './sections/BeforeAfter';
import { Portfolio } from './sections/Portfolio';
import { Process } from './sections/Process';
import { Mission } from './sections/Mission';
import { Team } from './sections/Team';
import { ContactFooter } from './sections/ContactFooter';

import { TickerBanner } from './components/TickerBanner';

const App: React.FC = () => {
  return (
    <div id="page-wrap">
      {/* Sticky Global Navigation */}
      <GlobalHeader />
      
      {/* Semantic Main Content Flow */}
      <main>
        {/* Section 1: Hero Block */}
        <Hero />
        
        {/* Yellow Marquee Ticker */}
        <TickerBanner />
        
        {/* Section 2: Before / After Comparison */}
        <BeforeAfter />
        
        {/* Section 3: Concept Builds Grid */}
        <Portfolio />
        
        {/* Section 4: Collaborative Process Timeline */}
        <Process />
        
        {/* Section 5: Mission Narrative & Story */}
        <Mission />
        
        {/* Section 6: Collaborative Team Profiles */}
        <Team />
      </main>

      {/* Section 7: Coffee CTA & Footer Details */}
      <ContactFooter />
    </div>
  );
};

export default App;
