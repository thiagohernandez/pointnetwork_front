import Image from "next/image";
import FAQ from "@/components/ui/sections/faq";
import { HeroHome } from "@/components/ui/hero";

export default function Home() {
  return (
    <>
      <HeroHome />
      <FAQ />
    </>
  );
}
