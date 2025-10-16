"use client";
import "@/landing-component/HowItWorks.css";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="roadmap-area pt-140 rpt-100 pb-130 rpb-100"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-70">
              <h2 className="title">How It Works</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-9">
            <div className="roadmap-timeline-wrap">
              <div
                className="roadmap-line"
                style={{
                  backgroundImage: "url(/assets/how-it-works/Line.svg)",
                }}
              ></div>
              <ul className="list-wrap">
                <li>
                  <div className="roadmap-item">
                    <div
                      className="roadmap-img"
                      data-aos="fade-left"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <img
                        src="/assets/how-it-works/image-1.png"
                        alt="Explore Courses"
                      />
                      <span className="number">01</span>
                    </div>
                    <div
                      className="roadmap-content"
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <h4 className="title">Explore Our Course Catalog</h4>
                      <p>
                        Browse through our comprehensive collection of courses
                        across various domains. Find the perfect learning path
                        that aligns with your career goals and interests, from
                        beginner to advanced levels.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="odd">
                  <div className="roadmap-item">
                    <div
                      className="roadmap-img"
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <img
                        src="/assets/how-it-works/image-2.png"
                        alt="Enroll and Learn"
                      />
                      <span className="number number-2">02</span>
                    </div>
                    <div
                      className="roadmap-content"
                      data-aos="fade-left"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <h4 className="title">Enroll and Start Learning</h4>
                      <p>
                        Sign up for your chosen courses and access our
                        interactive learning platform. Engage with video
                        lectures, hands-on projects, and assessments designed by
                        industry experts to maximize your skill development.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="roadmap-item">
                    <div
                      className="roadmap-img"
                      data-aos="fade-left"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <img
                        src="/assets/how-it-works/image-3.png"
                        alt="Earn Certification"
                      />
                      <span className="number">03</span>
                    </div>
                    <div
                      className="roadmap-content"
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <h4 className="title">Complete and Get Certified</h4>
                      <p>
                        Finish your courses and receive industry-recognized
                        certificates. Showcase your new skills on your resume
                        and professional profiles to advance your career and
                        unlock new opportunities.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
