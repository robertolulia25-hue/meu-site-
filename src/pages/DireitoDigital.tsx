import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  UserX,
  UserRoundSearch,
  ShieldAlert,
  MessageSquareWarning,
  DatabaseZap,
  FileSignature,
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

const PAGE_TITLE =
  "Direito Digital | Contas, Redes Sociais, Fraudes e Proteção de Dados — Roberto Lima";
const PAGE_DESCRIPTION =
  "Atuação jurídica em problemas digitais: contas bloqueadas ou invadidas, perfis falsos, golpes na internet, comentários ofensivos, proteção de dados (LGPD) e contratos eletrônicos.";
const PAGE_URL = "https://www.robertolimajuridico.com.br/direito-digital";
const WHATSAPP_MESSAGE = "Olá, gostaria de falar sobre um problema de Direito Digital.";

const problemas = [
  {
    icon: UserX,
    number: "01",
    title: "Contas e perfis bloqueados ou invadidos",
    description:
      "Perda de acesso, bloqueios, invasões ou dificuldades para recuperar contas em redes sociais, e-mails e outros serviços digitais.",
  },
  {
    icon: UserRoundSearch,
    number: "02",
    title: "Perfis falsos e uso indevido de identidade",
    description:
      "Criação de contas utilizando nome, imagem ou identidade de terceiros, inclusive em situações de fraude ou prejuízo à reputação.",
  },
  {
    icon: ShieldAlert,
    number: "03",
    title: "Golpes e fraudes praticados por meios digitais",
    description:
      "Situações envolvendo WhatsApp, redes sociais, e-mail ou outras plataformas, especialmente quando há uso indevido de identidade ou informações.",
  },
  {
    icon: MessageSquareWarning,
    number: "04",
    title: "Comentários ofensivos e danos à honra",
    description:
      "Manifestações publicadas em ambientes digitais que possam atingir a honra, imagem ou reputação, sempre mediante análise do conteúdo e do contexto.",
  },
  {
    icon: DatabaseZap,
    number: "05",
    title: "Proteção de dados e LGPD",
    description:
      "Situações envolvendo tratamento, exposição, uso ou compartilhamento inadequado de dados pessoais, conforme as circunstâncias concretas.",
  },
  {
    icon: FileSignature,
    number: "06",
    title: "Contratos e relações jurídicas digitais",
    description:
      "Análise e elaboração de contratos eletrônicos, termos, documentos digitais e questões relacionadas a assinaturas e relações jurídicas realizadas por meios digitais.",
  },
];

const blocosAnalise = [
  {
    icon: Search,
    title: "Análise do ocorrido",
    description:
      "Reconstrução dos fatos, identificação dos envolvidos, da plataforma utilizada, do conteúdo ou da operação questionada e das consequências verificadas.",
  },
  {
    icon: FolderCheck,
    title: "Preservação e organização das provas",
    description:
      "Prints, URLs, protocolos, e-mails, mensagens, registros, documentos, datas e demais elementos úteis para demonstrar o ocorrido.",
  },
  {
    icon: Scale,
    title: "Medidas jurídicas cabíveis",
    description:
      "Quando houver fundamento, avaliar medidas para recuperação de acesso, remoção de conteúdo, identificação de responsáveis, cessação de condutas, proteção de direitos e eventual reparação de prejuízos, conforme o caso e os requisitos legais.",
  },
];

const etapas = [
  {
    number: "01",
    title: "Análise do caso",
    text: "Compreender os fatos, identificar o problema digital e avaliar os documentos e registros disponíveis.",
  },
  {
    number: "02",
    title: "Avaliação das responsabilidades",
    text: "Analisar a conduta dos envolvidos, da plataforma ou de terceiros e as circunstâncias relevantes para o caso.",
  },
  {
    number: "03",
    title: "Definição da estratégia jurídica",
    text: "Orientar sobre as medidas administrativas ou judiciais cabíveis, considerando a urgência e as características de cada situação.",
  },
  {
    number: "04",
    title: "Atuação para proteção e reparação dos direitos",
    text: "Adoção das medidas juridicamente adequadas para proteger o cliente e buscar a solução ou a reparação cabível.",
  },
];

const faq = [
  {
    q: "O que posso fazer se minha conta foi bloqueada ou invadida?",
    a: "O primeiro passo costuma ser registrar o ocorrido junto à plataforma, utilizando os canais de recuperação e guardando protocolos e respostas. Caso o acesso não seja restabelecido, é possível avaliar juridicamente o caso, considerando as circunstâncias do bloqueio ou da invasão, as providências já adotadas e as provas disponíveis.",
  },
  {
    q: "Criaram um perfil falso usando meu nome e minha foto. Posso pedir a remoção?",
    a: "Situações de uso indevido de nome ou imagem podem justificar pedidos de remoção junto à plataforma e, quando necessário, medidas judiciais. O cabimento e o alcance das providências dependem do conteúdo, do contexto e das provas reunidas, como prints, URLs e protocolos.",
  },
  {
    q: "Estão usando meu nome para aplicar golpes na internet. O que devo fazer?",
    a: "É importante preservar as provas do ocorrido, comunicar a plataforma e, conforme o caso, registrar ocorrência policial. A partir dessa documentação, pode-se avaliar medidas para cessação da conduta, identificação dos responsáveis e eventual reparação, sempre de acordo com os fatos e a legislação aplicável.",
  },
  {
    q: "Posso pedir indenização por comentários ofensivos publicados na internet?",
    a: "Em determinadas situações, manifestações que atingem a honra, a imagem ou a reputação podem justificar pedido de reparação. Contudo, é necessário analisar o conteúdo, o contexto, o alcance da publicação e os efeitos concretos, pois nem toda crítica ou opinião configura ilícito.",
  },
  {
    q: "Um problema envolvendo meus dados pessoais pode gerar responsabilidade?",
    a: "Pode, dependendo das circunstâncias. É preciso examinar como os dados foram tratados, expostos ou compartilhados, quem realizou o tratamento, quais medidas de segurança existiam e quais consequências decorreram do fato, à luz da legislação de proteção de dados.",
  },
  {
    q: "Preciso tentar resolver o problema diretamente com a plataforma antes de procurar um advogado?",
    a: "Não existe uma resposta única. A tentativa administrativa pode ser adequada em muitos casos e ajuda a documentar o ocorrido, mas situações urgentes ou já negadas pela plataforma podem exigir outra estratégia. A orientação depende das circunstâncias específicas.",
  },
  {
    q: "Quais provas devo guardar em um problema ocorrido na internet?",
    a: "Recomenda-se preservar prints com data e hora, URLs completas, mensagens, e-mails, protocolos de atendimento, respostas das plataformas, comprovantes de eventuais prejuízos e qualquer registro que ajude a demonstrar o ocorrido. Quanto mais organizada a documentação, mais completa tende a ser a análise do caso.",
  },
];


const DireitoDigital = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/direito-digital"
        schemas={[
          serviceSchema({
            name: "Advogado de Direito Digital em São Paulo",
            description: PAGE_DESCRIPTION,
            path: "/direito-digital",
          }),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Direito Digital", path: "/direito-digital" },
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
              Direito Digital: atuação em problemas envolvendo contas, redes sociais e relações digitais
            </h1>
            <p className="font-serif-elegant text-xl md:text-2xl text-muted-foreground mb-8">
              Bloqueio ou perda de acesso a contas, perfis falsos, golpes praticados por meios digitais, comentários ofensivos, problemas com e-mails e questões envolvendo proteção de dados podem gerar prejuízos e exigir análise jurídica. Cada situação deve ser examinada de acordo com os fatos, as provas disponíveis e a atuação das plataformas ou demais envolvidos.
            </p>
            <button
              onClick={() => navigate("/obrigado", { state: { message: WHATSAPP_MESSAGE } })}
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
              Sua conta foi bloqueada? Estão usando seu nome na internet? O problema digital não foi resolvido?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-justify md:text-center">
              Situações como essas exigem análise individual, considerando como o fato ocorreu, quais plataformas ou pessoas estão envolvidas, quais providências administrativas já foram tomadas e quais provas existem para demonstrar o ocorrido.
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
              Cada situação digital precisa ser analisada individualmente. A existência de responsabilidade depende dos fatos, do conteúdo envolvido, das condutas dos participantes ou das plataformas, das providências adotadas e das provas disponíveis.
            </p>
          </div>
        </div>
      </section>

      {/* Quando o problema digital não é resolvido */}
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
              Quando o problema digital não é resolvido
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
              <p>
                Diante de um bloqueio de conta, de um perfil falso ou de um conteúdo indevido, espera-se que a tentativa administrativa junto à plataforma seja suficiente para solucionar o problema. Nem sempre, porém, a resposta apresentada resolve a situação: pedidos podem ser negados, respostas automáticas podem se repetir e o acesso pode permanecer bloqueado.
              </p>
              <p>
                Quando o conteúdo é mantido, a conta não é recuperada ou não há qualquer solução, é importante avaliar juridicamente o caso. A resposta adequada depende do caso concreto, dos envolvidos, das providências já adotadas e das provas reunidas.
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
              Cada situação digital exige uma análise própria. O primeiro passo é compreender o que aconteceu, identificar os envolvidos e a plataforma utilizada e avaliar as provas disponíveis. A partir dessa análise, são definidas as medidas mais adequadas para cada caso.
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
                Em problemas ocorridos no ambiente digital, a preservação imediata das provas costuma ser decisiva para a análise do caso. Conteúdos podem ser apagados ou editados, perfis podem ser excluídos e registros podem deixar de estar disponíveis com o passar do tempo.
              </p>
              <p>
                Contas comprometidas também podem sofrer novas alterações, o que dificulta a reconstrução do que ocorreu. Por isso, é recomendável guardar prints com data e hora, URLs completas, mensagens, protocolos de atendimento, e-mails e documentos relacionados ao problema.
              </p>
              <p>
                Quanto mais completa e organizada for a documentação, mais consistente tende a ser a avaliação jurídica das providências que podem ser adotadas.
              </p>
            </div>
            <div className="mt-14 pt-8 border-t border-gold/20">
              <p className="font-serif-elegant text-lg md:text-xl text-foreground/90 text-center leading-relaxed">
                Se você enfrenta um problema em ambiente digital, reúna os registros disponíveis e procure orientação jurídica para avaliar o caso.
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
              Perguntas frequentes sobre problemas digitais
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
              Cada caso é analisado individualmente, considerando os fatos, os documentos e registros disponíveis, a resposta apresentada pela plataforma ou pelos demais envolvidos e as características da situação. A estratégia jurídica é definida de acordo com as necessidades e circunstâncias de cada caso.
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
              Teve um problema no ambiente digital?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Bloqueios de contas, perfis falsos, golpes, conteúdo ofensivo e questões envolvendo dados pessoais podem exigir uma análise jurídica cuidadosa. Entre em contato para apresentar seu caso e verificar as medidas que podem ser adotadas.
            </p>
            <button
              onClick={() => navigate("/obrigado", { state: { message: WHATSAPP_MESSAGE } })}
              className="px-10 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm shadow-gold hover:shadow-lg transition-all duration-300"
            >
              Fale sobre seu caso
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton message={WHATSAPP_MESSAGE} />
    </div>
  );
};

export default DireitoDigital;
