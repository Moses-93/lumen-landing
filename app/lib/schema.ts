/**
 * Schema.org structured data generators for Lumen landing page.
 *
 * Provides typed generators for SoftwareApplication, Organization,
 * WebSite, and FAQPage schemas adhering to JSON-LD standards.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SchemaConfig {
  locale: string;
  title: string;
  description: string;
  url: string;
  faqItems: FaqItem[];
}

/**
 * Builds the Schema.org SoftwareApplication JSON-LD object.
 *
 * Args:
 *     config: Configuration containing locale, title, description, and site URL.
 *
 * Returns:
 *     A record representing the SoftwareApplication schema.
 */
export function generateSoftwareApplicationSchema(config: SchemaConfig): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Lumen",
    headline: config.title,
    description: config.description,
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS",
    inLanguage: config.locale,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
    softwareRequirements: "iOS 17.0 or later",
    featureList: [
      "On-device semantic resonance",
      "Local-first encrypted journal",
      "Zero cloud sync requirement",
      "No user account needed",
    ],
  };
}

/**
 * Builds the Schema.org Organization JSON-LD object.
 *
 * Args:
 *     config: Configuration containing site URL.
 *
 * Returns:
 *     A record representing the Organization schema.
 */
export function generateOrganizationSchema(config: SchemaConfig): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lumen",
    url: config.url,
    logo: `${config.url}/favicon.ico`,
  };
}

/**
 * Builds the Schema.org WebSite JSON-LD object.
 *
 * Args:
 *     config: Configuration containing site metadata and URL.
 *
 * Returns:
 *     A record representing the WebSite schema.
 */
export function generateWebSiteSchema(config: SchemaConfig): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lumen",
    url: config.url,
    inLanguage: config.locale,
    description: config.description,
  };
}

/**
 * Builds the Schema.org FAQPage JSON-LD object.
 *
 * Args:
 *     faqItems: An array of question and answer pairs.
 *
 * Returns:
 *     A record representing the FAQPage schema.
 */
export function generateFaqSchema(faqItems: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
