"use client"
import React from 'react'
import Image from 'next/image'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import "../styles/about.scss";
import { useRouter } from 'next/navigation';
const About = () => {
  const aboutImageReveal = useRevealOnScroll({ 
    animationType: 'fadeLeft', 
    duration: 1, 
    delay: 0.2 
  });
  
  const aboutTextReveal = useRevealOnScroll({ 
    animationType: 'fadeRight', 
    duration: 0.8, 
    delay: 0.4 
  });

  const router = useRouter();

  return (
    <section className="about-section">
      <div className="about-container">
        {/* About Content Section */}
        <div className="about-content-section">
          <div className="about-content">
            <div 
              ref={aboutImageReveal.ref as React.Ref<HTMLDivElement>}
              className={`about-left ${aboutImageReveal.animationClass}`}
              style={aboutImageReveal.animationStyle}
            >
              <div className="about-video-container">
                <video
                  className="about-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/assets/about-images/about-ai-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            <div 
              ref={aboutTextReveal.ref as React.Ref<HTMLDivElement>}
              className={`about-right ${aboutTextReveal.animationClass}`}
              style={aboutTextReveal.animationStyle}
            >
              <div className="about-text">
                <h2 className="main-font about-title">About SkillDesk</h2>
                <h3 className="main-font about-subtitle">Transform Your Learning Journey with AI-Powered Education</h3>
                <p className="para-font about-description">
                  SkillDesk is revolutionizing online education by combining cutting-edge AI technology with personalized learning experiences. We believe that every learner deserves access to world-class education tailored to their unique needs and learning style.
                </p>
                
                <div className="about-missions">
                  <div className="mission-item">
                    <h4 className="main-font mission-title">AI-Powered Learning</h4>
                    <p className="para-font mission-description">
                      Our advanced AI algorithms create personalized learning paths that adapt to your pace and learning preferences.
                    </p>
                  </div>
                  
                  <div className="mission-item">
                    <h4 className="main-font mission-title">Expert Instructors</h4>
                    <p className="para-font mission-description">
                      Learn from industry professionals and certified experts who bring real-world experience to every lesson.
                    </p>
                  </div>
                </div>
                
                <button className="main-font discover-btn" onClick={() => router.push('/about')}>
                  <span>Explore Our Story</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About