"use client";

import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Counter from "@/components/Counter";
import AkpagerAccordion from "@/components/AkpagerAccordion";
import "@/landing-component/FAQsSection.css";

const FAQsSection = () => {
  const [active, setActive] = useState<string>("");

  const accordionItems = [
    {
      id: 1,
      title: "What is SkillDesk.AI and what does it do?",
      content: "SkillDesk.AI helps organizations and individuals develop critical skills through features like AI-generated course creation, personalized learning paths, skill-gap analysis, automated assessments, and advanced reporting. The platform supports onboarding, upskilling, career recommendations, and transition management, ensuring teams are ready for evolving industry demands."
    },
    {
      id: 2,
      title: "How is SkillDesk.AI different from other LMS platforms?",
      content: "SkillDesk.AI utilizes AI for instant course creation via chat, interactive video learning, AI-driven skill forecasting, and automated career path recommendations—features missing in traditional LMS platforms. It centralizes both internal and external resources, offers adaptive learning based on competency data, and provides deep analytics for impact measurement. Unlike legacy LMS platforms focused mainly on course delivery and compliance, SkillDesk.AI delivers truly personalized, performance-driven learning that adapts to unique organizational needs."
    },
    {
      id: 3,
      title: "Who can use SkillDesk.AI? (Corporates, educators, trainers, etc.)",
      content: "Corporates and enterprises seeking scalable, secure workforce development, Educators and trainers building custom programs for schools, colleges, or coaching centers, Professional training organizations, SMEs, and startups looking for smart, automated skill management."
    },
    {
      id: 4,
      title: "Is SkillDesk.AI suitable for small businesses and startups?",
      content: "SkillDesk.AI is designed for both large enterprises and smaller organizations, supporting rapid, hassle-free onboarding, mobile access, affordable usage tiers, and minimal IT requirements. Its AI automation reduces manual effort, making it ideal for resource-limited teams."
    },
  ];

  return (
    <section id="faqs" className="faqs-statistics-area pt-120 rpt-100 pb-100 rpb-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div
            className="faq-content-four rmb-75"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title pb-40 rpb-20">
              <span className="subtitle-two mb-25">
                <i className="fas fa-play-circle" /> <span>FAQs</span>
              </span>
              <h2>Frequently Ask Questions</h2>
            </div>
            <Accordion
              className="accordion"
              id="accordionOne"
              defaultActiveKey={active}
            >
              {accordionItems.map((item) => (
                <AkpagerAccordion
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  event={`collapse${item.id}`}
                  onClick={() =>
                    setActive(
                      active == `collapse${item.id}`
                        ? ""
                        : `collapse${item.id}`
                    )
                  }
                  active={active}
                />
              ))}
            </Accordion>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="counter-content-four ms-lg-auto"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title pb-40 rpb-20">
              <span className="subtitle-two mb-25">
                <i className="fas fa-play-circle" />{" "}
                <span>Our Statistics</span>
              </span>
              <h2>Why Join Our Course</h2>
            </div>
            <div
              className="counter-wrap-for-bg bgs-cover"
              style={{
                backgroundImage:
                  "url(/images/backgrounds/counter-bg.png)",
              }}
            >
              <div className="counter-item-two counter-text-wrap">
                <div className="icon">
                  <i className="flaticon-online-education" />
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={120}
                  >
                    <Counter end={120} />
                  </span>
                  <span className="counter-title">
                    Skill Development Courses
                  </span>
                </div>
              </div>
              <div className="counter-item-two counter-text-wrap">
                <div className="icon">
                  <i className="flaticon-creative-team" />
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={60}
                  >
                    <Counter end={60} />
                  </span>
                  <span className="counter-title">
                    Professional &amp; Expert Instructors
                  </span>
                </div>
              </div>
              <div className="counter-item-two counter-text-wrap">
                <div className="icon">
                  <i className="flaticon-graduate" />
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={60}
                  >
                    <Counter end={60} />
                  </span>
                  <span className="counter-title">
                  Academies created
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FAQsSection;
