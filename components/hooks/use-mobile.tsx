import { useState, useEffect } from "react";

export function useIsMobile(breakpoint: number) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  const BREAKPOINT = breakpoint;

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, [BREAKPOINT]);

  return !!isMobile;
}
