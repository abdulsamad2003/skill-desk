import React from "react";
import Slider from "react-slick";
import { sliderProps } from "@/utility/sliderProps";
import "@/landing-component/TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="testimonials-area-four bg-black py-120 rpy-100"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
            <div
              className="section-title text-white text-center mb-55"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle-two mb-25">
                <i className="fas fa-play-circle" /> Student Feedback
              </span>
              <h2>70+ Global Student Say About Our Learning</h2>
            </div>
          </div>
        </div>
        <Slider
          {...sliderProps.testiSliderFour}
          className="testi-slider-four text-white"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div>
            <div className="testimonial-item-three">
              <div className="image">
                <img
                  src="/assets/user-profile-photo/user-profile2.png"
                  alt="Jennifer Parker"
                />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="author-text">
                  The courses at SkillDesk.ai completely transformed my career.
                  The practical approach and real-world projects helped me land
                  a job at a top tech company.
                </div>
                <div className="name-designation">
                  <h6>Jennifer Parker</h6>
                  <span>Frontend Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-item-three">
              <div className="image">
                <img
                  src="/assets/user-profile-photo/user-profile3.png"
                  alt="Robert Garcia"
                />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="author-text">
                  As someone with no prior experience, I was able to master
                  digital marketing in just 3 months. The instructors are
                  knowledgeable and always available to help.
                </div>
                <div className="name-designation">
                  <h6>Robert Garcia</h6>
                  <span>Marketing Manager</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-item-three">
              <div className="image">
                <img
                  src="/assets/user-profile-photo/user-profile4.png"
                  alt="Amanda Smith"
                />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="author-text">
                  The flexible learning schedule allowed me to upskill while
                  working full-time. The course content is up-to-date with
                  industry standards.
                </div>
                <div className="name-designation">
                  <h6>Amanda Smith</h6>
                  <span>UI/UX Designer</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-item-three">
              <div className="image">
                <img
                  src="/assets/user-profile-photo/user-profile5.png"
                  alt="Christopher Lee"
                />
              </div>
              <div className="content">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="author-text">
                  I&apos;ve taken courses from several platforms, but
                  SkillDesk.ai stands out with its hands-on projects and
                  supportive community. Highly recommended!
                </div>
                <div className="name-designation">
                  <h6>Christopher Lee</h6>
                  <span>Business Analyst</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
