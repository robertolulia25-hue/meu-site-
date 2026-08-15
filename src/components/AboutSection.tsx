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
              Sobre <span className="text-gradient-gold">Roberto Lima</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg font-serif-elegant">
                Com mais de 15 anos de experiência na advocacia, construí minha trajetória profissional atuando em demandas cíveis e de consumo e em casos que exigem análise cuidadosa dos fatos, dos documentos e das alternativas jurídicas disponíveis.
              </p>
              
              <p>
                A experiência adquirida ao longo dessa trajetória me ensinou que cada caso exige uma análise própria: compreender os fatos, identificar os riscos, avaliar as provas disponíveis e definir a estratória jurídica mais adequada.
              </p>

              <p>
                Meu trabalho é pautado pela análise individual de cada situação, pela comunicação clara com o cliente e pela busca de soluções jurídicas responsáveis, construídas de acordo com as características e necessidades de cada caso.
              </p>

              <p className="font-serif-elegant text-lg italic text-gold/80 border-l-2 border-gold/30 pl-4 mt-8">
                "Cada caso é único e merece atenção individual, aliando conhecimento técnico, estratégia e sensibilidade humana."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
