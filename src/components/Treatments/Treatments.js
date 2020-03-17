import React from 'react'
import { useState, useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { shuffle } from "lodash";
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import { useStaticQuery, graphql } from "gatsby"
import Typed from "react-typed";
import styles from "./treatments.module.css"

const spring = {
  type: "spring",
  damping: 12,
  stiffness: 30,
  mass: 0.5
};



const Treatments = () => {

  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  const data = useStaticQuery(graphql`
    {
      allWordpressAcfPages(filter: {wordpress_id: {eq: 523}}) {
        nodes {
          acf {
            treatment {
              treatment_name
              treatment_image {
                source_url
              }
            }
          }
        }
      }
    }
  `)

  
  const treatmentsQuery = data.allWordpressAcfPages.nodes[0].acf;
    useEffect(() => {
      isVisible ? console.log("is visible") : console.log("not visible")
    }, [isVisible])
  return (
    <section id="treatments" className={`nfcpt-bg-dark ${styles.treatments}`}>
      <div className="section-header">
        <h3><Typed
        strings={[
          "CHIROPRACTIC CARE MAY HELP WITH...",
          "AUTO ACCIDENT INJURIES",
          "NECK AND BACK PAIN",
          "SCIATICA",
          "CARPEL TUNNEL",
          "HEADACHES",
          "SLIPPED DISC",
          "WHIPLASH AND MORE..."
        ]}
        typeSpeed={100}
        backSpeed={55}
        loop
      /></h3>
          We diagnose and treat pain related to work, sports, auto-accidents, and more.
              </div>
      <div className="treatments-list">

        <motion.ul
          ref={ref}
        >
          {treatmentsQuery.treatment.map((treatment, i) => {
            return (
              <motion.li
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ duration: 5 }}
              >
                <img src={treatment.treatment_image.source_url} />
                <span>{treatment.treatment_name}</span>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}

export default Treatments