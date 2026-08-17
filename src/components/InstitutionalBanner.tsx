import banner from "@/assets/banner-institucional.jpg";

const InstitutionalBanner = () => {
  return (
    <section aria-label="Banner institucional Roberto Lulia Advogados" className="bg-background mt-28 pb-8 md:pb-12">
      <div className="container mx-auto px-6">
        <h1 className="sr-only">
          Roberto Lulia Advogados — Advogado em São Paulo: Direito do Consumidor, Bancário, Médico e Digital
        </h1>
        <div className="relative overflow-hidden rounded-sm border border-gold/20 shadow-elegant aspect-[3/1]">
          <img
            src={banner}
            alt="Roberto Lulia Advogados — análise cuidadosa, estratégia jurídica e atuação personalizada para cada caso"
            width={1920}
            height={640}
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10" />
        </div>
      </div>
    </section>
  );
};

export default InstitutionalBanner;
