"use client";

import { useEffect, useCallback, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useForm } from '@formspree/react';
import { portfolioEvents } from '@/lib/analytics';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from 'next-themes';
import { getParticlesConfig } from '@/lib/particlesConfig';

function HomeContent() {
  const { theme } = useTheme();
  const [state, handleSubmit] = useForm("xkgrakjg");

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  // Track initial page load
  useEffect(() => {
    portfolioEvents.navigation('home');
  }, []);

  // Section visibility tracking
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Event handlers
  const handleResumeClick = () => {
    portfolioEvents.resumeDownload();
  };

  const handleProjectClick = (projectName, link) => {
    portfolioEvents.projectClick(projectName, link);
  };

  const handleSocialClick = (platform) => {
    portfolioEvents.socialClick(platform);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    portfolioEvents.formSubmit(!state.errors);
  };

  // Track form interactions
  const handleFormFocus = () => {
    portfolioEvents.formStart();
  };

  return (
    <>
      <Particles
        id="particles-background"
        init={particlesInit}
        options={getParticlesConfig(theme === 'dark')}
        className="fixed inset-0 -z-10"
      />

      {/* Hero Section with Animation */}
      <motion.section 
        id="home"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="container px-4 py-32 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm Fati
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/70 mb-8"
          >
            A Software Engineer passionate about building modern web applications
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <section 
        ref={projectsRef}
        id="projects" 
        className={`py-20 px-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-poppins">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} p-8 rounded-xl shadow-lg`}
            >
              <h3 className="text-2xl font-bold mb-4">To-Do List App</h3>
              <p className="text-lg mb-4">A simple task manager built with React and Tailwind CSS. Great for staying organized!</p>
              <a 
                href="https://github.com/Fati0123/fati" 
                onClick={() => handleProjectClick('Todo List App', 'GitHub')}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Todo List App on GitHub"
              >
                View on GitHub →
              </a>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} p-8 rounded-xl shadow-lg`}
            >
              <h3 className="text-2xl font-bold mb-4">Weather App</h3>
              <p className="text-lg mb-4">An app that fetches and displays weather data using a public API. Shows current weather by city.</p>
              <a 
                href="https://github.com/Fati0123/fati" 
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Weather App on GitHub"
              >
                View on GitHub →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className={`py-20 px-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-poppins">Latest Articles</h2>
          <div className="space-y-8">
            <motion.article 
              whileHover={{ x: 10 }}
              className="cursor-pointer"
              onClick={() => handleArticleClick('My Journey into Software Engineering')}
            >
              <h3 className="text-2xl font-bold mb-2">My Journey into Software Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">May 24, 2025</p>
              <p className="text-lg">Exploring my path from beginner to developer, sharing lessons learned along the way.</p>
            </motion.article>
            <motion.article 
              whileHover={{ x: 10 }}
              className="cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2">Building with Next.js and Tailwind</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">May 20, 2025</p>
              <p className="text-lg">My experience creating modern web applications with Next.js and Tailwind CSS.</p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        id="about" 
        className={`py-20 px-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-poppins">About Me</h2>
          <div className="mb-8 relative">
            <div className="w-[150px] h-[150px] mx-auto mb-6 relative overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
              <Image
                src="/profile.jpg"
                alt="Fati's profile picture"
                width={150}
                height={150}
                className="rounded-full object-cover"
                priority
                quality={90}
                onError={(e) => {
                  e.target.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
                }}
              />
            </div>
          </div>
          <p className="text-xl font-inter leading-relaxed mb-6">
            Hi, I&apos;m Fati! I&apos;m learning software engineering step by step, and I love building simple and useful web apps.
            I&apos;m passionate about solving problems and growing my skills in coding and design.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/Fati0123/fati"
              onClick={() => handleSocialClick('GitHub')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/fati-lmn-849a06339/"
              onClick={() => handleSocialClick('LinkedIn')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section 
        ref={contactRef}
        id="contact" 
        className={`py-20 px-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-poppins">Contact Me</h2>
          <form 
            onSubmit={handleFormSubmit} 
            onFocus={handleFormFocus}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full px-4 py-3 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                } border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
                aria-label="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full px-4 py-3 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                } border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
                aria-label="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className={`w-full px-4 py-3 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                } border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
                aria-label="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50"
              aria-label="Send message"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
            {state.succeeded && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-center"
              >
                Thank you for your message! I&apos;ll get back to you soon.
              </motion.p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Fati&apos;s Portfolio. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
