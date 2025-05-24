import Script from 'next/script';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import NavBar from '../components/NavBar';
import SocialIcons from '../components/SocialIcons';

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
  title: {
    default: "Fati's Portfolio | Software Engineer",
    template: "%s | Fati's Portfolio"
  },
  description: "Welcome to my portfolio! I'm Fati, a software engineer passionate about building modern web applications and learning new technologies.",
  keywords: [
    "software engineer",
    "web developer",
    "React",
    "Next.js",
    "portfolio",
    "frontend developer",
    "full-stack developer"
  ],
  authors: [{ name: "Fati" }],
  creator: "Fati",
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
        alt: "Fati's Portfolio"
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
    creator: '@YourTwitterHandle'
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
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
      <body className="min-h-screen font-inter relative">
        <Providers>
          <div className="gradient-background" />
          <div className="fixed inset-0 -z-10" id="particles-background" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{/* Wrap content */}
            <NavBar />
            <main className="pt-16">
              {children}
            </main>
            <footer className="mt-auto py-8 text-center text-sm text-foreground/70">
              <div className="container">
                <SocialIcons />
                <p>© {new Date().getFullYear()} Fati. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
