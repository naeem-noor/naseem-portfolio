"use client";

import { useState } from "react";
import { profile, nav } from "@/data/content";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

// Computed once at module scope (nav is static) so the array reference stays
// stable across renders and doesn't retrigger useActiveSection's observer.
const SECTION_IDS = nav.map((item) => item.href.replace("#", ""));

export default function Header() {
  const { scrolled } = useScrollProgress();
  const activeId = useActiveSection(SECTION_IDS);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap">
        <a href="#home" className="brand">
          <span className="brand-mark">NH</span>
          <span>
            <span className="brand-name-full">{profile.name}</span>
            <span className="brand-name-role">{profile.role}</span>
          </span>
        </a>

        <nav className={`primary-nav ${mobileOpen ? "is-open" : ""}`}>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={activeId === item.href.replace("#", "") ? "is-active" : ""}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <ThemeToggle />
          <button
            className="nav-toggle"
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
