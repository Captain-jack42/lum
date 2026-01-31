import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D0D12",
};

export const metadata: Metadata = {
  title: {
    default: "LUMEN — Where clarity meets possibility",
    template: "%s | LUMEN",
  },
  description:
    "Premium digital experiences. We build next-gen interfaces for ambitious brands using cutting-edge 3D technology and modern design principles.",
  keywords: ["Digital Agency", "3D Web", "Premium Design", "Next.js", "Creative Developer"],
  authors: [{ name: "Lumen Team" }],
  creator: "Lumen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lumen-demo.onrender.com",
    title: "LUMEN — Premium Digital Experiences",
    description: "Where clarity meets possibility. Next-gen interfaces for ambitious brands.",
    siteName: "LUMEN",
    images: [
      {
        url: "/og-image.jpg", // You should add an actual image later
        width: 1200,
        height: 630,
        alt: "LUMEN Hero Section",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMEN — Premium Digital Experiences",
    description: "Where clarity meets possibility. Next-gen interfaces for ambitious brands.",
    creator: "@lumen_agency",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-primary text-highlight antialiased font-body selection:bg-accent selection:text-primary">
        {children}
      </body>
    </html>
  );
}
