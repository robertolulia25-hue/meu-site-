import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import Seo from "@/components/Seo";

const DEFAULT_MESSAGE = "Olá! Gostaria de agendar uma consulta.";
const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/5511982727659?text=${encodeURIComponent(message)}`;
const REDIRECT_SECONDS = 5;

const Obrigado = () => {
  const location = useLocation();
  const message =
    (location.state as { message?: string } | null)?.message ?? DEFAULT_MESSAGE;
  const whatsappUrl = buildWhatsAppUrl(message);
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = whatsappUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [whatsappUrl]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <Seo
        title="Redirecionando para o WhatsApp — Roberto Lima Advogado"
        description="Página de redirecionamento para atendimento por WhatsApp."
        path="/obrigado"
        noindex
      />
      <motion.div
        className="max-w-md w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center" style={{ backgroundColor: "#25D366" }}>
          <MessageCircle className="w-10 h-10 text-white" />
        </div>

        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Obrigado pelo seu contato!
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          Você está sendo redirecionado para o WhatsApp em{" "}
          <span className="text-gold font-semibold">{countdown}</span> segundo{countdown !== 1 ? "s" : ""}.
        </p>

        {/* Progress bar */}
        <div className="w-full h-1 bg-muted rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: "#25D366" }}
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: REDIRECT_SECONDS, ease: "linear" }}
          />
        </div>

        <a
          href={whatsappUrl}
          className="inline-block px-8 py-4 text-white font-medium tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: "#25D366" }}
          rel="noopener noreferrer"
        >
          Clique aqui se não for redirecionado
        </a>
      </motion.div>
    </div>
  );
};

export default Obrigado;
