import { Metadata } from "next";
import FAQ from "@/components/ui/sections/faq";
import { HeroHomeAlternative } from "@/components/ui/hero";
import { OurSolutionsCards } from "@/components/ui/sections/our-solutions-cards";
import { SolucoesTabs } from "@/components/ui/sections/our-solutions-tabs";
import { WhyPointNetwork } from "@/components/ui/sections/why-pointnetwork";
// import BlogLastsPosts from "@/components/ui/sections/blog-lasts-posts";
import Footer from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header";

import { generateMetadata } from "@/components/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "PointNetwork | Simplifique a Gestão, Maximize Resultados!",
  keywords: ["Gestão condominial", "Controle de acesso", "Gestão financeira"],
});

export default function Home() {
  return (
    <>
      <Header />
      <HeroHomeAlternative />
      <OurSolutionsCards />
      <SolucoesTabs />
      <WhyPointNetwork />
      {/* <BlogLastsPosts /> */}
      <FAQ />
      <Footer />
    </>
  );
}
