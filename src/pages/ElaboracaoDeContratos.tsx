import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  PenTool,
  Handshake,
  Building2,
  Briefcase,
  ShieldCheck,
  Search,
  FolderCheck,
  Scale,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PAGE_TITLE = "Elaboração e Revisão de Contratos em São Paulo — Roberto Lima";
const PAGE_DESCRIPTION =
  "Elaboração e revisão de contratos particulares e empresariais em São Paulo: análise de cláusulas, identificação de riscos jurídicos e adequação à operação concreta.";
const PAGE_URL = "https://www.robertolimajuridico.com.br/elaboracao-de-contratos";
const WHATSAPP_MESSAGE = "Olá, gostaria de falar sobre elaboração ou revisão de contratos.";

const problemas = [
  {
    icon: FileText,
    number: "01",
    title: "Contratos de prestação de serviços",
    description:
      "Elaboração e revisão de contratos que regulam serviços profissionais, técnicos ou comerciais, com atenção a obrigações, prazos, pagamentos e responsabilidades.",
  },
  {
    icon: Handshake,
    number: "02",
    title: "Contratos de compra e venda",
    description:
      "Instrumentos que disciplinam a transferência de bens, definição de preço, forma de pagamento, entrega, garantias e responsabilidades das partes.",
  },
  {
    icon: Building2,
    number: "03",
    title: "Contratos empresariais e societários",
    description:
      "Acordos entre sócios, contratos de parceria, joint ventures, franquias e demais instrumentos relacionados à atividade empresarial.",
  },
  {
    icon: Briefcase,
    number: "04",
    title: "Contratos de trabalho e honorários",
    description:
      "Elaboração e revisão de instrumentos que envolvem relações de trabalho, prestação de serviços autônomos, honorários profissionais e contratos com colaboradores.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Contratos de locação e uso de bens",
    description:
      "Instrumentos de locação residencial ou comercial, comodato, cessão de uso e outros contratos relacionados à disponibilização de bens.",
  },
  {
    icon: PenTool,
    number: "06",
    title: "Contratos específicos e sob medida",
    description:
      "Instrumentos personalizados para operações particulares, adaptados às características da negociação e aos interesses das partes envolvidas.",
  },
];

const blocosAnalise = [
  {
    icon: Search,
    title: "Análise da operação concreta",
    description:
      "Entendimento do objeto do contrato, das partes envolvidas, das condições de negociação e dos riscos específicos de cada operação.",
  },
  {
    icon: FolderCheck,
    title: "Revisão e adequação das cláusulas",
    description:
      "Verificação de direitos, obrigações, prazos, pagamentos, garantias, responsabilidades, hipóteses de rescisão e demais cláusulas relevantes.",
  },
  {
    icon: Scale,
    title: "Identificação e prevenção de riscos",
    description:
      "Apontamento de pontos de atenção, inconsistências, lacunas ou cláusulas que possam gerar insegurança jurídica ou conflitos futuros.",
  },
];

const etapas = [
  {
    number: "01",
    title: "Entendimento da operação",
    text: "Reunião inicial para compreender o objeto do contrato, as partes, as condições de negociação e as expectativas envolvidas na operação.",
  },
  {
    number: "02",
    title: "Análise dos documentos e da proposta",
    text: "Exame dos documentos, minutas, propostas ou contratos já existentes, identificando pontos de atenção e cláusulas que precisam ser ajustadas.",
  },
  {
    number: "03",
    title: "Elaboração ou revisão do contrato",
    text: "Redação ou adaptação das cláusulas de forma clara, objetiva e adequada à operação concreta, buscando reduzir riscos e refletir os interesses das partes.",
  },
  {
    number: "04",
    title: "Acompanhamento da formalização",
    text: "Orientação quanto à assinatura, eventual registro, forma adicional exigida por lei e demais providências para a validade e eficácia do contrato.",
  },
];

const faq = [
  {
    q: "Por que um contrato precisa ser personalizado?",
    a: "Contratos padrão nem sempre refletem a realidade da operação. Cada negociação envolve riscos, prazos, condições de pagamento e responsabilidades diferentes. Um contrato adequado à operação concreta reduz a chance de interpretações divergentes e de conflitos futuros.",
  },
  {
    q: "O advogado pode revisar um contrato que já me foi apresentado?",
    a: "Sim. A revisão jurídica de contratos já elaborados é uma das formas de atuação. O objetivo é identificar cláusulas que possam ser prejudiciais, sugerir ajustes e orientar o cliente sobre os riscos envolvidos.",
  },
  {
    q: "Quais cláusulas são importantes em um contrato?",
    a: "Depende do tipo de contrato. De forma geral, merecem atenção o objeto, as obrigações das partes, os prazos, o preço e a forma de pagamento, as garantias, as responsabilidades, as hipóteses de rescisão, as penalidades e a forma de solução de conflitos. A relevância de cada cláusula varia conforme a operação.",
  },
  {
    q: "Um contrato bem feito elimina todos os riscos jurídicos?",
    a: "Não. Nenhum contrato consegue eliminar todos os riscos. O objetivo é identificar, prevenir e reduzir riscos, deixar claras as obrigações das partes e criar mecanismos que facilitem a resolução de eventuais problemas.",
  },
  {
    q: "Contratos de quais áreas podem ser elaborados?",
    a: "Pode ser feita a elaboração ou revisão de diversos instrumentos, como contratos de prestação de serviços, compra e venda, locação, parceria, franquia, honorários, empresariais, sociedade e outros instrumentos conforme a necessidade do cliente.",
  },
  {
    q: "Contrato verbal tem valor jurídico?",
    a: "Alguns contratos podem ser celebrados verbalmente, mas a forma escrita é recomendada para maior segurança, especialmente em operações que envolvem valores elevados, prazos longos ou obrigações complexas. Em alguns casos, a lei exige a forma escrita ou outras formalidades.",
  },
  {
    q: "Como funciona o processo de elaboração de um contrato?",
    a: "O processo começa com o entendimento da operação, seguido da análise de documentos e propostas, da elaboração ou revisão da minuta e, por fim, da orientação sobre a assinatura e as formalidades necessárias. Cada contrato é tratado de forma individualizada.",
  },
];


const ElaboracaoDeContratos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/elaboracao-de-contratos"
        schemas={[
          serviceSchema({
            name: "Elaboração e revisão de contratos em São Paulo",
            description: PAGE_DESCRIPTION,
            path: "/elaboracao-de-contratos",
          }),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Elaboração de Contratos", path: "/elaboracao-de-contratos" },
          ]),
          faqSchema(faq),
        ]}
      />
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
              Elaboração de Contratos: clareza, adequação e redução de riscos
            </h1>
            <p className="font-serif-elegant text-xl md:text-2xl text-muted-foreground mb-8">
              Contratos claros e adequados à operação são instrumentos essenciais para reduzir riscos jurídicos. Trabalhamos com elaboração e revisão de contratos particulares e empresariais, adaptando cada cláusula à realidade da negociação.
            </p>
            <button
              onClick={() => navigate("/obrigado", { state: { message: WHATSAPP_MESSAGE } })}
              className="px-10 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm shadow-gold hover:shadow-lg transition-all duration-300"
            >
              Falar sobre meu caso
            </button>
            <div className="gold-line mt-10" />
          </motion.div>
        </div>
      </section>

      {/* Chamada de identificação */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Seu contrato reflete a operação que você está fechando?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-justify md:text-center">
              Muitos problemas jurídicos poderiam ser minimizados com um contrato bem estruturado. A análise prévia das cláusulas, das responsabilidades e dos cenários de risco ajuda a proteger os interesses das partes envolvidas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problemas */}
      <section className="py-24 bg-gradient-dark relative overflow-hidden">
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
              Tipos de contrato que podemos elaborar ou revisar
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">
            {problemas.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-card p-7 rounded-sm border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-gold"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-gold/60 text-xs font-medium tracking-wider block mb-1">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-14 pt-8 border-t border-gold/20">
            <p className="font-serif-elegant text-lg md:text-xl text-foreground/90 text-center leading-relaxed">
              A lista acima é apenas exemplificativa. Cada contrato é elaborado ou revisado de acordo com a operação concreta, sem uso de modelos genéricos que não reflitam a realidade do negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Um contrato não deve ser apenas padrão */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
              Um contrato não deve ser apenas um documento padrão
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
              <p>
                Modelos genéricos podem deixar de fora cláusulas importantes para uma operação específica. Um contrato adequado precisa refletir a negociação real: quem são as partes, qual é o objeto, quais são as obrigações, como será o pagamento, o que acontece em caso de descumprimento e como serão resolvidos os conflitos.
              </p>
              <p>
                A elaboração ou revisão jurídica busca identificar riscos, esclarecer pontos obscuros e criar um instrumento que esteja alinhado à operação concreta e aos interesses dos envolvidos. O objetivo não é eliminar todos os riscos, mas reduzi-los e deixar as relações mais seguras.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">
            {blocosAnalise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-card p-7 rounded-sm border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-gold"
              >
                <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como podemos ajudar */}
      <section className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-center">
              Como podemos ajudar
            </h2>
            <p className="text-muted-foreground leading-relaxed text-justify mb-12">
              Cada contrato exige uma análise própria. O primeiro passo é compreender a operação, identificar os riscos e avaliar como o instrumento pode ser ajustado para refletir a negociação real.
            </p>

            <div className="space-y-12">
              {etapas.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="flex flex-col md:flex-row gap-6 md:gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <span className="font-serif text-4xl md:text-5xl text-gold/40 leading-none">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 pt-1 md:pt-2">
                    <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Por que agir rapidamente */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
              Por que revisar ou elaborar um contrato antes de assinar?
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
              <p>
                Assinar um contrato sem revisão jurídica pode comprometer direitos, criar obrigações desproporcionais ou deixar pontos importantes sem regulação. Após a assinatura, alterações podem ser mais difíceis ou inviáveis.
              </p>
              <p>
                A análise prévia permite identificar cláusulas abusivas, omissões, riscos contratuais e incompatibilidades entre o que foi negociado e o que está escrito. Quanto mais cedo o contrato for revisado, maiores as chances de ajustá-lo de forma favorável à operação.
              </p>
              <p>
                Empresas, prestadores de serviços, compradores, vendedores e parceiros comerciais podem se beneficiar de um instrumento que reflita fielmente os termos acordados e reduza a insegurança jurídica.
              </p>
            </div>
            <div className="mt-14 pt-8 border-t border-gold/20">
              <p className="font-serif-elegant text-lg md:text-xl text-foreground/90 text-center leading-relaxed">
                Se você precisa elaborar ou revisar um contrato, reúna as informações da negociação e procure orientação jurídica para ajustar o instrumento à operação real.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
              Perguntas frequentes sobre elaboração de contratos
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-border/50">
                  <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-gold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-justify">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Institucional */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">
              Atuação jurídica personalizada
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cada contrato é analisado individualmente, considerando a operação, as partes envolvidas, os riscos identificados e os objetivos do cliente. A elaboração e a revisão são conduzidas de acordo com as particularidades de cada negociação.
            </p>
            <button
              onClick={() => navigate("/", { state: { section: "sobre" } })}
              className="px-8 py-3 bg-transparent border border-gold/50 text-gold text-sm tracking-wider hover:bg-gold hover:text-primary-foreground transition-all duration-300"
            >
              Conheça o escritório
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-dark relative overflow-hidden">
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
              Precisa elaborar ou revisar um contrato?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Contratos mal redigidos ou genéricos podem gerar insegurança e conflitos. Entre em contato para apresentar sua operação e verificar como o instrumento pode ser adequado ao seu caso.
            </p>
            <button
              onClick={() => navigate("/obrigado", { state: { message: WHATSAPP_MESSAGE } })}
              className="px-10 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm shadow-gold hover:shadow-lg transition-all duration-300"
            >
              Falar sobre meu caso
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton message={WHATSAPP_MESSAGE} />
    </div>
  );
};

export default ElaboracaoDeContratos;
