import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import CareersSection from "./components/CareersSection";

export default function Home() {
  return (
    <main className="bg-[var(--background)]">
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <CareersSection />
    </main>
  );
}
