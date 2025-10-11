"use client";
import AkpagerAccordion from "@/components/AkpagerAccordion";
import Counter from "@/components/Counter";
import PageLayout from "@/components/PageLayout";
import { sliderProps } from "@/utility/sliderProps";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeatureSection from "@/components/FeatureSection";
import InstructorSection from "@/components/InstructorSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQsSection from "@/components/FAQsSection";
import BlogSection from "@/components/BlogSection";

const CoursesIsotope = dynamic(
  () => import("@/components/Isotype/CoursesIsotope"),
  {
    ssr: false,
  }
);

const accordionItems = [
  {
    id: 1,
    title: "How To Get Our Services?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 2,
    title: "What Is Data Analysis For Business ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 3,
    title: "Why Need Marketing Data Analysis ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 4,
    title: "Have Any Dedicated Support Team ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 5,
    title: "Why Join Our Courses ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
];

export default function Home() {
  const [active, setActive] = useState("collapse1");

  return (
    <PageLayout header={4} footer={4} bodyClass="home-four" onePage={true}>
      <HeroSection />
      <AboutSection />

      {/* Feature Section Component */}
      <FeatureSection />

      {/* Popular Course Area Start */}
      <CoursesIsotope />
      {/* Popular Course Area End */}

      <InstructorSection />

      <TestimonialSection />

      <FAQsSection />

      <BlogSection />
    </PageLayout>
  );
}
