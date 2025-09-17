"use client"
import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  BookOpen, 
  PlayCircle,
  ChevronDown,
  X,
  Grid,
  List
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import coursesData from '@/data/courses.json'
import '../../styles/courses.scss'

interface Course {
  id: string
  title: string
  description: string
  overview: string
  thumbnail: string
  modules: number
  lessons: number
  duration: string
  difficulty: string
  enrolledCount: number
  completionRate: number
  rating: number
  department: string
  skills: string[]
  status: string
  createdAt: string
  dueDate: string | null
  instructor: string
  price: number
  isPopular: boolean
}

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const courses: Course[] = coursesData

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(courses.map(course => course.department))]
    return ['all', ...uniqueCategories]
  }, [courses])

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || course.department === selectedCategory
      
      const matchesDifficulty = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty
      
      const matchesPrice = priceRange === 'all' || 
                          (priceRange === 'free' && course.price === 0) ||
                          (priceRange === 'under-100' && course.price < 100) ||
                          (priceRange === '100-300' && course.price >= 100 && course.price <= 300) ||
                          (priceRange === '300-500' && course.price >= 300 && course.price <= 500) ||
                          (priceRange === 'over-500' && course.price > 500)

      return matchesSearch && matchesCategory && matchesDifficulty && matchesPrice
    })

    // Sort courses
    switch (sortBy) {
      case 'popular':
        return filtered.sort((a, b) => b.enrolledCount - a.enrolledCount)
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating)
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price)
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price)
      case 'newest':
        return filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      default:
        return filtered
    }
  }, [courses, searchTerm, selectedCategory, selectedDifficulty, priceRange, sortBy])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedDifficulty('all')
    setPriceRange('all')
    setSortBy('popular')
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'BEGINNER': return '#4ECDCF'
      case 'INTERMEDIATE': return '#FF7A7A'
      case 'ADVANCED': return '#FF6B6B'
      default: return '#666'
    }
  }

  return (
    <div className="courses-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="floating-shapes"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title main-font">
              Discover Your Next <span className="highlight">Learning Journey</span>
            </h1>
            <p className="hero-description para-font">
              Explore our comprehensive collection of professional courses designed to advance your career. 
              From beginner to expert level, find the perfect course to master new skills and unlock your potential.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number main-font">{courses.length}+</span>
                <span className="stat-label para-font">Premium Courses</span>
              </div>
              <div className="stat">
                <span className="stat-number main-font">50K+</span>
                <span className="stat-label para-font">Happy Students</span>
              </div>
              <div className="stat">
                <span className="stat-number main-font">4.9</span>
                <span className="stat-label para-font">Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="courses-filters">
        <div className="filters-container">
          {/* Search Bar */}
          <div className="search-section">
            <div className="search-bar">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search courses, skills, or instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <button 
              className="filter-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} />
              Filters
              <ChevronDown size={16} className={showFilters ? 'rotated' : ''} />
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="filter-panel">
              <div className="filter-header">
                <h3 className="filter-title main-font">Filter Courses</h3>
                <button 
                  className="clear-filters"
                  onClick={clearFilters}
                >
                  Clear All
                </button>
              </div>

              <div className="filter-grid">
                {/* Category Filter */}
                <div className="filter-group">
                  <label className="filter-label para-font">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="filter-select"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Difficulty Filter */}
                <div className="filter-group">
                  <label className="filter-label para-font">Difficulty</label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="filter-select"
                  >
                    <option value="all">All Levels</option>
                    <option value="BEGINNER">Beginner</option>
                    <option value="INTERMEDIATE">Intermediate</option>
                    <option value="ADVANCED">Advanced</option>
                  </select>
                </div>

                {/* Price Filter */}
                <div className="filter-group">
                  <label className="filter-label para-font">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="filter-select"
                  >
                    <option value="all">All Prices</option>
                    <option value="free">Free</option>
                    <option value="under-100">Under $100</option>
                    <option value="100-300">$100 - $300</option>
                    <option value="300-500">$300 - $500</option>
                    <option value="over-500">Over $500</option>
                  </select>
                </div>

                {/* Sort Filter */}
                <div className="filter-group">
                  <label className="filter-label para-font">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="filter-select"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Results Header */}
          <div className="results-header">
            <div className="results-info">
              <h2 className="results-title main-font">
                {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
              </h2>
              <p className="results-subtitle para-font">
                {searchTerm && `Search results for "${searchTerm}"`}
              </p>
            </div>
            <div className="view-controls">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={18} />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-grid-section">
        <div className="courses-container">
          <div className={`courses-grid ${viewMode}`}>
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="course-thumbnail"
                  />
                  {course.isPopular && (
                    <div className="popular-badge">
                      <Star size={14} />
                      Popular
                    </div>
                  )}
                  <div className="course-overlay">
                    <button className="play-btn">
                      <PlayCircle size={24} />
                    </button>
                  </div>
                </div>

                <div className="course-content">
                  <div className="course-header">
                    <div className="course-category">
                      <span 
                        className="category-badge"
                        style={{ backgroundColor: getDifficultyColor(course.difficulty) }}
                      >
                        {course.difficulty}
                      </span>
                    </div>
                    <div className="course-rating">
                      <Star size={14} className="star-icon" />
                      <span className="rating-text">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="course-title main-font">{course.title}</h3>
                  <p className="course-description para-font">{course.description}</p>

                  <div className="course-meta">
                    <div className="meta-item">
                      <BookOpen size={14} />
                      <span>{course.modules} Modules</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="meta-item">
                      <Users size={14} />
                      <span>{course.enrolledCount.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="course-skills">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span className="skill-tag more">
                        +{course.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="course-footer">
                    <div className="course-instructor">
                      <span className="instructor-label para-font">Instructor:</span>
                      <span className="instructor-name para-font">{course.instructor}</span>
                    </div>
                    <div className="course-price">
                      <span className="price main-font">${course.price}</span>
                    </div>
                  </div>

                  <button className="enroll-btn">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="no-results">
              <div className="no-results-content">
                <Search size={48} className="no-results-icon" />
                <h3 className="no-results-title main-font">No courses found</h3>
                <p className="no-results-description para-font">
                  Try adjusting your search criteria or browse all courses.
                </p>
                <button className="clear-filters-btn" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            </div>
          )}
         </div>
       </section>

       <Footer />
     </div>
   )
}

export default CoursesPage
