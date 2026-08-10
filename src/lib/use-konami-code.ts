import { useEffect, useRef } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
] as const;

export function useKonamiCode(onUnlock: () => void) {
  const stepRef = useRef(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const expected = KONAMI_SEQUENCE[stepRef.current];
      const pressed = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (pressed === expected) {
        stepRef.current += 1;
        if (stepRef.current === KONAMI_SEQUENCE.length) {
          stepRef.current = 0;
          onUnlock();
        }
      } else {
        stepRef.current = pressed === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onUnlock]);
}