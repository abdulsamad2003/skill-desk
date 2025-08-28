"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const toRotate = [
    "Enterprise-grade AI learning platform designed for organizational transformation and workforce development.",
    "Comprehensive skill assessment, personalized learning paths, and data-driven insights for measurable outcomes.",
    "Secure, scalable, and compliant solution trusted by Fortune 500 companies worldwide.",
    "Advanced analytics and reporting capabilities to track ROI and learning effectiveness across your organization.",
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < toRotate[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(
            toRotate[currentTextIndex].slice(0, displayText.length + 1)
          );
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, 2000);
      }
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % toRotate.length);
        setLoopNum((prev) => prev + 1);
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 1000);
      }
    } else {
      timeout = setTimeout(() => {
        setIsTyping(true);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isTyping,
    isDeleting,
    currentTextIndex,
    toRotate,
    typingSpeed,
    loopNum,
  ]);

  return (
    <section className="hero">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="grid-overlay"></div>
        <div className="noise-overlay"></div>
      </div>

      <div className="hero-container">
        {/* Main Content Section */}
        <div className="hero-content">
          {/* Enterprise Badge */}
          <div className="hero-badge">
            <svg
              className="badge-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="badge-text">Enterprise AI Learning Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            <span className="title-line-1">Transform Your</span>
            <span className="title-line-2">Organization with</span>
            <span className="title-line-3">AI-Powered Learning</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </p>

          {/* Call to Action */}
          <div className="hero-actions">
            <button className="cta-primary">
              <span>Schedule Demo</span>
              <svg
                className="arrow-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="cta-secondary">
              <span>Download Brochure</span>
              <svg
                className="download-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Visual Section */}
        <div className="hero-visual">
          <div className="visual-container">
            <video
              src="/assets/ai.mp4"
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
