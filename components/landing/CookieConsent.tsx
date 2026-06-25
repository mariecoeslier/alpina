"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const t = useTranslations("cookies");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setIsVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg"
    >
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 id="cookie-consent-title" className="font-semibold mb-2">
              {t("title")}
            </h2>
            <p id="cookie-consent-description" className="text-sm text-muted-foreground">
              {t("description")}{" "}
              <a href="#privacy" className="underline hover:text-primary transition-colors">
                {t("privacyLink")}
              </a>
              .
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <Button variant="outline" onClick={rejectCookies} aria-label={t("rejectAria")}>
              {t("reject")}
            </Button>
            <Button onClick={acceptCookies} className="bg-primary hover:bg-[#2B7AEE] text-white" aria-label={t("acceptAria")}>
              {t("accept")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
