"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

/**
 * Living Response showcase demonstrating semantic resonance without AI fluff or tech metrics.
 */
export function HowItWorks() {
  const t = useTranslations("HowItWorks");
  const [selectedSample, setSelectedSample] = useState<1 | 2 | 3>(1);

  const samples = [
    {
      id: 1 as const,
      label: t("sample1Label"),
      input: t("sample1Input"),
      quote: t("sample1Quote"),
      author: t("sample1Author"),
      source: t("sample1Source"),
    },
    {
      id: 2 as const,
      label: t("sample2Label"),
      input: t("sample2Input"),
      quote: t("sample2Quote"),
      author: t("sample2Author"),
      source: t("sample2Source"),
    },
    {
      id: 3 as const,
      label: t("sample3Label"),
      input: t("sample3Input"),
      quote: t("sample3Quote"),
      author: t("sample3Author"),
      source: t("sample3Source"),
    },
  ];

  const activeSample = samples.find((s) => s.id === selectedSample) || samples[0];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="py-20 sm:py-28 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-insight mb-3 block">
            {t("eyebrow")}
          </span>
          <h2
            id="how-it-works-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-5 leading-tight font-display"
          >
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            {t("description")}
          </p>

          {/* Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-8">
            {samples.map((sample) => (
              <button
                key={sample.id}
                id={`sample-selector-${sample.id}`}
                type="button"
                onClick={() => setSelectedSample(sample.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedSample === sample.id
                    ? "bg-insight text-abyss shadow-md shadow-insight/20 font-semibold"
                    : "bg-abyss-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-insight/40"
                }`}
              >
                {sample.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-5xl mx-auto">
          {/* Left Card: The User's Raw Note */}
          <div className="rounded-3xl bg-abyss-card/90 border border-border-subtle p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-calm-sky mb-4 pb-3 border-b border-white/[0.05]">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-calm-sky" />
                  {t("entryBoxLabel")}
                </span>
                <span className="text-text-muted">{t("entryBoxMeta")}</span>
              </div>
              <p className="text-base sm:text-lg text-text-primary font-sans leading-relaxed">
                «{activeSample.input}»
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.05] text-xs text-text-muted">
              {t("entryBoxFoot")}
            </div>
          </div>

          {/* Right Card: Living Response Quote with Insight Ray Accent */}
          <div className="rounded-3xl bg-abyss-hover/90 border border-insight/40 p-7 sm:p-8 relative shadow-[0_0_40px_rgba(255,245,0,0.06)] flex flex-col justify-between">
            {/* Subtle top ray highlight */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-36 h-36 rounded-full bg-insight/10 blur-2xl pointer-events-none"
            />

            <div>
              <div className="flex items-center justify-between text-xs font-mono text-insight mb-4 pb-3 border-b border-insight/20">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-insight shadow-[0_0_6px_#fff500]" />
                  {t("quoteBoxLabel")}
                </span>
                <span className="text-calm-sky">{t("quoteBoxMeta")}</span>
              </div>

              <blockquote className="text-lg sm:text-xl font-serif text-text-primary leading-relaxed italic mb-4">
                «{activeSample.quote}»
              </blockquote>

              <cite className="block text-sm font-sans not-italic text-calm-sky">
                <span className="text-text-primary font-medium">
                  {activeSample.author}
                </span>
                {" — "}
                <span className="text-text-muted">{activeSample.source}</span>
              </cite>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.05] text-xs text-calm-sky">
              {t("quoteBoxFoot")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
