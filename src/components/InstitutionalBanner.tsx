import banner from "@/assets/banner-institucional.jpg";

const InstitutionalBanner = () => {
  return (
    <section
      aria-label="Banner institucional Roberto Lima — Advogado & Consultoria Jurídica"
      className="bg-background pb-5 md:pb-6"
    >
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-sm border border-gold/20 shadow-elegant aspect-[3/1]">
          <img
            src={banner}
            alt="Composição institucional do escritório: estátua da Justiça, balança, livros jurídicos e caneta, com monograma RL em dourado"
            width={1920}
            height={640}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10" />
        </div>
      </div>
    </section>
  );
};

export default InstitutionalBanner;
