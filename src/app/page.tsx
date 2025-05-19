import FAQ from "@/components/ui/sections/faq";
import { HeroHome } from "@/components/ui/hero";
import { OurSolutionsCards } from "@/components/ui/sections/our-solutions-cards";
import { SolucoesTabs } from "@/components/ui/sections/our-solutions-tabs";
import { WhyPointNetwork } from "@/components/ui/sections/why-pointnetwork";
import BlogLastsPosts from "@/components/ui/sections/blog-lasts-posts";
import Footer from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroHome />
      <OurSolutionsCards />
      <SolucoesTabs />
      <WhyPointNetwork />
      <BlogLastsPosts />
      <FAQ />
      <Footer />
    </>
  );
}
