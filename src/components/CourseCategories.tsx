'use client';

import Image from 'next/image';

const CourseCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Data Science & AI',
      image: '/assets/top-courses/data-science-and-ai.jpg',
      count: '120+ Courses'
    },
    {
      id: 2,
      name: 'Business & Leadership',
      image: '/assets/top-courses/business-and-leader.jpg',
      count: '85+ Courses'
    },
    {
      id: 3,
      name: 'Software Development',
      image: '/assets/top-courses/software-development.jpg',
      count: '200+ Courses'
    },
    {
      id: 4,
      name: 'Cloud Computing',
      image: '/assets/top-courses/cloud-computing.jpg',
      count: '90+ Courses'
    },
    {
      id: 5,
      name: 'Cybersecurity',
      image: '/assets/top-courses/cyber-security.jpg',
      count: '75+ Courses'
    },
    {
      id: 6,
      name: 'Digital Marketing',
      image: '/assets/top-courses/digital-marketing.jpg',
      count: '95+ Courses'
    },
    {
      id: 7,
      name: 'Project Management',
      image: '/assets/top-courses/Project-management.jpg',
      count: '70+ Courses'
    },
    {
      id: 8,
      name: 'Design & UX',
      image: '/assets/top-courses/ui-ux-designer.jpg',
      count: '110+ Courses'
    }
  ];

  return (
    <section className="categories">
      <div className="categories-container">
        <div className="categories-header">
          <span className="subtitle">Course Categories</span>
          <h2>Browse Top Categories</h2>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="card-inner">
                <div className="image-container">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="category-image"
                  />
                </div>
                <div className="card-content">
                  <h3>{category.name}</h3>
                  <div className="meta-info">
                    <span className="course-count">{category.count}</span>
                    <span className="dot">•</span>
                    <span className="rating">4.8</span>
                  </div>
                </div>
                <div className="hover-content">
                  <div className="hover-bg"></div>
                  <button className="explore-btn">
                    View Courses
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
