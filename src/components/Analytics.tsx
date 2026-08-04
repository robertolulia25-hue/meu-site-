import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = "G-X967YZTT39";

/**
 * Envia page_view em mudanças de rota (SPA).
 * O page_view inicial já é enviado pelo gtag('config') no index.html,
 * por isso a primeira renderização é ignorada (evita duplicidade).
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

  return null;
};

export default Analytics;
