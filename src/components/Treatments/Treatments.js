import React from 'react'
import { useState, useEffect } from "react";
import { motion, useAnimation, positionTransition } from "framer-motion";
import { shuffle } from "lodash";
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import { useStaticQuery, graphql } from "gatsby"
import Typed from "react-typed";
import styles from "./treatments.module.css"

const Treatments = () => {
  const controls = useAnimation()
  const [ref, { entry }] = useIntersectionObserver();
  const isCrossing = entry && entry.isIntersecting;
  const list = {
    positionTransition,
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0, rotate: 0 },
    hidden: { opacity: 0, x: -100, rotate: 180 },
  }

  const data = useStaticQuery(graphql`
  {
    allWordpressAcfPages(filter: {wordpress_id: {eq: 523}}) {
      nodes {
        acf {
          treatment {
            treatment_name
            treatment_image {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `)


  const treatmentsQuery = data.allWordpressAcfPages.nodes[0].acf;

  console.log(treatmentsQuery.treatment[5].treatment_image.localFile.childImageSharp.fluid.src)
  let listItems = treatmentsQuery.treatment.map((treatment, i) => {
    return (
      <motion.li
        custom={i}
        variants={item}
        animate={controls}
      >
        <img src={treatment.treatment_image.localFile.childImageSharp.fluid.src} />
        <span>{treatment.treatment_name}</span>
      </motion.li>
    )
  })

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
        <p>We diagnose and treat pain related to work, sports, auto-accidents, and more.</p>
      </div>
      <div className="treatments-list">

        <motion.ul
          ref={ref}
          initial="hidden"
          animate={isCrossing ? "visible" : "hidden"}
          variants={list}
        >
          {listItems}
        </motion.ul>
      </div>
    </section>
  )
}

export default Treatments