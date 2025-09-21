"use client";
import React, { useState } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { Calendar, Clock, Users, MessageCircle, CheckCircle } from 'lucide-react';
import "../styles/demo-booking.scss";

const DemoBooking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    areaOfInterest: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formReveal = useRevealOnScroll({ 
    animationType: 'fadeUp', 
    duration: 1, 
    delay: 0.2 
  });

  const featuresReveal = useRevealOnScroll({ 
    animationType: 'fadeUp', 
    duration: 1, 
    delay: 0.4 
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      areaOfInterest: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
    alert('Demo scheduled successfully! We\'ll send you a confirmation email shortly.');
  };

  const demoFeatures = [
    {
      icon: Clock,
      title: "30-minute personalized demo",
      description: "Focused session tailored to your needs"
    },
    {
      icon: MessageCircle,
      title: "AI features walkthrough",
      description: "See our AI in action"
    },
    {
      icon: Users,
      title: "Custom solution discussion",
      description: "Discuss your specific requirements"
    },
    {
      icon: CheckCircle,
      title: "Q&A with our experts",
      description: "Get answers to all your questions"
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", 
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const areasOfInterest = [
    "Software Development",
    "Data Science & AI",
    "UI/UX Design",
    "Digital Marketing",
    "Project Management",
    "Cloud Computing",
    "Cybersecurity",
    "Other"
  ];

  return (
    <section className="demo-booking-section">
      <div className="demo-booking-container">
        <div 
          ref={formReveal.ref as React.Ref<HTMLDivElement>}
          className={`demo-booking-wrapper ${formReveal.animationClass}`}
          style={formReveal.animationStyle}
        >
          <div className="demo-booking-header">
            <h2 className="demo-booking-title main-font">Schedule Your Demo</h2>
            <p className="demo-booking-subtitle para-font">
              Fill out the form below and we'll get back to you within 24 hours to confirm your demo slot.
            </p>
          </div>

          <div className="demo-booking-content">
            <form onSubmit={handleSubmit} className="demo-booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
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
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="areaOfInterest" className="form-label">Area of Interest *</label>
                <select
                  id="areaOfInterest"
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select your area of interest</option>
                  {areasOfInterest.map((area, index) => (
                    <option key={index} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="preferredDate" className="form-label">Preferred Date *</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="preferredTime" className="form-label">Preferred Time *</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell us about your learning goals or any specific questions you have..."
                  rows={4}
                />
              </div>

              <button 
                type="submit" 
                className={`demo-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="btn-spinner"></div>
                    Scheduling...
                  </>
                ) : (
                  <>
                    <Calendar className="btn-icon" />
                    Schedule Demo
                  </>
                )}
              </button>
            </form>

            <div 
              ref={featuresReveal.ref as React.Ref<HTMLDivElement>}
              className={`demo-features ${featuresReveal.animationClass}`}
              style={featuresReveal.animationStyle}
            >
              <h3 className="demo-features-title main-font">What to Expect</h3>
              <div className="demo-features-grid">
                {demoFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="demo-feature-item">
                      <div className="demo-feature-icon">
                        <IconComponent className="feature-icon" />
                      </div>
                      <div className="demo-feature-content">
                        <h4 className="demo-feature-title main-font">{feature.title}</h4>
                        <p className="demo-feature-description para-font">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBooking;
