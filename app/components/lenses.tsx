import { useTranslations } from "next-intl";

/**
 * Lenses section displaying curated thematic canons for resonance.
 */
export function Lenses() {
  const t = useTranslations("Lenses");

  const canons = [
    {
      id: "lens-stoic",
      name: t("lens1Name"),
      tag: t("lens1Tag"),
      isDefault: true,
      desc: t("lens1Desc"),
      accent: "border-insight/30 bg-insight/5",
    },
    {
      id: "lens-existential",
      name: t("lens2Name"),
      tag: t("lens2Tag"),
      isDefault: false,
      desc: t("lens2Desc"),
      accent: "border-border-subtle bg-abyss-card/60",
    },
    {
      id: "lens-eastern",
      name: t("lens3Name"),
      tag: t("lens3Tag"),
      isDefault: false,
      desc: t("lens3Desc"),
      accent: "border-border-subtle bg-abyss-card/60",
    },
  ];

  return (
    <section
      id="lenses"
      aria-labelledby="lenses-title"
      className="py-20 sm:py-28 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-insight mb-3 block">
            {t("eyebrow")}
          </span>
          <h2
            id="lenses-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-5 leading-tight font-display"
          >
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* 3 Lenses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {canons.map((canon) => (
            <article
              key={canon.id}
              id={canon.id}
              className={`glass-panel-interactive rounded-3xl p-7 sm:p-8 flex flex-col justify-between border ${canon.accent}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full ${
                      canon.isDefault
                        ? "bg-insight/15 text-insight border border-insight/30"
                        : "bg-abyss text-calm-sky border border-border-subtle"
                    }`}
                  >
                    {canon.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 font-display">
                  {canon.name}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {canon.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
