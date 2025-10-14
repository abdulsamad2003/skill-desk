"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { courses } from "@/data/courseData";

const CoursesIsotope = () => {
  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".course-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        transitionDuration: "0.75s",
      });
    }, 500);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value: string) => (value === filterKey ? "active" : "");

  // Get unique categories for filter
  const categories = Array.from(
    new Set(courses.map((course) => course.category))
  );

  return (
    <section
      id="course"
      className="popular-course-area bgc-lighter pt-120 rpt-100 pb-90 rpb-70"
    >
      <div className="container">
        <div
          className="section-title text-center mb-60"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <span className="subtitle-two mb-25">
            <i className="fas fa-play-circle" /> Popular Course
          </span>
          <h2>Explore Our Popular Courses</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-8">
            <ul
              className="course-nav mb-40"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <li
                data-filter="*"
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
              >
                All Categories <i className="far fa-arrow-right" />
              </li>
              {categories.map((category, index) => (
                <li
                  key={category}
                  className={`c-pointer ${activeBtn(
                    category.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                  onClick={handleFilterKeyChange(
                    category.toLowerCase().replace(/\s+/g, "-")
                  )}
                  data-filter={`.${category
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {category} <i className="far fa-arrow-right" />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="row course-active">
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  className={`col-xl-4 col-sm-6 item ${course.category
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <div
                    className="course-item"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src={course.image} alt={course.title} />
                      <Link
                        href={`/courses/${course.slug}`}
                        className="details-btn"
                      >
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="content">
                      <Link
                        className="category"
                        href={`/courses/${course.slug}`}
                      >
                        {course.category}
                      </Link>
                      <h6>
                        <Link href={`/courses/${course.slug}`}>
                          {course.title}
                        </Link>
                      </h6>
                      <div className="author">
                        <img src={course.instructorImage} alt="Author" />
                        <span>{course.author}</span>
                      </div>
                    </div>
                    <div className="duration-ratting">
                      <span className="duration">
                        <i className="far fa-clock" />{" "}
                        <b>
                          {course.duration
                            .replace(" minutes", "")
                            .replace(" minute", "")}
                        </b>{" "}
                        minute
                      </span>
                      <span className="ratting">
                        <i className="fas fa-star" />
                        <span>{course.rating.replace("/5.0", "")}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoursesIsotope;
