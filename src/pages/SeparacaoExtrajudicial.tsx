import { useEffect } from "react";
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
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PAGE_TITLE = "Separação Extrajudicial | Cartório e Orientação Jurídica — Roberto Lima";
const PAGE_DESCRIPTION =
  "Orientação jurídica para separação extrajudicial em cartório. Análise de documentação, verificação de requisitos legais e acompanhamento da formalização do procedimento.";
const PAGE_URL = "https://www.robertolimajuridico.com.br/separacao-extrajudicial";
const WHATSAPP_MESSAGE = "Olá, gostaria de falar sobre uma separação extrajudicial.";

const problemas = [
  {
    icon: Users,
    number: "01",
    title: "Casal em acordo",
    description:
      "Situações em que ambos os cônjuges concordam com a separação e com as condições envolvidas, permitindo a realização do procedimento de forma administrativa em cartório.",
  },
  {
    icon: HeartHandshake,
    number: "02",
    title: "Consenso sobre questões patrimoniais",
    description:
      "Casos em que há entendimento sobre a divisão de bens, divisão de dívidas e demais aspectos patrimoniais, conforme o regime de bens do casamento.",
  },
  {
    icon: Scale,
    number: "03",
    title: "Ausência de filhos menores incapazes",
    description:
      "O procedimento extrajudicial pode ser utilizado quando não há filhos menores ou incapazes que precisem de regulamentação de guarda, alimentos ou visitas.",
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Revisão de documentação necessária",
    description:
      "Análise de certidão de casamento, documentos pessoais, comprovantes de renda, bens e dívidas para verificar se a documentação está adequada ao procedimento.",
  },
  {
    icon: ScrollText,
    number: "05",
    title: "Escritura pública de separação",
    description:
      "Acompanhamento na elaboração e na lavratura da escritura pública em cartório de registro de imóveis, com cláusulas que reflitam o acordo entre as partes.",
  },
  {
    icon: PenTool,
    number: "06",
    title: "Registro e formalização",
    description:
      "Orientação quanto ao registro da escritura, comunicação ao cartório de registro civil e demais providências para a convalidação da separação.",
  },
];

const blocosAnalise = [
  {
    icon: Search,
    title: "Análise da situação do casal",
    description:
      "Verificação do tempo de casamento, regime de bens, existência de filhos e eventuais circunstâncias que possam afetar a viabilidade do procedimento extrajudicial.",
  },
  {
    icon: FolderCheck,
    title: "Organização da documentação",
    description:
      "Reunião e análise de certidão de casamento atualizada, documentos de identidade, comprovantes de residência, dados sobre bens, dívidas e renda, conforme o caso.",
  },
  {
    icon: ShieldCheck,
    title: "Acompanhamento da formalização",
    description:
      "Orientação na elaboração do instrumento particular, acompanhamento na lavratura da escritura pública e verificação dos registros necessários.",
  },
];

const etapas = [
  {
    number: "01",
    title: "Entendimento do caso",
    text: "Reunião inicial para compreender a situação do casal, a existência de consenso, a presença de filhos menores e os principais pontos a serem tratados.",
  },
  {
    number: "02",
    title: "Verificação da viabilidade extrajudicial",
    text: "Análise dos requisitos legais para a realização do procedimento em cartório, considerando o regime de bens, a existência de filhos e a documentação disponível.",
  },
  {
    number: "03",
    title: "Organização dos documentos e do acordo",
    text: "Orientação sobre a documentação necessária e a definição das cláusulas que devem constar no instrumento de separação.",
  },
  {
    number: "04",
    title: "Acompanhamento da formalização em cartório",
    text: "Acompanhamento na lavratura da escritura pública e na adoção das providências posteriores, como registros e comunicações oficiais.",
  },
];

const faq = [
  {
    q: "O que é a separação extrajudicial?",
    a: "A separação extrajudicial é um procedimento administrativo realizado em cartório de notas, mediante escritura pública, em casos que preencham os requisitos legais. Ela dispensa a necessidade de ação judicial quando há acordo entre os cônjuges e não há filhos menores ou incapazes.",
  },
  {
    q: "Quais são os requisitos para fazer separação extrajudicial?",
    a: "De forma geral, é necessário que ambos os cônjuges estejam de acordo com a separação, que não existam filhos menores ou incapazes e que haja consenso sobre as condições patrimoniais. A viabilidade deve ser confirmada após análise concreta da documentação e da situação do casal.",
  },
  {
    q: "Posso fazer separação extrajudicial se tivermos filhos?",
    a: "A separação extrajudicial não é admitida quando há filhos menores em comum ou incapazes. Nessas situações, a regulamentação de guarda, alimentos e visitas geralmente exige intervenção judicial. Cada caso deve ser analisado individualmente.",
  },
  {
    q: "É preciso resolver a divisão de bens antes do cartório?",
    a: "Sim. Os cônjuges precisam estar de acordo sobre a partilha dos bens, a divisão de dívidas e eventuais questões patrimoniais. O advogado pode auxiliar na revisão e na organização desses pontos antes da lavratura da escritura.",
  },
  {
    q: "A separação extrajudicial tem o mesmo efeito da judicial?",
    a: "Quando regularmente lavrada e registrada, a escritura pública de separação extrajudicial produz efeitos semelhantes à sentença judicial, embora o procedimento seja administrativo. É importante observar os requisitos legais e as formalidades exigidas.",
  },
  {
    q: "Quanto tempo dura a separação extrajudicial?",
    a: "O prazo pode variar conforme a organização da documentação, a disponibilidade do cartório e a complexidade do acordo. A análise prévia dos documentos costuma ajudar a reduzir contratempos e agilizar o processo.",
  },
  {
    q: "Por que contar com um advogado na separação extrajudicial?",
    a: "O advogado auxilia na verificação dos requisitos legais, na organização da documentação, na revisão das cláusulas do acordo e no acompanhamento das formalidades em cartório. A orientação técnica pode contribuir para que o procedimento seja conduzido de forma adequada.",
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

const SeparacaoExtrajudicial = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

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
              Separação Extrajudicial: orientação jurídica em cartório
            </h1>
            <p className="font-serif-elegant text-xl md:text-2xl text-muted-foreground mb-8">
              A separação extrajudicial pode ser realizada em cartório quando presentes os requisitos legais. O acompanhamento de um advogado auxilia na organização da documentação, na verificação da viabilidade do procedimento e na formalização do acordo entre os cônjuges.
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
              Estão de comum acordo e querem formalizar a separação de forma mais ágil?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-justify md:text-center">
              Em situações de consenso, a separação extrajudicial pode ser uma alternativa válida. A viabilidade depende da análise prévia da situação do casal, da existência de filhos menores e da documentação disponível.
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
              Em quais situações a separação extrajudicial pode ser indicada
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
              A separação extrajudicial não se aplica a todos os casos. A análise prévia dos documentos e da situação do casal é indispensável para verificar se o procedimento é viável.
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
                Antes de optar pela separação extrajudicial, é importante verificar se todos os requisitos legais estão presentes. A existência de filhos menores, a ausência de consenso ou a necessidade de medidas urgentes pode indicar que o caminho mais adequado é a via judicial.
              </p>
              <p>
                A análise prévia também envolve a revisão da documentação do casal, do regime de bens, dos bens e dívidas a serem tratados e da capacidade dos cônjuges para comparecer ao cartório e formalizar o acordo.
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
              Cada separação exige uma análise própria. O primeiro passo é compreender a situação do casal, verificar a documentação disponível e avaliar se o procedimento extrajudicial é apropriado. A partir dessa análise, são definidas as providências mais adequadas.
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
                A separação envolve questões pessoais, patrimoniais e, muitas vezes, emocionais. A organização prévia dos documentos e a definição clara dos pontos de acordo podem contribuir para um procedimento mais tranquilo e com menos contratempos.
              </p>
              <p>
                Adiar a análise jurídica ou subestimar a importância da documentação pode gerar atrasos, custos adicionais e a necessidade de correções posteriores. Por isso, a orientação prévia é importante para identificar os requisitos e preparar o caso.
              </p>
              <p>
                Quanto mais completa for a documentação e quanto mais claro for o acordo, mais célere e segura tende a ser a formalização da separação em cartório.
              </p>
            </div>
            <div className="mt-14 pt-8 border-t border-gold/20">
              <p className="font-serif-elegant text-lg md:text-xl text-foreground/90 text-center leading-relaxed">
                Se você está avaliando a possibilidade de uma separação extrajudicial, reúna os documentos disponíveis e procure orientação jurídica para verificar se o procedimento se aplica ao seu caso.
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
              Perguntas frequentes sobre separação extrajudicial
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
              Cada caso é analisado individualmente, considerando a situação do casal, a documentação disponível e a viabilidade do procedimento extrajudicial. A orientação jurídica é conduzida de acordo com as características de cada situação.
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
              Pensa em separação extrajudicial?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              A formalização da separação em cartório pode ser uma alternativa válida para casos que preencham os requisitos legais. Entre em contato para apresentar sua situação e verificar se o procedimento se aplica ao seu caso.
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
