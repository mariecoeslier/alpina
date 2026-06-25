"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { DownloadCard } from "./DownloadCard";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      className="relative min-h-[520px] md:min-h-[640px] flex flex-col text-white overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0B2458] via-[#428FFF] to-[#75AEFF]" />

      <div className="absolute inset-0">
        <Image
          src="https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w2440/f_auto/primary/w9qdvbsp7zcyjhmo4aeq"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-black/45" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex-1 flex items-center py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center w-full">
          <div className="text-center">
            <h1
              id="hero-title"
              className="mb-4 text-6xl md:text-7xl lg:text-8xl !font-bold !leading-none tracking-tight drop-shadow-lg"
            >
              {t("title")}
            </h1>

            <p className="mb-6 text-2xl md:text-3xl !font-semibold text-white drop-shadow">
              {t("tagline")}
            </p>

            <div className="mx-auto space-y-3 text-base md:text-lg text-white/90 max-w-lg drop-shadow">
              <p>{t("description1")}</p>
              <p>{t("description2")}</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <DownloadCard className="max-w-[340px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
