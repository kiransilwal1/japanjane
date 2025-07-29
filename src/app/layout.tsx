// layout.tsx
import { ThemeProvider } from "./_utils/theme_context";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japan Jane: जापान जाने | Work Visa Japan - Find Your Dream Job",
  description:
    "जापानमा रोजगारी खोज्नुहोस्। Work visa, job opportunities, र employment guidance सबै एकै ठाउँमा। Your gateway to working in Japan.",
  keywords:
    "Japan jobs, work visa Japan, जापान रोजगारी, Nepal to Japan, employment Japan, work permit",
  metadataBase: new URL("https://japanjane.com"),

  openGraph: {
    title: "Japan Jane: जापान जाने | Work Visa Japan",
    description:
      "जापानमा रोजगारी सम्बन्धी पूर्ण जानकारी। Find job opportunities, visa guidance, and employment support for Nepali workers.",
    url: "https://japanjane.com",
    siteName: "Japan Jane",
    images: [
      {
        url: "/og-image.png", // Recommended: Create a proper 1200x630 OG image
        width: 1200,
        height: 630,
        alt: "Japan Jane - Gateway to Japanese Employment",
      },
      {
        url: "/job-japan.png", // Fallback to current image
        width: 778,
        height: 778,
        alt: "Japan Job Opportunities",
      },
    ],
    locale: "en_US",
    alternateLocale: ["ne_NP"], // Nepali locale
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Japan Jane: जापान जाने | Work Visa Japan",
    description:
      "जापानमा रोजगारी सम्बन्धी पूर्ण जानकारी। Your trusted partner for Japanese employment opportunities.",
    images: ["/og-image.jpg"],
    creator: "@japanjane", // Add if you have Twitter
    site: "@japanjane",
  },

  // Additional metadata for better SEO and social sharing
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

  // Verification tags (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
    // facebook: "your-facebook-domain-verification",
  },

  // Additional structured data
  category: "Employment",
  classification: "Job Portal",

  // Alternative titles for different contexts
  alternates: {
    canonical: "https://japanjane.com",
    languages: {
      en: "https://japanjane.com",
      ne: "https://japanjane.com/ne",
    },
  },

  // App-specific metadata if you have mobile apps
  // applicationName: "Japan Jane",
  // appleWebApp: {
  //   capable: true,
  //   title: "Japan Jane",
  //   statusBarStyle: "default",
  // },

  // Additional Open Graph properties for job-related content
  other: {
    // Facebook App ID (if you have one)
    // 'fb:app_id': 'your-facebook-app-id',

    // Additional OG properties for job sites
    "og:image:type": "image/jpeg",
    "article:author": "Japan Jane Team",
    "article:section": "Employment",
    "og:updated_time": new Date().toISOString(),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Roboto+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          backgroundColor: "var(--color-background-default-default)",
          color: "var(--color-text-default-default)",
          fontFamily: "var(--font-family-sans)",
        }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
