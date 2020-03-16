import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import styles from "./HeroUnit.module.css"
import { useStaticQuery, graphql } from "gatsby"
import heroSlider2 from './hero-slider-2.jpg'
import heroSlider3 from './hero-slider-3.jpg'
import heroSlider4 from './hero-slider-4.jpg'
import heroSlider5 from './hero-slider-5.jpg'



const HeroUnit = ({images}) => {
  let arr = [heroSlider2, heroSlider3, heroSlider4, heroSlider5];
  const [page, setPage] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: '100%',
    height: '80vh'
  })

  const index = wrap(0, arr.length, page);

  /**
   * Calculate & Update state of new dimensions
   */
  const updateDimensions = () => {
      let update_width  = window.innerWidth;
      let update_height = Math.round(update_width/1.52);
      setWindowSize({ width: update_width, height: update_height });
  }

  /**
   * Add event listener
   */
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
     // Specify how to clean up after this effect:
     return function cleanup() {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [])

  useEffect(() => {
    setTimeout(() => setPage(page + 1), 5000);
  }, [page])

  return (

    <div 
      className={styles.slideshowContainerWrap}
      style={{height: windowSize.height}}
    >
      <AnimatePresence>
         <motion.div
        className={styles.slideshowContainer}
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img src={arr[index]} />
          <motion.div
            className={styles.slideContent}
            initial={{ y: -1200 }}
            animate={ windowSize.height === '80vh'  ? { y: -333 } : { y: windowSize.height * -1 / 1.5 } }
            transition={{ duration: 1 }}
          >
          <div className={styles.slideContentContainer} >
            <p className={styles.ctaTitle}>Start or End</p>
            <p className={styles.ctaTag}>Your day with a great adjustment</p>
            <a className={styles.ctaBtn}>Make An Appointment >></a>
          </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default HeroUnit;
