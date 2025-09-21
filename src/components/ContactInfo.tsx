"use client";
import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { Mail, Phone, MapPin, Clock, MessageCircle, Globe } from 'lucide-react';
import "../styles/contact-info.scss";

const ContactInfo = () => {
  const infoReveal = useRevealOnScroll({ 
    animationType: 'fadeUp', 
    duration: 1, 
    delay: 0.2 
  });

  const cardReveal = useRevealOnScroll({ 
    animationType: 'fadeUp', 
    duration: 1, 
    delay: 0.4 
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      details: "hello@skilldesk.com",
      action: "mailto:hello@skilldesk.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office",
      details: "123 Education St, Tech City, TC 12345",
      action: "https://maps.google.com"
    },
  ];

  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        <div 
          ref={infoReveal.ref as React.Ref<HTMLDivElement>}
          className={`contact-info-header ${infoReveal.animationClass}`}
          style={infoReveal.animationStyle}
        >
          <h2 className="contact-info-title main-font">Other Ways to Reach Us</h2>
          <p className="contact-info-subtitle para-font">
            Choose the communication method that works best for you
          </p>
        </div>

        <div className="contact-methods-grid">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                ref={cardReveal.ref as React.Ref<HTMLDivElement>}
                className={`contact-method-card ${cardReveal.animationClass}`}
                style={cardReveal.animationStyle}
              >
                <div className="contact-method-icon">
                  <IconComponent className="method-icon" />
                </div>
                <div className="contact-method-content">
                  <h3 className="contact-method-title main-font">{method.title}</h3>
                  <p className="contact-method-description para-font">{method.description}</p>
                  {method.action ? (
                    <a 
                      href={method.action} 
                      className="contact-method-link"
                    >
                      {method.details}
                    </a>
                  ) : (
                    <span className="contact-method-details">{method.details}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="contact-cta">
          <h3 className="contact-cta-title main-font">Ready to Get Started?</h3>
          <p className="contact-cta-description para-font">
            Join thousands of learners who are already transforming their careers with SkillDesk
          </p>
          <div className="contact-cta-buttons">
            <a href="/courses" className="cta-btn primary">
              Explore Courses
            </a>
            <a href="/about" className="cta-btn secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
