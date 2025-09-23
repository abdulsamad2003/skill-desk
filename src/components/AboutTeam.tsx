"use client";

import React from 'react';
import Image from 'next/image';
import "../styles/about-team.scss";

const AboutTeam: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO & Founder",
      description: "Visionary leader with 15+ years in education technology, passionate about making quality learning accessible to everyone.",
      image: "/assets/images/instructor-1.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      description: "Tech innovator specializing in scalable learning platforms and AI-driven educational solutions.",
      image: "/assets/images/instructor-2.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Head of Design",
      description: "Creative director focused on user experience and creating engaging, intuitive learning interfaces.",
      image: "/assets/images/instructor-3.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Lead Instructor",
      description: "Expert educator with extensive experience in curriculum development and student success strategies.",
      image: "/assets/images/instructor-4.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Head of Marketing",
      description: "Strategic marketing leader with expertise in digital growth and brand development in the education sector.",
      image: "/assets/images/instructor-1.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Lead Developer",
      description: "Full-stack developer passionate about creating robust, scalable solutions that enhance the learning experience.",
      image: "/assets/images/instructor-2.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#"
      }
    }
  ];

  return (
    <section className="about-team-section">
      <div className="about-team-container">
        {/* Header */}
        <div className="about-team-header">
          <h3 className="about-team-title">Our Team</h3>
          <h2 className="about-team-subtitle">Meet the Experts Behind Your Success</h2>
          <p className="about-team-description">
            Our diverse team of passionate educators, technologists, and innovators work tirelessly 
            to create the best learning experience for you.
          </p>
        </div>

        {/* Team Grid */}
        <div className="about-team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member-card">
              <div className="team-member-image-container">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="team-member-image"
                />
                <div className="team-member-overlay">
                  <div className="team-member-social">
                    <a href={member.social.linkedin} className="social-link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href={member.social.twitter} className="social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={member.social.facebook} className="social-link">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-member-info">
                <h4 className="team-member-name">{member.name}</h4>
                <p className="team-member-position">{member.position}</p>
                <p className="team-member-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;
