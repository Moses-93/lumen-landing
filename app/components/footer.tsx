import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";

/**
 * Minimalist footer with brand mark, tagline, copyright, and language switcher.
 */
export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer
      id="main-footer"
      className="border-t border-border-subtle bg-abyss-deep/80 py-12 sm:py-16 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/[0.04]">
          {/* Brand and Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-abyss-card border border-border-subtle">
                <span className="h-1.5 w-1.5 rounded-full bg-insight shadow-[0_0_8px_#fff500]" />
              </span>
              <span className="font-semibold text-lg text-text-primary font-display">
                Lumen
              </span>
            </div>
            <p className="text-xs text-calm-sky">{t("tagline")}</p>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>
            © {new Date().getFullYear()} Lumen. {t("rights")}
          </div>
          <div>{t("designedFor")}</div>
        </div>
      </div>
    </footer>
  );
}
