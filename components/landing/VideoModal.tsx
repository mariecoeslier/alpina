import Image from "next/image";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IconPlaySolid } from "./Icons";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
}

export function VideoModal({ open, onClose }: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Découvrez l&apos;application en vidéo</DialogTitle>
          <DialogDescription>
            Voyez comment l&apos;application transforme votre expérience olympique
          </DialogDescription>
        </DialogHeader>

        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1712518375502-3b71edfb649d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3aW50ZXIlMjBvbHltcGljcyUyMHNraWluZyUyMHNub3clMjBtb3VudGFpbnN8ZW58MXx8fHwxNzgwMjUyNzM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Aperçu de la vidéo de démonstration"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
            <div className="bg-white rounded-full p-6 group-hover:scale-110 transition-transform shadow-xl">
              <IconPlaySolid size={48} className="text-primary" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="font-semibold drop-shadow-lg">Démonstration complète de l&apos;application JO d&apos;Hiver 2026</p>
            <p className="text-sm text-white/90 drop-shadow">Durée : 2:30</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground text-center mt-2">
          Cliquez pour lire la vidéo (intégration YouTube/Vimeo à configurer)
        </p>
      </DialogContent>
    </Dialog>
  );
}
