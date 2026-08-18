import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Mail } from "lucide-react";

const HeroIntro = () => {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="bg-background pt-28 md:pt-32 pb-10 md:pb-14"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="gold-line-left mb-6" />

          <p className="text-gold text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
            Roberto Lima — Advogado • OAB/SP 223.861
          </p>

          <h1
            id="hero-title"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground mb-5"
          >
            Advocacia e consultoria jurídica em{" "}
            <span className="text-gradient-gold">São Paulo</span>
          </h1>

          <p className="font-serif-elegant text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Atuação em Direito do Consumidor, Bancário, Médico e Digital, além de
            procedimentos extrajudiciais e elaboração de contratos. Cada caso é
            analisado individualmente, com informação clara sobre alternativas
            jurídicas e próximos passos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link
              to="/obrigado"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground text-sm font-medium tracking-wider uppercase rounded-sm transition-opacity duration-300 hover:opacity-90"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
              Falar pelo WhatsApp
            </Link>

            <a
              href="mailto:robertolulia@adv.oabsp.org.br"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold/40 text-gold text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-gold/10 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" strokeWidth={1.75} />
              Enviar e-mail
            </a>
          </div>

          <p className="text-muted-foreground/70 text-xs mt-6 max-w-2xl">
            Conteúdo de caráter meramente informativo, sem captação de clientela
            ou promessa de resultado, em conformidade com o Código de Ética e o
            Provimento nº 205/2021 da OAB.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroIntro;
