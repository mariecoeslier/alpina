"use client";

import { DirectionProvider } from "@/components/ui/direction";

export function Providers({ children }: { children: React.ReactNode }) {
  return <DirectionProvider direction="ltr">{children}</DirectionProvider>;
}
