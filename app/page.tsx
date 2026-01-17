import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import ContactForm from "./components/ContactFrom";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <ContactForm />
    </main>
  );
}