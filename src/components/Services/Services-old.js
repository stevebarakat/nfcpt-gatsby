import React from "react"
import { StaticQuery, graphql } from "gatsby"
import './Services.css'
import "./variables.css"

const Services = () => (
  <StaticQuery
    query={graphql`
      {
        __typename
        allWordpressAcfPages(filter: {wordpress_id: {eq: 523}}) {
          nodes {
            acf {
              service {
                service_description
                service_icon
                service_link
                service_title
              }
            }
          }
        }
      }
    `}
    render={data => {
      const listServices = data.allWordpressAcfPages.nodes[0].acf.service.map( (service, id) => {
        return(
          <div key={id} className="service">
            <a href={service.service_link} alt={service.service_title}>
              <div className="service-icon">
                <i className={service.service_icon} aria-hidden="true"></i>
              </div>
                <h2>{service.service_title}</h2>
                <p>{service.service_description}</p>
            </a>
          </div> 
        )
      } )
        return(
          <section id="services">
            {listServices}
          </section>
        )
      }
    }
  />
)

export default Services
