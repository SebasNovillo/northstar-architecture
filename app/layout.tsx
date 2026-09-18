import type { Metadata } from "next";

import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const title = "Northstar Architecture";
const description = "Contemporary architecture studio based in Chicago.";
const socialImage = {
  url: "/images/northstar-hero-chicago.jpg",
  width: 1600,
  height: 1200,
  alt: "Chicago high-rise architecture at dusk",
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Northstar Architecture",
    locale: "en_US",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
