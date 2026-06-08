import { useEffect, useRef } from "react";

interface AdContainerProps {
  slotId: string;
  type?: "header" | "sidebar" | "in-content" | "footer";
}

export function AdContainer({ slotId, type = "in-content" }: AdContainerProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (adRef.current && !adRef.current.hasAttribute("data-adsbygoogle-status")) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  let minHeight = "250px";
  if (type === "header" || type === "footer") minHeight = "90px";

  return (
    <div
      className="my-6 mx-auto w-full bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-800 flex justify-center items-center overflow-hidden relative rounded-xl"
      style={{ minHeight }}
      aria-hidden="true"
    >
      <span className="absolute text-xs text-stone-400 dark:text-stone-500 font-medium tracking-widest uppercase">Advertisement</span>
      <ins
        ref={adRef}
        className="adsbygoogle relative z-10 w-full"
        style={{ display: "block" }}
        data-ad-client="ca-PUB-YOUR_CLIENT_ID"
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
