"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

import { useMobile } from "@/hooks/use-mobile";
import Container from "@/components/ui/container";
import {
  DesktopMainNav,
  MobileMainNav,
  SecondaryMainNav,
} from "@/components/ui/nav";
import { LogoPointNetwork } from "@/components/ui/logo";

const Header = () => {
  const isMobile = useMobile();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const SCROLL_THRESHOLD = 10;
  const BG_THRESHOLD = 50; // Ponto a partir do qual o background aparece

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Set background color based on scroll position
    setHasScrolled(currentScrollY > BG_THRESHOLD);

    // Don't hide header when very close to top (fixes iOS edge cases)
    if (currentScrollY < 10) {
      setIsVisible(true);
      setLastScrollY(currentScrollY);
      return;
    }

    // Only trigger on significant scroll changes (helps with iOS momentum scrolling)
    if (Math.abs(currentScrollY - lastScrollY) < SCROLL_THRESHOLD) {
      return;
    }

    // Show header when scrolling up or at the top of the page
    if (currentScrollY < lastScrollY || currentScrollY <= 0) {
      setIsVisible(true);
    }
    // Hide header when scrolling down AND we're not at the top
    else if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    }

    // Update last scroll position
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    // Check initial scroll position
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: "tween", duration: 0.2 }}
          className={`fixed top-0 left-0 w-full z-50 py-4 transition-colors duration-300 ${
            hasScrolled ? "bg-[#170E33]" : "bg-transparent"
          }`}
        >
          <Container className="justify-between flex items-center py-4 px-4 lg:px-8">
            <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
              <Link
                href="/"
                className="text-xl font-bold text-white max-w-[162px] [&_svg]:max-w-[100%] [&_svg]:h-auto lg:max-w-[100%]"
              >
                <LogoPointNetwork />
              </Link>

              {/* Desktop Navigation */}
              <DesktopMainNav />
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden xl:flex items-center gap-2">
              <SecondaryMainNav />
            </div>

            {/* Mobile Menu Trigger */}
            {isMobile && <MobileMainNav />}
          </Container>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
