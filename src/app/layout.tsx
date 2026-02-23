import type { Metadata } from "next";
import { DM_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://aicoldcallingsoftware.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Cold Calling Software | AI SDR for Real Estate | Duvox",
    template: "%s | Duvox",
  },
  description:
    "AI cold calling software that sounds human. Full-duplex voice AI for real estate teams. Your AI SDR calls leads, qualifies them, and books appointments. No robotic pauses. No missed opportunities.",
  keywords: [
    "ai cold calling software",
    "ai cold calling",
    "ai cold calling bot",
    "ai outbound calling software",
    "ai sales calls",
    "ai calling software",
    "ai outbound calling",
    "full duplex voice ai",
    "ai voice agent",
    "real estate ai",
    "ai cold calling real estate",
    "ai appointment setter",
    "ai sdr",
    "retell ai alternative",
    "bland ai alternative",
    "vapi alternative",
  ],
  openGraph: {
    title: "AI Cold Calling Software | AI SDR for Real Estate | Duvox",
    description:
      "AI cold calling software that sounds human. Full-duplex voice AI for real estate teams. Your AI SDR calls leads, qualifies them, and books appointments. No robotic pauses. No missed opportunities.",
    url: siteUrl,
    siteName: "Duvox",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Cold Calling Software | AI SDR for Real Estate | Duvox",
    description:
      "AI cold calling software that sounds human. Full-duplex voice AI for real estate teams. Your AI SDR calls leads, qualifies them, and books appointments. No robotic pauses. No missed opportunities.",
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
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Duvox",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI cold calling software that sounds human. Full-duplex voice AI for real estate teams. Your AI SDR calls leads, qualifies them, and books appointments. No robotic pauses. No missed opportunities.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
    featureList: [
      "Full-duplex voice AI",
      "AI cold calling",
      "Lead qualification",
      "Appointment booking",
      "CRM integration",
      "Campaign management",
    ],
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Duvox",
    url: "https://aicoldcallingsoftware.com",
    description: "AI cold calling software with full-duplex voice AI for real estate teams. Calls leads, qualifies them, and books appointments automatically.",
    founder: {
      "@type": "Person",
      name: "Jess Stetson Mason",
      alternateName: "Jess Mason",
      jobTitle: "AI Automation Consultant",
      url: "https://openclawconsultant.com",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Nova Soft AI",
      url: "https://novasoftai.com",
    },
  };

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7V27H27DXN" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7V27H27DXN');`,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
