'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingAnimation from './LoadingAnimation';
import Navigation from './Navigation';
import Footer from './Footer';
import SimpleSparkles from './SimpleSparkles';

interface PortfolioLoaderProps {
  children: React.ReactNode;
}

export default function PortfolioLoader({ children }: PortfolioLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <SimpleSparkles />
      <AnimatePresence>
        {isLoading && (
          <LoadingAnimation onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className={isVisible ? 'block' : 'hidden'}
        >
          <Navigation />
          <main className="pt-16 relative z-10">
            {children}
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
