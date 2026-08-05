import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Scale, FileSearch, MessageSquare, Handshake, Clock, Award, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const oQueFazemos = [
  {
    icon: Scale,
    title: "Placeholder — Ações judiciais",
    description: "Texto temporário descrevendo a atuação em ações judiciais na área do direito do consumidor.",
  },
  {
    icon: Handshake,
    title: "Placeholder — Negociação extrajudicial",
    description: "Texto temporário descrevendo tratativas e acordos extrajudiciais com fornecedores e empresas.",
  },
  {
    icon: FileSearch,
    title: "Placeholder — Análise de contratos",
    description: "Texto temporário descrevendo a análise de cláusulas e identificação de práticas abusivas.",
  },
  {
    icon: ShieldCheck,
    title: "Placeholder — Consultoria preventiva",
    description: "Texto temporário descrevendo orientação preventiva antes de assinar ou contratar.",
  },
];

const problemas = [
  "Placeholder — Cobrança indevida ou abusiva",
  "Placeholder — Produto com defeito e recusa de troca",
  "Placeholder — Serviço não prestado ou mal prestado",
  "Placeholder — Negativação indevida do nome",
  "Placeholder — Publicidade enganosa",
  "Placeholder — Cancelamento e rescisão de contratos",
];

const etapas = [
  { step: "01", title: "Placeholder — Primeiro contato", description: "Texto temporário sobre o contato inicial e triagem do caso." },
  { step: "02", title: "Placeholder — Análise do caso", description: "Texto temporário sobre a análise de documentos e viabilidade." },
  { step: "03", title: "Placeholder — Estratégia", description: "Texto temporário sobre a definição da melhor estratégia jurídica." },
  { step: "04", title: "Placeholder — Acompanhamento", description: "Texto temporário sobre o acompanhamento até a solução final." },
];

const diferenciais = [
  { icon: Award, title: "Placeholder — Experiência", description: "Texto temporário sobre a experiência do escritório." },
  { icon: Clock, title: "Placeholder — Agilidade", description: "Texto temporário sobre agilidade no atendimento." },
  { icon: Users, title: "Placeholder — Atendimento pessoal", description: "Texto temporário sobre atendimento direto e personalizado." },
  { icon: MessageSquare, title: "Placeholder — Comunicação clara", description: "Texto temporário sobre transparência e comunicação." },
];

const faq = [
  { q: "Placeholder — Pergunta frequente 1?", a: "Resposta temporária. O conteúdo jurídico definitivo será elaborado posteriormente." },
  { q: "Placeholder — Pergunta frequente 2?", a: "Resposta temporária. O conteúdo jurídico definitivo será elaborado posteriormente." },
  { q: "Placeholder — Pergunta frequente 3?", a: "Resposta temporária. O conteúdo jurídico definitivo será elaborado posteriormente." },
  { q: "Placeholder — Pergunta frequente 4?", a: "Resposta temporária. O conteúdo jurídico definitivo será elaborado posteriormente." },
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
            <p className="font-serif-elegant text-xl md:text-2xl text-muted-foreground mb-10">
              Texto temporário de apresentação da área. O conteúdo definitivo será elaborado posteriormente.
            </p>
            <button
              onClick={() => navigate("/obrigado")}
              className="px-10 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm shadow-gold hover:shadow-lg transition-all duration-300"
            >
              Falar com o Advogado
            </button>
          </motion.div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-24 bg-navy relative overflow-hidden">
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
              O que <span className="text-gradient-gold">fazemos</span>
            </h2>
            <p className="font-serif-elegant text-xl text-muted-foreground max-w-2xl mx-auto">
              Texto temporário descrevendo os serviços prestados nesta área.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {oQueFazemos.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group h-full bg-gradient-card p-8 rounded-sm border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-gold"
              >
                <div className="w-14 h-14 mb-6 rounded-sm bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principais problemas atendidos */}
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
              Principais <span className="text-gradient-gold">problemas atendidos</span>
            </h2>
            <p className="font-serif-elegant text-xl text-muted-foreground max-w-2xl mx-auto">
              Lista temporária de situações comuns atendidas pelo escritório.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {problemas.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-start gap-3 bg-gradient-card p-5 rounded-sm border border-border/50 hover:border-gold/30 transition-colors duration-300"
              >
                <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-muted-foreground text-sm leading-relaxed">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona o atendimento */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Como funciona o <span className="text-gradient-gold">atendimento</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {etapas.map((e, i) => (
              <motion.div
                key={e.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative bg-gradient-card p-8 rounded-sm border border-border/50 hover:border-gold/30 transition-all duration-500"
              >
                <span className="font-serif text-4xl text-gradient-gold block mb-4">{e.step}</span>
                <h3 className="font-serif text-lg text-foreground mb-3">{e.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{e.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
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
              Diferenciais do <span className="text-gradient-gold">escritório</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {diferenciais.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group text-center bg-gradient-card p-8 rounded-sm border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-gold"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-sm bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <d.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-navy relative overflow-hidden">
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
              Perguntas <span className="text-gradient-gold">frequentes</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${i}`}
                  className="bg-gradient-card border border-border/50 rounded-sm px-6"
                >
                  <AccordionTrigger className="font-serif text-left text-foreground hover:text-gold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center bg-gradient-card p-10 md:p-14 rounded-sm border border-gold/30 shadow-gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
              Precisa de <span className="text-gradient-gold">orientação</span>?
            </h2>
            <p className="font-serif-elegant text-xl text-muted-foreground mb-8">
              Texto temporário de chamada final para contato.
            </p>
            <button
              onClick={() => navigate("/obrigado")}
              className="px-10 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm shadow-gold hover:shadow-lg transition-all duration-300"
            >
              Falar no WhatsApp
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
