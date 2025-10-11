import React from "react";
import Slider from "react-slick";
import { sliderProps } from "@/utility/sliderProps";
import "../app/TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="testimonials-area-four bg-black py-120 rpy-100"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
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
                  src="/images/testimonials/testi-author3.png"
                  alt="Author"
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
                  At vero eoset accusamus dignissimos ducimus blanditiis
                  praesentium voluptat delenitie corruptie dolores molestias
                </div>
                <div className="name-designation">
                  <h6>Nicholas S. Moore</h6>
                  <span>CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-item-three">
              <div className="image">
                <img
                  src="/images/testimonials/testi-author4.png"
                  alt="Author"
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
                  At vero eoset accusamus dignissimos ducimus blanditiis
                  praesentium voluptat delenitie corruptie dolores molestias
                </div>
                <div className="name-designation">
                  <h6>Dennis J. Lester</h6>
                  <span>CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-item-three">
              <div className="image">
                <img
                  src="/images/testimonials/testi-author3.png"
                  alt="Author"
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
                  At vero eoset accusamus dignissimos ducimus blanditiis
                  praesentium voluptat delenitie corruptie dolores molestias
                </div>
                <div className="name-designation">
                  <h6>Nicholas S. Moore</h6>
                  <span>CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-item-three">
              <div className="image">
                <img
                  src="/images/testimonials/testi-author4.png"
                  alt="Author"
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
                  At vero eoset accusamus dignissimos ducimus blanditiis
                  praesentium voluptat delenitie corruptie dolores molestias
                </div>
                <div className="name-designation">
                  <h6>Dennis J. Lester</h6>
                  <span>CEO &amp; Founder</span>
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
