import FAQ from "@/components/ui/sections/faq";
import { HeroHome } from "@/components/ui/hero";
import { OurSolutionsCards } from "@/components/ui/sections/our-solutions-cards";
import { SolucoesTabs } from "@/components/ui/sections/our-solutions-tabs";
import { WhyPointNetwork } from "@/components/ui/sections/why-pointnetwork";
import BlogLastsPosts from "@/components/ui/sections/blog-lasts-posts";

export default function Home() {
  return (
    <>
      <HeroHome />
      <OurSolutionsCards />
      <SolucoesTabs />
      <WhyPointNetwork />
      <BlogLastsPosts />
      <FAQ />
    </>
  );
}
