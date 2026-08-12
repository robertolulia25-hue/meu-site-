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
      console.log("[ScrollToTop] try", attempts, sectionId, element?.offsetTop);
      if (element) {
        const originalScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "auto";
        console.log("[ScrollToTop] scrolling to", element.offsetTop);
        window.scrollTo(0, element.offsetTop);
        console.log("[ScrollToTop] after scrollTo scrollY", window.scrollY);
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
        return;
      }
      if (attempts < 50) {
        requestAnimationFrame(() => scrollToSection(sectionId, attempts + 1));
      }
    };

    if (section) {
      scrollToSection(section);
    } else {
      const originalScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    }
  }, [pathname, section]);

  return null;
};

export default ScrollToTop;
