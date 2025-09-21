"use client";

import { cn } from "@/lib/utils";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CourseCategoryCardProps {
  title: string;
  description: string;
  image: string;
  courses: string;
  color: string;
  className?: string;
}

export function CourseCategoryCard({
  title,
  description,
  image,
  courses,
  color,
  className,
}: CourseCategoryCardProps) {
  return (
    <div className={cn("category-card", className)}>
      <div className="category-card-inner">
        <div 
          className="category-image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="category-overlay"></div>
          <div className="courses-badge">
            <span className="courses-count">{courses}</span>
            <span className="courses-text">Courses</span>
          </div>
        </div>
        
        <div className="category-content">
          <h4 className="category-title main-font">{title}</h4>
          <p className="category-description para-font">{description}</p>
          
          <Link 
            href="/courses"
            className="explore-link"
            style={{ '--accent-color': color } as React.CSSProperties}
          >
            <span>Explore Courses</span>
            <ArrowRight className="arrow-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

