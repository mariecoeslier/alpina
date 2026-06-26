"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function ExperienceIntro() {
  const t = useTranslations("experienceIntro");

  return (
    <section className="relative overflow-hidden py-10 md:py-20" aria-labelledby="experience-intro-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="relative z-0 mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[240px] xl:max-w-[280px] h-[430px] sm:h-[470px] lg:h-[450px] shrink-0 overflow-hidden lg:justify-self-center">
            <div
              className="absolute top-3 left-2 sm:top-4 sm:left-3 lg:top-4 lg:left-2 w-[58%] aspect-[9/19] rounded-2xl overflow-hidden shadow-xl rotate-[-8deg] z-10 border-4 border-white bg-white"
              aria-hidden="true"
            >
              <Image
                src="/home.jpg"
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 70vw, 400px"
              />
            </div>
            <div
              className="absolute bottom-3 right-2 sm:bottom-4 sm:right-3 lg:bottom-4 lg:right-2 w-[58%] aspect-[9/19] rounded-2xl overflow-hidden shadow-2xl rotate-[6deg] z-20 border-4 border-white bg-white"
              aria-hidden="true"
            >
              <Image
                src="/mascots.jpg"
                alt=""
                fill
                className="object-contain"
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
