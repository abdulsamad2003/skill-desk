"use client";
import React from 'react';
import Image from 'next/image';
import { Timeline } from '@/components/ui/timeline';

const AboutTimeline = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p>
            AI Revolution - Launched advanced AI tutoring and adaptive learning pathways.
          </p>
          <div className="grid">
            <Image
              src="/assets/top-courses/data-science-and-ai.jpg"
              alt="AI Tutoring Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/software-development.jpg"
              alt="Adaptive Learning Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/cyber-security.jpg"
              alt="AI Security Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/cloud-computing.jpg"
              alt="AI Cloud Course"
              width={500}
              height={500}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p>
            Industry Recognition - Won "Best EdTech Innovation" award and reached 50,000+ active learners.
          </p>
          <div className="grid">
            <Image
              src="/assets/top-courses/digital-marketing.jpg"
              alt="Digital Marketing Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/Project-management.jpg"
              alt="Project Management Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/ui-ux-designer.jpg"
              alt="UI/UX Design Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/software-development.jpg"
              alt="Software Development Course"
              width={500}
              height={500}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p>
            Global Expansion - Reached 10,000+ students across 50 countries with localized content.
          </p>
          <div className="grid">
            <Image
              src="/assets/top-courses/cloud-computing.jpg"
              alt="Cloud Computing Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/data-science-and-ai.jpg"
              alt="Data Science Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/cyber-security.jpg"
              alt="Cybersecurity Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/digital-marketing.jpg"
              alt="Digital Marketing Course"
              width={500}
              height={500}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p>
            First AI Integration - Launched our first AI-powered personalized learning recommendations.
          </p>
          <div className="grid">
            <Image
              src="/assets/top-courses/data-science-and-ai.jpg"
              alt="AI Learning Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/software-development.jpg"
              alt="Programming Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/ui-ux-designer.jpg"
              alt="Design Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/Project-management.jpg"
              alt="Management Course"
              width={500}
              height={500}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p>
            The Vision - Founded with a mission to democratize quality education through AI technology.
          </p>
          <div className="grid">
            <Image
              src="/assets/top-courses/software-development.jpg"
              alt="Foundation Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/data-science-and-ai.jpg"
              alt="AI Foundation Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/cloud-computing.jpg"
              alt="Technology Course"
              width={500}
              height={500}
            />
            <Image
              src="/assets/top-courses/digital-marketing.jpg"
              alt="Digital Course"
              width={500}
              height={500}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="timeline-wrapper">
      <Timeline data={timelineData} />
    </div>
  );
};

export default AboutTimeline;
