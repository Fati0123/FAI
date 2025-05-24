import Script from 'next/script';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import NavBar from '../components/NavBar';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL('https://your-portfolio-url.com'),
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
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
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
      <body className="min-h-screen bg-background font-inter relative">
        <Providers>
          <div className="fixed inset-0 -z-10" id="particles-background" />
          <NavBar />
          <main className="pt-16">
            {children}
          </main>
          <footer className="mt-auto py-8 text-center text-sm text-foreground/70">
            <div className="container">
              <p>© {new Date().getFullYear()} Fati. All rights reserved.</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
