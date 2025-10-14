"use client";
import "@/landing-component/HowItWorks.css";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="roadmap-area pt-140 rpt-100 pb-130 rpb-100">
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
                style={{ backgroundImage: "url(/assets/how-it-works/Line.svg)" }}
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
                      <img src="/assets/how-it-works/image-1.png" alt="Selecting an AI Tool" />
                      <span className="number">01</span>
                    </div>
                    <div
                      className="roadmap-content"
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <h4 className="title">Selecting an AI Tool</h4>
                      <p>
                        Choose from a variety of AI tools to write social media ads, hero
                        sections, blog posts, and more. Our platform offers intelligent
                        solutions tailored to your content needs.
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
                      <img src="/assets/how-it-works/image-2.png" alt="Customize Learning Path" />
                      <span className="number number-2">02</span>
                    </div>
                    <div
                      className="roadmap-content"
                      data-aos="fade-left"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <h4 className="title">Customize Your Learning Path</h4>
                      <p>
                        Personalize your learning experience with AI-driven
                        recommendations. Set your goals, track progress, and adapt your
                        path based on skill gaps and career objectives.
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
                      <img src="/assets/how-it-works/image-3.png" alt="Track Progress" />
                      <span className="number">03</span>
                    </div>
                    <div
                      className="roadmap-content"
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <h4 className="title">Track Progress & Achieve Goals</h4>
                      <p>
                        Monitor your learning journey with detailed analytics and
                        insights. Get real-time feedback, earn certificates, and unlock
                        new opportunities as you master new skills.
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
