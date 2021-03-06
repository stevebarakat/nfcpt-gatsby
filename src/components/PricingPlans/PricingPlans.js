import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from './PricingPlans.module.css'

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
        (plan, id) => {
          return (
            <div key={id} className={styles.plans}>
              <h4>{plan.plan_title}</h4>
              {plan.tier.map((item, id) => (
                <div key={id} className={styles.plan}>
                  <div className={styles.left}>
                    <span className={styles.visits}>{item.visits} Visits</span>{" "}
                    <span className={styles.planLength}>{item.length}</span>
                  </div>
                  <div className={styles.middle}>
                    <div className={styles.stickerWrap}>
                      <div className={styles.sticker}>
                        <span className={styles.save}> Save {item.save}</span>
                      </div>
                      <div className={styles.stickerStroke}></div>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <span className={styles.strike}>{item.old_price}</span>{" "}
                    <span className={styles.newPrice}>{item.new_price}</span>
                  </div>
                </div>
              ))}
            </div>
          )
        }
      )
      return (
        <section id="pricing-plans">
          <div className="section-header">
            <h3>The Happy Therapy Club</h3>
            <p>Sign up for one of our package deals and save up to 30%.</p>
          </div>
          <div className={styles.plansWrap}>
            {listPricingPlans}
          </div>
        </section>
      )
    }}
  />
)

export default PricingPlans
