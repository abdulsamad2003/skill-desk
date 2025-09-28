"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import "../styles/testimonials.scss"

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  rating: number;
}

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      quote: "SkillDesk has completely transformed how our team learns. The AI-powered personalized learning paths have increased our productivity by 40% and made complex topics much easier to understand.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5
    },
    {
      quote: "The implementation was seamless and the results exceeded our expectations. The platform's flexibility and expert instructors make it perfect for our growing team.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5
    },
    {
      quote: "This solution has significantly improved our team's learning outcomes. The intuitive interface and personalized approach make complex topics simple and engaging.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5
    },
    {
      quote: "Outstanding support and robust features. It's rare to find a learning platform that delivers on all its promises. SkillDesk has revolutionized our training programs.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5
    },
    {
      quote: "The scalability and performance have been game-changing for our organization. The AI-powered learning paths adapt perfectly to each team member's needs. Highly recommend!",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5
    }
  ]

  // Reveal hooks for animations
  const sectionReveal = useRevealOnScroll({ 
    animationType: 'fadeUp', 
    duration: 0.8, 
    delay: 0.2 
  });

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setActiveTestimonial(index)
    setIsAutoPlaying(false)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`star-icon ${index < rating ? 'filled' : ''}`}
        size={16}
      />
    ))
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div 
          ref={sectionReveal.ref as React.Ref<HTMLDivElement>}
          className={`testimonials-header ${sectionReveal.animationClass}`}
          style={sectionReveal.animationStyle}
        >
          <h2 className="main-font testimonials-title">What Our Learners Say</h2>
          <p className="para-font testimonials-subtitle">
            Discover how SkillDesk is transforming learning experiences across organizations worldwide
          </p>
        </div>

        <div className="testimonials-content">
          {/* Testimonial Image */}
          <div className="testimonial-image-container">
            <div className="image-wrapper">
              <Image
                src={testimonials[activeTestimonial].src}
                alt={testimonials[activeTestimonial].name}
                width={400}
                height={400}
                className="testimonial-image"
              />
              <div className="image-overlay">
                <div className="quote-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="testimonial-content">
            <div className="testimonial-text">
              <div className="stars-rating">
                {renderStars(testimonials[activeTestimonial].rating)}
              </div>
              <blockquote className="main-font testimonial-quote">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              <div className="testimonial-author">
                <h4 className="main-font author-name">{testimonials[activeTestimonial].name}</h4>
                <p className="para-font author-designation">{testimonials[activeTestimonial].designation}</p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="testimonial-controls">
              <button 
                onClick={prevTestimonial}
                className="control-btn prev-btn"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="control-btn next-btn"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
