"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function ExperienceIntro() {
  const t = useTranslations("experienceIntro");

  return (
    <section className="py-10 md:py-20" aria-labelledby="experience-intro-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="relative z-0 mx-auto w-full max-w-xs sm:max-w-md lg:max-w-none min-h-[360px] sm:min-h-[400px] lg:min-h-[560px] py-4 md:py-6 lg:py-10 overflow-hidden lg:overflow-visible">
            <div
              className="absolute top-4 left-3 sm:top-6 sm:left-4 lg:left-6 w-[62%] sm:w-[68%] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl rotate-[-8deg] z-10 border-4 border-white"
              aria-hidden="true"
            >
              <Image
                src="/gallery/image-2.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 70vw, 400px"
              />
            </div>
            <div
              className="absolute bottom-4 right-3 sm:bottom-6 sm:right-4 lg:right-6 w-[62%] sm:w-[68%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-[6deg] z-20 border-4 border-white"
              aria-hidden="true"
            >
              <Image
                src="/gallery/image.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 70vw, 400px"
              />
            </div>
          </div>

          <div className="relative z-10 text-center">
            <h2
              id="experience-intro-title"
              className="mb-4 md:mb-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight"
            >
              {t.raw("titleWords").map((word: string, index: number) => (
                <span key={index} className="block">
                  {word}
                </span>
              ))}
            </h2>

            <p className="mx-auto max-w-sm text-sm md:text-base text-muted-foreground leading-relaxed">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
