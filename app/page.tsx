import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import ContactForm from "./components/ContactFrom";

export default function Home() {
  return (
    <main>
      {/* <HeroSection /> */}
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <ContactForm />
    </main>
  );
}