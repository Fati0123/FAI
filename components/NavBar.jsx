'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground">
            Fati
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground/70 hover:text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`nav-link ${
                  activeSection === href.slice(1) ? 'active' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {label}
              </a>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-md hover:bg-foreground/10"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="flex flex-col space-y-4 pt-4 pb-2">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className={`nav-link ${
                      activeSection === href.slice(1) ? 'active' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(href).scrollIntoView({
                        behavior: 'smooth',
                      });
                      setIsMenuOpen(false);
                    }}
                  >
                    {label}
                  </a>
                ))}
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-md hover:bg-foreground/10 w-fit"
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default NavBar;
