import { useCallback, useState } from "react";
import { Outlet } from "react-router";

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { RickrollModal } from "@/components/common/rickroll-modal";
import { useKonamiCode } from "@/lib/use-konami-code";

export default function GuestLayout() {
  const [secretUnlocked, setSecretUnlocked] = useState(false);

  const handleUnlock = useCallback(() => setSecretUnlocked(true), []);
  useKonamiCode(handleUnlock);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <RickrollModal open={secretUnlocked} onClose={() => setSecretUnlocked(false)} />
    </>
  )
}