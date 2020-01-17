import React from "react"
import "../styles/reset.css"
import "../styles/global.css"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <SEO title="Free Chiropractic Consultation" />
      <div className="container">
        <h1>Contact</h1>
        <div>
          <h2>Looking For A Chiropractor In Orange Park?</h2>
          If you're looking for an Orange Park chiropractor with decades years
          of experience relieving pain, please don't hesitate to contact us. We
          enjoy talking to patients before a visit. It allows them to inform us
          about their issues. It also give us a chance to address any questions
          they might have. In some cases, we'll refer you to one of our
          colleagues.
          <h3>We're Ready to Relieve Your Pain!</h3>
          At North Florida Chiropractic Physical Therapy we are dedicated to
          helping you achieve your wellness objectives. Dr. Orlando's treatment
          plan has brought pain relief to hundreds of Orange Park residents. He
          is committed to providing his patients a better way of life through an
          individualized treatment plans.
          <h3>We Provide Free Consultations</h3>
          It's important to have your injuries diagnosed shortly after an
          accident. There are two main reasons;
          <ul>
            <li>
              If your injuries are not properly diagnosed they could likely lead
              to chronic pain.
            </li>
            <li>
              With the{" "}
              <a
                title="Florida's Personal Injury Protection Coverage"
                href="http://www.forthepeople.com/auto-accident-attorneys/florida-pip-insurance"
              >
                new insurance laws
              </a>{" "}
              in place you only have 14 days to seek medical treatment after an
              auto accident. If you do not seek treatment within 14 days, you
              may be barred from collecting benefits under your PIP insurance
              coverage.
            </li>
          </ul>
          <h3>Contact Us About A Custom Treatment Plan</h3>
          North Florida Chiropractic Physical Therapy is located in Orange Park,
          FL:
        </div>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <br />
              <input type="text" name="name" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input type="email" name="email" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea name="message" onChange={handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </Layout>
  )
}
