'use client';

import { Inter, Poppins } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function Template({ children }) {
  return (
    <Providers>
      <div className={`${inter.variable} ${poppins.variable} font-inter antialiased min-h-screen bg-white dark:bg-gray-900`}>
        {children}
      </div>
    </Providers>
  );
}
