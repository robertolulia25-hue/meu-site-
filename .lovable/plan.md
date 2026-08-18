# Auditoria da Home (preview) — diagnóstico antes de qualquer alteração

Auditoria feita na home renderizada (desktop 1280px e mobile 390px), no HTML/metadados gerados e nos componentes `InstitutionalBanner`, `ServicesSection`, `AboutSection`, `ContactSection`, `Navigation`, `Footer`, `WhatsAppButton`.

## CRÍTICO (impede considerar o site pronto para captação)

1. **Conflito de marca: "Roberto Lima" x "Roberto Lulia".**
   O banner e a arte dizem "Roberto Lulia ADVOGADOS", mas a navbar exibe "Roberto Lima", o `<title>` diz "Roberto Lima | Advogado em São Paulo", o H2 diz "Sobre Roberto Lima", o rodapé diz "© Roberto Lima Advogado & Consultoria", o alt do logo diz "Roberto Lima" e todo o JSON-LD (`Person`, `LegalService`, `WebSite`) usa "Roberto Lima". Isso quebra confiança e confunde o Google.
   Decisão necessária do cliente: qual é o nome oficial a padronizar em 100% do site.

2. **Nenhuma proposta de valor em texto acima da dobra.**
   Após a remoção do Hero, o primeiro elemento é só uma imagem. O H1 é `sr-only` (invisível). Um visitante que chega por anúncio não lê nenhuma frase que diga o que o escritório resolve, para quem, nem vê CTA — precisa rolar até "Áreas de Atuação". Para captação paga isso é o maior ponto de perda.

3. **Sem CTA de WhatsApp acima da dobra.**
   O único CTA no topo é "Agendar Consulta" (desktop), que apenas rola até o contato. No mobile, o menu está colapsado e o botão flutuante de WhatsApp aparece só no canto. Não há botão primário visível de conversão no primeiro scroll.

4. **Banner ilegível no mobile.**
   Com `aspect-[3/1]` a faixa fica com ~110px de altura em 390px: monograma, nome e subtítulo viram detalhes ilegíveis. A composição do topo mobile precisa de texto real (não só imagem).

5. **Card do WhatsApp na seção Contato não é um link.**
   É uma `<div onClick>`: não é rastreável por crawlers, não é focável por teclado nem anunciado por leitor de tela, e não permite abrir em nova aba. Mesmo mantendo o fluxo por `/obrigado`, precisa ser um elemento de link acessível.

6. **Domínio canônico x marca.**
   Todo o SEO aponta para `https://www.robertolimajuridico.com.br` (canonical, og:url, sitemap, JSON-LD), enquanto a publicação atual do Lovable é `roberto-lulia-advogados.lovable.app` e o domínio oficial ainda resolve para a Vercel (versão antiga). Enquanto isso não for resolvido, o que o público vê no domínio oficial não é esta versão.

## IMPORTANTE (impacta conversão, credibilidade e SEO)

7. **Credibilidade jurídica insuficiente.** Não há número de inscrição OAB/SP (o rodapé traz só "OAB/SP" genérico), nem menções de formação, atuação ou provas sociais permitidas pelo Código de Ética. Sem inventar dados: precisamos dos dados reais que o cliente autorizar (nº OAB, formação, tempo de atuação já aprovado, tipos de caso).

8. **Aviso de conformidade (Provimento OAB) ausente.** Falta rodapé com caráter meramente informativo do site e ausência de captação/mercantilização, além de link/menção de política de privacidade (o site usa GA4 e Google Ads).

9. **LCP prejudicado.** O banner é a maior imagem acima da dobra e está com `loading="lazy"` — deveria ser `eager` + `fetchpriority="high"`. É uma perda direta de Core Web Vitals numa página que recebe tráfego pago.

10. **Espaçamento por `mt-28` fixo.** O deslocamento do banner é um valor mágico casado com a altura da navbar; se a navbar mudar de altura (ela muda ao rolar), o alinhamento quebra. Deve virar espaçamento derivado do header.

11. **Título e meta description não refletem a marca nem "consultoria".** Título atual tem 71 caracteres (acima do ideal) e usa o nome divergente.

12. **Falta seção de "como funciona / próximo passo".** Não há explicação do atendimento (envio do caso pelo WhatsApp → análise → retorno), que é o que reduz atrito antes do contato.

13. **Vazio visual entre banner e "Áreas de Atuação"** no desktop (~150px de espaço morto) — reforça a sensação de página iniciando sem conteúdo.

## REFINAMENTO

14. Cards de "Áreas de Atuação" não indicam que são clicáveis (sem "Saiba mais" nem ícone de seta).
15. Rodapé lista 8 links longos e repetitivos em uma linha corrida; melhor agrupar por coluna.
16. `sitemap.xml` usa `lastmod` 2026-08-17 — deve ser atualizado ao publicar a versão final.
17. Alt do retrato menciona "em seu ambiente de trabalho" — descrever o que a foto mostra de fato.
18. Texto "Sobre" está em `text-justify`, o que cria rios de espaço no mobile.
19. Nenhuma FAQ visível na home (JSON-LD FAQPage só é válido com FAQ visível — hoje corretamente não existe, mas uma FAQ curta ajudaria conversão e busca local).
20. Telefone e e-mail aparecem só na seção Contato — não estão no header nem no rodapé.

## Lista fechada para considerar o site pronto

- [ ] Definir e padronizar o nome oficial da marca em todo o site (navbar, títulos, rodapé, alt, metadados, JSON-LD, e-mail exibido).
- [ ] Criar bloco de abertura com H1 visível, subtítulo de proposta de valor e CTA primário de WhatsApp, integrado ao banner atual.
- [ ] Tornar o topo legível e funcional no mobile (texto real + CTA), sem alterar a arte do banner.
- [ ] Converter o card de WhatsApp do Contato em link acessível/rastreável mantendo o fluxo `/obrigado`.
- [ ] Adicionar dados de credibilidade reais fornecidos pelo cliente (nº OAB/SP, formação/atuação) e aviso de conformidade OAB + política de privacidade.
- [ ] Corrigir LCP do banner (`eager` + `fetchpriority`) e substituir o `mt-28` por espaçamento robusto.
- [ ] Ajustar `title`/`meta description`/JSON-LD à marca definitiva e reduzir o título para ≤ 60 caracteres.
- [ ] Adicionar seção curta "como funciona o atendimento".
- [ ] Refinos: affordance de clique nos cards, rodapé em colunas, contatos no rodapé, alt do retrato, alinhamento do texto Sobre, `lastmod` do sitemap.
- [ ] Resolver o apontamento do domínio oficial (hoje na Vercel com versão antiga) para que a versão nova fique pública.

## Perguntas que travam parte da execução

1. O nome oficial é **Roberto Lulia Advogados** (como no banner) ou **Roberto Lima**? O e-mail atual é `robertolulia@adv.oabsp.org.br`.
2. Qual o número de inscrição **OAB/SP** para exibir no rodapé?
3. O domínio oficial permanecerá `robertolimajuridico.com.br` ou haverá domínio com o nome novo?

Nenhuma alteração de código foi feita nesta etapa.
