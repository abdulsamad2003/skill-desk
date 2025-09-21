import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import DemoBooking from "@/components/DemoBooking";
import DemoFAQ from "@/components/DemoFAQ";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <DemoBooking />
        <DemoFAQ />
      </main>
      <Footer />
    </>
  );
}
