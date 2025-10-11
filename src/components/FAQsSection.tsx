"use client";

import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Counter from "@/components/Counter";
import AkpagerAccordion from "@/components/AkpagerAccordion";
import "../app/FAQsSection.css";

const FAQsSection = () => {
  const [active, setActive] = useState<string>("");

  const accordionItems = [
    {
      id: 1,
      title: "What is Skill Desk and how does it work?",
    },
    {
      id: 2,
      title: "How do I enroll in courses?",
    },
    {
      id: 3,
      title: "Can I access courses on mobile devices?",
    },
    {
      id: 4,
      title: "Do you offer certificates upon course completion?",
    },
  ];

  return (
    <section className="faqs-statistics-area pt-120 rpt-100 pb-100 rpb-80">
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
                    "url(assets/images/backgrounds/counter-bg.png)",
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
                      data-stop={450}
                    >
                      <Counter end={450} />
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
                      data-stop={135}
                    >
                      <Counter end={153} />
                    </span>
                    <span className="counter-title">
                      Professional &amp; Expert Mentors
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
                      data-stop={150}
                    >
                      <Counter end={150} />
                    </span>
                    <span className="counter-title">
                      Regular Enroll Students
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
