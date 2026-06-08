import { useState, useEffect } from "react";
import { trackClick } from "../../hooks/useAnalytics";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "true");
    setShow(false);
    trackClick("cookie_accept_button");
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-stone-900 border-t border-stone-800 text-stone-300 p-4 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to enhance your experience, serve personalized ads, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-8 rounded-full transition-colors min-h-[48px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-stone-900"
          aria-label="Accept cookies"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
