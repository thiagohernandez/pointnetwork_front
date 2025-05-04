import Image from "next/image";
import FAQ from "@/components/ui/sections/faq";
import { HeroHome } from "@/components/ui/hero";
import { OurSolutionsCards } from "@/components/ui/sections/our-solutions-cards";
import { SolucoesTabs } from "@/components/ui/sections/our-solutions-tabs";

export default function Home() {
  return (
    <>
      <HeroHome />
      <OurSolutionsCards />
      <SolucoesTabs />
      <FAQ />
    </>
  );
}
