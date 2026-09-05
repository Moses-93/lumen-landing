"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";

/**
 * Navigation bar with brand lighthouse mark, section anchors, and language switcher.
 */
export function Navigation() {
  const t = useTranslations("Nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#problem", label: t("problem") },
    { href: "#principles", label: t("principles") },
    { href: "#how-it-works", label: t("howItWorks") },
    { href: "#privacy", label: t("privacy") },
    { href: "#lenses", label: t("lenses") },
    { href: "#faq", label: t("faq") },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-abyss/85 backdrop-blur-md border-b border-border-subtle py-3.5 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand logo & lighthouse ray mark */}
        <a
          href="#hero"
          id="nav-brand-logo"
          className="group flex items-center gap-2.5 text-text-primary hover:text-insight transition-colors"
          aria-label="Lumen"
        >
          {/* Lighthouse geometric mark */}
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-abyss-card border border-border-subtle group-hover:border-insight/50 transition-colors shadow-sm">
            <span className="h-2 w-2 rounded-full bg-insight shadow-[0_0_10px_#fff500]" />
          </span>
          <span className="font-semibold text-lg tracking-tight font-display">
            Lumen
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-text-secondary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-text-primary transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-insight hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Language Switcher + Download badge) */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#hero"
            id="nav-cta-button"
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-abyss-card hover:bg-abyss-hover text-text-primary border border-border-subtle hover:border-insight/40 transition-all shadow-sm"
          >
            {t("download")}
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl bg-abyss-card border border-border-subtle text-text-primary focus:outline-none focus:ring-1 focus:ring-insight"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-abyss-card/95 backdrop-blur-xl border-b border-border-subtle px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-4 text-base font-medium text-text-secondary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-insight transition-colors py-2 border-b border-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center px-4 py-2.5 rounded-full text-sm font-semibold bg-insight text-abyss hover:bg-white transition-colors"
              >
                {t("download")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
