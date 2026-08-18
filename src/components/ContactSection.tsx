import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const emailLink = "mailto:robertolulia@adv.oabsp.org.br";
  const phoneNumber = "(11) 98272-7659";


  return (
    <section id="contato" className="py-14 lg:py-18 bg-navy relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="gold-line mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Entre em <span className="text-gradient-gold">Contato</span>
          </h2>
          <p className="font-serif-elegant text-xl text-muted-foreground max-w-2xl mx-auto">
            Estou à disposição para receber informações sobre seu caso e orientar quanto aos próximos passos.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp - Featured */}
            <motion.div
              className="md:col-span-2 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                to="/obrigado"
                aria-label="Iniciar conversa pelo WhatsApp com Roberto Lima, advogado"
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
              >

              <div className="relative bg-gradient-card p-8 md:p-10 rounded-sm border border-gold/30 hover:border-gold/60 transition-all duration-500 shadow-gold hover:shadow-lg overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
                    <MessageCircle className="w-10 h-10 text-gold" strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex-1">
                    <span className="text-gold text-sm font-medium tracking-wider uppercase mb-2 block">
                      Atendimento pelo WhatsApp
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Atendimento personalizado para entender seu caso
                    </p>
                    <span className="font-serif-elegant text-2xl text-gold">
                      {phoneNumber}
                    </span>
                  </div>

                  <div className="px-8 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm">
                    Iniciar Conversa
                  </div>
                </div>
              </div>
              </Link>
            </motion.div>


            {/* Phone */}
            <motion.a
              href={`tel:+5511982727659`}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="h-full bg-gradient-card p-8 rounded-sm border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-gold">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <Phone className="w-7 h-7 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                      Telefone
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Ligações de segunda a sexta
                    </p>
                    <span className="font-serif-elegant text-lg text-gold">
                      {phoneNumber}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href={emailLink}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="h-full bg-gradient-card p-8 rounded-sm border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-gold">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <Mail className="w-7 h-7 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                      E-mail
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Para documentos e consultas formais
                    </p>
                    <span className="font-serif-elegant text-base text-gold break-all">
                      robertolulia@adv.oabsp.org.br
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
