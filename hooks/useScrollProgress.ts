"use client";

import { useEffect, useState } from "react";

/** Tracks vertical scroll progress as a 0–100 percentage and whether the
 * page has scrolled past a small threshold (used to compact the nav). */
export function useScrollProgress(threshold = 40) {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setScrolled(scrollTop > threshold);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { progress, scrolled };
}
