import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FileQuestion, CalendarDays, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const analiseItems = [
  {
    icon: FileQuestion,
    title: "O que aconteceu com o produto?",
    description:
      "É importante descrever o defeito, quando ele passou a ser percebido e de que forma ele afeta o uso do produto. Esses detalhes ajudam a compreender a gravidade do problema.",
  },
  {
    icon: CalendarDays,
    title: "Quando e onde o produto foi comprado?",
    description:
      "A data da compra, o local, a forma de pagamento e a disponibilidade de nota fiscal ou comprovante são informações essenciais para entender a situação do consumidor.",
  },
  {
    icon: MessageCircle,
    title: "A empresa ou fornecedor já foi procurado para solucionar o problema?",
    description:
      "Registrar as tentativas de contato, as respostas recebidas e eventuais promessas não cumpridas ajuda a traçar um panorama mais claro antes de qualquer medida jurídica.",
  },
];

const ProdutoComDefeito = () => {
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
              Produto com defeito: quais são os direitos do consumidor?
            </h1>
            <p className="font-serif-elegant text-xl md:text-2xl text-muted-foreground mb-6">
              Comprou um produto e ele apresentou defeito? Entenda quais direitos podem estar envolvidos e quais medidas podem ser avaliadas para buscar uma solução.
            </p>
            <div className="gold-line mb-6" />
          </motion.div>
        </div>
      </section>

      {/* O que fazer */}
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
              O que fazer quando um produto apresenta defeito?
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-justify">
              <p>
                Quando um produto apresenta defeito, é importante primeiro compreender o problema e verificar as circunstâncias da compra. A análise da situação, dos documentos disponíveis e das tentativas de solução realizadas com o fornecedor permite identificar quais direitos podem estar envolvidos e quais caminhos podem ser considerados.
              </p>
            </div>
          </motion.div>
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
              Cada caso é diferente. Alguns aspectos ajudam a traçar o primeiro panorama.
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

      {/* Quais são os direitos do consumidor */}
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
              Quais são os direitos do consumidor quando o produto apresenta defeito?
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
              <p>
                Quando um produto apresenta um problema que o torna impróprio, inadequado para o uso a que se destina ou que diminui o seu valor, o consumidor pode exigir que o fornecedor corrija o vício. Esse direito existe em relação aos fornecedores envolvidos na venda, de forma direta ou indireta.
              </p>
              <p>
                Como regra geral, o fornecedor tem o prazo de 30 dias para resolver o problema. Se o vício não for sanado nesse prazo, o consumidor pode, conforme as circunstâncias do caso, optar por uma das alternativas previstas na legislação: receber a substituição do produto por outro da mesma espécie e em perfeitas condições de uso, obter a restituição da quantia paga ou conseguir o abatimento proporcional do preço.
              </p>
              <p>
                Há situações especiais em que essas alternativas podem ser utilizadas de forma imediata, sem a necessidade de esperar os 30 dias. Isso ocorre, por exemplo, quando o vício é muito extenso ou quando se trata de produto considerado essencial para o consumidor. A análise de cada caso permite identificar se alguma dessas hipóteses se aplica.
              </p>
              <p className="font-serif text-xl text-foreground text-center py-4">
                O prazo para reclamar do vício também importa.
              </p>
              <p>
                A legislação estabelece prazos para que o consumidor reclame do vício do produto. Nos casos de vícios aparentes ou de fácil constatação, esse prazo é de 30 dias para produtos não duráveis e de 90 dias para produtos duráveis. Quando se trata de vício oculto, o prazo começa a ser contado a partir do momento em que o problema fica evidenciado.
              </p>
              <p>
                Esses prazos se referem ao momento de reclamar do vício perante o fornecedor, não ao prazo geral para ajuizar uma ação judicial. Por isso, quanto antes o problema for comunicado e documentado, mais segura será a defesa dos direitos do consumidor.
              </p>
              <p>
                Não basta, portanto, saber que o produto apresentou um problema. É necessário analisar quando ele foi adquirido, qual é a natureza do vício, quando o problema apareceu, quais providências já foram tomadas e quais documentos comprovam a situação.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como agir quando o produto apresenta defeito */}
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
              Como agir quando o produto apresenta defeito?
            </h2>

            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Reúna os documentos",
                  text: "O primeiro passo é reunir as informações e os documentos relacionados à compra. Nota fiscal, comprovante de pagamento, pedido, contrato ou certificado de garantia podem ajudar a demonstrar a aquisição e as condições da relação de consumo. Quando possível, também é importante guardar fotografias, vídeos ou outros registros que demonstrem o problema apresentado pelo produto."
                },
                {
                  number: "02",
                  title: "Comunique o fornecedor",
                  text: "Em seguida, é importante comunicar o fornecedor sobre o problema e registrar a tentativa de solução. Guarde protocolos de atendimento, e-mails, mensagens, ordens de serviço e respostas recebidas. Esses registros ajudam a demonstrar o que foi informado à empresa e quais providências foram ou não tomadas."
                },
                {
                  number: "03",
                  title: "Registre o atendimento",
                  text: "Quando o produto é encaminhado para reparo, a documentação desse atendimento também é importante. A ordem de serviço, por exemplo, pode registrar a data em que o produto foi entregue para análise ou conserto e ajudar a acompanhar o prazo para solução do vício."
                },
                {
                  number: "04",
                  title: "Avalie os próximos passos",
                  text: "Se o problema não for solucionado ou se a resposta apresentada pelo fornecedor não for adequada, é possível avaliar outras medidas, administrativas ou judiciais, conforme as características do caso. Nessa etapa, a análise dos documentos e de tudo o que já ocorreu permite identificar qual caminho pode ser mais adequado."
                }
              ].map((step, i) => (
                <motion.div
                  key={step.number}
                  className="flex gap-6 md:gap-8"
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
                Quanto mais bem documentada estiver a situação, mais segura será a avaliação dos direitos e das medidas que podem ser adotadas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="gold-line mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
              A empresa não resolveu o problema. E agora?
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-justify mb-12">
              <p>
                Quando o fornecedor não soluciona o problema ou apresenta uma resposta que não atende ao que foi solicitado, é possível avaliar outros caminhos para buscar a solução. A medida mais adequada depende das circunstâncias do caso, do que já foi feito e dos documentos disponíveis.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <span className="font-serif text-4xl md:text-5xl text-gold/40 leading-none">
                    01
                  </span>
                </div>
                <div className="flex-1 pt-1 md:pt-2">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                    Tentar uma solução pelos canais adequados
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    Se ainda não houver uma tentativa formal de solução, pode ser importante registrar a reclamação diretamente com o fornecedor, utilizando canais que permitam comprovar o contato e a resposta recebida. O registro dessa tentativa também ajuda a documentar a evolução do problema.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <span className="font-serif text-4xl md:text-5xl text-gold/40 leading-none">
                    02
                  </span>
                </div>
                <div className="flex-1 pt-1 md:pt-2">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                    Utilizar canais de defesa do consumidor
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    Dependendo da situação e da empresa envolvida, também podem existir alternativas administrativas, como o Procon ou o Consumidor.gov.br. A plataforma Consumidor.gov.br permite o contato direto entre consumidores e empresas participantes e possibilita o acompanhamento da reclamação e da resposta apresentada pelo fornecedor.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <span className="font-serif text-4xl md:text-5xl text-gold/40 leading-none">
                    03
                  </span>
                </div>
                <div className="flex-1 pt-1 md:pt-2">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                    Avaliar as medidas jurídicas cabíveis
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    Quando as tentativas de solução não produzem resultado, pode ser necessário analisar juridicamente a situação. A partir dos documentos, do histórico de atendimento e das características do problema, é possível verificar quais direitos podem ser exigidos e quais medidas podem ser consideradas.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <span className="font-serif text-4xl md:text-5xl text-gold/40 leading-none">
                    04
                  </span>
                </div>
                <div className="flex-1 pt-1 md:pt-2">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                    Definir o caminho mais adequado
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    Nem todo problema de consumo precisa necessariamente chegar ao Poder Judiciário. Em alguns casos, uma solução administrativa ou uma negociação pode ser suficiente. Em outros, diante da resistência do fornecedor ou das características do caso, pode existir fundamento para a adoção de uma medida judicial. A definição do caminho depende da análise concreta da situação.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 pt-8 border-t border-gold/20">
              <p className="font-serif-elegant text-lg md:text-xl text-foreground/90 text-center leading-relaxed">
                O mais importante é não deixar o problema sem solução por falta de orientação sobre o próximo passo.
              </p>
            </div>
          </div>
        </div>
      </section>


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
              Seu caso pode ter características específicas
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Cada situação deve ser analisada individualmente. Se você já tentou resolver o problema e não conseguiu, envie uma breve descrição do que aconteceu e os documentos que possui. A partir dessas informações, podemos avaliar as circunstâncias do caso e as possibilidades jurídicas que podem ser consideradas.
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

export default ProdutoComDefeito;
