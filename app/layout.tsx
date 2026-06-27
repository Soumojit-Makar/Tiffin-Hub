import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, CONTACT_INFO } from "@/constants";

export const metadata: Metadata = {
  title: "Tiffin Hub — Fresh Homemade Meals Delivered Daily",
  description:
    "Affordable, hygienic, and delicious homemade tiffin service in " +
    CONTACT_INFO.serviceArea +
    ". Order veg thali, non-veg thali, Bengali specials & more.",
  keywords: [
    "tiffin service",
    "food delivery",
    "homemade meals",
    "Bhatpara",
    "Naihati",
    "Bengali food",
    "daily tiffin",
    "healthy meals",
    "affordable tiffin",
    "meal delivery",
    "tiffin hub",
    "Kolkata food",
    "Indian cuisine",
    "fresh meals",
    "home-cooked food",
    "tiffin subscription",
    "meal plans",
    "tiffin service near me",
    "tiffin delivery",
    "homemade food",

  ],
 
  authors: [{ name: "Digital Indian", url: "https://digitalindian.co.in" }],
  creator: "Digital Indian",
  publisher: "Digital Indian",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Tiffin Hub — Fresh Homemade Meals Delivered Daily",
    description:
      "Healthy, affordable tiffin service in Bhatpara & surrounding areas. From ₹69.",
    url: SITE_URL,
    siteName: "Tiffin Hub",
    locale: "en_IN",
    type: "website",
    ttl: 3600,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiffin Hub",
    description: "Homemade meals delivered daily. Order now!",
  },


  icons: {
    icon: "/icon.png",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
