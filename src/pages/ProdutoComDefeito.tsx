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
                Quando um produto apresenta um problema que o torna impróprio ou inadequado para o uso a que se destina, ou que diminui o seu valor, o consumidor pode exigir que o vício seja solucionado. A responsabilidade, em regra, alcança os fornecedores envolvidos na relação de consumo.
              </p>
              <p>
                Se o problema não for solucionado no prazo máximo de 30 dias, o consumidor pode, conforme as circunstâncias do caso, escolher entre a substituição do produto por outro da mesma espécie e em perfeitas condições de uso, a restituição do valor pago ou o abatimento proporcional do preço.
              </p>
              <p>
                Há situações que exigem uma análise específica. A própria legislação prevê, por exemplo, hipóteses em que o consumidor pode utilizar imediatamente essas alternativas, considerando a extensão do vício ou quando se tratar de produto essencial.
              </p>
              <p className="font-serif text-xl text-foreground text-center py-4">
                O prazo para reclamar também importa.
              </p>
              <p>
                Nos casos de vícios aparentes ou de fácil constatação, o CDC estabelece prazo de 30 dias para produtos não duráveis e de 90 dias para produtos duráveis. Quando se trata de vício oculto, o prazo começa a ser contado a partir do momento em que o problema fica evidenciado.
              </p>
              <p>
                Por isso, não basta saber que o produto apresentou um problema. É necessário analisar quando ele foi adquirido, qual é a natureza do vício, quando o problema apareceu, quais providências já foram tomadas e quais documentos comprovam a situação.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Chamada para contato */}
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
              Cada situação deve ser analisada individualmente. Se você está enfrentando um problema com um produto adquirido, podemos avaliar os fatos e os documentos disponíveis para verificar quais possibilidades jurídicas podem ser consideradas.
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProdutoComDefeito;
