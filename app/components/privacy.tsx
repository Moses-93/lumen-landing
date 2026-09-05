import { useTranslations } from "next-intl";

/**
 * Privacy section articulating data sovereignty as an uncompromising foundation.
 */
export function Privacy() {
  const t = useTranslations("Privacy");

  const pillars = [
    {
      id: "privacy-local",
      icon: "🛡️",
      title: t("pillar1Title"),
      desc: t("pillar1Desc"),
    },
    {
      id: "privacy-offline",
      icon: "✈️",
      title: t("pillar2Title"),
      desc: t("pillar2Desc"),
    },
    {
      id: "privacy-ownership",
      icon: "🔑",
      title: t("pillar3Title"),
      desc: t("pillar3Desc"),
    },
  ];

  return (
    <section
      id="privacy"
      aria-labelledby="privacy-title"
      className="py-20 sm:py-28 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-insight mb-3 block">
            {t("eyebrow")}
          </span>
          <h2
            id="privacy-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-5 leading-tight font-display"
          >
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {pillars.map((pillar) => (
            <article
              key={pillar.id}
              id={pillar.id}
              className="glass-panel-interactive rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-5" aria-hidden="true">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 font-display">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Architecture Guarantee Banner */}
        <div className="rounded-3xl bg-abyss-card border border-border-subtle p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-insight/10 border border-insight/20 flex items-center justify-center text-insight font-mono text-base font-bold">
              {t("bannerStat")}
            </div>
            <div>
              <div className="text-sm font-semibold text-text-primary">
                {t("bannerTitle")}
              </div>
              <div className="text-xs text-text-secondary">
                {t("bannerDesc")}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-abyss text-calm-sky border border-border-subtle">
              {t("badge1")}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-abyss text-calm-sky border border-border-subtle">
              {t("badge2")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
