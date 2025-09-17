"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Building2, Users, Award, TrendingUp } from 'lucide-react'
import "../styles/logo-scroller.scss"

const LogoScroller = () => {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const logos = [
    { name: 'OpenAI GPT', src: '/assets/ai-logos/gpt.svg', alt: 'OpenAI GPT' },
    { name: 'Claude', src: '/assets/ai-logos/claude.svg', alt: 'Claude AI' },
    { name: 'Gemini', src: '/assets/ai-logos/gemini.svg', alt: 'Google Gemini' },
    { name: 'DeepSeek', src: '/assets/ai-logos/deepseek.svg', alt: 'DeepSeek' },
    { name: 'Grok', src: '/assets/ai-logos/grok.svg', alt: 'Grok AI' },
    { name: 'Llama', src: '/assets/ai-logos/llama.svg', alt: 'Meta Llama' },
    { name: 'Mistral', src: '/assets/ai-logos/mistral.svg', alt: 'Mistral AI' },
  ]

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos]

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.2 // Adjust speed as needed

    const animate = () => {
      scrollPosition += scrollSpeed
      scroller.style.transform = `translateX(-${scrollPosition}px)`
      
      // Reset position when we've scrolled through one set of logos
      if (scrollPosition >= scroller.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <section className="logo-scroller-section">
      <div className="logo-scroller-container">
        {/* Header */}
        <div className="scroller-header">
          <div className="scroller-title">
            <Building2 className="title-icon" />
            <h2 className="main-font">Trusted by Leading Companies</h2>
          </div>
          <p className="scroller-subtitle para-font">
            Join thousands of professionals learning with SkillDesk
          </p>
        </div>

        {/* Stats */}
        <div className="scroller-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <Users className="icon" />
            </div>
            <div className="stat-content">
              <div className="stat-number main-font">50K+</div>
              <div className="stat-label para-font">Active Learners</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <Award className="icon" />
            </div>
            <div className="stat-content">
              <div className="stat-number main-font">500+</div>
              <div className="stat-label para-font">Companies</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <TrendingUp className="icon" />
            </div>
            <div className="stat-content">
              <div className="stat-number main-font">98%</div>
              <div className="stat-label para-font">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Logo Scroller */}
        <div className="logo-scroller-wrapper">
          <div className="logo-scroller" ref={scrollerRef}>
            {duplicatedLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="logo-item">
                <div className="logo-container">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="logo-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoScroller
