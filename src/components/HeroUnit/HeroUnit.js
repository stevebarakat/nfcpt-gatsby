import React from 'react';
import LazyHero from 'react-lazy-hero';

const HeroUnit = () => {
  return (
    <div>
        <LazyHero 
          imageSrc="./spa.jpg"
          opacity={0}
          parallaxOffset={100}
          className="parallax"
          minHeight="300px"
        >
            <div className="section-header">
              <h1>Orange Park Chiropractor</h1>
              <p className="tagline">Dr. Jason Orlando — Treating and Relieving Pain in North Florida for Over 20 Years.</p>
            </div>
        </LazyHero>

        {/* ... */}
    </div>
);
}

export default HeroUnit