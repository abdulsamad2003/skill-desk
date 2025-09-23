"use client";
import React, { useState } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import "../styles/contact-form.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formReveal = useRevealOnScroll({ 
    animationType: 'fadeUp', 
    duration: 1, 
    delay: 0.2 
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We&apos;ll get back to you soon.');
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div 
          ref={formReveal.ref as React.Ref<HTMLDivElement>}
          className={`contact-form-wrapper ${formReveal.animationClass}`}
          style={formReveal.animationStyle}
        >
          <div className="contact-form-header">
            <h2 className="contact-form-title main-font">Send us a Message</h2>
            <p className="contact-form-subtitle para-font">
              Have a question or want to discuss a project? We&apos;d love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Tell us more about your project or question..."
                rows={6}
                required
              />
            </div>

            <button 
              type="submit" 
              className={`contact-submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="btn-spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="btn-icon" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
