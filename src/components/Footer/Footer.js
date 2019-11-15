import { Link } from "gatsby"
import React from "react"
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer id="colophon" class="site-footer">
        <div class="cta">
          <a href="tel:904-272-4329">
            <div class="linkarea">
              <span class="icon-area">
                <i class="fa fa-tags"></i>
                Get Free
              </span>
              <strong>CONSULTATION</strong>
            </div>
          </a>
          <a href="tel:904-272-4329">
            <div class="linkarea">
              <span class="icon-area">
                <i class="fa fa-tags"></i>
                24hr Hotline
              </span>
              <strong>(904) 272-4329</strong>
            </div>
          </a>
          <a href="#pricing-plans">
            <div class="linkarea">
              <span class="icon-area">
                <i class="fa fa-tags"></i>
                View Our
              </span>
              <strong>SAVINGS PLANS</strong>
            </div>
          </a>
        </div>
        <aside id="secondary" class="footer_widgets-area widget-area">
          <section
            id="custom_html-5"
            class="widget_text widget widget_custom_html"
          >
            <h5 class="widget-title">Office Hours</h5>
            <div class="textwidget custom-html-widget">
              <ul class="mabel-bhi-businesshours-inline">
                <li>Monday: 9:00 AM — 9:00 PM</li>
                <li>Tuesday: 9:00 AM — 9:00 PM</li>
                <li>Wednesday: 9:00 AM — 9:00 PM</li>
                <li>Thursday: 9:00 AM — 9:00 PM</li>
                <li>Friday: 9:00 AM — 9:00 PM</li>
                <li class="mbhi-is-current">Saturday: 9:00 AM — 9:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </section>
          <section
            id="custom_html-2"
            class="widget_text widget widget_custom_html"
          >
            <h5 class="widget-title">Connect With Us</h5>
            <div class="textwidget custom-html-widget">
              <ul>
                <li>
                  <a href="https://google.com" title="Join us on Google Plus">
                    <i class="fab fa-google fa-2x"></i>Google+
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/northfloridachiropracticphysicaltherapy/"
                    title="Join us on Facebook"
                  >
                    <i class="fab fa-facebook-square fa-2x"></i>Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/nflchiropractic"
                    title="Join us on Twitter"
                  >
                    <i class="fab fa-twitter-square fa-2x"></i>Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    title="Subscribe to our YouTube channel"
                  >
                    <i class="fab fa-youtube fa-2x"></i>YouTube
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section
            id="custom_html-4"
            class="widget_text widget widget_custom_html"
          >
            <h5 class="widget-title">Contact Info</h5>
            <div class="textwidget custom-html-widget">
              <address>
                <span itemprop="name">
                  North Florida Chiropractic Physical Therapy
                </span>
                <br />
                <span
                  itemprop="address"
                  itemscope=""
                  itemtype="http://schema.org/PostalAddress"
                >
                  <span itemprop="streetAddress">223 Blanding Blvd</span>
                  <br />
                  <span itemprop="addressLocality">Orange Park</span>,
                  <span itemprop="addressRegion">FL</span>
                  <span itemprop="postalCode">32073</span>
                </span>
                <br />
                Tel: <span itemprop="telephone">(904) 272-4329</span>
                <br />
                Fax: <span itemprop="faxNumber">(904) 375-8852</span>
              </address>
            </div>
          </section>
        </aside>
        <div class="site-info">
          <p>
            &copy; {new Date().getFullYear()} North Florida Chiropractic
            Physical Therapy <span> | </span> Site by: <a href="#">S.Barakat</a>
            <Link to="https://www.gatsbyjs.org">Gatsby</Link>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
