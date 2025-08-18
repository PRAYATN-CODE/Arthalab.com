import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import TelegramButton from "./components/ui/TelegramButton";
import "./globals.css";

// ✅ Import Source Sans 3
const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Adjust as needed
});

export const metadata: Metadata = {
  title: {
    default: "Algo Trading | AI Algo Trading Bots | API Trading Platform | Arthalab",
    template: "%s - Algo Trading",
  },
  description:
    "Arthalab is India's premier AI-powered algo trading platform. Deploy intelligent algo bots for options, equities, and futures trading. Build no-code strategies, backtest with AI, and trade via API on top brokers like AngelOne, Dhan, Aliceblue, 5paisa, Fyers, and more. From retail traders to HNI investors, our AI algo trading solutions deliver precision, speed, and consistent returns.",
  keywords:
    "algo trading, algo bots, AI algo trading, algorithmic trading, algo trading bots, options algo trading, API trading, AI strategy builder, backtesting engine, automated trading bots India, HNI algo solutions",

  // Open Graph (Facebook, LinkedIn, WhatsApp etc.)
  openGraph: {
    title: "Arthalab | India's Leading AI Algo Trading Platform",
    description:
      "Experience cutting-edge AI algo trading bots for the Indian market. Trade smarter with precision automation, AI strategy builder, and live API trading.",
    url: "https://arthalab.com",
    siteName: "Arthalab",
    type: "website",
    images: [
      {
        url: "https://arthalab.com/arthalabLogo2.png", // replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Arthalab - AI Algo Trading Platform",
      },
    ],
  },

  // Twitter (X)
  twitter: {
    card: "summary_large_image",
    site: "@arthalab", // replace with your official Twitter handle
    creator: "@arthalab", // optional: content creator
    title: "Arthalab | India's Leading AI Algo Trading Platform",
    description: "Smart AI-powered algo trading bots for Indian stock market. Automate strategies, backtest with AI, and trade via APIs with top brokers.",
    images: ["https://arthalab.com/arthalabLogo2.png"], // same OG image or Twitter-specific
  },

  // Canonical & alternates (SEO)
  alternates: {
    canonical: "https://arthalab.com",
  },

  // Favicons / icons
  icons: {
    icon: "/favicon.ico",
    apple: "/arthalabLogo2.png",
  },

  // Additional metadata (optional for better SEO)
  metadataBase: new URL("https://arthalab.com"),
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
    <html lang="en">
      <body className={`${sourceSans3.variable} antialiased`}>
        <Navbar />
        <div className="min-h-dvh flex-1 w-full text-foreground dark:text-dark-foreground bg-background dark:bg-dark-background">
          {children}
        </div>
        <TelegramButton/>
        <Footer />
        {/* Toaster MUST be inside body */}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
