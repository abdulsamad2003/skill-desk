"use client";

import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { courses } from "@/data/courseData";
import "./courses.css";

const CoursesPage = () => {
  return (
    <PageLayout header={4} footer={4} bodyClass="blog-page">
      <PageBanner
        pageName="Our Courses"
        pageTitle="Explore Our Learning Paths"
      />

      <section className="blog-grid-area py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center mb-60">
            <div className="col-lg-8 text-center">
              <h2
                className="section-heading mb-20"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                Discover the Future of Learning
              </h2>
              <p
                className="section-description"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1200}
              >
                Explore our comprehensive courses designed to help you master
                new skills and advance your career
              </p>
            </div>
          </div>

          <div className="row g-4">
            {courses.map((course, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={course.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration={1200}
                data-aos-offset={50}
              >
                <article className="course-card-modern">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="course-image-link"
                  >
                    <div className="course-image-wrapper">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="course-image"
                      />
                      <div className="course-overlay">
                        <span className="read-more-overlay">View Course</span>
                      </div>
                    </div>
                  </Link>

                  <div className="course-card-body">
                    <div className="course-meta-row">
                      <span className="course-category">{course.category}</span>
                      <span className="course-author">
                        <i className="far fa-user"></i> {course.author}
                      </span>
                    </div>

                    <h3 className="course-title">
                      <Link href={`/courses/${course.slug}`}>
                        {course.title}
                      </Link>
                    </h3>

                    <p className="course-excerpt">
                      {course.description.substring(0, 120)}...
                    </p>

                    <div className="course-meta-info">
                      <span className="course-duration">
                        <i className="far fa-clock"></i> {course.duration}
                      </span>
                      <span className="course-rating">
                        <i className="fas fa-star"></i> {course.rating}
                      </span>
                    </div>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="course-read-link"
                    >
                      <span>Learn More</span>
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CoursesPage;
