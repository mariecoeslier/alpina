"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { IconDownload } from "./Icons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

interface NavigationProps {
  onDownloadClick: () => void;
}

export function Navigation({ onDownloadClick }: NavigationProps) {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");

  const navLinks = [
    ["#features", t("features")],
    ["#gallery", t("gallery")],
  ] as const;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="navigation" aria-label={t("ariaLabel")}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <SidebarTrigger className="md:hidden -ml-2" />
            <Logo />
            <span className="font-semibold text-lg tracking-tight">{tCommon("brand")}</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="text-foreground/70 hover:text-primary transition-colors font-medium">
                {label}
              </a>
            ))}
            <LanguageSwitcher />
            <Button
              onClick={onDownloadClick}
              size="sm"
              className="bg-[#FA70AA] hover:bg-[#FB8EBB] text-white"
              aria-label={t("downloadApp")}
            >
              <IconDownload size={16} />
              {t("download")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
