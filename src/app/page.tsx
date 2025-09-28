import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoScroller from "@/components/LogoScroller";
import About from "@/components/About";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import OurCourses from "@/components/OurCourses";
import OurPopularCategories from "@/components/OurPopularCategories";
import WorkingProcess from "@/components/WorkingProcess";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoScroller />
        <About />
        <Features />
        <WorkingProcess />
        <OurPopularCategories />  
        <OurCourses />
        <Testimonials />
        <Solutions />
      </main>
      <Footer />
    </>
  );
}
