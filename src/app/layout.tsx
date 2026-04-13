import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saadqadir.com"),
  title: "Saad Qadir | Software Architect & CEO of Alpha Brackets",
  description:
    "Software Architect & CEO building high-performance, scalable systems for founders. Eliminate technical debt and ship faster.",
  keywords: [
    "System Architecture",
    "SaaS Scalability",
    "Fractional CTO",
    "Enterprise Engineering",
  ],
  authors: [{ name: "Saad Qadir" }],
  openGraph: {
    title: "Saad Qadir | Software Architect & CEO",
    description:
      "Software Architect & CEO building high-performance, scalable systems for founders. Eliminate technical debt and ship faster.",
    type: "website",
    url: "https://www.saadqadir.com",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Qadir | Software Architect",
    description:
      "Software Architect & CEO building high-performance, scalable systems for founders. Eliminate technical debt and ship faster.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <Script id="theme-checker" strategy="beforeInteractive">
          {`
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (_) {}
          `}
        </Script>
      </head>
      <body className="grain" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
