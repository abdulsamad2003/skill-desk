"use client";
import Link from "next/link";
import Slider from "react-slick";
import { sliderProps } from "@/utility/sliderProps";
import "@/landing-component/HomeSection.css";

const HeroSection = () => {
  return (
    <>
      {/* Hero area start */}
      <section
        className="hero-area-four bg-black pt-250 rpt-150 pb-120 rpb-70 rel z-1"
        id="home"
      >
        <div className="container">
          <div className="hero-content style-four text-center text-white">
            <h1
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              Build your Academy and <span>e-Learning</span> Course in 15 mins
            </h1>
            <ul
              className="icon-list style-two mt-35 mb-30"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <li>
                <i className="fal fa-check" /> 60+ Academies created
              </li>
              <li>
                <i className="fal fa-check" /> 30+ Instructors
              </li>
              <li>
                <i className="fal fa-check" /> 24h online support
              </li>
            </ul>
            <Link
              href="contact"
              className="theme-btn style-two"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              Book Demo <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape one">
            <img src="/images/shapes/hero-shape-one.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="/images/shapes/hero-shape-two.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Hero area End */}

      {/* Marquee Iconic Box Area Start */}
      <section className="marquee-iconic-box-area bg-black pb-10">
        <Slider
          {...sliderProps.marqueeSliderRight}
          className="marquee-slider-right text-white iconic-slider-right"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="/images/marquee-box/member1.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">3D Printing Services</h6>
              <span className="subtitle">Technology</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="/images/marquee-box/member2.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">AI/ML Platforms</h6>
              <span className="subtitle">Artificial Intelligence</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="/images/marquee-box/member3.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">AgriTech</h6>
              <span className="subtitle">Agriculture</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="/images/marquee-box/member4.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Aerospace & Aviation</h6>
              <span className="subtitle">Aerospace</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="/images/marquee-box/member5.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Banking & Financial Services</h6>
              <span className="subtitle">Finance</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="/images/marquee-box/member6.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Automotive & Electric Vehicles</h6>
              <span className="subtitle">Automotive</span>
            </div>
          </div>
        </Slider>
        <Slider
          {...sliderProps.marqueeSliderLeft}
          className="marquee-slider-left text-white iconic-slider-left"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="/images/marquee-box/member7.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">ComplianceTech</h6>
              <span className="subtitle">Compliance</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="/images/marquee-box/member8.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Construction & Infrastructure</h6>
              <span className="subtitle">Construction</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="/images/marquee-box/member9.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Education & EdTech</h6>
              <span className="subtitle">Education</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="/images/marquee-box/member10.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">CyberTech</h6>
              <span className="subtitle">Cybersecurity</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="/images/marquee-box/member11.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Dairy, Meat & Packaged Foods</h6>
              <span className="subtitle">Food Industry</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="/images/marquee-box/member12.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">E-Pharmacy</h6>
              <span className="subtitle">Healthcare</span>
            </div>
          </div>
        </Slider>
      </section>
      {/* Marquee Iconic Box Area End */}
    </>
  );
};

export default HeroSection;
