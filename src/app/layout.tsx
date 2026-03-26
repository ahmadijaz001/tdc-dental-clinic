import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tdcdentalclinic.ae"),
  title: {
    default: "TDC Dental Clinic Dubai | Luxury Cosmetic Dentistry & Smile Makeovers",
    template: "%s | TDC Dental Clinic Dubai",
  },
  description:
    "Dubai's premier luxury dental clinic specialising in Hollywood Smile, veneers, dental implants, and smile makeovers. Book your transformation consultation today.",
  keywords: [
    "dental clinic Dubai",
    "Hollywood smile Dubai",
    "veneers Dubai",
    "dental implants Dubai",
    "cosmetic dentistry Dubai",
    "smile makeover Dubai",
    "luxury dental clinic UAE",
    "teeth whitening Dubai",
    "best dentist Dubai",
    "smile transformation Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://tdcdentalclinic.ae",
    siteName: "TDC Dental Clinic",
    title: "TDC Dental Clinic Dubai | Luxury Cosmetic Dentistry",
    description:
      "Dubai's premier luxury dental clinic. Veneers, implants, Hollywood Smile, and smile makeovers by world-class specialists.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TDC Dental Clinic Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TDC Dental Clinic Dubai | Luxury Cosmetic Dentistry",
    description: "Transform your smile at Dubai's most prestigious dental clinic.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" data-theme="dark" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased" style={{ backgroundColor: "var(--tdc-bg)", transition: "background-color 0.3s" }}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
