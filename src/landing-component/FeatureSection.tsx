"use client";
import Link from "next/link";
import Slider from "react-slick";
import { sliderProps } from "@/utility/sliderProps";
import "@/landing-component/FeatureSection.css";

const FeatureSection = () => {
  return (
    <>
      {/* Special Features Area Start */}
      <section id="services" className="special-features-area pt-100 rpt-80">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-xl-9 col-lg-10">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle-two mb-25">
                  <i className="fas fa-play-circle" /> Special Features
                </span>
                <h2>
                  Online Learning Designed For Real Life and Growth Your
                  knowledge
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-six">
                <div className="icon">
                  <i className="flaticon-open-book" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">AI Course Builder</Link>
                  </h5>
                  <p>
                    Generate complete courses, modules, and quizzes from a
                    single prompt.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-six">
                <div className="icon">
                  <i className="flaticon-help" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Competency & Skill Management
                    </Link>
                  </h5>
                  <p>
                    Track, analyze, and develop skills using AI-driven
                    assessments, gap analysis, and adaptive paths.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-six">
                <div className="icon">
                  <i className="flaticon-new-job" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Competency Profiling</Link>
                  </h5>
                  <p>Map and manage competencies aligned to L&D outcomes.</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-six">
                <div className="icon">
                  <i className="flaticon-self-development" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Frictionless Knowledge Transfer
                    </Link>
                  </h5>
                  <p>Guide learners without the need for available experts.</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-six">
                <div className="icon">
                  <i className="flaticon-analytics" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Skill Demand Forecasting</Link>
                  </h5>
                  <p>
                    Analyze industry trends to predict emerging skill needs.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-six">
                <div className="icon">
                  <i className="flaticon-goal-1" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Performance Improvement Recommendations
                    </Link>
                  </h5>
                  <p>
                    AI/ML insights to enhance productivity and learning impact.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-six">
                <div className="icon">
                  <i className="flaticon-help" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Continuous Monitoring</Link>
                  </h5>
                  <p>
                    Track progress and engagement across learners and teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Special Features Area End */}

      {/* Marquee Iconic Box Area Start */}
      <section className="marquee-iconic-box-area bg-white pt-60 rpt-40 pb-50">
        <Slider
          {...sliderProps.marqueeSliderLeft}
          className="marquee-slider-right iconic-slider-right"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-six">
              <i className="flaticon-pen-tool" />
            </div>
            <div className="content">
              <h6 className="title">UI/UX Design</h6>
              <span className="subtitle">5+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-seven">
              <i className="flaticon-goal-1" />
            </div>
            <div className="content">
              <h6 className="title">Leadership Skill</h6>
              <span className="subtitle">8+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-eight">
              <i className="flaticon-code" />
            </div>
            <div className="content">
              <h6 className="title">Web Development</h6>
              <span className="subtitle">10+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-four">
              <i className="flaticon-megaphone" />
            </div>
            <div className="content">
              <h6 className="title">Digital Marketing</h6>
              <span className="subtitle">8+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-six">
              <i className="flaticon-new-job" />
            </div>
            <div className="content">
              <h6 className="title">Microsoft Office</h6>
              <span className="subtitle">10+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-nine">
              <i className="flaticon-diaphragm" />
            </div>
            <div className="content">
              <h6 className="title">Photography</h6>
              <span className="subtitle">3+ Course</span>
            </div>
          </div>
        </Slider>
        <Slider
          {...sliderProps.marqueeSliderRight}
          className="marquee-slider-left iconic-slider-left"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-ten">
              <i className="flaticon-caduceus" />
            </div>
            <div className="content">
              <h6 className="title">Medical Healthcare</h6>
              <span className="subtitle">12+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon">
              <i className="flaticon-app-development" />
            </div>
            <div className="content">
              <h6 className="title">iOS Mobile Development</h6>
              <span className="subtitle">9+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-five">
              <i className="flaticon-healthy-lifestyle-logo" />
            </div>
            <div className="content">
              <h6 className="title">Fashion &amp; Lifestyle</h6>
              <span className="subtitle">9+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-six">
              <i className="flaticon-self-development-1" />
            </div>
            <div className="content">
              <h6 className="title">Business Development</h6>
              <span className="subtitle">7+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-one">
              <i className="flaticon-seeding" />
            </div>
            <div className="content">
              <h6 className="title">Land Gardening</h6>
              <span className="subtitle">4+ Course</span>
            </div>
          </div>
        </Slider>
      </section>
      {/* Marquee Iconic Box Area End */}
    </>
  );
};

export default FeatureSection;
