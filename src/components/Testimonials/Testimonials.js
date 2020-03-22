import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { useStaticQuery, graphql } from "gatsby"

const Testimonials = ({ images }) => {
  const [page, setPage] = useState(0);
  const data = useStaticQuery(graphql`
  {
    allWordpressAcfPages(filter: {wordpress_id: {eq: 523}}) {
      nodes {
        acf {
          testimonial {
            testimonial_author
            testimonial_content
            testimonial_photo {
              source_url
            }
          }
        }
      }
    }
  }
  `)

  const testimonialsQuery = data.allWordpressAcfPages.nodes[0].acf.testimonial;

  useEffect(() => {
    setTimeout(() => setPage(page + 1), 2000);
  }, [page])

  const index = wrap(0, 5, page);
  console.log(index)

  const nextVariant = {
    next: { x: -800 },
    current: { x: -400 },
    previous: { x: 0 }
  }
  const currentVariant = {
    next: { x: -400 },
    current: { x: 0, scale: 2 },
    previous: { x: 400 },
  }
  const previousVariant = {
    next: { x: 0 },
    current: { x: 400 },
    previous: { x: 800 }
  }

  const variants = [nextVariant, currentVariant, previousVariant];

  let listItems = testimonialsQuery.map((testimonial, i) => (
    <li className="testimonial">
        <AnimatePresence>
          <motion.h5
            initial="next"
            animate="current"
            exit="previous"
            variants={variants.map((variant, i) => variant[i])}
          >{testimonial.testimonial_author}</motion.h5>
          <motion.img
            initial="next"
            animate="current"
            exit="previous"
            variants={variants.map((variant, i) => variant[i])}
            src={testimonial.testimonial_photo.source_url}
          />
        </AnimatePresence>
    </li>
  ))
  console.log(listItems)
  return (
    <section id="testimonials">
      <div className="section-header">
        <h3>Read Testimonials</h3>
        <p>Hear what others have to say.</p>
      </div>
      <div >
      <ul className="items">
        {variants.map( (item, i) => (
      <AnimatePresence>
          <motion.li key={i} className="item" variants={item} initial="next" animate="current" exit="previous">{listItems[i]}</motion.li>
      </AnimatePresence>
        ))}
    </ul>
      </div>
    </section>
  )
}

export default Testimonials;
