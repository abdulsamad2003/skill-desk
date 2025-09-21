"use client"

import React from 'react'
import StickyScrollRevealDemo from './ui/sticky-scroll-reveal-demo'
import "../styles/solutions.scss";

const Solutions = () => {
  return (
    <section id="solutions" className="solutions-section">
      <div className="solutions-container">
        {/* Header */}
        <div className="solutions-header">
          <h2 className="main-font solutions-title">Solutions</h2>
          <h3 className="main-font solutions-subtitle">Tailored Learning for Every Audience</h3>
          <p className="para-font solutions-description">
            Discover how our AI-powered platform adapts to meet the unique needs of enterprises, universities, and individuals.
          </p>
        </div>

        {/* Sticky Scroll Reveal Component */}
        <StickyScrollRevealDemo />
      </div>
    </section>
  )
}

export default Solutions