import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Clients from '../components/Clients';
import CourseCategories from '../components/CourseCategories';
import TopCourses from '../components/TopCourses';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">
        <Hero />
        <Features />
        <Clients />
        <CourseCategories />
        <TopCourses />
      </div>
    </>
  );
}
