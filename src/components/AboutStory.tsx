"use client";

import "../styles/about-story.scss";

const AboutStory = () => {
  return (
    <section className="about-story-section">
      <div className="about-story-container">
        <div className="about-story-content">
          <div className="about-story-left">
            <img
              src="/assets/images/about-img.png"
              alt="Our Story"
              className="about-story-image"
            />
            <div className="about-story-bg">
              <img
                src="/assets/images/about-img-bg.png"
                alt="Background"
                className="about-story-bg-image"
              />
            </div>
          </div>
          <div className="about-story-right">
            <div className="about-story-text">
              <div className="about-story-title main-font">Our Story</div>
              <h2 className="about-story-subtitle main-font">
                Building the Future of Education
              </h2>
              <p className="about-story-description para-font">
                Founded in 2020, SkillDesk emerged from a simple yet powerful
                vision: to make quality education accessible to everyone,
                everywhere. Our journey began when our founders recognized the
                limitations of traditional learning systems and the untapped
                potential of artificial intelligence in education.
              </p>
              <p className="about-story-description para-font">
                Today, we're proud to serve over 50,000 learners worldwide,
                offering personalized learning experiences that adapt to each
                individual's pace, style, and goals. Our platform combines
                cutting-edge AI technology with proven pedagogical methods to
                create an engaging and effective learning environment.
              </p>
              <div className="about-story-missions">
                <div className="mission-item">
                  <div className="mission-title main-font">Our Mission</div>
                  <div className="mission-description para-font">
                    To democratize education by making personalized, AI-powered
                    learning accessible to learners of all backgrounds and skill
                    levels.
                  </div>
                </div>
                <div className="mission-item">
                  <div className="mission-title main-font">Our Vision</div>
                  <div className="mission-description para-font">
                    A world where every individual has access to quality
                    education that adapts to their unique learning needs and
                    helps them achieve their full potential.
                  </div>
                </div>
                <div className="mission-item">
                  <div className="mission-title main-font">Our Values</div>
                  <div className="mission-description para-font">
                    Innovation, accessibility, excellence, and learner-centricity
                    guide everything we do at SkillDesk.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
