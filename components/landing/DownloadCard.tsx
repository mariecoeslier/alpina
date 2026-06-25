"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { cn } from "@/components/ui/utils";
import { StoreButtons } from "./StoreButtons";

function QRCode({ label }: { label: string }) {
  return (
    <div className="aspect-square w-full max-w-[160px] mx-auto bg-white rounded-lg p-2.5">
      <Image
        src="/QR-code-affiche.png"
        alt={label}
        width={160}
        height={160}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

interface DownloadCardProps {
  className?: string;
}

export function DownloadCard({ className }: DownloadCardProps) {
  const t = useTranslations("modal");
  const tHero = useTranslations("hero");

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl bg-background shadow-2xl",
        className
      )}
    >
      <div className="bg-primary p-6 pb-8 text-primary-foreground">
        <h2 className="text-xl font-bold">{t("title")}</h2>
        <p className="mt-1 text-sm text-primary-foreground/75">{t("subtitle")}</p>
      </div>

      <div className="flex flex-col gap-3 p-6 -mt-4">
        <QRCode label={tHero("qrCodeLabel")} />
        <StoreButtons />
        <p className="mt-1 text-center text-xs text-muted-foreground">
          {t("compatibility")}
        </p>
      </div>
    </div>
  );
}
