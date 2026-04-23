import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "4uEngg | Engineering Solutions & Design Services",
  description:
    "4uEngg provides engineering design, development, and innovative solutions. Visit 4uengg.com for top engineering services.",
  keywords: [
    "4uengg",
    "4u engineering",
    "engineering services",
    "design solutions",
  ],
  metadataBase: new URL("https://4uengg.com"),
  openGraph: {
    title: "4uEngg",
    description: "Engineering Solutions & Design Services",
    url: "https://4uengg.com",
    siteName: "4uEngg",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-transparent text-[color:var(--color-foreground)]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}