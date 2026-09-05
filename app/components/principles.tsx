import { useTranslations } from "next-intl";

/**
 * Principles section highlighting the core philosophical stance:
 * "The system makes no conclusions for you. It returns an ordered picture of your experience."
 */
export function Principles() {
  const t = useTranslations("Principles");

  const steps = [
    {
      num: t("step1Num"),
      title: t("step1Title"),
      desc: t("step1Desc"),
    },
    {
      num: t("step2Num"),
      title: t("step2Title"),
      desc: t("step2Desc"),
    },
    {
      num: t("step3Num"),
      title: t("step3Title"),
      desc: t("step3Desc"),
    },
  ];

  return (
    <section
      id="principles"
      aria-labelledby="principles-title"
      className="py-20 sm:py-28 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-insight mb-3 block">
            {t("eyebrow")}
          </span>
          <h2
            id="principles-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-5 leading-tight font-display"
          >
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-panel-interactive rounded-3xl p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-mono font-bold text-calm-sky/30 mb-4 select-none">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 font-display">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
