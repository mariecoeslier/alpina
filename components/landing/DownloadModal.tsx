"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { DownloadCard } from "./DownloadCard";

interface DownloadModalProps {
  open: boolean;
  onClose: () => void;
}

export function DownloadModal({ open, onClose }: DownloadModalProps) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-sm rounded-2xl border-0 shadow-2xl p-0 overflow-hidden">
        <DownloadCard />
      </DialogContent>
    </Dialog>
  );
}
