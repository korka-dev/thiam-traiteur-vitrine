import type { Metadata } from "next";
import { Playfair_Display, Alex_Brush, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const script = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thiam Traiteur — Restauration d'entreprise & Traiteur | Dakar",
  description:
    "Thiam Traiteur, plus de 20 ans d'expérience en restauration d'entreprise, restauration collective et prestations traiteur à Dakar (Point E). Découvrez aussi Tournesol Restaurant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${script.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-navy font-body">
        {children}
      </body>
    </html>
  );
}
