"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
};

/** Fades and slides its children up once they scroll into view. Wraps
 * content rather than requiring every section to manage its own
 * IntersectionObserver. */
export default function Reveal({ children, className = "", as = "div" }: RevealProps) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag ref={ref as any} className={`reveal ${inView ? "in-view" : ""} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
