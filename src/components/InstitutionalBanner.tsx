import banner from "@/assets/banner-institucional.jpg";

const InstitutionalBanner = () => {
  return (
    <section aria-label="Banner institucional Roberto Lulia Advogados" className="bg-background py-8 md:py-12">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-sm border border-gold/20 shadow-elegant">
          <img
            src={banner}
            alt="Roberto Lulia Advogados — análise cuidadosa, estratégia jurídica e atuação personalizada para cada caso"
            width={1920}
            height={640}
            loading="lazy"
            className="w-full h-40 sm:h-56 md:h-64 lg:h-80 object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10" />
        </div>
      </div>
    </section>
  );
};

export default InstitutionalBanner;
