"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { IconDownload } from "./Icons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

interface MobileSidebarProps {
  onDownloadClick: () => void;
}

function MobileSidebarLinks({ onDownloadClick }: MobileSidebarProps) {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const { setOpenMobile } = useSidebar();

  const navLinks = [
    ["#features", t("features")],
    ["#gallery", t("gallery")],
  ] as const;

  const closeSidebar = () => setOpenMobile(false);

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2.5">
          <Logo />
          <span className="font-semibold text-lg tracking-tight">{tCommon("brand")}</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t("ariaLabel")}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navLinks.map(([href, label]) => (
                <SidebarMenuItem key={href}>
                  <SidebarMenuButton asChild size="lg">
                    <a href={href} onClick={closeSidebar}>
                      <span>{label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex flex-col gap-3">
          <LanguageSwitcher className="w-full justify-between" />
          <Button
            onClick={() => {
              onDownloadClick();
              closeSidebar();
            }}
            className="w-full bg-[#FA70AA] hover:bg-[#FB8EBB] text-white"
            aria-label={t("downloadApp")}
          >
            <IconDownload size={16} />
            {t("download")}
          </Button>
        </div>
      </SidebarFooter>
    </>
  );
}

export function MobileSidebar({ onDownloadClick }: MobileSidebarProps) {
  return (
    <Sidebar side="left">
      <MobileSidebarLinks onDownloadClick={onDownloadClick} />
    </Sidebar>
  );
}
