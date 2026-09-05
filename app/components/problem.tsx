import { useTranslations } from "next-intl";

/**
 * Problem section highlighting why memory distorts our retrospective understanding
 * and why paper diaries and AI chatbots fail to give clarity.
 */
export function Problem() {
  const t = useTranslations("Problem");

  const cards = [
    {
      id: "problem-paper",
      icon: "📜",
      title: t("card1Title"),
      description: t("card1Desc"),
    },
    {
      id: "problem-chatbots",
      icon: "🤖",
      title: t("card2Title"),
      description: t("card2Desc"),
    },
    {
      id: "problem-cloud",
      icon: "☁️",
      title: t("card3Title"),
      description: t("card3Desc"),
    },
  ];

  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
      className="py-20 sm:py-28 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-insight mb-3 block">
            {t("eyebrow")}
          </span>
          <h2
            id="problem-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-5 leading-tight font-display"
          >
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* 3 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => (
            <article
              key={card.id}
              id={card.id}
              className="glass-panel-interactive rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-abyss border border-border-subtle flex items-center justify-center text-2xl mb-6 shadow-sm">
                  <span aria-hidden="true">{card.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 font-display">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
