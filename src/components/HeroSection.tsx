"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css";
import { useSpring, animated } from "react-spring";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import "../styles/hero-section.scss";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const totalSlides = 3;

  const styles = useSpring({
    to: [{ opacity: 1, marginTop: "30px" }],
    from: { opacity: 0, marginTop: "80px" },
    delay: 300,
  });

  const goToNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <section className="promo">
      <Swiper
        spaceBetween={30}
        effect={"slide"}
        navigation={false}
        speed={1500}
        modules={[Autoplay]}  
        loop={true}
        pagination={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
      >
        <SwiperSlide>
          <div className="slider">
            <Image
              className="slider_img"
              src="/assets/top-courses/project-management.jpg"
              alt="Project Management Course"
              width={1200}
              height={600}
              priority
            />
            <div
              className="slider_text_container_bg"
              style={{ background: "rgba(41, 41, 41, 0.5)" }}
            >
              <animated.div style={styles}>
                <div className="slider_text_container">
                  <div className="slider__wrapper_1">
                    <h2 className="slider__title slider__title1">
                      Smarter Training
                      <br />
                      <span>Starts with AI</span>
                    </h2>
                  </div>
                  <div className="slider__wrapper_2">
                    <p className="slider__subtitle">
                      Our AI automatically creates personalized learning paths that are aligned with your goals and industry needs. Each course is built around real-world tools — not simulations — so you’re not just learning theory, but actually building skills that translate directly to the workplace. It’s faster, smarter, and far more effective than traditional training.
                    </p>
                  </div>
                  <a className="button slider__button button--primary whitespace-nowrap" href="#">
                  Get Started Now
                  </a>
                </div>
              </animated.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <Image
              className="slider_img"
              src="/assets/top-courses/teams.jpg"
              alt="Teams Collaboration Course"
              width={1200}
              height={600}
            />
            <div
              className="slider_text_container_bg"
              style={{ background: "rgba(10, 12, 11, 0.5)" }}
            >
              <animated.div style={styles}>
                <div className="slider_text_container">
                  <div className="slider__wrapper_1">
                    <h2 className="slider__title slider__title1">
                      AI-Crafted Learning
                      <br />
                      <span>for Hands-On Skills</span>
                    </h2>
                  </div>
                  <div className="slider__wrapper_2">
                    <p className="slider__subtitle slider__subtitle2">
                      Our AI doesn&apos;t just deliver content — it creates an interactive learning journey built around the actual tools you&apos;ll use in the field. Whether you&apos;re upskilling or exploring a new role, every lesson adapts to your progress and profession.
                    </p>
                  </div>
                  <a className="button slider__button button--primary whitespace-nowrap" href="#">
                    Explore Courses
                  </a>
                </div>
              </animated.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <Image
              className="slider_img"
              src="/assets/top-courses/ui-ux-designer.jpg"
              alt="UI/UX Design Course"
              width={1200}
              height={600}
            />
            <div
              className="slider_text_container_bg"
              style={{ background: "rgba(30,30,106,0.5)" }}
            >
              <animated.div style={styles}>
                <div className="slider_text_container">
                  <div className="slider__wrapper_1">
                    <h2 className="slider__title slider__title1">
                      AI-Generated Courses,
                      <br />
                      <span>Real-World Skills</span>
                    </h2>
                  </div>
                  <div className="slider__wrapper_2">
                    <p className="slider__subtitle slider__subtitle3">
                    Our AI automatically builds custom learning paths based on your goals, experience, and industry needs. No more generic content — each course immerses you in the real software used by professionals, so you gain practical skills from day one.
                    Train smarter, not harder — with tools that match the real world.
                    </p>
                  </div>
                  <a className="button slider__button button--primary whitespace-nowrap " href="#">
                  Explore Courses
                  </a>
                </div>
              </animated.div>
            </div>
          </div>
        </SwiperSlide>
        <div className="custom-nav d-none d-md-flex">
          <button
            className="custom-nav__button custom-nav__button--prev"
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeftIcon style={{ color: "#efc940", fontSize: "30px" }} />
          </button>
          <div
            className="custom-nav__pagination"
            style={{ '--progress': (currentSlide / totalSlides) * 100 } as React.CSSProperties}
          >
            {currentSlide} / {totalSlides}
            {/* Slide indicators */}
            <div className="custom-nav__indicators">
              {Array.from({ length: totalSlides }, (_, index) => (
                <div
                  key={index}
                  className={`indicator ${index + 1 === currentSlide ? 'active' : ''}`}
                  onClick={() => swiper?.slideTo(index)}
                />
              ))}
            </div>
          </div>
          <button
            className="custom-nav__button custom-nav__button--next"
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <ChevronRightIcon style={{ color: "#efc940", fontSize: "30px" }} />
          </button>
        </div>
      </Swiper>

   
    </section>
  );
};

export default HeroSection;
