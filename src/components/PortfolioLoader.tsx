"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingAnimation from "./LoadingAnimation";
import Navigation from "./Navigation";
import SimpleSparkles from "./SimpleSparkles";

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
        <div className="block">
          <Navigation />
          <main className="pt-16 relative z-10">{children}</main>
        </div>
      )}
    </>
  );
}
