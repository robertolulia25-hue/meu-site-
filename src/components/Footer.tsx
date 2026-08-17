import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-rl.png";

const areas = [
  { label: "Advogado de Direito do Consumidor em São Paulo", to: "/direito-consumidor" },
  { label: "Produto com defeito: direitos do consumidor", to: "/direito-consumidor/produto-com-defeito" },
  { label: "Advogado de Direito Bancário em São Paulo", to: "/direito-bancario" },
  { label: "Advogado de Direito Médico e da Saúde", to: "/direito-medico" },
  { label: "Advogado de Direito Digital e LGPD", to: "/direito-digital" },
  { label: "Separação de fato em cartório", to: "/separacao-extrajudicial" },
  { label: "Divórcio judicial", to: "/divorcio-judicial" },
  { label: "Elaboração e revisão de contratos", to: "/elaboracao-de-contratos" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <img 
            src={logo} 
            alt="Logotipo RL de Roberto Lima, advogado em São Paulo"
            width={160}
            height={160}
            loading="lazy"
            className="w-40 mb-6 opacity-60 hover:opacity-100 transition-opacity duration-300"
          />

          {/* Decorative line */}
          <div className="gold-line mb-6 opacity-30" />

          {/* Áreas de atuação — navegação interna rastreável */}
          <nav aria-label="Áreas de atuação" className="mb-8 w-full max-w-4xl">
            <h2 className="sr-only">Áreas de atuação</h2>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
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
          </nav>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Roberto Lima Advogado & Consultoria. Todos os direitos reservados.
          </p>
          
          <p className="text-muted-foreground/60 text-xs mt-2 text-center">
            OAB/SP • Advocacia e Consultoria Jurídica • Atuação em São Paulo
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
