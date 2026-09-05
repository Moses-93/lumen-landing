import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, locales, type Locale } from "@/i18n/routing";
import { AmbientGlow } from "@/app/components/ambient-glow";
import { Navigation } from "@/app/components/navigation";
import { Hero } from "@/app/components/hero";
import { Problem } from "@/app/components/problem";
import { Principles } from "@/app/components/principles";
import { DailyAnchor } from "@/app/components/daily-anchor";
import { HowItWorks } from "@/app/components/how-it-works";
import { Privacy } from "@/app/components/privacy";
import { Lenses } from "@/app/components/lenses";
import { Faq } from "@/app/components/faq";
import { Footer } from "@/app/components/footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Server Component rendering the Lumen landing page for a specific locale.
 *
 * Args:
 *     params: Promise resolving to the current route locale parameter.
 *
 * Returns:
 *     The composed landing page elements.
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <div className="relative min-h-screen flex flex-col bg-abyss selection:bg-insight selection:text-abyss">
      {/* Background atmospheric ambient lighting */}
      <AmbientGlow />

      {/* Header and navigation bar */}
      <Navigation />

      {/* Main landing content */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <Problem />
        <Principles />
        <DailyAnchor />
        <HowItWorks />
        <Privacy />
        <Lenses />
        <Faq />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
