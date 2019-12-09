import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import Tagline from './Tagline'
import './Treatments.css'
import  treatments from './treatments.jpg'

const Treatments = () => {
  return(
    <ParallaxBanner
    layers={[
        {
            image: treatments,
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