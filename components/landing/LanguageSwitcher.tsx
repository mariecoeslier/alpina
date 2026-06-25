"use client";

import { useLocale, useTranslations } from "next-intl";
import { ChevronDownIcon } from "lucide-react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/components/ui/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const localeCodes: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn("gap-1.5 font-semibold", className)}
          aria-label={t("language")}
        >
          {localeCodes[locale]}
          <ChevronDownIcon className="size-3.5 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => router.replace(pathname, { locale: value as Locale })}
        >
          {routing.locales.map((loc) => (
            <DropdownMenuRadioItem key={loc} value={loc}>
              {t(`languages.${loc}`)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
