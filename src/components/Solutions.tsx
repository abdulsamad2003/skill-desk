"use client"

import React from 'react'
import StickyScrollRevealDemo from './ui/sticky-scroll-reveal-demo'
import "../styles/solutions.scss";

const Solutions = () => {
  return (
    <section id="solutions" className="solutions-section">
      <div className="solutions-container">
        {/* Sticky Scroll Reveal Component */}
        <StickyScrollRevealDemo />
      </div>
    </section>
  )
}

export default Solutions