import React from "react";
import Link from "next/link";
import "@/landing-component/InstructorSection.css";

const InstructorSection = () => {
  return (
    <section className="become-a-member-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div
              className="become-a-member-content"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title pb-10">
                <span className="subtitle-two mb-25">
                  <i className="fas fa-play-circle" />{" "}
                  <span>Become an Instructor</span>
                </span>
                <h2>Are You Interested to Join Our Team as an Instructor?</h2>
              </div>
              <p>
                We denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the charms of pleasure of the
                moment
              </p>
              <Link href="contact" className="theme-btn style-two mt-30">
                Become an Instructor <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 pe-lg-5">
            <div
              className="become-a-member-images"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img src="/images/about/become-member1.jpg" alt="Become Member" />
              <img src="/images/about/become-member2.jpg" alt="Become Member" />
              <img src="/images/about/become-member3.jpg" alt="Become Member" />
              <img src="/images/about/become-member4.jpg" alt="Become Member" />
              <img src="/images/about/become-member5.jpg" alt="Become Member" />
              <img src="/images/about/become-member6.jpg" alt="Become Member" />
              <img src="/images/about/become-member7.jpg" alt="Become Member" />
              <img src="/images/about/become-member8.jpg" alt="Become Member" />
              <img src="/images/about/become-member9.jpg" alt="Become Member" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
