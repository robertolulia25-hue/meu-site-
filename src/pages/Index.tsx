import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Seo from "@/components/Seo";


const PAGE_TITLE =
  "Roberto Lima | Advogado em São Paulo — Consumidor, Bancário e Médico";
const PAGE_DESCRIPTION =
  "Advogado em São Paulo com atuação em Direito do Consumidor, Direito Bancário, Direito Médico, Direito Digital, família e contratos. Atendimento personalizado por WhatsApp.";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD de WebSite/LegalService/Person vive estaticamente no index.html
          (visível a crawlers sem JS); aqui evitamos duplicar o mesmo grafo. */}
      <Seo title={PAGE_TITLE} description={PAGE_DESCRIPTION} path="/" />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
