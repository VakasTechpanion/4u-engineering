import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import ContactForm from "./components/ContactFrom";
import CareersSection from "./components/CareersSection";

export default function Home() {
  return (
    <main className="bg-white">
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <ContactForm />
      <CareersSection />
    </main>
  );
}