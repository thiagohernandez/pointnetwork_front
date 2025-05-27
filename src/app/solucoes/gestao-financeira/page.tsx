import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header";
import { HeroSolutions } from "@/components/ui/hero";
import CenteredContent from "@/components/ui/sections/centered-content";

import {
  solutionsMoradoresPage,
  solutionsGestaoFinanceiraPage,
} from "@/data/solutions-data";
import MainFeaturesList from "@/components/ui/sections/main-features-list";
import FeaturesBoxes from "@/components/ui/sections/features-boxes";
import BackgroundFeatures from "@/components/ui/sections/background-features";
import FeaturesVideo from "@/components/ui/sections/features-video";

import { generateMetadata } from "@/components/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Sistema contabíl para pequenas e médias empresas | PointNetwork",
  keywords: [
    "Sistema contábil",
    "Sistema para pequenas e médias empresas",
    "Gestão financeira",
    "Gestão de empresas",
  ],
});

const DescriptionHtml = () => (
  <>
    <div
      dangerouslySetInnerHTML={{
        __html: solutionsGestaoFinanceiraPage.centeredContent.description || "",
      }}
    />
  </>
);

const SolutionsPageItem = () => {
  return (
    <>
      <Header />
      <HeroSolutions
        title={solutionsGestaoFinanceiraPage.title}
        description={solutionsGestaoFinanceiraPage.desc}
        url={solutionsGestaoFinanceiraPage.productURL}
        accentColor={solutionsGestaoFinanceiraPage.accentColor}
        bgColor={solutionsGestaoFinanceiraPage.bgColor}
      />
      <main>
        <FeaturesBoxes
          data={solutionsGestaoFinanceiraPage.featuresBoxes}
          className={"pt-52"}
        />
        <BackgroundFeatures />
        <FeaturesVideo data={solutionsGestaoFinanceiraPage.featuresVideo} />
        <CenteredContent
          title={solutionsGestaoFinanceiraPage.centeredContent.title}
          description={<DescriptionHtml />}
          video={solutionsGestaoFinanceiraPage.centeredContent.video}
        />
        <MainFeaturesList features={solutionsMoradoresPage.mainFeatures} />
      </main>
      <Footer />
    </>
  );
};

export default SolutionsPageItem;
