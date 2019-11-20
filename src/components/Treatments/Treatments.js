import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import Tagline from './Tagline'
import './Treatments.css'

const Treatments = () => {
  return(
    <ParallaxBanner
    layers={[
        {
            image:'/static/treatments-ec3685cd38162d8f442c81ba7e13a719.jpg',
            amount: 1,
        },
    ]}
    style={{
        height: 'auto',
    }}
><Tagline /></ParallaxBanner>
  )
}

export default Treatments