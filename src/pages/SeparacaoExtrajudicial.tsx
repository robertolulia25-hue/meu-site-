import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Scale,
  FileCheck,
  ScrollText,
  HeartHandshake,
  PenTool,
  Search,
  FolderCheck,
  ShieldCheck,
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

const PAGE_TITLE = "Separação de Fato e Inventário Extrajudicial | Declaração e Orientação Jurídica — Roberto Lima";
const PAGE_DESCRIPTION =
  "Orientação jurídica para a declaração de Separação de Fato e Inventário Extrajudicial: análise da documentação, verificação dos requisitos e acompanhamento da lavratura da escritura pública.";
const PAGE_URL = "https://www.robertolimajuridico.com.br/separacao-extrajudicial";
const WHATSAPP_MESSAGE = "Olá, gostaria de falar sobre uma declaração de Separação de Fato e Inventário Extrajudicial.";

const problemas = [
  {
    icon: Users,
    number: "01",
    title: "Casal de acordo quanto ao fim da convivência",
    description:
      "Ambos reconhecem que a vida em comum terminou e desejam registrar isso formalmente, por escritura pública, sem litígio.",
  },
  {
    icon: HeartHandshake,
    number: "02",
    title: "Definição da data da separação de fato",
    description:
      "Registro da data em que cessou a comunhão plena de vida, elemento que pode ter reflexos patrimoniais e servir de referência para medidas futuras.",
  },
  {
    icon: Scale,
    number: "03",
    title: "Organização jurídica antes do divórcio",
    description:
      "Casais que ainda não pretendem divorciar-se, mas querem delimitar formalmente o momento em que a convivência conjugal chegou ao fim.",
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Revisão da documentação necessária",
    description:
      "Análise de certidão de casamento, documentos pessoais e demais informações exigidas para a lavratura da escritura em cartório de notas.",
  },
  {
    icon: ScrollText,
    number: "05",
    title: "Escritura pública declaratória",
    description:
      "Acompanhamento na redação e na lavratura da escritura, com atenção ao conteúdo próprio desse ato: a declaração de separação de fato consensual.",
  },
  {
    icon: PenTool,
    number: "06",
    title: "Próximos passos: divórcio e demais medidas",
    description:
      "Avaliação, conforme o caso, do divórcio consensual em cartório — inclusive havendo filhos menores, desde que guarda, convivência e alimentos já estejam definidos judicialmente — ou da via judicial.",
  },
];

const blocosAnalise = [
  {
    icon: Search,
    title: "Análise da situação do casal",
    description:
      "Verificação do regime de bens, da existência de filhos, da data em que a convivência terminou e dos efeitos que o casal pretende alcançar.",
  },
  {
    icon: FolderCheck,
    title: "Organização da documentação",
    description:
      "Reunião e conferência de certidão de casamento atualizada, documentos de identidade, comprovantes de residência e informações patrimoniais relevantes.",
  },
  {
    icon: ShieldCheck,
    title: "Acompanhamento da formalização",
    description:
      "Orientação quanto ao conteúdo da escritura pública, acompanhamento da lavratura em cartório e das providências posteriores aplicáveis.",
  },
];

const etapas = [
  {
    number: "01",
    title: "Entendimento do caso",
    text: "Conversa inicial para compreender a situação do casal, a existência de consenso, a data em que a convivência terminou e os objetivos de cada um.",
  },
  {
    number: "02",
    title: "Definição da medida adequada",
    text: "Avaliação sobre o cabimento da declaração de Separação de Fato e Inventário Extrajudicial e sobre a necessidade de outras medidas, como divórcio, partilha ou questões relativas aos filhos.",
  },
  {
    number: "03",
    title: "Organização dos documentos e do conteúdo da escritura",
    text: "Orientação sobre a documentação exigida e sobre o que deve constar da escritura pública, respeitando o objeto próprio desse ato.",
  },
  {
    number: "04",
    title: "Acompanhamento da lavratura em cartório",
    text: "Acompanhamento da assinatura da escritura e das providências posteriores, com orientação sobre os próximos passos aplicáveis ao caso.",
  },
];

const faq = [
  {
    q: "O que é a declaração de Separação de Fato e Inventário Extrajudicial?",
    a: "É um ato consensual, formalizado por escritura pública em cartório de notas, no qual os cônjuges declaram que a convivência conjugal chegou ao fim e indicam desde quando. Seu objeto é essa declaração, e não a dissolução do casamento.",
  },
  {
    q: "A Separação de Fato e Inventário Extrajudicial é o mesmo que divórcio?",
    a: "Não. O casamento continua existindo até o divórcio. A escritura apenas registra formalmente que a comunhão plena de vida cessou, o que pode ser relevante como marco temporal para diversos efeitos.",
  },
  {
    q: "A escritura resolve partilha, guarda ou alimentos?",
    a: "Não. Essas questões têm tratamento próprio e não são solucionadas dentro da escritura de separação de fato. Elas podem ser objeto de acordo específico, de escritura de divórcio quando cabível, ou de decisão judicial.",
  },
  {
    q: "Quem tem filhos menores pode usar a via de cartório?",
    a: "A declaração de separação de fato tem objeto próprio e não depende da inexistência de filhos. Já o divórcio consensual em cartório é admitido mesmo havendo filhos menores ou incapazes, desde que guarda, convivência e alimentos já tenham sido definidos judicialmente. Cada caso deve ser analisado.",
  },
  {
    q: "Quais documentos costumam ser exigidos?",
    a: "Em regra, certidão de casamento atualizada, documentos de identidade e comprovantes de residência dos cônjuges, além de informações sobre o regime de bens e o patrimônio, conforme a orientação do cartório.",
  },
  {
    q: "Por que registrar a data da separação de fato?",
    a: "A data em que a convivência terminou pode influenciar aspectos patrimoniais e servir de referência para medidas posteriores. Registrá-la por escritura confere segurança e evita discussões sobre esse marco.",
  },
  {
    q: "Por que contar com um advogado?",
    a: "O advogado ajuda a identificar a medida adequada ao caso, a organizar a documentação, a revisar o conteúdo da escritura e a planejar os próximos passos, como o divórcio e as questões patrimoniais ou relativas aos filhos.",
  },
];


const SeparacaoExtrajudicial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/separacao-extrajudicial"
        schemas={[
          serviceSchema({
            name: "Separação de Fato e Inventário Extrajudicial com orientação jurídica em São Paulo",
            description: PAGE_DESCRIPTION,
            path: "/separacao-extrajudicial",
          }),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Separação de Fato e Inventário Extrajudicial", path: "/separacao-extrajudicial" },
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
              Separação de Fato e Inventário Extrajudicial: orientação jurídica para a declaração
            </h1>
            <p className="font-serif-elegant text-xl md:text-2xl text-muted-foreground mb-8">
              Por escritura pública, o casal pode declarar que a convivência conjugal chegou ao fim, registrando formalmente a data da separação de fato. O acompanhamento jurídico auxilia na análise do caso, na organização dos documentos e na correta formalização em cartório.
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
              Querem registrar formalmente que a vida em comum chegou ao fim?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-justify md:text-center">
              A declaração de separação de fato é feita em cartório, de forma consensual, e tem objeto próprio: registrar que a comunhão plena de vida cessou e desde quando. Questões como partilha, guarda, convivência e alimentos são tratadas em medidas específicas, avaliadas conforme o caso.
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
              Em quais situações a declaração de separação de fato pode ser indicada
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
              A declaração de separação de fato não substitui o divórcio nem resolve, por si só, partilha, guarda ou alimentos. A análise prévia do caso é indispensável para definir as medidas adequadas.
            </p>
          </div>
        </div>
      </section>

      {/* Quando o procedimento extrajudicial não se aplica */}
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
              O que é analisado antes do procedimento
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
              <p>
                Antes da lavratura da escritura, verifica-se se há consenso entre os cônjuges quanto ao fim da convivência, qual a data da separação de fato e quais efeitos o casal pretende alcançar. Havendo filhos, as questões de guarda, convivência e alimentos têm tratamento próprio e devem ser avaliadas caso a caso.
              </p>
              <p>
                A análise também envolve a revisão da documentação do casal, o regime de bens e os reflexos patrimoniais da data da separação de fato, além de avaliar se o caso comporta divórcio consensual em cartório ou exige a via judicial.
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
              Cada situação exige uma análise própria. O primeiro passo é compreender o contexto do casal, verificar a documentação disponível e avaliar qual caminho é apropriado: a declaração de separação de fato, o divórcio consensual em cartório ou a via judicial.
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
              Por que agir com organização?
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
              <p>
                O fim da convivência envolve questões pessoais, patrimoniais e, muitas vezes, emocionais. Registrar formalmente a data da separação de fato pode ser relevante para delimitar responsabilidades e reflexos patrimoniais a partir daquele momento.
              </p>
              <p>
                Adiar a análise jurídica ou subestimar a documentação pode gerar dúvidas sobre a data do fim da convivência, atrasos e a necessidade de correções posteriores. A orientação prévia ajuda a identificar os requisitos e preparar o caso.
              </p>
              <p>
                Quanto mais completa for a documentação e mais claro for o consenso do casal, mais segura tende a ser a formalização em cartório.
              </p>
            </div>
            <div className="mt-14 pt-8 border-t border-gold/20">
              <p className="font-serif-elegant text-lg md:text-xl text-foreground/90 text-center leading-relaxed">
                Se você pretende formalizar a separação de fato, reúna os documentos disponíveis e procure orientação jurídica para verificar qual medida se aplica ao seu caso.
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
              Perguntas frequentes sobre Separação de Fato e Inventário Extrajudicial
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
              Cada caso é analisado individualmente, considerando a situação do casal, a documentação disponível e as medidas cabíveis em cartório ou em juízo. A orientação jurídica é conduzida de acordo com as características de cada situação.
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
              Pensa em declarar a separação de fato?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              A declaração de Separação de Fato e Inventário Extrajudicial pode ser o primeiro passo para organizar juridicamente o fim da convivência. Entre em contato para apresentar sua situação e verificar as medidas adequadas.
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

export default SeparacaoExtrajudicial;
