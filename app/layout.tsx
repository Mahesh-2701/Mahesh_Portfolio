import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#060709",
  colorScheme: "dark"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mahi.dev"),
  title: "Mahi — Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Mahi, a Full-Stack Developer building modern web applications, AI-powered products, automation systems, and scalable software.",
  keywords: [
    "Mahi",
    "Full-Stack Developer",
    "AI Engineer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "AI Agents",
    "RAG",
    "Docker",
    "n8n"
  ],
  authors: [{ name: "Mahi", url: "https://github.com/Mahesh-2701" }],
  creator: "Mahi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahi.dev",
    siteName: "Mahi Portfolio",
    title: "Mahi — Full-Stack Developer & AI Engineer",
    description:
      "Portfolio of Mahi, a Full-Stack Developer building modern web applications, AI-powered products, automation systems, and scalable software.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahi — Full-Stack Developer & AI Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahi — Full-Stack Developer & AI Engineer",
    description:
      "Portfolio of Mahi, a Full-Stack Developer building modern web applications, AI-powered products, automation systems, and scalable software.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mahi",
    jobTitle: "Full-Stack Developer & AI Engineer",
    description:
      "A full-stack software developer focused on building modern web applications, AI-powered products, automation systems, and production-ready software.",
    sameAs: [
      "https://github.com/Mahesh-2701"
    ],
    knowsAbout: [
      "Full-Stack Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "AI Systems",
      "Autonomous Agents",
      "RAG",
      "PostgreSQL",
      "Redis",
      "Docker",
      "System Design"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <meta name="color-scheme" content="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#060709] text-[#f0f2f5] antialiased selection:bg-blue-600/30 selection:text-blue-200">
        {children}
      </body>
    </html>
  );
}
