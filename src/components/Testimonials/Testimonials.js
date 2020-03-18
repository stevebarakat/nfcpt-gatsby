import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import styles from "./Testimonials.module.css"
import { useStaticQuery, graphql } from "gatsby"

const Testimonials = ({ images }) => {
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
  
  let testimonialPhoto = [];
  let testimonialAuthor = [];
  let testimonialContent = [];

  const testimonialsQuery = data.allWordpressAcfPages.nodes[0].acf.testimonial;
  testimonialsQuery.map((testimonial, i) => {
    testimonialPhoto = [...testimonialPhoto, data.allWordpressAcfPages.nodes[0].acf.testimonial[i].testimonial_photo.source_url]
    testimonialAuthor = [...testimonialAuthor, data.allWordpressAcfPages.nodes[0].acf.testimonial[i].testimonial_author]
    testimonialContent = [...testimonialContent, data.allWordpressAcfPages.nodes[0].acf.testimonial[i].testimonial_content]
  })
  const [page, setPage] = useState(0);
  const index = wrap(0, testimonialPhoto.length, page);

  useEffect(() => {
    setTimeout(() => setPage(page + 1), 3000);
  }, [page])


  return (
    <section id="testimonials" className={styles.testimonials}>
    <div className="section-header">
      <h3>Read Testimonials</h3>
      <p>Hear what others have to say.</p>
    </div>
    <div >
    <ul>
      <AnimatePresence>
        <motion.li
          key={index}
          initial={{ x : 0 }}
          animate={{ x : 430 }}
          exit={{ x : 860 }}
          transition={{ duration: 1.5 }}
        >
          <img src={testimonialPhoto[index]} />
          <h6>{testimonialAuthor[index]}</h6>
          <p>{testimonialContent[index]}</p>
        </motion.li>
      </AnimatePresence>
    </ul>
    </div>
    </section>
  )
}

export default Testimonials;
