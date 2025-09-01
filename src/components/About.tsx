"use client";

const About = () => {
  return (
    <div>
      <section className="section about-us" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 about__left">
              <div className="heading heading--primary">
                <span className="heading__pre_title">🤖 About Us</span>
                <h2 className="heading__title">
                AI-Powered Training. <br /> <span> Real-World Skills.</span>
                </h2>
              </div>
              <p>
                <strong>
                 No boring lectures. No static PDFs.
                 Just hands-on training, using the same software and tools professionals use on the job.
                </strong>
              </p>
              <p>
              At our core, we believe learning should be smart, practical, and personalized. That’s why we’ve built a platform where AI does the heavy lifting — generating skill-based courses automatically, based on each learner’s goals, experience, and pace.
              </p>
              <p>
              Whether you're upskilling in tech, design, data, or business, our AI builds dynamic, interactive learning paths tailored just for you. Each course is instantly assembled from real-world scenarios, practical tasks, and performance-based assessments — so you're not just learning, you're doing.
              </p>
              <p>
              From absolute beginners to working professionals, we’re helping people unlock skills that stick — faster, smarter, and more efficiently than ever.
              </p>
              <button className="button">More About Us</button>
            </div>
            <div className="col-lg-6 col-xl-5 offset-xl-1">
              <div className="info-box">
                <img
                  className="img--layout bg__image"
                  src="img/about_layout.png"
                  alt="img"
                />
                {/* <img className="img--bg upper__image" src="img/about-us.jpg" alt="img" /> */}
                <div className="new__div">
                  <h4 className="info-box__title">
                  Smarter Learning Starts Here
                  </h4>
                  <strong>
                  AI That Builds Courses. You Build Skills.
                  </strong>
                  <p>
                  Our platform uses AI to automatically create hands-on courses based on your goals. No filler, no fluff — just real-world tools, real tasks, and real progress.
                  </p>
                  <a className="info-box__link" href="#">
                    Explore Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
