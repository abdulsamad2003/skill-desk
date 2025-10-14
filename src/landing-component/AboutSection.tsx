"use client";
import Link from "next/link";
import "@/landing-component/AboutSection.css";

const AboutSection = () => {
  return (
    <>
      {/* About area start */}
      <section id="about" className="about-area-four pt-120 rpt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-four-images rmb-35"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row gap-20">
                  <div className="col-6 scroll-container">
                    <div className="scroll-images-up">
                      <img src="/images/about/about3.jpg" alt="About" />
                      <img src="/images/about/about4.jpg" alt="About" />
                      <img src="/images/about/about3.jpg" alt="About" />
                      <img src="/images/about/about4.jpg" alt="About" />
                    </div>
                  </div>
                  <div className="col-6 scroll-container">
                    <div className="scroll-images-down">
                      <img src="/images/about/about5.jpg" alt="About" />
                      <img src="/images/about/about6.jpg" alt="About" />
                      <img src="/images/about/about7.jpg" alt="About" />
                      <img src="/images/about/about5.jpg" alt="About" />
                      <img src="/images/about/about6.jpg" alt="About" />
                      <img src="/images/about/about7.jpg" alt="About" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-four-content mb-20"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title">
                  <h2>An AI-powered Learning Experience Platform </h2>
                </div>
                <p>
                  Platform that accelerates organizational growth with
                  intelligent course creation, personalized learning, and
                  automated skill assessments.
                </p>
                <p>
                  From competency and skill gap analysis to onboarding, career
                  recommendations, and transition management, it equips teams
                  with the tools to excel—securely, efficiently, and on any
                  device.
                </p>
                <div className="about-four-btns mt-30">
                  <Link href="/contact" className="theme-btn style-two">
                    Contact Us <i className="far fa-arrow-right" />
                  </Link>
                  <Link href="#course" className="theme-btn">
                    Our Courses <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="clients-reviews mt-25">
                  <div className="clients">
                    <div className="images">
                      <img src="/images/about/client1.png" alt="Client" />
                      <img src="/images/about/client2.png" alt="Client" />
                      <img src="/images/about/client3.png" alt="Client" />
                      <img src="/images/about/client4.png" alt="Client" />
                      <span className="text">12k+</span>
                    </div>
                  </div>
                  <h6>Enroll Programs</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About area End */}
    </>
  );
};

export default AboutSection;
