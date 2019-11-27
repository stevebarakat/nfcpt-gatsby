import React from "react"
import { FaStethoscope, FaHands, FaCarCrash, FaHeartbeat } from 'react-icons/fa'
import './Services.css'

const Services = () => (
  <section id="services">
    <div class="service">
        <a href=" https://northfloridachiropracticphysicaltherapy.com/orange-park-chiropractor/ ">
            <div class="service-icon">
                <FaStethoscope />
                </div>
            <h2>Chiropractic Services</h2>
            <p>Advanced spinal correction and chiropractic adjustments.</p>
        </a>
    </div>
    <div class="service">
        <a href=" https://northfloridachiropracticphysicaltherapy.com/physical-therapy/ ">
            <div class="service-icon">
                <FaHeartbeat />
                </div>
            <h2>Physical Therapy</h2>
            <p>Individualized exercise and rehabilitation services.</p>
        </a>
    </div>
    <div class="service">
        <a href=" https://northfloridachiropracticphysicaltherapy.com/car-accident-rehabilitation/ ">
            <div class="service-icon">
                <FaCarCrash />
                </div>
            <h2>Accident Center</h2>
            <p>Facility designed for treating whiplash, headache, back, neck, and musculoskeletal pain.</p>
        </a>
    </div>
    <div class="service">
        <a href=" https://northfloridachiropracticphysicaltherapy.com/massage-therapy/ ">
            <div class="service-icon">
                <FaHands />
                </div>
            <h2>Care Spa Services</h2>
            <p>Intensive hands-on treatments focusing on you, including Facials, Hot Stone and more..</p>
        </a>
    </div>
</section>
)

export default Services
