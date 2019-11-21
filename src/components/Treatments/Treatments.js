import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import Tagline from './Tagline'
import './Treatments.css'

const Treatments = () => {
  return(
    <ParallaxBanner
    layers={[
        {
            image: 'treatmentsImg.jpg',
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