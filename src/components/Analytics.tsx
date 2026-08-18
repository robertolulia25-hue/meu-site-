import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { GA_MEASUREMENT_ID, trackEmailClick } from "@/lib/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = GA_MEASUREMENT_ID;

/**
 * Envia page_view em mudanças de rota (SPA).
 * O page_view inicial já é enviado pelo gtag('config') no index.html,
 * por isso a primeira renderização é ignorada (evita duplicidade).
 * Também registra cliques em links de e-mail (email_click) via delegação.
 */
const Analytics = () => {
  const location = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    window.gtag?.("event", "page_view", {
      send_to: MEASUREMENT_ID,
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.("a[href^='mailto:']") as HTMLAnchorElement | null;
      if (link) trackEmailClick(window.location.pathname);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
};

export default Analytics;

