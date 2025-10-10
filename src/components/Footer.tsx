import React from 'react'
import Link from 'next/link'

const Footer = ({ footer }: { footer?: number }) => {
  switch (footer) {
    case 4:
      return <Footer4 />;
    default:
      return <Footer4 />;
  }
};

export default Footer;

const Footer4 = () => {
    return (
      <footer className="main-footer footer-four bg-black rel z-1">
        <div className="container pb-45">
          <div className="footer-cta pt-50 pb-20 text-white">
            <div
              className="logo"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Link href="/">
                <img src="/images/logos/logo4.png" alt="Logo" />
              </Link>
            </div>
            <h3
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              Ready to Enroll Our Course?
            </h3>
            <Link
              href="contact"
              className="theme-btn style-two"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              Enroll Now <i className="far fa-arrow-right" />
            </Link>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-sm-6">
              <div
                className="footer-widget widget-newsletter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Subscribe Newsletter</h3>
                <p>Please enter your email and get your answer</p>
                <form className="newsletter-form style-two mt-30" action="#">
                  <input
                    id="email-address"
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                  <button type="submit">
                    <i className="far fa-arrow-right" />
                  </button>
                </form>
                <ul className="icon-list style-two mt-25">
                  <li>
                    <i className="fal fa-check" /> 7-day free trial
                  </li>
                  <li>
                    <i className="fal fa-check" /> No credit card required
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <div
                className="footer-widget widget-links"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h6 className="footer-title">Courses</h6>
                <ul>
                  <li>
                    <Link href="contact">Web Design</Link>
                  </li>
                  <li>
                    <Link href="contact">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link href="contact">Apps Development</Link>
                  </li>
                  <li>
                    <Link href="contact">Graphics Design</Link>
                  </li>
                  <li>
                    <Link href="contact">Computer Science</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <div
                className="footer-widget widget-links"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h6 className="footer-title">Quick Link</h6>
                <ul>
                  <li>
                    <Link href="services">Features</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link href="about">Best Program</Link>
                  </li>
                  <li>
                    <Link href="contact">Press Kit</Link>
                  </li>
                  <li>
                    <Link href="about">About Company</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6 order-xl-2">
              <div
                className="footer-widget widget-gallery"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h6 className="footer-title">Gallery</h6>
                <ul>
                  <li>
                    <Link href="project-details">
                      <img
                        src="/images/footer/gallery1.png"
                        alt="Gallery"
                      />
                      <i className="far fa-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link href="project-details">
                      <img
                        src="/images/footer/gallery2.png"
                        alt="Gallery"
                      />
                      <i className="far fa-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link href="project-details">
                      <img
                        src="/images/footer/gallery3.png"
                        alt="Gallery"
                      />
                      <i className="far fa-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link href="project-details">
                      <img
                        src="/images/footer/gallery4.png"
                        alt="Gallery"
                      />
                      <i className="far fa-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link href="project-details">
                      <img
                        src="/images/footer/gallery5.png"
                        alt="Gallery"
                      />
                      <i className="far fa-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link href="project-details">
                      <img
                        src="/images/footer/gallery6.png"
                        alt="Gallery"
                      />
                      <i className="far fa-arrow-right" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom mt-30 py-15">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-6">
                <div
                  className="copyright-text pt-10 text-lg-start text-center"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <p>
                    Copyright @2024, <Link href="/">Akpager </Link> All Rights
                    Reserved
                  </p>
                </div>
              </div>
              <div className="col-xl-8 col-lg-6">
                <div
                  className="footer-bottom-menu text-lg-end text-center"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <ul>
                    <li>
                      <Link href="faqs">Faqs</Link>
                    </li>
                    <li>
                      <Link href="about">Setting</Link>
                    </li>
                    <li>
                      <Link href="about">Privacy</Link>
                    </li>
                    <li>
                      <Link href="contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Scroll Top Button */}
            <button className="scroll-top scroll-to-target" data-target="html">
              <span className="far fa-angle-double-up" />
            </button>
          </div>
        </div>
      </footer>
    );
  };   
