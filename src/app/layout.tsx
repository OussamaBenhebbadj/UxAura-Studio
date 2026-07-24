import type { Metadata } from "next";
import "@fontsource/krona-one/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "UXaura Studio | Design UI/UX qui donne vie à vos produits",
  description:
    "UXaura Studio aide les entreprises et institutions a creer des interfaces modernes, intuitives et performantes. Design UI/UX, prototypage et recherche utilisateur.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
