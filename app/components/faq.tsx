import { useTranslations } from "next-intl";

/**
 * FAQ section providing honest, transparent answers to core questions.
 */
export function Faq() {
  const t = useTranslations("Faq");

  const faqs = [
    {
      id: "faq-chatbot",
      question: t("q1"),
      answer: t("a1"),
    },
    {
      id: "faq-storage",
      question: t("q2"),
      answer: t("a2"),
    },
    {
      id: "faq-offline",
      question: t("q3"),
      answer: t("a3"),
    },
    {
      id: "faq-paper",
      question: t("q4"),
      answer: t("a4"),
    },
  ];

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-20 sm:py-28 relative z-10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-insight mb-3 block">
            {t("eyebrow")}
          </span>
          <h2
            id="faq-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4 leading-tight font-display"
          >
            {t("title")}
          </h2>
        </div>

        {/* FAQ Items List */}
        <div className="space-y-6">
          {faqs.map((faq) => (
            <article
              key={faq.id}
              id={faq.id}
              className="rounded-3xl glass-panel p-7 sm:p-8 border border-border-subtle"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-3 font-display">
                {faq.question}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
