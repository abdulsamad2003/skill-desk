"use client";
import React, { useState } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { ChevronDown, ChevronUp } from 'lucide-react';
import "../styles/demo-faq.scss";

const DemoFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqReveal = useRevealOnScroll({ 
    animationType: 'fadeUp', 
    duration: 1, 
    delay: 0.2 
  });

  const faqItems = [
    {
      question: "How long is the demo?",
      answer: "Our demos typically last 30 minutes, giving you enough time to explore key features and ask questions."
    },
    {
      question: "Is the demo free?",
      answer: "Yes, our demos are completely free with no obligations. We want you to experience SkillDesk firsthand."
    },
    {
      question: "Can I reschedule my demo?",
      answer: "Absolutely! Just contact us at least 24 hours in advance and we'll help you find a new time that works."
    },
    {
      question: "What do I need for the demo?",
      answer: "Just a computer with internet access. We'll send you a meeting link via email before your scheduled time."
    },
    {
      question: "Who will be conducting the demo?",
      answer: "Our product specialists and AI experts will guide you through the demo, answering any questions you may have."
    },
    {
      question: "Can I request a specific focus area?",
      answer: "Yes! When scheduling, you can specify which features or areas you'd like us to focus on during the demo."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="demo-faq-section">
      <div className="demo-faq-container">
        <div 
          ref={faqReveal.ref as React.Ref<HTMLDivElement>}
          className={`demo-faq-wrapper ${faqReveal.animationClass}`}
          style={faqReveal.animationStyle}
        >
          <div className="demo-faq-header">
            <h2 className="demo-faq-title main-font">Frequently Asked Questions</h2>
            <p className="demo-faq-subtitle para-font">
              Quick answers to common questions about our demo process
            </p>
          </div>

          <div className="demo-faq-dropdown-container">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`demo-faq-dropdown ${openIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="demo-faq-dropdown-trigger"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="demo-faq-question-text main-font">{item.question}</span>
                  <div className="demo-faq-chevron">
                    {openIndex === index ? (
                      <ChevronUp className="chevron-icon" />
                    ) : (
                      <ChevronDown className="chevron-icon" />
                    )}
                  </div>
                </button>
                <div className={`demo-faq-dropdown-content ${openIndex === index ? 'open' : ''}`}>
                  <div className="demo-faq-dropdown-inner">
                    <p className="demo-faq-answer-text para-font">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoFAQ;
