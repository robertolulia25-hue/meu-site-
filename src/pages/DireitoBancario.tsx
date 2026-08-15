import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShieldAlert,
  Smartphone,
  FileSignature,
  CreditCard,
  Receipt,
  Lock,
  Search,
  FolderCheck,
  Scale,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PAGE_TITLE = "Direito Bancário | Fraudes, PIX e Problemas com Bancos — Roberto Lima";
const PAGE_DESCRIPTION =
  "Atuação jurídica em casos de fraudes bancárias, PIX não reconhecido, empréstimos não contratados, cobranças indevidas e problemas com instituições financeiras.";
const PAGE_URL = "https://www.robertolimajuridico.com.br/direito-bancario";
const WHATSAPP_MESSAGE = "Olá, gostaria de falar sobre um problema bancário.";

const problemas = [
  {
    icon: ShieldAlert,
    number: "01",
    title: "Fraudes e golpes bancários",
    description:
      "Movimentações realizadas por terceiros, invasão de conta, transferências fraudulentas e outras situações em que o cliente sofre prejuízo em razão de uma fraude.",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "PIX não reconhecido ou fraudulento",
    description:
      "Transferências via PIX realizadas sem autorização, inclusive em situações envolvendo golpes, acesso indevido à conta ou falhas de segurança.",
  },
  {
    icon: FileSignature,
    number: "03",
    title: "Empréstimos e contratos não reconhecidos",
    description:
      "Empréstimos, financiamentos, cartões ou outros produtos bancários contratados sem autorização do cliente ou em circunstâncias que indiquem irregularidade.",
  },
  {
    icon: CreditCard,
    number: "04",
    title: "Compras e transações não reconhecidas",
    description:
      "Operações realizadas com cartão, conta ou outros meios de pagamento que não foram feitas pelo titular.",
  },
  {
    icon: Receipt,
    number: "05",
    title: "Cobranças e descontos indevidos",
    description:
      "Débitos, tarifas, parcelas ou descontos realizados de maneira indevida, especialmente quando o banco não apresenta solução adequada após a contestação.",
  },
  {
    icon: Lock,
    number: "06",
    title: "Falhas de segurança e responsabilidade do banco",
    description:
      "Casos em que as circunstâncias da fraude ou da operação questionada indicam possível falha nos mecanismos de segurança, prevenção ou atendimento da instituição financeira.",
  },
];

const blocosAnalise = [
  {
    icon: Search,
    title: "Análise do ocorrido",
    description:
      "Verificação de como a operação foi realizada, quais mecanismos de segurança estavam envolvidos, como o banco respondeu à contestação e quais circunstâncias podem indicar falha na prestação do serviço.",
  },
  {
    icon: FolderCheck,
    title: "Preservação e organização das provas",
    description:
      "Extratos, comprovantes, protocolos, mensagens, registros de atendimento, documentos da contestação e demais elementos que possam demonstrar a fraude, o prejuízo e as providências adotadas pelo cliente.",
  },
  {
    icon: Scale,
    title: "Medidas jurídicas cabíveis",
    description:
      "Quando houver fundamento, podem ser adotadas medidas para interromper cobranças ou movimentações indevidas, buscar a restituição dos valores e pleitear eventual indenização pelos prejuízos comprovados, inclusive mediante tutela de urgência quando presentes os requisitos legais.",
  },
];

const etapas = [
  {
    number: "01",
    title: "Análise do caso",
    text: "Entendimento dos fatos, identificação da operação questionada e avaliação dos documentos, registros e informações disponíveis.",
  },
  {
    number: "02",
    title: "Avaliação da responsabilidade",
    text: "Análise da conduta da instituição financeira, dos mecanismos de segurança envolvidos e das circunstâncias que podem caracterizar falha na prestação do serviço.",
  },
  {
    number: "03",
    title: "Definição da estratégia jurídica",
    text: "Orientação sobre as medidas administrativas ou judiciais cabíveis, de acordo com as características e a urgência de cada situação.",
  },
  {
    number: "04",
    title: "Atuação para proteção e reparação dos direitos",
    text: "Adoção das medidas necessárias para buscar a interrupção de cobranças ou operações indevidas, a recuperação de valores e eventual reparação dos prejuízos, quando juridicamente cabível.",
  },
];

const faq = [
  {
    q: "O banco é responsável por uma fraude realizada na minha conta?",
    a: "A responsabilidade da instituição financeira depende das circunstâncias do caso. É necessário analisar como a fraude ocorreu, quais mecanismos de segurança estavam envolvidos, como a operação foi realizada e quais providências foram adotadas pelo banco após a comunicação do problema.",
  },
  {
    q: "Fizeram um PIX que eu não reconheço. O que devo fazer?",
    a: "É importante comunicar imediatamente a instituição financeira, contestar a operação e guardar protocolos, comprovantes e demais registros relacionados ao ocorrido. A documentação reunida pode ser fundamental para avaliar as medidas administrativas e judiciais cabíveis.",
  },
  {
    q: "Apareceu um empréstimo que eu não contratei. Posso contestar?",
    a: "Sim. Uma contratação não reconhecida pode ser contestada e deve ser investigada. É importante reunir o contrato ou os dados da operação, extratos, comprovantes e protocolos de atendimento para verificar as circunstâncias da contratação e eventual responsabilidade da instituição financeira.",
  },
  {
    q: "O banco negou minha contestação. O que posso fazer?",
    a: "A negativa administrativa não impede, por si só, a análise judicial do caso. É possível avaliar os documentos, a justificativa apresentada pelo banco e as circunstâncias da operação para verificar se existem fundamentos para adoção de medidas judiciais.",
  },
  {
    q: "Posso pedir a devolução do dinheiro perdido em uma fraude?",
    a: "Dependendo das circunstâncias e da responsabilidade identificada, pode ser possível buscar judicialmente a restituição dos valores. A existência do direito e a extensão da reparação dependem da análise concreta do caso e das provas disponíveis.",
  },
  {
    q: "Posso pedir indenização por danos morais?",
    a: "Em determinadas situações, os prejuízos decorrentes de uma fraude ou falha bancária podem justificar pedido de indenização. Entretanto, o cabimento dos danos morais deve ser analisado conforme as circunstâncias concretas, não sendo consequência automática de toda ocorrência bancária.",
  },
  {
    q: "Preciso tentar resolver o problema diretamente com o banco antes de procurar um advogado?",
    a: "Não existe uma resposta única para todos os casos. A tentativa administrativa pode ser adequada em determinadas situações, mas casos urgentes ou que já foram objeto de negativa podem exigir outra estratégia. A orientação depende das circunstâncias específicas.",
  },
];

const setMeta = (selector: string, create: () => HTMLElement, apply: (el: Element) => void) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  apply(el);
  return el;
};

const DireitoBancario = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    // Tags cujo valor original é restaurado ao sair da rota
    const managed: { el: Element; attr: string; previous: string | null }[] = [];

    const applyTag = (
      selector: string,
      create: () => HTMLElement,
      attr: string,
      value: string
    ) => {
      const el = setMeta(selector, create, (node) => {
        managed.push({ el: node, attr, previous: node.getAttribute(attr) });
        node.setAttribute(attr, value);
      });
      return el;
    };

    const meta = (name: string, value: string) =>
      applyTag(
        `meta[name="${name}"]`,
        () => Object.assign(document.createElement("meta"), { name }),
        "content",
        value
      );

    const ogMeta = (property: string, value: string) =>
      applyTag(
        `meta[property="${property}"]`,
        () => {
          const el = document.createElement("meta");
          el.setAttribute("property", property);
          return el;
        },
        "content",
        value
      );

    meta("description", PAGE_DESCRIPTION);
    meta("robots", "index, follow");
    meta("twitter:card", "summary_large_image");
    meta("twitter:title", PAGE_TITLE);
    meta("twitter:description", PAGE_DESCRIPTION);

    ogMeta("og:title", PAGE_TITLE);
    ogMeta("og:description", PAGE_DESCRIPTION);
    ogMeta("og:url", PAGE_URL);
    ogMeta("og:type", "website");

    applyTag(
      'link[rel="canonical"]',
      () => Object.assign(document.createElement("link"), { rel: "canonical" }),
      "href",
      PAGE_URL
    );

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
    document.head.appendChild(ld);

    return () => {
      document.title = previousTitle;
      managed.forEach(({ el, attr, previous }) => {
        if (previous === null) {
          el.remove();
        } else {
          el.setAttribute(attr, previous);
        }
      });
      ld.remove();
    };
  }, []);


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
              Direito Bancário: atuação em fraudes e problemas com bancos
            </h1>
            <p className="font-serif-elegant text-xl md:text-2xl text-muted-foreground mb-8">
              Fraudes bancárias, PIX não reconhecido, empréstimos não contratados, transações indevidas e falhas de segurança podem causar prejuízos significativos. Quando o banco não soluciona o problema de forma adequada, é possível analisar a responsabilidade da instituição e as medidas jurídicas cabíveis para proteger seus direitos.
            </p>
            <button
              onClick={() => navigate("/obrigado")}
              className="px-10 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm shadow-gold hover:shadow-lg transition-all duration-300"
            >
              Fale sobre seu caso
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
              Seu dinheiro foi movimentado sem autorização? O banco negou a fraude ou não resolveu o problema?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-justify md:text-center">
              Situações como essas precisam ser analisadas individualmente, considerando como a operação ocorreu, quais medidas foram adotadas pelo banco, as provas disponíveis e a resposta apresentada pela instituição financeira.
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
              Seu problema pode estar entre estas situações
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
              Cada caso precisa ser analisado individualmente. A responsabilidade do banco depende das circunstâncias da operação, das medidas de segurança adotadas pela instituição, da atuação do cliente e das provas disponíveis.
            </p>
          </div>
        </div>
      </section>

      {/* Quando o banco não resolve */}
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
              Quando o banco não resolve o problema
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
              <p>
                Quando uma fraude ou operação não reconhecida é comunicada, espera-se que a instituição financeira investigue o ocorrido e adote as medidas necessárias para proteger o cliente. Nem sempre, porém, a solução apresentada é suficiente.
              </p>
              <p>
                O banco pode negar a contestação, atribuir a responsabilidade exclusivamente ao cliente, manter uma cobrança indevida ou deixar de solucionar o prejuízo causado pela operação questionada. Nessas situações, é importante avaliar juridicamente o caso e verificar se existem elementos para responsabilização da instituição financeira.
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
              Cada situação bancária exige uma análise própria. O primeiro passo é compreender o que aconteceu, identificar os possíveis responsáveis e avaliar as provas disponíveis. A partir dessa análise, são definidas as medidas mais adequadas para cada caso.
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
              Por que agir rapidamente?
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
              <p>
                Em casos de fraude bancária ou movimentação não reconhecida, as primeiras providências podem ser importantes para reduzir prejuízos e preservar elementos que ajudem a esclarecer o ocorrido.
              </p>
              <p>
                Comunicar imediatamente a instituição financeira, contestar formalmente a operação, registrar protocolos e reunir comprovantes e demais documentos são medidas que podem contribuir para a análise do caso e para a definição das providências jurídicas cabíveis.
              </p>
              <p>
                Quanto mais rapidamente os fatos forem documentados, mais completa tende a ser a reconstrução do ocorrido e a avaliação das responsabilidades envolvidas.
              </p>
            </div>
            <div className="mt-14 pt-8 border-t border-gold/20">
              <p className="font-serif-elegant text-lg md:text-xl text-foreground/90 text-center leading-relaxed">
                Se você identificou uma movimentação bancária que não reconhece, não ignore o problema. Reúna os documentos disponíveis e procure orientação jurídica para avaliar o caso.
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
              Perguntas frequentes sobre fraudes e problemas bancários
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
              Cada caso é analisado individualmente, considerando os fatos, os documentos disponíveis e a resposta apresentada pela instituição financeira. A estratégia jurídica é definida de acordo com as características e necessidades de cada situação.
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
              Teve um problema com seu banco?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Fraudes, operações não reconhecidas e cobranças indevidas podem exigir uma análise jurídica cuidadosa. Entre em contato para apresentar seu caso e verificar as medidas que podem ser adotadas.
            </p>
            <button
              onClick={() => navigate("/obrigado")}
              className="px-10 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm shadow-gold hover:shadow-lg transition-all duration-300"
            >
              Fale sobre seu caso
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DireitoBancario;
