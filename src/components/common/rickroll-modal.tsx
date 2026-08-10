import { useEffect } from "react";

import rickrollGif from "@/assets/rickroll.gif";

type RickrollModalProps = {
  open: boolean;
  onClose: () => void;
};

export function RickrollModal({ open, onClose }: RickrollModalProps) {
  useEffect(() => {
    if (!open) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Secret unlocked"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-9 right-0 text-sm text-white/80 hover:text-white"
        >
          Close ✕
        </button>
        <div className="overflow-hidden rounded-lg shadow-2xl">
          <img src={rickrollGif} alt="You found the secret code" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}