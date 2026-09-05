import "./globals.css";

/**
 * Minimal root layout delegating language attributes and shell rendering
 * to the localized [locale] layout.
 *
 * Args:
 *     props: Object containing children nodes.
 *
 * Returns:
 *     The rendered children elements.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
