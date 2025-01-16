import { useEffect, useState } from "react";

export function useIsMenuOpen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [isMenuOpen]);

  return { isMenuOpen, setIsMenuOpen };
}
