"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

/**
 * Daily Anchor section demonstrating the 1-10 daily subjective rating scale
 * and how it serves as a gentle psychological bridge to mindful introspection.
 */
export function DailyAnchor() {
  const t = useTranslations("DailyAnchor");
  const [selectedScore, setSelectedScore] = useState<number>(7);

  const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section
      id="daily-anchor"
      aria-labelledby="daily-anchor-title"
      className="py-20 sm:py-28 relative z-10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-border-subtle relative overflow-hidden text-center">
          {/* Subtle warm sunset reflection */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-sunset-dim blur-3xl pointer-events-none"
          />

          <span className="text-xs font-mono uppercase tracking-widest text-sunset mb-3 block">
            {t("eyebrow")}
          </span>
          <h2
            id="daily-anchor-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4 font-display"
          >
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
            {t("description")}
          </p>

          {/* Interactive Scale Demo */}
          <div className="bg-abyss/80 rounded-2xl p-6 sm:p-8 border border-border-subtle max-w-2xl mx-auto text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-calm-sky">
                {t("scaleLabel")}
              </span>
              <span className="text-xs font-mono text-insight font-bold">
                {selectedScore} / 10
              </span>
            </div>

            {/* Numbers Row */}
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-6">
              {scores.map((score) => (
                <button
                  key={score}
                  type="button"
                  onClick={() => setSelectedScore(score)}
                  aria-label={`Score ${score}`}
                  className={`h-11 rounded-xl text-sm font-semibold transition-all flex items-center justify-center ${
                    selectedScore === score
                      ? "bg-insight text-abyss shadow-md shadow-insight/20 scale-105"
                      : "bg-abyss-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-insight/40"
                  }`}
                >
                  {score}
                </button>
              ))}
            </div>

            {/* Prompt preview following the selection */}
            <div className="pt-4 border-t border-white/[0.05]">
              <div className="text-xs text-text-muted mb-2 font-mono">
                {t("promptLabel")}
              </div>
              <div className="text-sm text-text-secondary italic">
                {t("placeholder")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
