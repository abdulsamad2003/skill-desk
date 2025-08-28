'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaUserGraduate, FaClock, FaChalkboardTeacher } from 'react-icons/fa';

type Course = {
  id: number;
  title: string;
  instructor: string;
  image: string;
  rating: number;
  students: number;
  duration: string;
  level: string;
  price: number;
  originalPrice: number;
  tags: string[];
};

const courses: Course[] = [
  {
    id: 1,
    title: "Advanced Machine Learning & AI",
    instructor: "Dr. Sarah Miller",
    image: "/assets/top-courses/data-science-and-ai.jpg",
    rating: 4.9,
    students: 15420,
    duration: "20 weeks",
    level: "Advanced",
    price: 89.99,
    originalPrice: 199.99,
    tags: ["AI", "Python", "Neural Networks"]
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    instructor: "John Davidson",
    image: "/assets/top-courses/software-development.jpg",
    rating: 4.8,
    students: 12350,
    duration: "16 weeks",
    level: "Intermediate",
    price: 79.99,
    originalPrice: 169.99,
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "Cloud Architecture Masterclass",
    instructor: "Mike Chen",
    image: "/assets/top-courses/cloud-computing.jpg",
    rating: 4.7,
    students: 8920,
    duration: "12 weeks",
    level: "Advanced",
    price: 94.99,
    originalPrice: 189.99,
    tags: ["AWS", "Azure", "DevOps"]
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    instructor: "Emma Thompson",
    image: "/assets/top-courses/digital-marketing.jpg",
    rating: 4.8,
    students: 10840,
    duration: "8 weeks",
    level: "Beginner",
    price: 69.99,
    originalPrice: 149.99,
    tags: ["SEO", "Social Media", "Analytics"]
  }
];

type SortOption = 'all' | 'new' | 'old' | 'rating' | 'popular';

const TopCourses = () => {
  const [activeSort, setActiveSort] = useState<SortOption>('all');
  const [sortedCourses, setSortedCourses] = useState(courses);

  const handleSort = (option: SortOption) => {
    setActiveSort(option);
    let sorted = [...courses];
    
    switch (option) {
      case 'all':
        // Keep original order
        sorted = [...courses];
        break;
      case 'new':
        sorted.sort((a, b) => b.id - a.id);
        break;
      case 'old':
        sorted.sort((a, b) => a.id - b.id);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        sorted.sort((a, b) => b.students - a.students);
        break;
    }
    
    setSortedCourses(sorted);
  };

  return (
    <section className="top-courses">
      <div className="top-courses-container">
        <div className="section-header">
          <div className="header-content">
            <span className="subtitle">Featured Courses</span>
            <h2>Top-Rated Courses</h2>
          </div>
          <div className="sort-filters">
            <button 
              className={`sort-btn ${activeSort === 'all' ? 'active' : ''}`}
              onClick={() => handleSort('all')}
            >
              All Courses
            </button>
            <button 
              className={`sort-btn ${activeSort === 'popular' ? 'active' : ''}`}
              onClick={() => handleSort('popular')}
            >
              Most Popular
            </button>
            <button 
              className={`sort-btn ${activeSort === 'new' ? 'active' : ''}`}
              onClick={() => handleSort('new')}
            >
              Newest
            </button>
            <button 
              className={`sort-btn ${activeSort === 'rating' ? 'active' : ''}`}
              onClick={() => handleSort('rating')}
            >
              Top Rated
            </button>
            <button 
              className={`sort-btn ${activeSort === 'old' ? 'active' : ''}`}
              onClick={() => handleSort('old')}
            >
              Oldest
            </button>
          </div>
        </div>

        <div className="courses-grid">
          {sortedCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="card-inner">
                <div className="image-container">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={250}
                    className="course-image"
                  />
                  <div className="course-level">{course.level}</div>
                </div>
                <div className="card-content">
                  <div className="tags">
                    {course.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <h3>{course.title}</h3>
                  <div className="instructor">
                    <FaChalkboardTeacher className="icon" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="meta-info">
                    <div className="rating">
                      <FaStar className="icon" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="students">
                      <FaUserGraduate className="icon" />
                      <span>{(course.students / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="duration">
                      <FaClock className="icon" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="price">
                      <span className="current">${course.price}</span>
                      <span className="original">${course.originalPrice}</span>
                    </div>
                    <button className="enroll-btn">
                      Enroll Now
                      <div className="btn-glow"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
