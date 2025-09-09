"use client";

import Image from "next/image";
import "../styles/hero-section.scss";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section">
      {/* Background Shapes */}
      <div className="hero-shapes">
        {/* Shape 1 - Circle */}
        <svg className="shape shape-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#FFE4B8" opacity="0.3"/>
        </svg>
        
        {/* Shape 2 - Triangle */}
        <svg className="shape shape-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 90,90 10,90" fill="#B8E4FF" opacity="0.25"/>
        </svg>
        
        {/* Shape 3 - Square */}
        <svg className="shape shape-3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="60" rx="10" fill="#FFB8E4" opacity="0.2" transform="rotate(45 50 50)"/>
        </svg>
        
        {/* Shape 4 - Hexagon */}
        <svg className="shape shape-4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 80,30 80,70 50,90 20,70 20,30" fill="#E4B8FF" opacity="0.3"/>
        </svg>
        
        {/* Shape 5 - Star */}
        <svg className="shape shape-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 60,40 90,40 65,60 75,90 50,70 25,90 35,60 10,40 40,40" fill="#B8FFE4" opacity="0.25"/>
        </svg>
        
        {/* Shape 6 - Diamond */}
        <svg className="shape shape-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 70,50 50,90 30,50" fill="#FFDFB8" opacity="0.2"/>
        </svg>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <div className={`hero-left ${isVisible ? 'animate-in' : ''}`}>
            <h5 className="hero-subtitle">Online E-Learning Courses</h5>
            <h1 className="hero-title">
              <span className="highlight">Creating</span> a Better Future through Education
            </h1>
            <p className="hero-description">
              It is long established fact that reader distracted by the readable content.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>

          {/* Right Content */}
          <div className={`hero-right ${isVisible ? 'animate-in' : ''}`}>
            <div className="hero-image-wrapper">
              <Image
                src="/assets/top-courses/ui-ux-designer.jpg"
                alt="E-Learning Education"
                width={600}
                height={500}
                className="hero-image"
                priority
              />
              
              {/* Top Left Badge */}
              <div className="badge badge-top-left">
                <div className="badge-content">
                  <span className="badge-number">1.5K+</span>
                  <span className="badge-text">Students</span>
                </div>
              </div>
              
              {/* Bottom Right Badge */}
              <div className="badge badge-bottom-right">
                <div className="badge-content">
                  <span className="badge-icon">⭐</span>
                  <span className="badge-rating">4.9</span>
                  <span className="badge-text">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;