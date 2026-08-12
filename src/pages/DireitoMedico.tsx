import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Stethoscope, HeartPulse, Pill, Building2, FileText, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const problemas = [
  {
    icon: HeartPulse,
    number: "01",
    title: "Seu plano de saúde negou um tratamento, exame ou cirurgia?",
    description:
      "A negativa de cobertura deve ser analisada a partir do contrato, da indicação médica, da justificativa apresentada pela operadora e das circunstâncias do caso.",
  },
  {
    icon: AlertCircle,
    number: "02",
    title: "Seu tratamento foi interrompido ou a cobertura foi cancelada?",
    description:
      "A interrupção do tratamento ou da cobertura pode ter consequências importantes e precisa ser analisada de acordo com o contrato, o tratamento em andamento e as circunstâncias do caso.",
  },
  {
    icon: Pill,
    number: "03",
    title: "Você precisa de um medicamento ou tratamento de alto custo?",
    description:
      "Quando um tratamento necessário não é disponibilizado, é importante reunir a indicação médica, os documentos clínicos e as informações sobre a negativa ou a impossibilidade de acesso.",
  },
  {
    icon: Building2,
    number: "04",
    title: "O SUS negou ou não disponibilizou um tratamento de que você precisa?",
    description:
      "A falta de disponibilização do tratamento pode exigir a análise dos documentos médicos, da indicação clínica e das providências já adotadas perante o serviço público de saúde.",
  },
  {
    icon: Stethoscope,
    number: "05",
    title: "Você teve um problema com atendimento médico ou hospitalar?",
    description:
      "Falhas no atendimento, complicações ou outros acontecimentos relacionados à assistência médica devem ser analisados a partir dos fatos, prontuários, documentos e circunstâncias concretas do caso.",
  },
  {
    icon: FileText,
    number: "06",
    title: "Você acredita que houve uma falha na prestação do serviço de saúde?",
    description:
      "Situações que envolvam possível erro ou falha na assistência médica exigem uma análise cuidadosa dos fatos, documentos médicos, histórico do atendimento e demais elementos disponíveis.",
  },
];

const analiseItems = [
  {
    icon: Stethoscope,
    title: "O que aconteceu e qual tratamento foi indicado?",
    description:
      "É importante compreender o diagnóstico, o tratamento indicado, a urgência da situação e o que aconteceu durante o atendimento ou na tentativa de obter o tratamento.",
  },
  {
    icon: FileText,
    title: "O que o médico, hospital, plano de saúde ou serviço público informou?",
    description:
      "Negativas, justificativas, protocolos, mensagens, relatórios e demais registros ajudam a mostrar o que foi solicitado e qual resposta foi apresentada.",
  },
  {
    icon: Building2,
    title: "Quais documentos comprovam a situação?",
    description:
      "Relatórios médicos, pedidos de exames ou tratamentos, receitas, prontuários, negativas, protocolos, contratos, carteirinhas e comprovantes podem ser relevantes para a análise.",
  },
];

const documentosItems = [
  {
    title: "Documentos médicos",
    text: "Relatórios, laudos, receitas, pedidos de exames, indicação de tratamento, prontuários e demais documentos relacionados ao atendimento.",
  },
  {
    title: "Documentos do plano de saúde",
    text: "Carteirinha, contrato ou informações do plano, negativas de cobertura, protocolos, mensagens e respostas da operadora.",
  },
  {
    title: "Documentos relacionados ao SUS",
    text: "Solicitações, encaminhamentos, protocolos, negativas, comprovantes de atendimento e documentos que demonstrem a tentativa de obtenção do tratamento.",
  },
  {
    title: "Registros da situação",
    text: "E-mails, mensagens, fotografias, documentos hospitalares, comprovantes de despesas e demais registros relacionados ao problema.",
  },
];

const DireitoMedico = () => {
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
              Direito Médico e da Saúde
            </h1>
            <p className="font-serif-elegant text-xl md:text-2xl text-muted-foreground mb-6">
              Está enfrentando uma negativa de tratamento, problema com plano de saúde, dificuldade para obter medicamento ou tratamento, ou uma situação envolvendo atendimento médico ou hospitalar? Entenda o que precisa ser analisado e quais caminhos podem ser considerados.
            </p>
            <div className="gold-line mb-6" />
          </motion.div>
        </div>
      </section>

      {/* Identificação do problema */}
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
              Você está enfrentando algum destes problemas?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Reconhecer a situação é o primeiro passo para entender quais informações e documentos precisam ser analisados.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
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
                    <h3 className="font-serif text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O que precisa ser analisado */}
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
              O que precisa ser analisado
            </h2>
            <p className="font-serif-elegant text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada situação apresenta características próprias. Alguns documentos e informações ajudam a compreender o problema e identificar os caminhos possíveis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {analiseItems.map((item, i) => (
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
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direitos envolvidos */}
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
              Quais direitos podem estar envolvidos?
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
              <p>
                Os direitos aplicáveis em uma situação de saúde dependem da natureza concreta do caso. Não existe uma resposta única para todos os problemas médicos ou de planos de saúde, por isso a análise deve considerar os fatos, os documentos, o contrato, quando houver, e as circunstâncias específicas de cada pessoa.
              </p>
              <p>
                A assistência à saúde é um direito fundamental, mas a forma como ela pode ser exigida varia conforme a situação. Em alguns casos, o ponto central é a análise individualizada da necessidade de tratamento e da indicação médica. Em outros, é preciso verificar as regras contratuais aplicáveis ao plano de saúde, os procedimentos previstos e as condições estabelecidas para a cobertura.
              </p>
              <p>
                Quando uma operadora de saúde nega a cobertura de um tratamento, exame ou cirurgia, é necessário examinar a justificativa apresentada, a indicação médica, o contrato e o procedimento em questão. Nem toda negativa é abusiva ou ilegal: a análise depende de uma verificação técnica e jurídica do caso.
              </p>
              <p>
                O acesso a medicamentos e tratamentos pelo sistema público de saúde também possui regras específicas, e a verificação dos requisitos legais pode ser importante para entender as possibilidades de obtenção do tratamento.
              </p>
              <p>
                Situações envolvendo possível falha na prestação de serviço médico ou hospitalar exigem análise cuidadosa. O simples fato de o resultado ter sido diferente do esperado não caracteriza, por si só, uma falha. É preciso examinar o histórico do atendimento, os prontuários, as informações repassadas e as circunstâncias concretas.
              </p>
              <p>
                Dependendo da situação, podem ser consideradas medidas administrativas ou judiciais. A definição do caminho mais adequado deve ser feita caso a caso, sem promessas de resultado e com base na documentação disponível.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentos */}
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
              Quais documentos podem ser importantes?
            </h2>

            <div className="space-y-12">
              {documentosItems.map((doc, i) => (
                <motion.div
                  key={doc.title}
                  className="flex flex-col md:flex-row gap-6 md:gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <span className="font-serif text-4xl md:text-5xl text-gold/40 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1 pt-1 md:pt-2">
                    <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                      {doc.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {doc.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 pt-8 border-t border-gold/20">
              <p className="font-serif-elegant text-lg md:text-xl text-foreground/90 text-center leading-relaxed">
                Quanto mais completa estiver a documentação, mais precisa poderá ser a análise das circunstâncias do caso e dos caminhos jurídicos possíveis.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como agir */}
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
              Como agir diante de um problema relacionado à saúde?
            </h2>

            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Reúna os documentos",
                  text: "Reunir os documentos médicos e os registros relacionados ao atendimento, tratamento ou negativa.",
                },
                {
                  number: "02",
                  title: "Registre o que foi solicitado",
                  text: "Sempre que possível, guardar protocolos, e-mails, mensagens, negativas e demais registros que demonstrem a solicitação realizada.",
                },
                {
                  number: "03",
                  title: "Verifique a resposta apresentada",
                  text: "Analisar o que foi informado pelo plano de saúde, hospital, médico ou serviço público e se a resposta corresponde ao que foi solicitado.",
                },
                {
                  number: "04",
                  title: "Avalie os próximos passos",
                  text: "Dependendo das circunstâncias, pode ser possível buscar uma solução administrativa ou avaliar a adoção de medidas jurídicas.",
                },
              ].map((step, i) => (
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
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* O problema continua */}
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
              O problema continua. E agora?
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify mb-12">
              <p>
                Quando a situação não é resolvida, o próximo passo depende do que aconteceu, da urgência do tratamento, dos documentos disponíveis e das providências que já foram adotadas.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Registrar a tentativa de solução",
                  text: "Documentar as tentativas de resolução, os canais utilizados, as respostas recebidas e os prazos envolvidos ajuda a compreender a evolução do caso.",
                },
                {
                  number: "02",
                  title: "Reunir a documentação médica e administrativa",
                  text: "Organizar laudos, prontuários, negativas, protocolos, contratos, mensagens e comprovantes que demonstrem a situação e as tentativas de solução.",
                },
                {
                  number: "03",
                  title: "Avaliar os direitos envolvidos",
                  text: "A partir dos documentos e dos fatos, é possível identificar quais regras contratuais, legais ou regulamentares podem ser aplicáveis ao caso.",
                },
                {
                  number: "04",
                  title: "Definir o caminho mais adequado",
                  text: "Nem toda situação necessariamente exige ação judicial. Em alguns casos, uma solução administrativa pode ser suficiente. Em outros, diante da urgência, da resistência do fornecedor ou das características do caso, pode ser adequado avaliar uma medida jurídica.",
                },
              ].map((step, i) => (
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
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 pt-8 border-t border-gold/20">
              <p className="font-serif-elegant text-lg md:text-xl text-foreground/90 text-center leading-relaxed">
                O mais importante é não deixar o problema sem solução por falta de orientação sobre o próximo passo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bloco final */}
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
              Entenda o que pode ser feito no seu caso
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Cada situação na área da saúde possui características próprias. Se você está enfrentando um problema e já possui documentos médicos, administrativos ou relacionados ao atendimento, essas informações podem ajudar a compreender as circunstâncias do caso e os caminhos jurídicos que podem ser considerados.
            </p>
            <button
              onClick={() => navigate("/obrigado")}
              className="px-10 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm shadow-gold hover:shadow-lg transition-all duration-300"
            >
              Falar sobre meu caso
            </button>
            <p className="mt-6 text-sm text-muted-foreground/80">
              Você não precisa saber exatamente qual medida jurídica tomar. O primeiro passo é apresentar o problema e os documentos disponíveis.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DireitoMedico;
