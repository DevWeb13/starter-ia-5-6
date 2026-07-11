import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://starter-ia-5-6.vercel.app"),
  title: {
    default: "AI Project Launcher — De l’idée au plan d’exécution",
    template: "%s — AI Project Launcher",
  },
  description:
    "Transformez une idée de produit en plan clair, technique et commercial prêt à exécuter avec une équipe IA.",
  openGraph: {
    title: "AI Project Launcher",
    description:
      "Une démonstration locale pour structurer une idée en plan produit, technique et commercial.",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090f1c" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a href="#contenu" className="skip-link">Aller au contenu</a>
          <SiteHeader />
          <main id="contenu" tabIndex={-1} className="min-h-[70vh]">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
