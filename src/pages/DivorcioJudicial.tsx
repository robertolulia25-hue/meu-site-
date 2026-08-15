import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Scale,
  Users,
  Baby,
  Home,
  Wallet,
  FileText,
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

const PAGE_TITLE = "Divórcio Judicial | Orientação e Estratégia Jurídica — Roberto Lima";
const PAGE_DESCRIPTION =
  "Atuação jurídica em divórcio judicial. Análise individual do caso, definição de estratégia e acompanhamento processual em questões envolvendo filhos, guarda, alimentos e partilha de bens.";
const PAGE_URL = "https://www.robertolimajuridico.com.br/divorcio-judicial";
const WHATSAPP_MESSAGE = "Olá, gostaria de falar sobre um divórcio judicial.";

const problemas = [
  {
    icon: Scale,
    number: "01",
    title: "Ausência de consenso entre os cônjuges",
    description:
      "Situações em que há divergência sobre o divórcio, a guarda dos filhos, a divisão de bens, os alimentos ou outras questões que precisam ser decididas pelo Judiciário.",
  },
  {
    icon: Baby,
    number: "02",
    title: "Regulamentação de guarda e visitas",
    description:
      "Casos que envolvem filhos menores ou incapazes e a necessidade de definir guarda, regime de visitas, fixação ou revisão de alimentos e outras medidas.",
  },
  {
    icon: Home,
    number: "03",
    title: "Partilha de bens e dívidas",
    description:
      "Questões patrimoniais complexas, como divisão de imóveis, veículos, investimentos, dívidas e direitos que não foram objeto de acordo amigável.",
  },
  {
    icon: Wallet,
    number: "04",
    title: "Pensão alimentícia e assistência",
    description:
      "Análise, fixação, revisão ou execução de alimentos para cônjuge, filhos ou companheiro, considerando as necessidades e possibilidades de cada parte.",
  },
  {
    icon: Users,
    number: "05",
    title: "Medidas urgentes e tutela",
    description:
      "Situações que exigem providências imediatas, como definição provisória de guarda e alimentos, uso do imóvel familiar ou proteção do patrimônio comum.",
  },
  {
    icon: FileText,
    number: "06",
    title: "Acompanhamento processual",
    description:
      "Condução da ação judicial em todas as fases, desde a petição inicial até a eventual execução ou cumprimento de sentença, com atenção às particularidades do caso.",
  },
];

const blocosAnalise = [
  {
    icon: Search,
    title: "Análise da situação concreta",
    description:
      "Compreensão dos fatos, verificação do regime de bens, da situação dos filhos, dos bens e dívidas do casal e das questões que precisam ser decididas judicialmente.",
  },
  {
    icon: FolderCheck,
    title: "Organização da documentação e provas",
    description:
      "Reunião de documentos pessoais, certidão de casamento, dados patrimoniais, comprovantes de renda, despesas e demais elementos úteis para a instrução processual.",
  },
  {
    icon: ShieldCheck,
    title: "Definição da estratégia processual",
    description:
      "Avaliação das medidas administrativas e judiciais cabíveis, das urgências do caso, dos riscos envolvidos e das melhores alternativas para cada situação.",
  },
];

const etapas = [
  {
    number: "01",
    title: "Entendimento do caso",
    text: "Compreender a história do relacionamento, os pontos de conflito, as questões envolvendo filhos, bens e dívidas e os objetivos do cliente.",
  },
  {
    number: "02",
    title: "Análise jurídica e documental",
    text: "Verificar o regime de bens, a documentação disponível, a situação dos filhos e as medidas judiciais possíveis, de acordo com as características do caso.",
  },
  {
    number: "03",
    title: "Definição da estratégia judicial",
    text: "Elaboração do planejamento processual, considerando as urgências, as provas disponíveis, as possibilidades de acordo e os objetivos do cliente.",
  },
  {
    number: "04",
    title: "Acompanhamento e atuação processual",
    text: "Condução da ação judicial em todas as fases, com atenção às decisões interlocutórias, audiências, produção de provas e eventual execução de sentença.",
  },
];

const faq = [
  {
    q: "Quando o divórcio precisa ser judicial?",
    a: "O divórcio é judicial quando não há acordo entre os cônjuges sobre o fim do casamento ou sobre pontos como guarda, convivência, alimentos e partilha, e também quando o caso exige decisão ou providência do Judiciário. Havendo consenso e preenchidos os requisitos legais, o divórcio pode ser feito em cartório.",
  },
  {
    q: "Ainda existe separação judicial no Brasil?",
    a: "Não. Atualmente o divórcio pode ser pedido diretamente, sem qualquer etapa prévia de separação. A separação judicial deixou de ser exigida como requisito e não é mais tratada como um procedimento autônomo, de modo que a ação adequada é a de divórcio.",
  },
  {
    q: "Posso pedir o divórcio mesmo que meu cônjuge não queira?",
    a: "Sim. A vontade de um dos cônjuges de não permanecer casado é suficiente para pedir o divórcio. A existência ou não de consenso influencia o procedimento e a forma como as demais questões, como bens, guarda e alimentos, serão resolvidas.",
  },
  {
    q: "E quando há filhos menores ou incapazes?",
    a: "Havendo filhos menores ou incapazes, é preciso definir guarda, convivência e alimentos. Essas questões podem ser discutidas no próprio processo de divórcio ou já estar resolvidas judicialmente. Cada situação é avaliada de acordo com o interesse da criança ou do adolescente.",
  },
  {
    q: "Como funciona a partilha de bens?",
    a: "A partilha depende do regime de bens do casamento. Bens particulares e bens comuns recebem tratamento diferente, e a divisão pode ser feita por acordo ou por decisão judicial. É possível, ainda, divorciar-se e deixar a partilha para um momento posterior, conforme o caso.",
  },
  {
    q: "É possível pedir alimentos para o cônjuge?",
    a: "Em determinadas situações, é possível pleitear alimentos ao ex-cônjuge, especialmente quando há desequilíbrio econômico e necessidade demonstrada. O cabimento e o valor dependem das condições concretas de cada parte.",
  },
  {
    q: "Quanto tempo dura um divórcio judicial?",
    a: "A duração varia conforme a complexidade do caso, a existência de acordo, a necessidade de provas e o andamento do Judiciário. Não é possível assegurar prazos sem a análise prévia da situação.",
  },
  {
    q: "É possível fazer acordo durante o processo?",
    a: "Sim. O acordo pode ser construído a qualquer momento, inclusive durante o processo judicial, e costuma abreviar a solução. O acompanhamento jurídico auxilia na negociação e na formalização adequada dos termos.",
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

const DivorcioJudicial = () => {
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
              Divórcio Judicial: atuação estratégica em casos que exigem decisão judicial
            </h1>
            <p className="font-serif-elegant text-xl md:text-2xl text-muted-foreground mb-8">
              Quando não há acordo ou quando o caso exige decisão do Judiciário, o divórcio judicial permite discutir guarda, convivência, alimentos, partilha de bens e medidas urgentes. Cada caso é analisado individualmente e conduzido conforme suas particularidades.
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
              Há questões sem consenso envolvendo filhos, bens ou alimentos?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-justify md:text-center">
              O divórcio judicial é o caminho indicado quando não há consenso entre os cônjuges ou quando o caso exige decisão do Judiciário. A estratégia processual é definida após a análise cuidadosa da situação concreta.
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
              Situações que podem demandar divórcio judicial
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
              O divórcio judicial é o caminho para os casos que não admitem solução consensual em cartório. A definição da estratégia depende das circunstâncias concretas de cada família.
            </p>
          </div>
        </div>
      </section>

      {/* Análise do caso e estratégia */}
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
              Análise do caso e definição da estratégia jurídica
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
              <p>
                Cada divórcio judicial é único. A condução do caso depende da história do casamento, da situação dos filhos, do regime de bens, das dívidas, da renda de cada parte e de outras circunstâncias que só podem ser avaliadas após o estudo do caso.
              </p>
              <p>
                Não prometemos resultados, prazos ou decisões favoráveis. O trabalho consiste em analisar os fatos, organizar a documentação, identificar as questões jurídicas relevantes e construir uma estratégia adequada aos objetivos e à realidade de cada cliente.
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
              O divórcio judicial exige uma análise cuidadosa e uma estratégia adaptada a cada família. O primeiro passo é ouvir o cliente, compreender a situação e avaliar os documentos e as providências necessárias.
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
                Em um divórcio judicial, a organização da documentação e a definição clara dos objetivos podem fazer diferença na condução do processo. Provas, comprovantes e registros bem reunidos auxiliam na análise do caso e na instrução processual.
              </p>
              <p>
                Medidas urgentes, como a fixação provisória de alimentos, a definição de guarda e convivência ou o uso do imóvel familiar, podem ser necessárias em determinadas situações. Quanto antes o caso for analisado, mais rapidamente essas providências podem ser avaliadas.
              </p>
              <p>
                Adiar a busca por orientação jurídica pode dificultar a preservação de provas, a obtenção de medidas urgentes e a própria estruturação da estratégia processual.
              </p>
            </div>
            <div className="mt-14 pt-8 border-t border-gold/20">
              <p className="font-serif-elegant text-lg md:text-xl text-foreground/90 text-center leading-relaxed">
                Se você está diante de um divórcio que exige solução judicial, organize os documentos disponíveis e procure orientação jurídica para analisar o caso.
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
              Perguntas frequentes sobre divórcio judicial
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
              Cada caso é analisado individualmente, considerando a situação familiar, a documentação disponível e as questões a serem decididas judicialmente. A estratégia é definida de acordo com as necessidades e circunstâncias de cada cliente.
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
              Precisa de orientação sobre divórcio judicial?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Questões envolvendo filhos, bens, alimentos e dívidas podem exigir uma análise jurídica cuidadosa. Entre em contato para apresentar sua situação e verificar as medidas que podem ser adotadas.
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

export default DivorcioJudicial;
