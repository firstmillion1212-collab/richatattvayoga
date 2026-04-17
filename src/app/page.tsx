import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyYoga from "@/components/WhyYoga";
import Pricing from "@/components/Pricing";
import Schedule from "@/components/Schedule";
import Instructor from "@/components/Instructor";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookDemoModal from "@/components/BookDemoModal";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyYoga />
        <Pricing />
        <Schedule />
        <Instructor />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
      <BookDemoModal />
    </>
  );
}
