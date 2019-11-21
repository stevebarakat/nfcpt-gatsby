import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import Tagline from './Tagline'
import './Treatments.css'
import TreatmentsImg from './TreatmentsImg'

console.log(TreatmentsImg)

const Treatments = () => {
  return(
    <ParallaxBanner
    layers={[
        {
            image:'./treatments.jpg',
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