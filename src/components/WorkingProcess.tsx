"use client"

import React from 'react'
import Image from 'next/image'
import { BookOpen, CreditCard, Play } from 'lucide-react'
import "../styles/working-process.scss"

const WorkingProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "CREATE COURSES",
      description: "Design comprehensive learning experiences with our intuitive course builder.",
      icon: BookOpen
    },
    {
      id: 2,
      title: "MANAGE LEARNERS", 
      description: "Effortlessly manage your team members and track their progress.",
      icon: CreditCard
    },
    {
      id: 3,
      title: "TRACK PROGRESS",
      description: "Monitor learning outcomes with powerful analytics and reporting tools.",
      icon: Play
    }
  ]

  return (
    <section className="working-process-section">
      <div className="working-process-container">
        {/* Header */}
        <div className="working-process-header">
          <h2 className="main-font working-process-title">Working Process</h2>
          <h3 className="main-font working-process-subtitle">How Does It Work</h3>
        </div>

        {/* Process Steps */}
        <div className="process-steps">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={step.id} className="process-step">
                {/* Step Icon */}
                <div className="step-icon-container">
                  <div className="step-icon">
                    <IconComponent size={24} />
                  </div>
                </div>

                {/* Step Content */}
                <div className="step-content">
                  <h4 className="main-font step-title">{step.title}</h4>
                  <p className="para-font step-description">{step.description}</p>
                </div>

                {/* Arrow Indicator (except for last step) */}
                {index < processSteps.length - 1 && (
                  <div className="step-arrow">
                    <Image
                      src="/assets/working-process/working-process.svg"
                      alt="Arrow"
                      width={80}
                      height={80}
                      className="arrow-icon"
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkingProcess
