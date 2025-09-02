"use client";
import "../styles/top-courses.scss";
import Image from "next/image";
import Link from "next/link";
import { getTopCategories } from "../utils/courseUtils";

const TopCourses = () => {
  // Get top 6 categories from JSON data
  const courseCategories = getTopCategories(6);
  
  // Debug: Log the categories data
  console.log('TopCourses - Categories loaded:', courseCategories);

  return (
    <section className="top-courses">
      <img className="top-courses__bg" src="/img/events_bg.png" alt="background" />
      <div className="top-courses__container">
        <div className="top-courses__row top-courses__row--margin-bottom">
          <div className="top-courses__col top-courses__col--12">
            <div className="heading heading--primary heading--center">
              <span className="heading__pre-title">Top Course Categories</span>
              <h2 className="heading__title">
                <strong>Explore Popular</strong> <br /> <span>Learning Paths</span>
              </h2>
              <p className="no-margin-bottom heading__pre-descp">
                Discover our most popular course categories designed to help you advance your career. 
                Choose from diverse learning paths and gain practical skills that employers value.
              </p>
            </div>
          </div>
        </div>
        <div className="top-courses__row">
          {courseCategories.map((category) => (
            <div key={category.id} className="top-courses__col top-courses__col--4">
              <div className="course-item">
                <div className="course-item__img">
                  <Image 
                    src={category.image} 
                    alt={`${category.name} Courses`} 
                    fill
                    priority={false}
                  />
                </div>
                <div className="course-item__content">
                  <h6 className="course-item__title">
                    {category.name}
                  </h6>
                  <p className="course-item__description">
                    {category.description}
                  </p>
                  <p>
                    <b>Courses:</b> {category.courseCount} available
                  </p>
                  <p>
                    <b>Rating:</b> {category.avgRating} ⭐
                  </p>
                </div>
              </div>
            </div>
                    ))}
        </div>
        <div className="top-courses__row">
          <div className="top-courses__col top-courses__col--12 top-courses__text-center">
            <Link className="button button--primary" href="/categories">
              View all categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
  
  export default TopCourses;