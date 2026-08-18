import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Search, ClipboardList } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Primeiro contato",
    description:
      "Você descreve a situação por WhatsApp ou e-mail, com os documentos que já tiver em mãos.",
  },
  {
    icon: Search,
    title: "Análise do caso",
    description:
      "Os fatos e documentos são examinados individualmente para identificar as questões jurídicas envolvidas.",
  },
  {
    icon: ClipboardList,
    title: "Orientação",
    description:
      "Você recebe informação clara sobre as alternativas cabíveis, os caminhos possíveis e os próximos passos.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="atendimento" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="gold-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Como funciona o <span className="text-gradient-gold">atendimento</span>
          </h2>
          <p className="font-serif-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e transparente, do primeiro contato à orientação
            jurídica.
          </p>
        </motion.div>

        <ol className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto list-none">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="h-full"
            >
              <div className="h-full bg-gradient-card p-8 rounded-sm border border-border/50">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="font-serif text-gold/70 text-lg">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorksSection;
