import React from 'react'
import Image from 'next/image'

import Image from "next/image";
import "../styles/about.scss";
const About = () => {
  const features = [
    {
      number: "01",
      title: "Video Tutorial",
      description: "Lorem ipsum dolor amet consectetur"
    },
    {
      number: "02", 
      title: "Affordable Price",
      description: "Lorem ipsum dolor amet consectetur"
    },
    {
      number: "03",
      title: "Life Time Support", 
      description: "Lorem ipsum dolor amet consectetur"
    },
    {
      number: "04",
      title: "Exclusive Advisor",
      description: "Lorem ipsum dolor amet consectetur"
    }
  ]

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Features Section */}
        <div className="features-section">
          <div className="features-header">
            <h2 className="main-font features-title">Features</h2>
            <h3 className="main-font features-subtitle">One Platform Many Course</h3>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-number main-font">{feature.number}</div>
                <div className="feature-content">
                  <h4 className="main-font feature-title">{feature.title}</h4>
                  <p className="para-font feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Content Section */}
        <div className="about-content-section">
          <div className="about-content">
            <div className="about-left">
              <Image
                src="/assets/about-images/about.png"
                alt="About Us"
                width={500}
                height={600}
                className="about-image"
              />
            </div>
            
            <div className="about-right">
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
                
                <button className="main-font discover-btn">Discover More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About