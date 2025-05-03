"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Building, ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-purple-500 border-dashed bg-[#121212] transition-all",
        isScrolled && "border-solid shadow-md"
      )}
    >
      <Container className="justify-between flex items-center h-16 px-4 lg:px-8">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="text-xl font-bold text-white">
            <LogoPointNetwork />
          </Link>

          {/* Desktop Navigation */}
          <DesktopMainNav />
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <SecondaryMainNav />
        </div>

        {/* Mobile Menu Trigger */}
        {isMobile && <MobileMainNav />}
      </Container>
    </header>
  );
};

export default Header;
