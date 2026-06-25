"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { StoreButtons } from "./StoreButtons";

export function DownloadSection() {
  const t = useTranslations("download");
  const tModal = useTranslations("modal");

  return (
    <section id="download" className="py-10 md:py-20" aria-labelledby="download-title">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative bg-gradient-to-br from-[#428FFF] to-[#1A5FCC] rounded-2xl p-8 md:p-12 text-white shadow-xl overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <Image
              src="https://images.unsplash.com/photo-1550035213-d042e26b45e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpY2UlMjBza2F0aW5nJTIwd2ludGVyJTIwc3BvcnRzfGVufDF8fHx8MTc4MDI1Mjc0MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 id="download-title" className="mb-4 text-3xl md:text-4xl !font-bold drop-shadow-lg">
              {t("title")}
            </h2>
            <p className="mb-6 md:mb-8 text-white/90 text-lg drop-shadow">
              {t("description")}
            </p>

            <StoreButtons layout="row" className="max-w-lg mx-auto" />

            <p className="mt-6 text-sm text-white/75 drop-shadow">
              {tModal("compatibility")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
