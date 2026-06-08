import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { SharedFooter } from "./SharedFooter";
import { CookieBanner } from "../ui/CookieBanner";
import { AdContainer } from "../ui/AdContainer";
import { useAnalytics } from "../../hooks/useAnalytics";

export function Layout() {
  useAnalytics();

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F6] dark:bg-stone-950 transition-colors">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white p-2 z-50 rounded font-bold">Skip to content</a>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <AdContainer slotId="header-ad-placeholder" type="header" />
      </div>
      <main id="main-content" className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <AdContainer slotId="footer-ad-placeholder" type="footer" />
      </div>
      <SharedFooter />
      <CookieBanner />
    </div>
  );
}
