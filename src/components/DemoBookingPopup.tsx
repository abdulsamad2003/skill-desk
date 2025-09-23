"use client";

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import "../styles/demo-booking-popup.scss";

interface DemoBookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  courseInfo?: {
    title: string;
    description: string;
    thumbnail: string;
    price: number;
  };
}

const DemoBookingPopup: React.FC<DemoBookingPopupProps> = ({ isOpen, onClose, courseInfo }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    areaOfInterest: '',
    preferredDate: '',
    preferredTime: '',
    additionalMessage: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close popup on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.areaOfInterest) newErrors.areaOfInterest = 'Area of interest is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
    if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', { ...formData, courseInfo });
      
      // Show success message (you can replace this with a toast notification)
      alert('Demo request submitted successfully! We will contact you soon.');
      
      // Reset form and close popup
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        areaOfInterest: '',
        preferredDate: '',
        preferredTime: '',
        additionalMessage: ''
      });
      onClose();
    }
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const areasOfInterest = [
    'AI Course Builder',
    'Unified Learning Hub',
    'Competency Management',
    'AI Chat with Video',
    'Roleplay Simulator',
    'Career Path Recommendations',
    'Performance Analytics',
    'Team Readiness Simulation',
    'Other'
  ];

  if (!isOpen) return null;

  return (
    <div className="demo-popup-overlay" onClick={onClose}>
      <div className="demo-popup-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="demo-popup-close" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Header */}
        <div className="demo-popup-header">
          <h2 className="main-font demo-popup-title">Schedule Your Demo</h2>
          {courseInfo && (
            <div className="demo-course-info">
              <h3 className="main-font demo-course-title">{courseInfo.title}</h3>
              <p className="para-font demo-course-description">{courseInfo.description}</p>
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="demo-popup-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                <User size={16} />
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`form-input ${errors.firstName ? 'error' : ''}`}
                placeholder="Enter your first name"
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                <User size={16} />
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`form-input ${errors.lastName ? 'error' : ''}`}
                placeholder="Enter your last name"
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <Mail size={16} />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Enter your email address"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                <Phone size={16} />
                Phone Number
              </label>
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
            <label htmlFor="company" className="form-label">
              <Building size={16} />
              Company/Organization
            </label>
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
            <label htmlFor="areaOfInterest" className="form-label">
              <MessageSquare size={16} />
              Area of Interest *
            </label>
            <select
              id="areaOfInterest"
              name="areaOfInterest"
              value={formData.areaOfInterest}
              onChange={handleInputChange}
              className={`form-select ${errors.areaOfInterest ? 'error' : ''}`}
            >
              <option value="">Select your area of interest</option>
              {areasOfInterest.map((area, index) => (
                <option key={index} value={area}>{area}</option>
              ))}
            </select>
            {errors.areaOfInterest && <span className="error-message">{errors.areaOfInterest}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="preferredDate" className="form-label">
                <Calendar size={16} />
                Preferred Date *
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className={`form-input ${errors.preferredDate ? 'error' : ''}`}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.preferredDate && <span className="error-message">{errors.preferredDate}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="preferredTime" className="form-label">
                <Clock size={16} />
                Preferred Time *
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className={`form-select ${errors.preferredTime ? 'error' : ''}`}
              >
                <option value="">Select time</option>
                {timeSlots.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
              {errors.preferredTime && <span className="error-message">{errors.preferredTime}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="additionalMessage" className="form-label">
              <MessageSquare size={16} />
              Additional Message
            </label>
            <textarea
              id="additionalMessage"
              name="additionalMessage"
              value={formData.additionalMessage}
              onChange={handleInputChange}
              className="form-textarea"
              placeholder="Tell us more about your requirements..."
              rows={4}
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Schedule Demo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoBookingPopup;
