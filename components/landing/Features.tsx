"use client";

import { useTranslations } from "next-intl";

import { FeatureCard } from "./FeatureCard";
import { IconZap, IconCamera, IconSliders, IconGift, IconBell, IconHeart } from "./Icons";

const featureIcons = [
  <IconZap key="zap" className="size-6 md:size-8 bg-[#00000000]" />,
  <IconCamera key="camera" className="size-6 md:size-8" />,
  <IconSliders key="sliders" className="size-6 md:size-8" />,
  <IconGift key="gift" className="size-6 md:size-8" />,
  <IconBell key="bell" className="size-6 md:size-8" />,
  <IconHeart key="heart" className="size-6 md:size-8" />,
];

export function Features() {
  const t = useTranslations("features");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section id="features" className="py-10 md:py-20" aria-labelledby="features-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 id="features-title" className="mb-4 text-4xl md:text-5xl !font-bold">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {items.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={featureIcons[index]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
