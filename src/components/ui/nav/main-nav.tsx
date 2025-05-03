import React from "react";
import Link from "next/link";
import { LogoPointNetwork } from "@/components/ui/logo";

const MainNav = () => {
  return (
    <nav>
      <Link href="/" className="flex items-center space-x-2">
        <LogoPointNetwork />
      </Link>
    </nav>
  );
};

export default MainNav;
