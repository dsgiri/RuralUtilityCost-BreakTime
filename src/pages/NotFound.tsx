import { Link } from "react-router-dom";
import { Ghost, ArrowLeft } from "lucide-react";
import { SEO } from "../components/ui/SEO";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." />
      <div className="bg-white dark:bg-stone-900 p-12 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm max-w-lg w-full">
        <Ghost size={80} className="mx-auto text-stone-300 dark:text-stone-700 mb-6" />
        <h1 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-stone-700 dark:text-stone-300 mb-4">Page Not Found</h2>
        <p className="text-stone-500 dark:text-stone-400 mb-8 text-lg">
          Looks like you wandered a bit too far into the field. This page doesn't exist.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors min-h-[48px]"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
