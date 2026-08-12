import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const problemas = [
  {
    title: "Comprou um produto e ele apresentou defeito?",
    description: `Quando um produto apresenta defeito, o consumidor pode ter direito ao reparo, à substituição do produto, ao abatimento do preço ou, em determinadas situações, à devolução do valor pago. É importante analisar o problema, a data da compra, os documentos e as tentativas de solução realizadas com o fornecedor.

A análise do caso permite verificar quais direitos podem ser exercidos e qual é a medida mais adequada para buscar uma solução.`,
  },
  {
    title: "Contratou um serviço e a empresa não resolveu o problema?",
    description: "Serviços mal prestados ou não cumpridos podem gerar direitos que merecem uma análise cuidadosa.",
  },
  {
    title: "Recebeu uma cobrança que não reconhece?",
    description: "Cobranças indevidas ou abusivas precisam ser verificadas para entender se podem ser contestadas.",
  },
  {
    title: "Seu nome foi negativado por uma dívida que você não reconhece?",
    description: "A negativação indevida pode causar prejuízos e, em muitos casos, pode ser questionada judicialmente.",
  },
  {
    title: "Comprou pela internet e teve problemas com a entrega, cancelamento ou reembolso?",
    description: "As compras online têm regras específicas que protegem o consumidor em caso de atraso, arrependimento ou descumprimento.",
  },
  {
    title: "Está enfrentando uma situação de consumo e não sabe quais são seus direitos?",
    description: "Às vezes, a principal dificuldade é entender se o caso envolve apenas um mal-entendido ou uma questão jurídica relevante.",
  },
];

const DireitoConsumidor = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mb-6" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Direito do <span className="text-gradient-gold">Consumidor</span>
            </h1>
            <p className="font-serif-elegant text-xl md:text-2xl text-muted-foreground mb-6">
              Problemas com empresas, cobranças indevidas, produtos ou serviços que não foram resolvidos? Entenda seus direitos e saiba como podemos avaliar o seu caso.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Cada situação é analisada individualmente, considerando os fatos, os documentos disponíveis e as possibilidades jurídicas do caso.
            </p>
            <button
              onClick={() => navigate("/obrigado")}
              className="px-10 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm shadow-gold hover:shadow-lg transition-all duration-300"
            >
              Falar sobre meu caso
            </button>
          </motion.div>
        </div>
      </section>

      {/* Breve introdução */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Quando um problema de consumo precisa de uma análise jurídica
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Problemas com produtos, serviços, cobranças ou contratos podem gerar dúvidas sobre quais são os direitos do consumidor e quais medidas podem ser tomadas. Em muitos casos, a primeira dificuldade é justamente entender se a situação ultrapassou um simples problema de atendimento e passou a exigir uma providência jurídica.
              </p>
              <p>
                Por isso, o primeiro passo é compreender o que aconteceu, analisar os documentos disponíveis e identificar quais direitos podem estar envolvidos. A partir dessa análise, é possível avaliar as alternativas mais adequadas para cada situação.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problemas atendidos */}
      <section className="py-24 bg-gradient-dark relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Você está enfrentando algum <span className="text-gradient-gold">destes problemas</span>?
            </h2>
            <p className="font-serif-elegant text-xl text-muted-foreground max-w-2xl mx-auto">
              Reconhecer a situação é o primeiro passo para entender se existe uma possibilidade de análise jurídica.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {problemas.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-gradient-card p-7 rounded-sm border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-gold"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <AlertCircle className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{p.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => navigate("/obrigado")}
              className="px-10 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm shadow-gold hover:shadow-lg transition-all duration-300"
            >
              Falar sobre meu caso
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DireitoConsumidor;
