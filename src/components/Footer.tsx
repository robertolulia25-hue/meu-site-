import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg";

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
            alt="Roberto Lima - Advogado & Consultoria"
            className="w-40 mb-6 opacity-60 hover:opacity-100 transition-opacity duration-300"
          />

          {/* Decorative line */}
          <div className="gold-line mb-6 opacity-30" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Roberto Lima Advogado & Consultoria. Todos os direitos reservados.
          </p>
          
          <p className="text-muted-foreground/60 text-xs mt-2 text-center">
            OAB/SP • Advocacia e Consultoria Jurídica
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
