"use client";

import { useTranslations } from "next-intl";

import { cn } from "@/components/ui/utils";

interface StoreButtonsProps {
  className?: string;
  layout?: "stack" | "row";
}

export function StoreButtons({ className, layout = "stack" }: StoreButtonsProps) {
  const t = useTranslations("store");
  const isRow = layout === "row";

  return (
    <div
      className={cn(
        "flex",
        isRow ? "w-full flex-row justify-between gap-4" : "flex-col gap-2.5",
        className
      )}
    >
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center gap-3 bg-black hover:bg-black/90 active:scale-[0.98] transition-all rounded-xl px-4 py-3 shadow-md",
          isRow && "min-w-0 flex-1"
        )}
        aria-label={t("appStoreAria")}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#FAFFFE" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
        </svg>
        <span className="text-white text-sm font-semibold">{t("appStore")}</span>
      </a>

      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center gap-3 bg-white hover:bg-white/90 active:scale-[0.98] transition-all rounded-xl px-4 py-3 shadow-md border border-neutral-200",
          isRow && "min-w-0 flex-1"
        )}
        aria-label={t("playStoreAria")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 466 511.98"
          aria-hidden="true"
        >
          <g fillRule="nonzero">
            <path fill="#EA4335" d="M199.9 237.8 1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81 11.16 0 20.93-2.79 29.3-8.37l244.16-139.46L199.9 237.8z" />
            <path fill="#FBBC04" d="m433.91 205.1-104.65-60-111.61 110.22 113.01 108.83 104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23-1.4-20.93-13.95-40.46-32.09-50.22z" />
            <path fill="#34A853" d="M199.42 273.45 329.27 145.1 87.9 8.37C79.53 2.79 68.36 0 57.2 0 30.7 0 6.98 18.14 1.4 41.86l198.02 231.59z" />
            <path fill="#4285F4" d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86L1.39 41.86z" />
          </g>
        </svg>
        <span className="text-black text-sm font-semibold">{t("playStore")}</span>
      </a>
    </div>
  );
}
