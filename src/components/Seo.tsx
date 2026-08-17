import { Helmet } from "react-helmet-async";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

interface SeoProps {
  title: string;
  description: string;
  /** Caminho da rota, ex.: "/direito-bancario" */
  path: string;
  noindex?: boolean;
  /** Blocos JSON-LD já montados */
  schemas?: Record<string, unknown>[];
}

const Seo = ({ title, description, path, noindex, schemas = [] }: SeoProps) => {
  const url = absoluteUrl(path);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
