import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface NavigationState {
  section?: string;
}

const ScrollToTop = () => {
  const { pathname, state } = useLocation();
  const section = (state as NavigationState | null)?.section;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollToSection = (sectionId: string, attempts = 0) => {
      const element = document.querySelector(`#${sectionId}`) as HTMLElement | null;
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: "auto" });
        return;
      }
      if (attempts < 50) {
        requestAnimationFrame(() => scrollToSection(sectionId, attempts + 1));
      }
    };

    if (section) {
      scrollToSection(section);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, section]);

  return null;
};

export default ScrollToTop;
