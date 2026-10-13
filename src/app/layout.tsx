import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Kalnia } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const kalnia = Kalnia({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-kalnia",
});

export const metadata: Metadata = {
  title: "LocChé | Rooted in Culture. Refined in Craft.",
  description:
    "Premium loc care and protective styling handcrafted with intention in Andover, Minnesota.",
  authors: [{ name: "LocChé" }],
  openGraph: {
    title: "LocChé | Rooted in Culture. Refined in Craft.",
    description:
      "Healthy growth, clean parts, and premium styles that feel like you.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/images/icon.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0c090c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${cormorant.variable} ${kalnia.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
