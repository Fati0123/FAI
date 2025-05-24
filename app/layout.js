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
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
          {/* AI Texture Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgwVjB6TTEwMCAxMDBoMTAwdjEwMEgxMDBWMTAwek0wIDEwMGgxMDB2MTAwSDBWMTAwek0xMDAgMjAwaDEwMHYxMDBIMTAwVjIwMHpNMCAyMDBoMTAwdjEwMEgwVjIwMHpNMTAwIDMwMGgxMDB2MTAwSDEwMFYzMDB6TTAgMzAwaDEwMHYxMDBIMFYzMDB6TTEwMCA0MDBoMTAwdjEwMEgxMDBWNDAwek0wIDQwMGgxMDB2MTAwSDBWNDAwek0xMDAgNTAwaDEwMHYxMDBIMTAwVjUwMHpNMCA1MDBoMTAwdjEwMEgwVjUwMHpNMTAwIDYwMGgxMDB2MTAwSDEwMFY2MDB6TTAgNjAwaDEwMHYxMDBIMFY2MDB6TTEwMCA3MDBoMTAwdjEwMEgxMDBWNzAwek0wIDcwMGgxMDB2MTAwSDBWNzAwek0xMDAgODAwaDEwMHYxMDBIMTAwVjgwMHpNMCA4MDBoMTAwdjEwMEgwVjgwMHpNMTAwIDkwMGgxMDB2MTAwSDEwMFY5MDB6TTAgOTAwaDEwMHYxMDBIMFY5MDB6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')]"></div>

          {/* Content container */}
          <div className="relative z-10">
            <Providers>
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
          </div>
        </div>
      </body>
    </html>
  );
}
