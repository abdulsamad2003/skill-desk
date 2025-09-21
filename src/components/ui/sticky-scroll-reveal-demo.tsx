"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Employee Upskilling",
    description:
      "Transform your workforce with AI-powered learning paths, competency tracking, and personalized upskilling programs designed for enterprise scale. Our platform adapts to your organization's needs and provides comprehensive analytics to track progress and ROI.",
    content: (
      <div className="sticky-visual-content">
        <img
          src="/assets/solution/solution-1.jpg"
          alt="Employee Upskilling"
          className="sticky-visual-image"
        />
        <div className="sticky-visual-overlay">
          <div className="sticky-visual-inner">
            <h3 className="sticky-visual-title main-font">Employee Upskilling</h3>
            <p className="sticky-visual-subtitle para-font">AI-Powered Learning Paths</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Blended Learning",
    description:
      "Enhance traditional education with AI-driven blended learning solutions that adapt to student needs and improve learning outcomes. Combine online and offline learning experiences seamlessly with our intelligent platform that personalizes content delivery.",
    content: (
      <div className="sticky-visual-content">
        <img
          src="/assets/solution/solution-2.jpg"
          alt="Blended Learning"
          className="sticky-visual-image"
        />
        <div className="sticky-visual-overlay">
          <div className="sticky-visual-inner">
            <h3 className="sticky-visual-title main-font">Blended Learning</h3>
            <p className="sticky-visual-subtitle para-font">AI-Driven Education</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Career Advancement",
    description:
      "Accelerate your career growth with personalized learning paths, skill assessments, and AI-powered recommendations tailored to your goals. Our platform analyzes your current skills and career aspirations to create a customized learning journey.",
    content: (
      <div className="sticky-visual-content">
        <img
          src="/assets/solution/solution-3.jpg"
          alt="Career Advancement"
          className="sticky-visual-image"
        />
        <div className="sticky-visual-overlay">
          <div className="sticky-visual-inner">
            <h3 className="sticky-visual-title main-font">Career Advancement</h3>
            <p className="sticky-visual-subtitle para-font">Personalized Growth</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="sticky-scroll-demo-wrapper">
      <StickyScroll content={content} />
    </div>
  );
}
