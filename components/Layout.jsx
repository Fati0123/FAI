import Head from 'next/head';
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center text-center">
      <Head>
        <title>Your AI Portfolio</title>
      </Head>
      
      <NavBar />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="py-6 border-t border-blue-200">
        <div className="flex gap-4 justify-center">
          {/* Social icons will go here */}
        </div>
      </footer>
    </div>
  );
}
