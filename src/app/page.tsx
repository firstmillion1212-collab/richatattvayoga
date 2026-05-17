import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyYoga from "@/components/WhyYoga";
import YouTubeSection from "@/components/YouTubeSection";
import Pricing from "@/components/Pricing";
import TeacherTraining from "@/components/TeacherTraining";
import Instructor from "@/components/Instructor";
import Gallery from "@/components/Gallery";
import ConnectWhatsApp from "@/components/ConnectWhatsApp";
import VideoTestimonials from "@/components/VideoTestimonials";
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
        <YouTubeSection />
        <Instructor />
        <TeacherTraining />
        <Pricing />
        <ConnectWhatsApp />
        <Gallery />
        <VideoTestimonials />
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
