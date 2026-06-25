"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Navigation } from "./Navigation";
import { MobileSidebar } from "./MobileSidebar";
import { Hero } from "./Hero";
import { Stats } from "./Stats";
import { ExperienceIntro } from "./ExperienceIntro";
import { Features } from "./Features";
import { Gallery } from "./Gallery";
import { DownloadSection } from "./DownloadSection";
import { Footer } from "./Footer";
import { CookieConsent } from "./CookieConsent";
import { DownloadModal } from "./DownloadModal";
import { SidebarProvider } from "@/components/ui/sidebar";

export function LandingPage() {
  const t = useTranslations("common");
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded">
          {t("skipToContent")}
        </a>

        <MobileSidebar onDownloadClick={() => setIsDownloadModalOpen(true)} />
        <Navigation onDownloadClick={() => setIsDownloadModalOpen(true)} />

        <main id="main-content">
          <Hero />
          <Stats />
          <ExperienceIntro />
          <Features />
          <Gallery />
          <DownloadSection />
        </main>

        <Footer />
        <CookieConsent />

        <DownloadModal
          open={isDownloadModalOpen}
          onClose={() => setIsDownloadModalOpen(false)}
        />
      </div>
    </SidebarProvider>
  );
}
