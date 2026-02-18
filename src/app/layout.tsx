import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carbon Ventures - Validação de Teses",
  description: "Sua próxima tese merece uma resposta, não um MVP. Validação para fundos, family offices e empreendedores.",
  openGraph: {
    title: "Carbon Ventures - Validação de Teses",
    description: "Sua próxima tese merece uma resposta, não um MVP. Validação para fundos, family offices e empreendedores.",
    type: "website",
    locale: "pt_BR",
    siteName: "Carbon Ventures",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carbon Ventures - Validação de Teses",
    description: "Sua próxima tese merece uma resposta, não um MVP.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased grain-overlay`}>
        {children}
      </body>
    </html>
  );
}
