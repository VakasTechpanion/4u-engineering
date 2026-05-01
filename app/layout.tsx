import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { ReactNode } from "react";

// ✅ Import fonts
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
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
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}