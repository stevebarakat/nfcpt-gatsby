import React from 'react';
import LazyHero from 'react-lazy-hero';
import spa from '../../images/spa.jpg'
import HeroUnitStyles from './HeroUnit.module.css'

const HeroUnit = () => {
  return (
    <section id="hero-unit" >
        <LazyHero 
          imageSrc={spa}
          opacity={.1}
          parallaxOffset={75}
          className="parallax"
          minHeight="400px"
        >
            <div className="section-header">
              <h1>Orange Park Chiropractor</h1>
              <p className="HeroUnitStyles.tagline">Dr. Jason Orlando — Treating and Relieving Pain in North Florida for Over 20 Years.</p>
            </div>
        </LazyHero>

        {/* ... */}
    </section>
);
}


export default HeroUnit