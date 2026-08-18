export const GA_MEASUREMENT_ID = "G-X967YZTT39";

type EventParams = Record<string, string | number | boolean | undefined>;

/** Envia um evento para o GA4 já instalado (gtag.js). No-op se o gtag não existir. */
export const trackEvent = (name: string, params: EventParams = {}) => {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, {
    send_to: GA_MEASUREMENT_ID,
    ...params,
  });
};

export const trackWhatsAppClick = (source: string) =>
  trackEvent("whatsapp_click", { source, method: "whatsapp" });

export const trackEmailClick = (source: string) =>
  trackEvent("email_click", { source, method: "email" });
