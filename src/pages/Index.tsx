import Navigation from "@/components/Navigation";
import HeroIntro from "@/components/HeroIntro";
import InstitutionalBanner from "@/components/InstitutionalBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Seo from "@/components/Seo";

const PAGE_TITLE = "Roberto Lima | Advogado em São Paulo — OAB/SP 223.861";
const PAGE_DESCRIPTION =
  "Roberto Lima, advogado em São Paulo (OAB/SP 223.861). Direito do Consumidor, Bancário, Médico e Digital, procedimentos extrajudiciais e contratos. Atendimento por WhatsApp e e-mail.";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD de WebSite/LegalService/Person vive estaticamente no index.html
          (visível a crawlers sem JS); aqui evitamos duplicar o mesmo grafo. */}
      <Seo title={PAGE_TITLE} description={PAGE_DESCRIPTION} path="/" />
      <Navigation />
      <HeroIntro />
      <InstitutionalBanner />
      <ServicesSection />
      <HowItWorksSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
