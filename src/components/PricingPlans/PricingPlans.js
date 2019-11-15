import React from "react"
import { StaticQuery, graphql } from "gatsby"
import './PricingPlans.css'

const PricingPlans = () => (
  <StaticQuery
    query={graphql`
      {
        __typename
        allWordpressAcfPages(filter: {wordpress_id: {eq: 523}}) {
    nodes {
      acf {
        plan {
          plan_title
          tier {
            length
            new_price
            old_price
            save
            visits
          }
        }
      }
    }
  }}
    `}
    render={data => {
      const listPricingPlans = data.allWordpressAcfPages.nodes[0].acf.plan.map(
        plan => {
          return (
                <div className="plans">
                  <h4>{plan.plan_title}</h4>
                  {plan.tier.map( item => (
                    <div className="plan">
                    <div className="left">
                      <span className="visits">{item.visits} Visits</span>{" "}
                      <span className="plan-length">{item.length}</span>
                    </div>
                    <div className="middle">
                      <div className="sticker-wrap">
                        <div className="sticker">
                          <span className="save"> Save {item.save}</span>
                        </div>
                        <div className="sticker-stroke"></div>
                      </div>
                    </div>
                    <div className="right">
                      <span className="strike">{item.old_price}</span>{" "}
                      <span className="new-price">{item.new_price}</span>
                    </div>
                  </div>
                  ))}
                </div>
          )
        }
      )
      return (
        <section id="pricing-plans"><div className="section-header"><h3>The Happy Therapy Club</h3><p>Sign up for one of our package deals and save up to 30%.</p></div><div className="plans-wrap">
        {listPricingPlans}
        </div>
        </section>
      )
    }}
  />
)

export default PricingPlans
