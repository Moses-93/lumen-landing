import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

/**
 * Provides request-scoped internationalization configuration.
 *
 * Resolves the requested locale against available routing locales and
 * loads the corresponding dictionary messages.
 *
 * Args:
 *     params: Parameters containing the asynchronous requestLocale promise.
 *
 * Returns:
 *     An object containing the verified locale and loaded messages.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
