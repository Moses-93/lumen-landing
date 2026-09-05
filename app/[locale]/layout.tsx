import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing, locales, type Locale } from "@/i18n/routing";
import {
  generateSoftwareApplicationSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateFaqSchema,
} from "@/app/lib/schema";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Generates dynamic SEO metadata for each language segment.
 *
 * Args:
 *     params: Asynchronous object containing the matched locale string.
 *
 * Returns:
 *     Configured Next.js Metadata object.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    return {};
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;
  const meta = messages.Metadata;
  const siteUrl = "https://lumen-journal.vercel.app";

  return {
    title: {
      default: meta.title,
      template: "%s | Lumen",
    },
    description: meta.description,
    keywords: meta.keywords,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        uk: "/uk",
        pl: "/pl",
        cs: "/cs",
        de: "/de",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: locale,
      url: `/${locale}`,
      siteName: "Lumen",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * Localized root layout handling HTML tag, fonts, Schema.org, and i18n provider.
 *
 * Args:
 *     props: Object with children and route params Promise.
 *
 * Returns:
 *     The rendered localized document structure.
 */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const rawDict = (await import(`@/messages/${locale}.json`)).default;

  const siteUrl = "https://lumen-journal.vercel.app";
  const schemaConfig = {
    locale,
    title: rawDict.Metadata.title,
    description: rawDict.Metadata.description,
    url: siteUrl,
    faqItems: [
      { question: rawDict.Faq.q1, answer: rawDict.Faq.a1 },
      { question: rawDict.Faq.q2, answer: rawDict.Faq.a2 },
      { question: rawDict.Faq.q3, answer: rawDict.Faq.a3 },
      { question: rawDict.Faq.q4, answer: rawDict.Faq.a4 },
    ],
  };

  const softwareSchema = generateSoftwareApplicationSchema(schemaConfig);
  const orgSchema = generateOrganizationSchema(schemaConfig);
  const webSiteSchema = generateWebSiteSchema(schemaConfig);
  const faqSchema = generateFaqSchema(schemaConfig.faqItems);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${newsreader.variable} dark antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen bg-abyss text-text-primary flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
