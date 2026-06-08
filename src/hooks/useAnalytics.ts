import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 50 && !window._scrolled50) {
        window._scrolled50 = true;
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "scroll", { percent: 50 });
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

export function trackClick(elementName: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click", { element: elementName });
  }
}
