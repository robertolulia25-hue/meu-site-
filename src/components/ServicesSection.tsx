import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scale, Building2, FileText, Users, Scroll, PenTool } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Direito do Consumidor",
    description: "Defesa dos seus direitos nas relações de consumo, com atuação em ações judiciais e negociações extrajudiciais.",
    href: "/direito-consumidor"
  },
  {
    icon: Building2,
    title: "Direito Bancário",
    description: "Revisão de contratos, cobranças indevidas, renegociação de dívidas e defesa contra práticas abusivas de instituições financeiras."
  },
  {
    icon: FileText,
    title: "Direito Médico",
    description: "Atuação em cobertura de medicamentos, revisão de cláusulas contratuais, cobertura de tratamentos e home care junto a planos de saúde."
  },
  {
    icon: Users,
    title: "Direito Digital",
    description: "Indenização por comentários ofensivos, desbloqueio e recuperação de contas em redes sociais e e-mails, proteção de dados (LGPD), contratos eletrônicos e assinaturas digitais."
  },
  {
    icon: Scroll,
    title: "Separação e Inventário Extrajudicial",
    description: "Procedimentos administrativos ágeis realizados em cartório, proporcionando economia de tempo e recursos."
  },
  {
    icon: PenTool,
    title: "Elaboração de Contratos",
    description: "Redação e análise de contratos empresariais e particulares, garantindo segurança jurídica às suas transações."
  }
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-gradient-dark relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="gold-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Áreas de <span className="text-gradient-gold">Atuação</span>
          </h2>
          <p className="font-serif-elegant text-xl text-muted-foreground max-w-2xl mx-auto">
            Assessoria jurídica especializada para proteger seus direitos e interesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full bg-gradient-card p-8 rounded-sm border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-gold">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -bottom-2 left-0 w-8 h-px bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
