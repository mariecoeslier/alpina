"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-neutral-10 border-t border-border py-8 md:py-12" role="contentinfo">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 mb-8">
          <div>
            <h3 className="mb-4">{t("app")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("allFeatures")}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("gallery")}
                </a>
              </li>
              <li>
                <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("download")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">{t("support")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#help" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("helpCenter")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("contactUs")}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("faq")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">{t("legal")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={t("privacyAria")}
                >
                  {t("privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={t("termsAria")}
                >
                  {t("terms")}
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={t("cookiesAria")}
                >
                  {t("cookies")}
                </a>
              </li>
              <li>
                <a href="#legal" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("legalNotice")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 text-left">
            <p className="text-sm text-muted-foreground">
              {t("copyright", { year: currentYear })}
            </p>
            <p className="text-sm text-muted-foreground">{t("compliance")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
