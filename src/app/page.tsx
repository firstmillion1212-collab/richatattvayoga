import Navbar from "@/components/Navbar";
import Script from "next/script";
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Richa Tattva Yoga",
    "image": "https://richatattvayoga.com/images/logo.png",
    "description": "Premium online yoga classes, therapeutic yoga for mental health, and AYUSH-certified Yoga Teacher Training by Richa Mishra.",
    "url": "https://richatattvayoga.com",
    "telephone": "+917204637222",
    "email": "richatattvayoga@gmail.com",
    "founder": {
      "@type": "Person",
      "name": "Richa Mishra"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Online Group Yoga Classes",
        "price": "999",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "name": "Yoga Teacher Training Program",
        "price": "5000",
        "priceCurrency": "INR"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 20.5937,
        "longitude": 78.9629
      },
      "geoRadius": "4000000"
    },
    "areaServed": "India",
    "knowsAbout": ["Yoga", "Therapeutic Yoga", "Yoga Teacher Training", "Mental Health"]
  };

  return (
    <>
      <Script 
        id="schema-markup"
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />
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
