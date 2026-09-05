import { useTranslations } from "next-intl";

/**
 * Hero section delivering the core promise: "See yourself through time"
 * with quiet dignity, zero AI jargon, and a realistic preview of the app state.
 */
export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-36 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-abyss-card border border-border-subtle text-xs text-insight mb-8 tracking-wide font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-insight shadow-[0_0_8px_#fff500]" />
          <span>{t("badge")}</span>
        </div>

        {/* Main H1 Headline */}
        <h1
          id="hero-headline"
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary max-w-4xl mx-auto leading-[1.12] text-balance font-display mb-6"
        >
          {t("headline")}
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10 text-balance font-normal">
          {t("subheadline")}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {/* App Store badge / button */}
          <div
            id="hero-appstore-button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-abyss-card border border-border-subtle hover:border-insight/40 text-text-primary text-sm font-semibold transition-all shadow-lg group cursor-default"
          >
            <svg
              className="w-5 h-5 fill-current text-text-primary group-hover:text-insight transition-colors"
              viewBox="0 0 170 170"
              aria-hidden="true"
            >
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.7-7.85-12.01-14.31-6.19-9.17-11.03-19.68-14.52-31.53-3.49-11.85-5.24-22.9-5.24-33.15 0-14.77 3.59-26.69 10.77-35.76 7.18-9.07 16.32-13.68 27.42-13.84 4.88 0 10.11 1.22 15.68 3.65 5.57 2.44 9.17 3.69 10.8 3.77 1.48 0 5.25-1.32 11.31-3.97 6.06-2.65 11.48-3.8 16.27-3.46 12.44.75 22.25 5.3 29.43 13.65-10.87 6.59-16.16 15.77-15.86 27.53.3 9.4 3.97 17.22 11.01 23.46 7.04 6.24 15.43 9.77 25.17 10.59-2.21 6.84-4.85 13.6-7.92 20.27zM119.22 31.84c0-7.14 2.61-13.82 7.83-20.04 5.22-6.22 11.66-10.23 19.32-12.03.11 1.05.16 1.95.16 2.7 0 7.02-2.73 13.79-8.19 20.31-5.46 6.52-12.16 10.42-20.1 11.71-.22-.88-.34-1.76-.34-2.65z" />
            </svg>
            <div className="text-left leading-tight">
              <div className="text-[10px] text-text-muted uppercase tracking-wider">
                {t("comingSoon")}
              </div>
              <div className="text-xs font-semibold text-text-primary">
                {t("primaryCta")}
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <a
            href="#problem"
            id="hero-explore-button"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-transparent hover:bg-abyss-card border border-border-subtle text-text-secondary hover:text-text-primary text-sm font-medium transition-all"
          >
            {t("secondaryCta")}
            <span className="ml-2 text-insight">↓</span>
          </a>
        </div>

        {/* Privacy summary line */}
        <p className="text-xs text-calm-sky mb-16 flex items-center justify-center gap-2">
          <span className="text-insight text-sm" aria-hidden="true">
            🔒
          </span>
          {t("privacyNote")}
        </p>

        {/* Visual Mockup - Minimalist Safe Space Card */}
        <div
          id="hero-mockup-card"
          className="relative max-w-2xl mx-auto rounded-3xl glass-panel p-6 sm:p-8 text-left border border-border-subtle shadow-2xl overflow-hidden"
        >
          {/* Subtle top insight ray highlight line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-insight/50 to-transparent" />

          {/* Entry header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5 mb-5">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-insight shadow-[0_0_8px_#fff500]" />
              <span className="text-xs font-mono text-calm-sky">
                {t("mockupTimestamp")}
              </span>
            </div>
            <span className="text-[11px] font-mono text-calm-sky bg-abyss px-2.5 py-0.5 rounded-full border border-border-subtle">
              {t("mockupScore")}
            </span>
          </div>

          {/* User state raw input */}
          <p className="text-sm sm:text-base text-text-primary font-sans leading-relaxed mb-6">
            {t("mockupThought")}
          </p>

          {/* Mirrored resonance passage */}
          <div className="rounded-2xl bg-abyss/80 border border-border-subtle p-5 relative">
            <div className="text-[10px] font-mono uppercase tracking-widest text-insight mb-2 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-insight" />
              {t("mockupLens")}
            </div>
            <blockquote className="text-base sm:text-lg font-serif text-text-primary leading-relaxed italic mb-3">
              {t("mockupQuote")}
            </blockquote>
            <cite className="block text-xs font-sans not-italic text-calm-sky">
              — {t("mockupAuthor")},{" "}
              <span className="text-text-muted">{t("mockupSource")}</span>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
