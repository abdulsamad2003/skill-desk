import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import DemoBooking from "@/components/DemoBooking";
import DemoFAQ from "@/components/DemoFAQ";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactInfo />
        <DemoBooking />
        <DemoFAQ />
      </main>
      <Footer />
    </>
  );
}
