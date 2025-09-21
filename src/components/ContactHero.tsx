"use client";
import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { Mail, Phone, MapPin } from 'lucide-react';
import "../styles/contact-hero.scss";

const ContactHero = () => {
  const titleReveal = useRevealOnScroll({ 
    animationType: 'fadeUp', 
    duration: 1, 
    delay: 0.2 
  });

  const subtitleReveal = useRevealOnScroll({ 
    animationType: 'fadeUp', 
    duration: 1, 
    delay: 0.4 
  });

  const descriptionReveal = useRevealOnScroll({ 
    animationType: 'fadeUp', 
    duration: 1, 
    delay: 0.6 
  });

  const contactReveal = useRevealOnScroll({ 
    animationType: 'fadeUp', 
    duration: 1, 
    delay: 0.8 
  });

  return (
    <section className="contact-hero-section">
      <div className="contact-hero-overlay"></div>
      <div className="contact-hero-container">
        <div className="contact-hero-content">
          <div 
            ref={titleReveal.ref as React.Ref<HTMLDivElement>}
            className={`contact-hero-badge ${titleReveal.animationClass}`}
            style={titleReveal.animationStyle}
          >
            <span className="contact-hero-badge-text">Book Your Demo</span>
          </div>

          <h1 
            ref={subtitleReveal.ref as React.Ref<HTMLHeadingElement>}
            className={`contact-hero-title main-font ${subtitleReveal.animationClass}`}
            style={subtitleReveal.animationStyle}
          >
            Experience the power of AI-driven learning firsthand
          </h1>

          <p 
            ref={descriptionReveal.ref as React.Ref<HTMLParagraphElement>}
            className={`contact-hero-description para-font ${descriptionReveal.animationClass}`}
            style={descriptionReveal.animationStyle}
          >
            Schedule a personalized demo with our team and discover how SkillDesk can accelerate your growth.
          </p>

          <div 
            ref={contactReveal.ref as React.Ref<HTMLDivElement>}
            className={`contact-hero-info ${contactReveal.animationClass}`}
            style={contactReveal.animationStyle}
          >
            <div className="contact-info-item">
              <Mail className="contact-info-icon" />
              <div>
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">hello@skilldesk.com</span>
              </div>
            </div>
            <div className="contact-info-item">
              <Phone className="contact-info-icon" />
              <div>
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="contact-info-item">
              <MapPin className="contact-info-icon" />
              <div>
                <span className="contact-info-label">Office</span>
                <span className="contact-info-value">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
