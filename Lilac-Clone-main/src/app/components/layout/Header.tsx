"use client";

import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show header when at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50
      py-3 sm:py-4 lg:py-6 xl:py-8 
      px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16
      bg-background/95 backdrop-blur-sm
      border-b border-foreground/5
      transition-transform duration-300 ease-in-out
      ${
        isVisible 
          ? 'translate-y-0' 
          : '-translate-y-full'
      }
    `}>
      <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto flex justify-between items-center">

        <div className="
          font-display
          text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
          tracking-wide
          text-black
          font-black
        ">
          Lilac Template
        </div>

        <nav className="flex gap-4 sm:gap-6 lg:gap-8 xl:gap-10 font-body text-sm sm:text-base lg:text-lg 2xl:text-xl text-foreground">
          <a href="#" className="
            hover:text-muted 
            transition-colors 
            duration-200
            font-medium
          ">
            Blog
          </a>
          <a href="#" className="
            hover:text-muted 
            transition-colors 
            duration-200
            font-medium
          ">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}
