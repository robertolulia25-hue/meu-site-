import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Seo from "@/components/Seo";
import { breadcrumbSchema } from "@/lib/seo";

const PoliticaDePrivacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Política de Privacidade | Roberto Lima Advogado"
        description="Política de privacidade do site de Roberto Lima, advogado em São Paulo (OAB/SP 223.861): dados coletados, finalidade, cookies de análise e direitos do titular conforme a LGPD."
        path="/politica-de-privacidade"
        schemas={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Política de Privacidade", path: "/politica-de-privacidade" },
          ]),
        ]}
      />
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
        <div className="gold-line-left mb-6" />
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
          Política de Privacidade
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              1. Responsável pelo tratamento
            </h2>
            <p>
              Roberto Lima, advogado inscrito na OAB/SP sob o nº 223.861,
              responsável por este site. Contato: (11) 98272-7659 e
              robertolulia@adv.oabsp.org.br.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              2. Dados coletados
            </h2>
            <p>
              Este site não possui formulários de cadastro. Dados pessoais só são
              recebidos quando o próprio visitante entra em contato por WhatsApp,
              telefone ou e-mail, informando voluntariamente as informações que
              julgar necessárias para descrever sua situação.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              3. Finalidade do uso
            </h2>
            <p>
              As informações enviadas são utilizadas exclusivamente para responder
              ao contato e avaliar a possibilidade de atendimento jurídico. Não são
              comercializadas nem compartilhadas com terceiros, ressalvadas as
              hipóteses de obrigação legal ou de determinação judicial.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              4. Cookies e ferramentas de análise
            </h2>
            <p>
              O site utiliza ferramentas de mensuração de audiência do Google
              (Google Analytics e tecnologias relacionadas), que podem registrar
              dados de navegação de forma agregada, como páginas visitadas, origem
              do acesso, tipo de dispositivo e navegador. Esses dados são usados
              apenas para entender o uso do site e melhorar seu conteúdo. O
              visitante pode bloquear ou excluir cookies nas configurações do seu
              navegador.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              5. Sigilo profissional
            </h2>
            <p>
              As comunicações relativas a casos concretos observam o sigilo
              profissional previsto no Estatuto da Advocacia e no Código de Ética e
              Disciplina da OAB.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              6. Direitos do titular
            </h2>
            <p>
              Nos termos da Lei nº 13.709/2018 (LGPD), o titular pode solicitar
              confirmação de tratamento, acesso, correção, anonimização, portabilidade
              ou eliminação de seus dados pessoais, bem como revogar consentimento.
              As solicitações podem ser feitas pelo e-mail
              robertolulia@adv.oabsp.org.br.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-3">
              7. Atualizações
            </h2>
            <p>
              Esta política pode ser atualizada para refletir mudanças no site ou na
              legislação aplicável. A versão vigente é sempre a publicada nesta
              página.
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PoliticaDePrivacidade;
