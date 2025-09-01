"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useSpring, animated } from "react-spring";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import About from "./About";
import Video from "./Video";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const HeroSection = () => {
  const [video, setVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [swiper, setSwiper] = useState<any>(null);
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
        effect={"fade"}
        navigation={false}
        loop={true}
        pagination={false}
        modules={[EffectFade]}
        className="mySwiper"
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
      >
        <SwiperSlide>
          <div className="slider">
            <img
              className="slider_img"
              src="/assets/top-courses/project-management.jpg"
              alt="img"
            />
            <div
              className="slider_text_container_bg"
              style={{ background: "rgba(41, 41, 41, 0.5)" }}
            >
              <animated.div style={styles}>
                <div className="slider_text_container">
                  <div className="slider__wrapper_1">
                    <h2 className="slider__title slider__title1">
                      We help all people in need
                      <br />
                      <span>around the world.</span>
                    </h2>
                  </div>
                  <div className="slider__wrapper_2">
                    <p className="slider__subtitle">
                      Gray eel-catfish longnose whiptail catfish smalleye
                      squaretail queen danio unicorn fish shortnose greeneye
                      fusilier fish silver carp nibbler sharksucker tench
                      lookdown catfish
                    </p>
                  </div>
                  <a className="button slider__button button--primary" href="#">
                    Discover
                  </a>
                </div>
              </animated.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img
              className="slider_img"
              src="/assets/top-courses/teams.jpg"
              alt="img"
            />
            <div
              className="slider_text_container_bg"
              style={{ background: "rgba(10, 12, 11, 0.5)" }}
            >
              <animated.div style={styles}>
                <div className="slider_text_container second_container">
                  <div className="slider__wrapper_1">
                    <h2 className="slider__title slider__title2">
                      Our Helping
                      <br />
                      <span>Around the world.</span>
                    </h2>
                  </div>
                  <div className="slider__wrapper_2">
                    <p className="slider__subtitle slider__subtitle2">
                      Gray eel-catfish longnose whiptail catfish smalleye
                      squaretail queen danio unicorn fish shortnose greeneye
                      fusilier fish silver carp nibbler sharksucker tench
                      lookdown catfish
                    </p>
                  </div>
                  <a
                    className="button slider__button button--primary"
                    href="#"
                    style={{ textAlign: "center" }}
                  >
                    Discover
                  </a>
                </div>
              </animated.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <img
              className="slider_img"
              src="/assets/top-courses/ui-ux-designer.jpg"
              alt="img"
            />
            <div
              className="slider_text_container_bg"
              style={{ background: "rgba(30,30,106,0.5)" }}
            >
              <animated.div style={styles}>
                <div className="slider_text_container">
                  <div className="slider__wrapper_1">
                    <h2 className="slider__title slider__title3">
                      Helpo Volunteers
                      <br />
                      <span>Around the world.</span>
                    </h2>
                  </div>
                  <div className="slider__wrapper_2">
                    <p className="slider__subtitle slider__subtitle3">
                      Gray eel-catfish longnose whiptail catfish smalleye
                      squaretail queen danio unicorn fish shortnose greeneye
                      fusilier fish silver carp nibbler sharksucker tench
                      lookdown catfish
                    </p>
                  </div>
                  <a className="button slider__button button--primary" href="#">
                    Discover
                  </a>
                </div>
              </animated.div>
            </div>
          </div>
        </SwiperSlide>
      <div className="custom-nav">
        <button
          className="custom-nav__button custom-nav__button--prev"
          onClick={goToPrevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeftIcon style={{ color: "#efc940" , fontSize: "30px" }} />
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
          <ChevronRightIcon style={{ color: "#efc940" , fontSize: "30px" }} />
        </button>
      </div>
      </Swiper>

      <div className="about">
        <About />
      </div>
    </section>
  );
};

export default HeroSection;
