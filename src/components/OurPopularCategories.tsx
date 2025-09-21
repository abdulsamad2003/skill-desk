"use client"
import React from 'react'
import { CourseCategoryCard } from './CourseCategoryCard'
import coursesData from '../data/courses.json'
import "../styles/our-popular-categories.scss"

const OurPopularCategories = () => {
  // Group courses by department and create categories
  const getCategoriesFromData = () => {
    const departmentMap = new Map()
    
    coursesData.forEach(course => {
      const department = course.department
      if (!departmentMap.has(department)) {
        departmentMap.set(department, {
          courses: [],
          totalCourses: 0
        })
      }
      departmentMap.get(department).courses.push(course)
      departmentMap.get(department).totalCourses++
    })

    // Convert to categories array with proper mapping
    const categories = []
    
    // Engineering
    if (departmentMap.has('Engineering')) {
      const engData = departmentMap.get('Engineering')
      categories.push({
        title: "Software Development",
        description: "Build applications, websites, and software solutions using the latest programming languages and development frameworks.",
        image: "/assets/top-courses/software-development.jpg",
        courses: `${engData.totalCourses}+`,
        color: "#FF7A7A"
      })
    }

    // Data Science
    if (departmentMap.has('Data Science')) {
      const dataData = departmentMap.get('Data Science')
      categories.push({
        title: "Data Science & AI",
        description: "Master machine learning, artificial intelligence, data analysis, and cutting-edge technologies that drive innovation.",
        image: "/assets/top-courses/data-science-and-ai.jpg",
        courses: `${dataData.totalCourses}+`,
        color: "#4ECDCF"
      })
    }

    // Cloud Computing
    if (departmentMap.has('Cloud Computing')) {
      const cloudData = departmentMap.get('Cloud Computing')
      categories.push({
        title: "Cloud Computing",
        description: "Learn cloud platforms, DevOps practices, and scalable infrastructure solutions for modern applications.",
        image: "/assets/top-courses/cloud-computing.jpg",
        courses: `${cloudData.totalCourses}+`,
        color: "#FF7A7A"
      })
    }

    // Design
    if (departmentMap.has('Design')) {
      const designData = departmentMap.get('Design')
      categories.push({
        title: "UI/UX Design",
        description: "Create stunning user interfaces and experiences that engage users and drive business success through design thinking.",
        image: "/assets/top-courses/ui-ux-designer.jpg",
        courses: `${designData.totalCourses}+`,
        color: "#FF7A7A"
      })
    }

    // Cybersecurity
    if (departmentMap.has('Cybersecurity')) {
      const securityData = departmentMap.get('Cybersecurity')
      categories.push({
        title: "Cyber Security",
        description: "Protect digital assets and learn ethical hacking, security protocols, and risk management strategies.",
        image: "/assets/top-courses/cyber-security.jpg",
        courses: `${securityData.totalCourses}+`,
        color: "#4ECDCF"
      })
    }

    // Marketing
    if (departmentMap.has('Marketing')) {
      const marketingData = departmentMap.get('Marketing')
      categories.push({
        title: "Digital Marketing",
        description: "Learn modern digital marketing techniques including SEO, social media marketing, and analytics for business growth.",
        image: "/assets/top-courses/digital-marketing.jpg",
        courses: `${marketingData.totalCourses}+`,
        color: "#FF7A7A"
      })
    }

    // Management
    if (departmentMap.has('Management')) {
      const mgmtData = departmentMap.get('Management')
      categories.push({
        title: "Project Management",
        description: "Master project management methodologies including Agile, Scrum, and traditional PM approaches for successful project delivery.",
        image: "/assets/top-courses/Project-management.jpg",
        courses: `${mgmtData.totalCourses}+`,
        color: "#FF7A7A"
      })
    }

    // DevOps
    if (departmentMap.has('DevOps')) {
      const devopsData = departmentMap.get('DevOps')
      categories.push({
        title: "DevOps & CI/CD",
        description: "Master DevOps practices including continuous integration, deployment automation, and infrastructure as code.",
        image: "/assets/top-courses/cloud-computing.jpg",
        courses: `${devopsData.totalCourses}+`,
        color: "#4ECDCF"
      })
    }

    // Mobile Development
    if (departmentMap.has('Mobile Development')) {
      const mobileData = departmentMap.get('Mobile Development')
      categories.push({
        title: "Mobile Development",
        description: "Learn to build cross-platform mobile applications using React Native and Flutter for iOS and Android platforms.",
        image: "/assets/top-courses/software-development.jpg",
        courses: `${mobileData.totalCourses}+`,
        color: "#FF7A7A"
      })
    }

    return categories
  }

  const categories = getCategoriesFromData()

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
              <CourseCategoryCard
                key={index}
                title={category.title}
                description={category.description}
                image={category.image}
                courses={category.courses}
                color={category.color}
              />
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