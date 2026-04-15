import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BoardSection from "@/components/BoardSection";
import VolunteerSection from "@/components/VolunteerSection";
import EventsSection from "@/components/EventsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BoardSection />       {/* 👈 Junta Directiva */}
      <VolunteerSection />   {/* 👈 Beneficios PMI */}
      <EventsSection />      {/* 👈 Eventos */}
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;