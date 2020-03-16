import React from 'react'
import { useState, useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { shuffle } from "lodash";
// import autoInjury from './autoinjury.jpg'
import { useStaticQuery, graphql } from "gatsby"

import styles from "./treatments.module.css"

const spring = {
  type: "spring",
  damping: 12,
  stiffness: 30,
  mass: 0.5
};

const initialColors = [
  "Back Pain",
  "Neck Pain",
  "Headaches",
  "Sciatica",
  "Whiplash",
  "Carpal Tunnel"
];

const Treatments = () => {
  const [treatments, setTreatments] = useState(initialColors);
  const data = useStaticQuery(graphql`
  {
    allFile(filter: {childImageSharp: {original: {src: {regex: "/treatment/"}}}}) {
      nodes {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`)

  return (
    <section id="treatments" className={`nfcpt-bg-dark ${styles.treatments}`}>
      <div className="section-header">
        <h3>Injuries &amp; Conditions We Treat</h3>
          We diagnose and treat pain related to work, sports, auto-accidents, and more.
              </div>
      <div className="treatments-list">

        <ul>
              {data.allFile.nodes.map((node, i) => {
            return(
              <motion.li layoutTransition={spring}>
                <img src={node.childImageSharp.fluid.src} alt=""/>
                {treatments[i]}
            </motion.li>
            )
              })}
        </ul>
      </div>
    </section>
  )
}

export default Treatments