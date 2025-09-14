import React from "react";
import Image from "next/image";
import { 
  Settings, 
  BarChart3, 
  Palette, 
  Briefcase, 
  Cloud, 
  Shield 
} from "lucide-react";
import "../styles/our-popular-categories.scss";

const OurPopularCategories = () => {
  // Popular categories data
  const popularCategories = [
    {
      id: "engineering",
      title: "Engineering",
      icon: Settings,
      iconColor: "#3b82f6", // Blue
      courseCount: 20,
      description: "Software development, programming, and technical skills",
    },
    {
      id: "data-science",
      title: "Data Science",
      icon: BarChart3,
      iconColor: "#10b981", // Green
      courseCount: 15,
      description: "Analytics, machine learning, and data visualization",
    },
    {
      id: "design",
      title: "Design",
      icon: Palette,
      iconColor: "#f59e0b", // Orange
      courseCount: 12,
      description: "UI/UX design, graphic design, and creative skills",
    },
    {
      id: "business",
      title: "Business",
      icon: Briefcase,
      iconColor: "#8b5cf6", // Purple
      courseCount: 18,
      description: "Management, marketing, and entrepreneurship",
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      icon: Cloud,
      iconColor: "#06b6d4", // Cyan
      courseCount: 8,
      description: "AWS, Azure, and cloud architecture",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: Shield,
      iconColor: "#ef4444", // Red
      courseCount: 10,
      description: "Security, ethical hacking, and risk management",
    },
  ];


  const renderCategoryBox = (category: any) => {
    const IconComponent = category.icon;
    return (
      <div 
        key={category.id} 
        className="category-box" 
        style={{ '--icon-color': category.iconColor } as React.CSSProperties}
      >
        <div className="category-icon">
          <IconComponent size={24} />
        </div>

        <h4 className="main-font category-title">{category.title}</h4>

        <span className="total-categories">{category.courseCount || 0} Courses</span>
      </div>
    );
  };


  return (
    <section id="courses" className="our-categories-section">
      <div className="categories-container">
        {/* Header */}
        <div className="categories-header">
          <h2 className="main-font categories-title">Our Popular Categories</h2>
          <h3 className="main-font categories-subtitle">
            Explore our course categories
          </h3>
          <p className="para-font categories-description">
            Explore our most popular course categories and find the perfect one for you.
          </p>
        </div>

          <div className="categories-grid">
            {popularCategories.map(renderCategoryBox)}
          </div>
      
      </div>
    </section>
  );
};

export default OurPopularCategories;
