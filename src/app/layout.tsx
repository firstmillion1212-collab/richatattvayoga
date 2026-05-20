import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://richatattvayoga.com"),
  title: "Richa Tattva Yoga | Online Yoga Classes & Teacher Training India",
  description: "Join Richa Tattva Yoga for premium online yoga classes, therapeutic yoga for mental health, corporate sessions, and AYUSH-certified Yoga Teacher Training by Richa Mishra.",
  keywords: [
    "Online Yoga Classes",
    "Yoga Classes India",
    "Therapeutic Yoga",
    "Yoga for Mental Health",
    "Yoga Teacher Training",
    "Richa Tattva Yoga",
    "Richa Mishra Yoga",
    "Online Group Yoga Classes",
    "Corporate Yoga Sessions",
    "AYUSH Certified Yoga Instructor"
  ],
  authors: [{ name: "Richa Mishra" }],
  creator: "Richa Mishra",
  publisher: "Richa Tattva Yoga",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://richatattvayoga.com",
    title: "Richa Tattva Yoga | Online Yoga Classes & Training",
    description: "Premium online yoga sessions, therapeutic yoga, and certified teacher training led by Richa Mishra.",
    siteName: "Richa Tattva Yoga",
    images: [
      {
        url: "/images/hero_yoga_bg.png",
        width: 1200,
        height: 630,
        alt: "Richa Tattva Yoga - Online Classes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richa Tattva Yoga | Online Yoga Classes",
    description: "Premium online yoga sessions and teacher training led by Richa Mishra.",
    images: ["/images/hero_yoga_bg.png"],
  },
  alternates: {
    canonical: "https://richatattvayoga.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
