import React from "react"
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer id="colophon" className="site-footer">
        <div className="cta">
          <a href="tel:904-272-4329">
            <div className="linkarea">
              <span className="icon-area">
                <i className="fa fa-tags"></i>
                Get Free
              </span>
              <strong>CONSULTATION</strong>
            </div>
          </a>
          <a href="tel:904-272-4329">
            <div className="linkarea">
              <span className="icon-area">
                <i className="fa fa-tags"></i>
                24hr Hotline
              </span>
              <strong>(904) 272-4329</strong>
            </div>
          </a>
          <a href="#pricing-plans">
            <div className="linkarea">
              <span className="icon-area">
                <i className="fa fa-tags"></i>
                View Our
              </span>
              <strong>SAVINGS PLANS</strong>
            </div>
          </a>
        </div>
        <aside id="secondary" className="footer_widgets-area widget-area">
          <section
            id="custom_html-5"
            className="widget_text widget widget_custom_html"
          >
            <h5 className="widget-title">Office Hours</h5>
            <div className="textwidget custom-html-widget">
              <ul className="mabel-bhi-businesshours-inline">
                <li>Monday: 9:00 AM — 9:00 PM</li>
                <li>Tuesday: 9:00 AM — 9:00 PM</li>
                <li>Wednesday: 9:00 AM — 9:00 PM</li>
                <li>Thursday: 9:00 AM — 9:00 PM</li>
                <li>Friday: 9:00 AM — 9:00 PM</li>
                <li className="mbhi-is-current">Saturday: 9:00 AM — 9:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </section>
          <section
            id="custom_html-2"
            className="widget_text widget widget_custom_html"
          >
            <h5 className="widget-title">Connect With Us</h5>
            <div className="textwidget custom-html-widget">
              <ul>
                <li>
                  <a href="https://google.com" title="Join us on Google Plus">
                    <i className="fab fa-google fa-2x"></i>Google+
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/northfloridachiropracticphysicaltherapy/"
                    title="Join us on Facebook"
                  >
                    <i className="fab fa-facebook-square fa-2x"></i>Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/nflchiropractic"
                    title="Join us on Twitter"
                  >
                    <i className="fab fa-twitter-square fa-2x"></i>Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    title="Subscribe to our YouTube channel"
                  >
                    <i className="fab fa-youtube fa-2x"></i>YouTube
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section
            id="custom_html-4"
            className="widget_text widget widget_custom_html"
          >
            <h5 className="widget-title">Contact Info</h5>
            <div className="textwidget custom-html-widget">
              <address>
                <span itemProp="name">
                  North Florida Chiropractic Physical Therapy
                </span>
                <br />
                <span
                  itemProp="address"
                  itemScope=""
                  itemType="http://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">223 Blanding Blvd</span>
                  <br />
                  <span itemProp="addressLocality">Orange Park</span>,
                  <span itemProp="addressRegion">FL</span>
                  <span itemProp="postalCode">32073</span>
                </span>
                <br />
                Tel: <span itemProp="telephone">(904) 272-4329</span>
                <br />
                Fax: <span itemProp="faxNumber">(904) 375-8852</span>
              </address>
            </div>
          </section>
        </aside>
        <div className="site-info">
          <p>
            &copy; {new Date().getFullYear()} North Florida Chiropractic
            Physical Therapy <span> | </span> Site by: <a href="http://stevebarakat.com">S.Barakat</a>
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
