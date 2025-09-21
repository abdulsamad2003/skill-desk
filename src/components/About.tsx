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
              <Image
                src="/assets/about-images/about.png"
                alt="About Us"
                width={500}
                height={600}
                className="about-image"
              />
            </div>
            
            <div 
              ref={aboutTextReveal.ref as React.Ref<HTMLDivElement>}
              className={`about-right ${aboutTextReveal.animationClass}`}
              style={aboutTextReveal.animationStyle}
            >
              <div className="about-text">
                <h2 className="main-font about-title">About Us Education</h2>
                <h3 className="main-font about-subtitle">Go Your Skill in Next Level</h3>
                <p className="para-font about-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed turpis in arcu gravida faucibus euismod eget magna. Donec non justo ac libero pharetra congue.
                </p>
                
                <div className="about-missions">
                  <div className="mission-item">
                    <h4 className="main-font mission-title">Our Success Mission</h4>
                    <p className="para-font mission-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  
                  <div className="mission-item">
                    <h4 className="main-font mission-title">Our Success Mission</h4>
                    <p className="para-font mission-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                
                <button className="main-font discover-btn" onClick={() => router.push('/about')}>Discover More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About