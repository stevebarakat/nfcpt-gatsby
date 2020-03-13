import React, { useState, useEffect } from "react"

const Map = () => {

  const [iframe, setIframe] = useState('')

  useEffect(() => {
    setIframe(<iframe title="google map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13796.616919431084!2d-81.743945!3d30.175588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x57bbd11d704eb814!2sNorth%20Florida%20Chiropractic%20Physical%20Therapy!5e0!3m2!1sen!2sus!4v1573806056551!5m2!1sen!2sus" width="100%" height="600" frameBorder="0" allowFullScreen="" defer></iframe>)
  }, [])

  return (
    <section id="directions">
      <div className="section-header">
        <h3>Get Directions</h3>
        <p>From where you are. To where we are.</p>
      </div>
      {iframe}
    </section>
  )
}

export default Map
