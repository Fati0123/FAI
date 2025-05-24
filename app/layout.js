'use client';

import Script from 'next/script';
import { Inter, Poppins } from 'next/font/google';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { pageview } from '@/lib/analytics';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Fati's Portfolio | Software Engineer",
  description: "Welcome to my portfolio! I'm Fati, a software engineer passionate about building modern web applications and learning new technologies.",
  keywords: "software engineer, web developer, React, Next.js, portfolio",
  openGraph: {
    title: "Fati's Portfolio | Software Engineer",
    description: "Welcome to my portfolio! I'm Fati, a software engineer passionate about building modern web applications.",
    url: 'https://your-portfolio-url.com',
    siteName: "Fati's Portfolio",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fati's Portfolio | Software Engineer",
    description: "Welcome to my portfolio! I'm Fati, a software engineer passionate about building modern web applications.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
