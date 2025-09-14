"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import coursesData from '../data/courses.json'
import "../styles/our-courses.scss";

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  modules: number;
  lessons: number;
  duration: string;
  difficulty: string;
  enrolledCount: number;
  rating: number;
  instructor: string;
  price: number;
  isPopular: boolean;
  skills: string[];
}

const OurCourses = () => {
  // Get most popular courses (isPopular: true)
  const popularCourses = coursesData.filter(course => course.isPopular);
  
  // Get all courses
  const allCourses = coursesData;

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Calculate total slides needed (9 courses, 3 per slide = 3 slides)
  const coursesPerSlide = 3
  const totalSlides = Math.ceil(popularCourses.length / coursesPerSlide)

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        goToSlide((currentSlide + 1) % totalSlides)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [currentSlide, totalSlides, isTransitioning])

  // Handle slide change
  const goToSlide = (slideIndex: number) => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentSlide(slideIndex)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  // Next slide
  const nextSlide = () => {
    goToSlide((currentSlide + 1) % totalSlides)
  }

  // Previous slide
  const prevSlide = () => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides)
  }

  // Get courses for specific slide
  const getCoursesForSlide = (slideIndex: number) => {
    const startIndex = slideIndex * coursesPerSlide
    return popularCourses.slice(startIndex, startIndex + coursesPerSlide)
  }

  const formatPrice = (price: number) => {
    return `$${price}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'BEGINNER':
        return '#10b981';
      case 'INTERMEDIATE':
        return '#f59e0b';
      case 'ADVANCED':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const renderCourseCard = (course: Course) => (
    <div
      key={course.id}
      className="course-card"
    >
      <div className="course-image-container">
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={400}
          height={250}
          className="course-image"
        />
        <div className="course-overlay">
          <div
            className="course-difficulty"
            style={{ backgroundColor: getDifficultyColor(course.difficulty) }}
          >
            {course.difficulty}
          </div>
          {course.isPopular && (
            <div className="course-popular-badge">
              Popular
            </div>
          )}
        </div>
      </div>

      <div className="course-content">
        <div className="course-header">
          <h3 className="main-font course-title">{course.title}</h3>
          <div className="course-rating">
            <span className="rating-stars">★★★★★</span>
            <span className="rating-value">{course.rating}</span>
            <span className="rating-count">({course.enrolledCount})</span>
          </div>
        </div>

        <p className="para-font course-description">{course.description}</p>

        <div className="course-meta">
          <div className="course-stats">
            <div className="stat-item">
              <span className="stat-icon">📚</span>
              <span className="stat-text">{course.modules} Modules</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🎯</span>
              <span className="stat-text">{course.lessons} Lessons</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">⏱️</span>
              <span className="stat-text">{course.duration}</span>
            </div>
          </div>
        </div>

        <div className="course-skills">
          {course.skills.slice(0, 3).map((skill: string, skillIndex: number) => (
            <span key={skillIndex} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        <div className="course-footer">
          <div className="course-instructor">
            <span className="instructor-label">Instructor:</span>
            <span className="instructor-name">{course.instructor}</span>
          </div>
          <div className="course-price">
            <span className="price-amount">{formatPrice(course.price)}</span>
          </div>
        </div>

        <button className="main-font course-cta">
          Enroll Now
        </button>
      </div>
    </div>
  );

  return (
    <section id="courses" className="our-courses-section">
      <div className="courses-container">
        {/* Header */}
        <div className="courses-header">
          <h2 className="main-font courses-title">Our Courses</h2>
          <h3 className="main-font courses-subtitle">Master New Skills with Expert-Led Training</h3>
          <p className="para-font courses-description">
            Choose from our comprehensive collection of courses designed by industry experts to advance your career and expand your knowledge.
          </p>
        </div>

        {/* Most Popular Courses */}
        <div className="popular-courses-section">
          <div className="section-header">
            <h4 className="main-font section-title">Most Popular Courses</h4>
            <p className="para-font section-subtitle">Trending courses that our students love</p>
          </div>
          
          <div className="carousel-container">
            <div className="carousel-wrapper">
              <div 
                className="courses-carousel"
                ref={carouselRef}
                style={{
                  transform: `translateX(-${currentSlide * 33.333}%)`,
                  transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="carousel-slide">
                    {getCoursesForSlide(slideIndex).map((course) => renderCourseCard(course))}
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-navigation">
              <button 
                className="carousel-btn prev-btn"
                onClick={prevSlide}
                disabled={isTransitioning}
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="carousel-dots">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
              
              <button 
                className="carousel-btn next-btn"
                onClick={nextSlide}
                disabled={isTransitioning}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* View All Courses Button */}
        <div className="view-all-section">
          <button className="main-font view-all-btn">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurCourses
