"use client";

import "../styles/about-hero.scss";

const AboutHero = () => {


  return (
    <section className="about-hero-section">
      {/* Background Image Container */}
      <div className="about-hero-bg-container">
        <img
          src="/assets/about-images/about-bg.jpg"
          alt="AI Technology Background"
          className="about-hero-bg-image"
        />
        <div className="about-hero-bg-overlay"></div>
      </div>

      <div className="about-hero-container">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <div className="about-hero-subtitle main-font">About SkillDesk</div>
            <h1 className="about-hero-title main-font">
              Empowering <span className="highlight">Learning</span> Through
              <br />
              <span className="highlight">Innovation</span>
            </h1>
            <p className="about-hero-description para-font">
              We are passionate about transforming education through cutting-edge
              AI technology, creating personalized learning experiences that
              adapt to each learner's unique needs and goals. Our mission is to
              make quality education accessible to everyone, everywhere.
            </p>
            <div className="about-hero-cta">
              <button className="cta-button cta-primary main-font">
                Discover Our Story
              </button>
              <button className="cta-button cta-secondary main-font">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
