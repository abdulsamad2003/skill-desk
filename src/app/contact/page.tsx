"use client";

import PageLayout from "@/components/PageLayout";
import HeroSection from "@/landing-component/HeroSection";

const ContactPage = () => {
  return (
    <PageLayout header={4} footer={4} bodyClass="contact-page-body">
      <HeroSection />
      
      {/* Contact Page Start */}
      <section className="contact-page py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-5">
              <div className="contact-info-part">
                <div
                  className="section-title mb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h2>Feel Free to Contact Us, Get In Touch</h2>
                  <p>
                    We&apos;re here to assist you in any way we can. Whether you
                    have questions, feedback, or just want to say hello
                  </p>
                </div>
                <div
                  className="contact-info-item style-two"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <span className="title">Location</span>
                    <p className="text">
                      806, Niharika Mirrage, Sector 10, Kharghar, Navi Mumbai,
                      Maharashtra, 410210
                    </p>
                  </div>
                </div>
                <div
                  className="contact-info-item style-two"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="icon">
                    <i className="far fa-envelope-open-text" />
                  </div>
                  <div className="content">
                    <span className="title">Email Address</span>
                    <p className="text">
                      <a href="mailto:hi@skilldesk.com">hi@skilldesk.com</a>
                    </p>
                  </div>
                </div>
                <div
                  className="contact-info-item style-two"
                  data-aos="fade-up"
                  data-aos-delay={150}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="icon">
                    <i className="fal fa-phone-volume" />
                  </div>
                  <div className="content">
                    <span className="title">Make A Call</span>
                    <p className="text">
                      <a href="tel:+919004282784">+91 9004282784</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="contact-form br-10 bgc-lighter rmt-60"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission here
                    alert("Form submitted! (Integration needed)");
                  }}
                >
                  <img
                    className="shape-one"
                    src="/images/shapes/star-yellow-shape.png"
                    alt="Star Shape"
                  />
                  <img
                    className="shape-two"
                    src="/images/shapes/star-black-shape.png"
                    alt="Star Shape"
                  />
                  <h5>Send Us Message</h5>
                  <p>
                    Questions or you would just like to say hello, contact us.
                  </p>
                  <div className="row mt-30">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="John Doe"
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="support@skilldesk.com"
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          defaultValue=""
                          placeholder="I would like to discuss"
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Write Message"
                          required
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send Us Message <i className="far fa-arrow-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Page End */}

      {/* Location Map Area Start */}
      <div className="contact-page-map">
        <div className="our-location">
          <iframe
            src="https://maps.google.com/maps?q=806,+Niharika+Mirrage,+Sector+10,+Kharghar,+Navi+Mumbai,+Maharashtra,+410210&t=&z=15&ie=UTF8&iwloc=&output=embed"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Location Map Area End */}
    </PageLayout>
  );
};

export default ContactPage;