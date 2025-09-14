"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Check } from 'lucide-react'
import "../styles/solutions.scss";

const Solutions = () => {
  const features = [
    {
      step: "Enterprises",
      title: "Employee Upskilling",
      content: "Transform your workforce with AI-powered learning paths, competency tracking, and personalized upskilling programs designed for enterprise scale.",
      image: "/assets/solution/solution-1.jpg"
    },
    {
      step: "Universities", 
      title: "Blended Learning",
      content: "Enhance traditional education with AI-driven blended learning solutions that adapt to student needs and improve learning outcomes.",
      image: "/assets/solution/solution-2.jpg"
    },
    {
      step: "Individuals",
      title: "Career Advancement", 
      content: "Accelerate your career growth with personalized learning paths, skill assessments, and AI-powered recommendations tailored to your goals.",
      image: "/assets/solution/solution-3.jpg"
    }
  ]

  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const autoPlayInterval = 5000

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])


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

        {/* Feature Steps */}
        <div className="feature-steps-container">
          <div className="feature-steps-content">
            <div className="feature-steps-list">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`feature-step-item ${index === currentFeature ? 'active' : ''}`}
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: index === currentFeature ? 1 : 0.6 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => {
                    setCurrentFeature(index)
                    setProgress(0)
                  }}
                >
                  <motion.div
                    className={`feature-step-icon ${index === currentFeature ? 'active' : ''}`}
                    animate={{
                      scale: index === currentFeature ? 1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {index <= currentFeature ? (
                      <span className="checkmark">
                        <Check className='check-icon' color='white'  size={24} />
                      </span>
                    ) : (
                      <span className="step-number">{index + 1}</span>
                    )}
                  </motion.div>

                  <div className="feature-step-content">
                    <h3 className="main-font feature-step-title">
                      {feature.title || feature.step}
                    </h3>
                    <p className="para-font feature-step-description">
                      {feature.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="feature-steps-image">
              <AnimatePresence mode="wait">
                {features.map(
                  (feature, index) =>
                    index === currentFeature && (
                      <motion.div
                        key={index}
                        className="feature-image-container"
                        initial={{ y: 100, opacity: 0, rotateX: -20 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        exit={{ y: -100, opacity: 0, rotateX: 20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.step}
                          className="feature-image"
                 
                          quality={100}
                          loading="lazy"
                          layout="responsive"
                          width={600}
                          height={600}
                        />
                        <div className="feature-image-overlay" />
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions