import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import OurCourses from "@/components/OurCourses";
import OurPopularCategories from "@/components/OurPopularCategories";
import WorkingProcess from "@/components/WorkingProcess";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Solutions />
        <OurPopularCategories />  
        <OurCourses />
        <WorkingProcess />
      </main>
    </>
  );
}
