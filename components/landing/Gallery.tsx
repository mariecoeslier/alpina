"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const galleryImages = [
  "/gallery/image.png",
  "/gallery/image-1.png",
  "/gallery/image-2.png",
];

export function Gallery() {
  const t = useTranslations("gallery");
  const items = t.raw("items") as Array<{ alt: string; href: string }>;

  return (
    <section id="gallery" className="py-10 md:py-20" aria-labelledby="gallery-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-6 md:mb-12">
          <h2 id="gallery-title" className="mb-4 text-3xl md:text-4xl !font-bold">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer block"
              aria-label={t("watchVideo", { title: item.alt })}
            >
              <Image
                src={galleryImages[index]}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium leading-tight">{item.alt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
