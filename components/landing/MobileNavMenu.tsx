"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/components/ui/utils";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { IconDownload, IconMenu } from "./Icons";

interface MobileNavMenuProps {
  onDownloadClick: () => void;
}

export function MobileNavMenu({ onDownloadClick }: MobileNavMenuProps) {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    ["#features", t("features")],
    ["#gallery", t("gallery")],
  ] as const;

  const close = () => setOpen(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden size-9"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
        >
          <IconMenu size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        sideOffset={8}
        className="w-56 p-3 md:hidden"
      >
        <nav className="flex flex-col gap-1" aria-label={t("ariaLabel")}>
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="my-3 border-t border-border" />

        <div className="flex flex-col gap-3">
          <div className="flex gap-2" role="group" aria-label={t("language")}>
            {routing.locales.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => {
                  router.replace(pathname, { locale: loc });
                  close();
                }}
                className={cn(
                  "flex-1 rounded-md border px-3 py-1.5 text-sm font-semibold transition-colors",
                  locale === loc
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-foreground/70 hover:bg-accent"
                )}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>

          <Button
            onClick={() => {
              onDownloadClick();
              close();
            }}
            className="w-full bg-[#FA70AA] hover:bg-[#FB8EBB] text-white"
            aria-label={t("downloadApp")}
          >
            <IconDownload size={16} />
            {t("download")}
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
