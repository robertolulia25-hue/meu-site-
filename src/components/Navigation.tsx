import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const hash = href.startsWith("#") ? href : `#${href}`;
    const sectionId = hash.replace("#", "");

    if (location.pathname === "/") {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { section: sectionId } });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/30 py-4" 
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo text */}
          <motion.a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#inicio");
            }}
            className="flex flex-col leading-tight text-foreground hover:text-gold transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-serif text-lg md:text-xl">Roberto Lima</span>
            <span className="text-[10px] md:text-xs tracking-[0.18em] uppercase text-muted-foreground">
              Advogado • OAB/SP 223.861
            </span>
          </motion.a>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contato")}
              className="px-6 py-2 bg-transparent border border-gold/50 text-gold text-sm tracking-wider hover:bg-gold hover:text-primary-foreground transition-all duration-300"
            >
              Agendar Consulta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMobileMenuOpen ? "mt-6" : ""}`}
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contato")}
              className="w-full py-3 bg-gradient-gold text-primary-foreground text-sm tracking-wider mt-2"
            >
              Agendar Consulta
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
