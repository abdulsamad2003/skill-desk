"use client";
import PageBanner from "@/components/PageBanner";
import PageLayout from "@/components/PageLayout";
import EnrollmentModal from "@/components/EnrollmentModal";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PageLayout>
      <PageBanner
        pageName={"Course Details"}
        pageTitle={"Basic to Advance UI/UX Design Course"}
        titleTag="h2"
      />
      {/* Course Details Area Start */}
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
                    Web Design, UI/UX
                  </span>
                  <h2>Course Overview</h2>
                </div>
                <div className="row mb-20">
                  <div className="col-xl-10">
                    <p>
                      This comprehensive UI/UX design course takes you from
                      basic principles to advanced techniques in creating
                      stunning web and mobile interfaces. Learn industry-standard
                      tools and methodologies used by top designers worldwide.
                    </p>
                  </div>
                </div>
                <h3>What You'll Learn</h3>
                <ul className="icon-list mt-20 mb-35">
                  <li>
                    <i className="fal fa-check" /> Master fundamental design
                    principles and color theory
                  </li>
                  <li>
                    <i className="fal fa-check" /> Create wireframes and
                    prototypes using industry tools
                  </li>
                  <li>
                    <i className="fal fa-check" /> Understand user research and
                    usability testing methods
                  </li>
                  <li>
                    <i className="fal fa-check" /> Design responsive interfaces
                    for web and mobile platforms
                  </li>
                  <li>
                    <i className="fal fa-check" /> Learn advanced animation and
                    interaction design techniques
                  </li>
                </ul>
                <h3>Course Requirements</h3>
                <ul className="icon-list mt-20 mb-35">
                  <li>
                    <i className="fal fa-check" /> Basic computer skills and
                    internet access
                  </li>
                  <li>
                    <i className="fal fa-check" /> Design software (Figma,
                    Adobe XD, or Sketch recommended)
                  </li>
                  <li>
                    <i className="fal fa-check" /> Passion for creating
                    exceptional user experiences
                  </li>
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
                        <b>Byron F. Lambert</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td>
                        <b>Web Design</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Duration</td>
                      <td>
                        <b>185 minutes</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Level</td>
                      <td>
                        <b>Beginner to Advanced</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Students</td>
                      <td>
                        <b>2,450+</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Rating</td>
                      <td>
                        <b>4.9/5.0</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Language</td>
                      <td>
                        <b>English</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-30">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="theme-btn w-100 text-center"
                    style={{ border: 'none', cursor: 'pointer' }}
                  >
                    Enroll Now <i className="far fa-arrow-right" />
                  </button>
                </div>
                <div className="project-share mt-30">
                  <h4>Share Course</h4>
                  <div className="social-style-one">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="image mb-30"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="/images/courses/course1.jpg"
                  alt="Course Preview"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="image mb-30"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="/images/courses/course2.jpg"
                  alt="Course Preview"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="project-details-content mt-15"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Course Curriculum</h3>
                <p className="mb-20">
                  Our carefully structured curriculum covers everything from
                  foundational design principles to advanced prototyping
                  techniques. Each module builds upon the previous one to ensure
                  a comprehensive learning experience.
                </p>
                <ul className="icon-list mt-25 mb-35">
                  <li>
                    <i className="fal fa-check" /> Module 1: Introduction to
                    UI/UX Design Fundamentals
                  </li>
                  <li>
                    <i className="fal fa-check" /> Module 2: User Research and
                    Persona Development
                  </li>
                  <li>
                    <i className="fal fa-check" /> Module 3: Wireframing and
                    Information Architecture
                  </li>
                  <li>
                    <i className="fal fa-check" /> Module 4: Visual Design and
                    Brand Identity
                  </li>
                  <li>
                    <i className="fal fa-check" /> Module 5: Advanced Prototyping
                    and Animation
                  </li>
                  <li>
                    <i className="fal fa-check" /> Module 6: Usability Testing
                    and Iteration
                  </li>
                  <li>
                    <i className="fal fa-check" /> Module 7: Design Systems and
                    Component Libraries
                  </li>
                  <li>
                    <i className="fal fa-check" /> Module 8: Final Project and
                    Portfolio Development
                  </li>
                </ul>
                <h3>Why Choose This Course?</h3>
                <p>
                  This course combines theoretical knowledge with practical
                  hands-on projects, ensuring you gain real-world skills that
                  employers value. With lifetime access to course materials and
                  a supportive community of fellow learners, you'll have
                  everything you need to succeed in the competitive field of
                  UI/UX design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Course Details Area End */}
      {/* Related Courses Area Start */}
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
            <div className="col-xl-4 col-md-6">
              <div
                className="course-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="/images/courses/course2.jpg" alt="Course" />
                  <Link href="/course-details" className="details-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <Link className="category" href="/course-details">
                    iOS Mobile App
                  </Link>
                  <h4>
                    <Link href="/course-details">
                      Basic to Advance Mobile Apps Development
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="/images/courses/course-author2.png"
                      alt="Author"
                    />
                    <span>Byron F. Lambert</span>
                  </div>
                </div>
                <div className="duration-ratting">
                  <span className="duration">
                    <i className="far fa-clock" /> <b>185</b> minute
                  </span>
                  <span className="ratting">
                    <i className="fas fa-star" />
                    <span>4.9</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="course-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="/images/courses/course3.jpg" alt="Course" />
                  <Link href="/course-details" className="details-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <Link className="category" href="/course-details">
                    Digital Marketing
                  </Link>
                  <h4>
                    <Link href="/course-details">
                      Grow Your Digital Marketing With Lamber
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="/images/courses/course-author3.png"
                      alt="Author"
                    />
                    <span>Byron F. Lambert</span>
                  </div>
                </div>
                <div className="duration-ratting">
                  <span className="duration">
                    <i className="far fa-clock" /> <b>185</b> minute
                  </span>
                  <span className="ratting">
                    <i className="fas fa-star" />
                    <span>4.9</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="course-item"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="/images/courses/course4.jpg" alt="Course" />
                  <Link href="/course-details" className="details-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="content">
                  <Link className="category" href="/course-details">
                    Business
                  </Link>
                  <h4>
                    <Link href="/course-details">
                      How To Grow your Business Development
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="/images/courses/course-author4.png"
                      alt="Author"
                    />
                    <span>Byron F. Lambert</span>
                  </div>
                </div>
                <div className="duration-ratting">
                  <span className="duration">
                    <i className="far fa-clock" /> <b>185</b> minute
                  </span>
                  <span className="ratting">
                    <i className="fas fa-star" />
                    <span>4.9</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Courses Area End */}

      <EnrollmentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Basic to Advance UI/UX Design Course"
      />
    </PageLayout>
  );
};
export default page;

