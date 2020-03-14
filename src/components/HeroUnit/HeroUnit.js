import React from 'react';
import LazyHero from 'react-lazy-hero';
import { useStaticQuery, graphql } from "gatsby"

const HeroUnit = () => {
  const data = useStaticQuery(graphql`
    {
      file(childImageSharp: {fluid: {src: {regex: "/spa/"}}}) {
        id
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  console.log(data.file.childImageSharp.fluid.src)
  return (
    <section id="hero-unit" >
        <LazyHero 
          imageSrc="https://bodyinbalanceny.com/wp-content/uploads/2016/03/newyorkcity-massage-1.jpg"
          opacity={.1}
          parallaxOffset={95}
          className="parallax"
          minHeight="400px"
        >
            <div className="section-header">
              <h1>Orange Park Chiropractor</h1>
              <p className="HeroUnitStyles.tagline">Dr. Jason Orlando — Treating and Relieving Pain in North Florida for Over 20 Years.</p>
            </div>
        </LazyHero>
    </section>
);
}


export default HeroUnit