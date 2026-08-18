import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-rl.png";

const areas = [
  { label: "Direito do Consumidor", to: "/direito-consumidor" },
  { label: "Produto com defeito", to: "/direito-consumidor/produto-com-defeito" },
  { label: "Direito Bancário", to: "/direito-bancario" },
  { label: "Direito Médico e da Saúde", to: "/direito-medico" },
];

const areas2 = [
  { label: "Direito Digital e LGPD", to: "/direito-digital" },
  { label: "Separação de fato em cartório", to: "/separacao-extrajudicial" },
  { label: "Divórcio judicial", to: "/divorcio-judicial" },
  { label: "Elaboração e revisão de contratos", to: "/elaboracao-de-contratos" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-10 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {/* Identificação profissional */}
            <div>
              <img
                src={logo}
                alt="Logotipo RL de Roberto Lima, advogado em São Paulo"
                width={120}
                height={120}
                loading="lazy"
                className="w-24 mb-5 opacity-70"
              />
              <p className="font-serif text-lg text-foreground">Roberto Lima</p>
              <p className="text-muted-foreground text-sm">
                Advogado — OAB/SP 223.861
              </p>
              <p className="text-muted-foreground/70 text-sm mt-1">
                Advocacia e Consultoria Jurídica • São Paulo/SP
              </p>
            </div>

            {/* Contato */}
            <div>
              <h2 className="font-serif text-base text-foreground mb-4">
                Contato
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="tel:+5511982727659"
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    Telefone: (11) 98272-7659
                  </a>
                </li>
                <li>
                  <Link
                    to="/obrigado"
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    WhatsApp: (11) 98272-7659
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:robertolulia@adv.oabsp.org.br"
                    className="text-muted-foreground hover:text-gold transition-colors duration-300 break-all"
                  >
                    robertolulia@adv.oabsp.org.br
                  </a>
                </li>
                <li>
                  <Link
                    to="/politica-de-privacidade"
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>

            {/* Áreas de atuação */}
            <nav aria-label="Áreas de atuação">
              <h2 className="font-serif text-base text-foreground mb-4">
                Áreas de atuação
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <ul className="space-y-2">
                  {areas.map((area) => (
                    <li key={area.to}>
                      <Link
                        to={area.to}
                        className="text-muted-foreground hover:text-gold transition-colors duration-300"
                      >
                        {area.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {areas2.map((area) => (
                    <li key={area.to}>
                      <Link
                        to={area.to}
                        className="text-muted-foreground hover:text-gold transition-colors duration-300"
                      >
                        {area.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          <div className="gold-line my-10 opacity-30" />

          <p className="text-muted-foreground/70 text-xs leading-relaxed text-center max-w-3xl mx-auto">
            Este site tem caráter meramente informativo, não constitui oferta de
            serviços, captação de clientela, mercantilização da advocacia ou
            promessa de resultado. As informações não substituem a análise
            individual de cada caso. Publicidade em conformidade com o Código de
            Ética e Disciplina da OAB e o Provimento nº 205/2021 do Conselho
            Federal da OAB.
          </p>

          <p className="text-muted-foreground text-sm text-center mt-6">
            © {currentYear} Roberto Lima — Advogado & Consultoria Jurídica •
            OAB/SP 223.861. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
