"use client";



const AboutValues = () => {
  const values = [
    {
      id: 1,
      icon: "🚀",
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible in education technology, embracing new ideas and cutting-edge solutions.",
    },
    {
      id: 2,
      icon: "🌍",
      title: "Accessibility",
      description:
        "Education should be available to everyone, regardless of background, location, or economic status. We're committed to breaking down barriers.",
    },
    {
      id: 3,
      icon: "🎯",
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from our technology to our customer service and learning outcomes.",
    },
    {
      id: 4,
      icon: "👥",
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and partnership, both within our organization and with our learners and educational partners.",
    },
    {
      id: 5,
      icon: "📈",
      title: "Growth",
      description:
        "We're committed to continuous improvement and growth, both for our platform and for every learner who uses it.",
    },
    {
      id: 6,
      icon: "💡",
      title: "Creativity",
      description:
        "We approach challenges with creativity and imagination, finding innovative solutions that make learning more engaging and effective.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Active Learners" },
    { number: "500+", label: "Courses Available" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section className="about-values-section">
      <div className="about-values-container">
        <div className="about-values-header">
          <div className="about-values-title main-font">Our Values</div>
          <h2 className="about-values-subtitle main-font">
            What Drives Us Forward
          </h2>
          <p className="about-values-description para-font">
            Our core values shape every decision we make and every feature we
            build. They guide us in creating meaningful learning experiences
            that make a real difference in people's lives.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <div key={value.id} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title main-font">{value.title}</h3>
              <p className="value-description para-font">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="about-values-stats">
          <div className="stats-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number main-font">{stat.number}</div>
                <div className="stat-label main-font">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-values-cta">
          <div className="values-cta-content">
            <h3 className="values-cta-title main-font">Ready to Start Learning?</h3>
            <p className="values-cta-description para-font">
              Join thousands of learners who are already transforming their
              skills and advancing their careers with SkillDesk.
            </p>
            <div className="values-cta-buttons">
              <button className="values-cta-button values-cta-primary main-font">
                Start Free Trial
              </button>
              <button className="values-cta-button values-cta-secondary main-font">
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
