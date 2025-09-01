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

const Carousel = () => {
  const [video, setVideo] = useState(false);
  const styles = useSpring({
    to: [{ opacity: 1, marginTop: "30px" }],
    from: { opacity: 0, marginTop: "80px" },
    delay: 300,
  });

  return (
    <section className="promo">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
          type: "fraction",
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider">
            <img
              className="slider_img"
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9vciUyMGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="img"
            />
            <div
              className="slider_text_container_bg"
              style={{ background: "rgba(193,5,44,0.5)" }}
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
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="img"
            />
            <div
              className="slider_text_container_bg"
              style={{ background: "rgba(19,142,70,0.5)" }}
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
              src="https://images.unsplash.com/photo-1547496614-d145e2fa88ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBvb3IlMjBjaGlsZHJlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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

      </Swiper>
    
      <div className="about">
        <About />
      </div>
    </section>
  );
};

export default Carousel;
