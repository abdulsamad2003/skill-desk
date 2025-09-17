"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRevealOnScrollMultiple } from '../hooks/useRevealOnScroll'
import { ArrowRight } from 'lucide-react'
import "../styles/our-popular-categories.scss"

const OurPopularCategories = () => {
  const categoriesReveal = useRevealOnScrollMultiple({ 
    animationType: 'fadeUp', 
    duration: 0.6, 
    delay: 0.1, 
    stagger: 0.1 
  });

  const categories = [
    {
      title: "Business & Marketing",
      description: "Learn modern business strategies, digital marketing, entrepreneurship, and how AI can optimize your operations and reach.",
      image: "/assets/top-courses/business-and-leader.jpg",
      courses: "120+",
      color: "#FF7A7A"
    },
    {
      title: "Data Science & AI",
      description: "Master machine learning, artificial intelligence, data analysis, and cutting-edge technologies that drive innovation.",
      image: "/assets/top-courses/data-science-and-ai.jpg",
      courses: "95+",
      color: "#4ECDCF"
    },
    {
      title: "Software Development",
      description: "Build applications, websites, and software solutions using the latest programming languages and development frameworks.",
      image: "/assets/top-courses/software-development.jpg",
      courses: "110+",
      color: "#FF7A7A"
    },
    {
      title: "UI/UX Design",
      description: "Create stunning user interfaces and experiences that engage users and drive business success through design thinking.",
      image: "/assets/top-courses/ui-ux-designer.jpg",
      courses: "75+",
      color: "#4ECDCF"
    },
    {
      title: "Cloud Computing",
      description: "Learn cloud platforms, DevOps practices, and scalable infrastructure solutions for modern applications.",
      image: "/assets/top-courses/cloud-computing.jpg",
      courses: "65+",
      color: "#FF7A7A"
    },
    {
      title: "Cyber Security",
      description: "Protect digital assets and learn ethical hacking, security protocols, and risk management strategies.",
      image: "/assets/top-courses/cyber-security.jpg",
      courses: "85+",
      color: "#4ECDCF"
    }
  ]

  return (
    <section className="our-categories-section">
      <div className="categories-container">
        <div className="categories-header">
          <h2 className="main-font categories-title">Popular Categories</h2>
          <h3 className="main-font categories-subtitle">Explore Our Course Categories</h3>
          <p className="para-font categories-description">
            Discover a wide range of courses designed to help you advance your career and acquire new skills.
          </p>
        </div>

        <div className="categories-grid">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <div 
                key={index} 
                className="category-card"
              >
                <div className="category-image-container">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={300}
                    height={200}
                    className="category-image"
                  />
                  <div className="courses-count-badge">
                    <span className="count-number">{category.courses}</span>
                    <span className="count-label">Courses</span>
                  </div>
                </div>
                
                <div className="category-content">
                  <h4 className="main-font category-title">{category.title}</h4>
                  <p className="para-font category-description">{category.description}</p>
                  
                  <Link 
                    href="/courses"
                    className="explore-btn"
                    style={{ '--accent-color': category.color } as React.CSSProperties}
                  >
                    <span>Explore Courses</span>
                    <ArrowRight className="arrow-icon" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="no-categories">
              <p>No categories available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default OurPopularCategories