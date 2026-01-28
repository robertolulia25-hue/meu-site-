import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import retrato from "@/assets/retrato.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Frame decoration */}
              <div className="absolute -inset-4 border border-gold/20 rounded-sm" />
              <div className="absolute -inset-8 border border-gold/10 rounded-sm hidden lg:block" />
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-sm shadow-elegant">
                <img 
                  src={retrato} 
                  alt="Dr. Roberto Lima"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="gold-line-left mb-6" />
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Sobre o <span className="text-gradient-gold">Advogado</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg font-serif-elegant">
                Com mais de <span className="text-gold font-medium">15 anos de experiência</span> atuando em renomados escritórios de advocacia, construí uma trajetória sólida pautada pela excelência técnica e compromisso com os interesses de cada cliente.
              </p>
              
              <p>
                Minha formação e vivência em grandes bancas me proporcionaram um profundo conhecimento prático das mais diversas demandas jurídicas, permitindo oferecer soluções estratégicas e personalizadas para cada situação.
              </p>

              <p>
                Acredito que a advocacia vai além da simples prestação de serviços — trata-se de construir relações de confiança, ouvindo atentamente as necessidades de cada cliente e trabalhando incansavelmente para alcançar os melhores resultados.
              </p>

              <p className="font-serif-elegant text-lg italic text-gold/80 border-l-2 border-gold/30 pl-4 mt-8">
                "Cada caso é único e merece dedicação exclusiva, aliando conhecimento técnico à sensibilidade humana."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
