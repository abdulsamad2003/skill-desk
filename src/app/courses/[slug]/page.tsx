"use client";

import { use } from "react";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { getCourseBySlug, getRelatedCourses } from "@/data/courseData";
import { notFound } from "next/navigation";
import EnrollmentModal from "@/components/EnrollmentModal";
import { useState } from "react";
import "./course-details.css";

interface CourseDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const CourseDetailsPage = ({ params }: CourseDetailsPageProps) => {
  const { slug } = use(params);
  const course = getCourseBySlug(slug);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!course) {
    notFound();
  }

  const relatedCourses = getRelatedCourses(course.id, 3);

  return (
    <PageLayout header={4} footer={4} bodyClass="course-details-page">
      <section
        className="page-banner-area overlay py-250 rpy-120 rel z-1 bgs-cover text-center"
        style={{ backgroundImage: "url(/images/backgrounds/banner.jpg)" }}
      >
        <div className="container">
          <div className="banner-inner pt-70 rpt-60 text-white">
            <h1
              className="page-title"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              {course.title}
            </h1>
            <ul
              className="blog-meta"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <li>
                <span className="category">{course.category}</span>
              </li>
              <li>
                <i className="far fa-user-circle" />{" "}
                <span>{course.author}</span>
              </li>
              <li>
                <i className="far fa-clock" /> <span>{course.duration}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="project-details-area pt-130 rpt-100 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div
                className="project-details-content pb-30"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <span className="subtitle-one mb-10 p-0 shadow-none">
                    {course.category}
                  </span>
                  <h2>Course Overview</h2>
                </div>
                <div className="row mb-20">
                  <div className="col-xl-10">
                    <p>{course.overview}</p>
                  </div>
                </div>
                <h3>What You&apos;ll Learn</h3>
                <ul className="icon-list mt-20 mb-35">
                  {course.curriculum.map((item, index) => (
                    <li key={index}>
                      <i className="fal fa-check" /> {item}
                    </li>
                  ))}
                </ul>
                <h3>Course Requirements</h3>
                <ul className="icon-list mt-20 mb-35">
                  {course.requirements.map((item, index) => (
                    <li key={index}>
                      <i className="fal fa-check" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="project-details-info rmb-55"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Course Information</h3>
                <hr className="mb-30" />
                <table>
                  <tbody>
                    <tr>
                      <td>Instructor</td>
                      <td>
                        <b>{course.author}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td>
                        <b>{course.category}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Duration</td>
                      <td>
                        <b>{course.duration}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Level</td>
                      <td>
                        <b>{course.level}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Students</td>
                      <td>
                        <b>{course.students}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Rating</td>
                      <td>
                        <b>{course.rating}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Language</td>
                      <td>
                        <b>{course.language}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-30">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="theme-btn style-two w-100 text-center"
                  >
                    Enroll Now <i className="far fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="project-details-content mt-15"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Why Choose This Course?</h3>
                <p>{course.benefits}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedCourses.length > 0 && (
        <section className="related-project-area py-85 rpy-55">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-xl-9 col-lg-11">
                <div
                  className="section-title mb-60"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h2>Related Courses</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {relatedCourses.map((relatedCourse, index) => (
                <div
                  className="col-xl-4 col-md-6"
                  key={relatedCourse.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="course-item">
                    <div className="image">
                      <img src={relatedCourse.image} alt="Course" />
                      <Link
                        href={`/courses/${relatedCourse.slug}`}
                        className="details-btn"
                      >
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="content">
                      <Link
                        className="category"
                        href={`/courses/${relatedCourse.slug}`}
                      >
                        {relatedCourse.category}
                      </Link>
                      <h4>
                        <Link href={`/courses/${relatedCourse.slug}`}>
                          {relatedCourse.title}
                        </Link>
                      </h4>
                      <div className="author">
                        <img src={relatedCourse.instructorImage} alt="Author" />
                        <span>{relatedCourse.author}</span>
                      </div>
                    </div>
                    <div className="duration-ratting">
                      <span className="duration">
                        <i className="far fa-clock" />{" "}
                        <b>
                          {relatedCourse.duration
                            .replace(" minutes", "")
                            .replace(" minute", "")}
                        </b>{" "}
                        minute
                      </span>
                      <span className="ratting">
                        <i className="fas fa-star" />
                        <span>{relatedCourse.rating.replace("/5.0", "")}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName={course.title}
      />

      <div className="back-to-courses-wrapper">
        <Link href="/courses" className="back-to-courses-btn">
          <i className="far fa-arrow-left" />
          <span>Back to Courses</span>
        </Link>
      </div>
    </PageLayout>
  );
};

export default CourseDetailsPage;
