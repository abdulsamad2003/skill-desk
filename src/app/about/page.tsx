import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutTimeline from "@/components/AboutTimeline";
import AboutValues from "@/components/AboutValues";
import Footer from "@/components/Footer";
import AboutTeam from "@/components/AboutTeam";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutTimeline />
        <AboutTeam />
        <AboutValues />
      </main>
      <Footer />
    </>
  );
}

