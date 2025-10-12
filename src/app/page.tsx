"use client";
import PageLayout from "@/components/PageLayout";
import dynamic from "next/dynamic";
import HeroSection from "@/landing-component/HeroSection";
import AboutSection from "@/landing-component/AboutSection";
import FeatureSection from "@/landing-component/FeatureSection";
import InstructorSection from "@/landing-component/InstructorSection";
import TestimonialSection from "@/landing-component/TestimonialSection";
import FAQsSection from "@/landing-component/FAQsSection";
import BlogSection from "@/landing-component/BlogSection";  

const CoursesIsotope = dynamic(
  () => import("@/components/Isotype/CoursesIsotope"),
  {
    ssr: false,
  }
);

export default function Home() {

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
