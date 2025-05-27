import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header";
import { HeroSolutions } from "@/components/ui/hero";
import CenteredContent from "@/components/ui/sections/centered-content";

import { solutionsMoradoresPage } from "@/data/solutions-data";
import MainFeaturesList from "@/components/ui/sections/main-features-list";
import FeaturesBoxes from "@/components/ui/sections/features-boxes";

import { generateMetadata } from "@/components/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Sistema para moradores de condomínio | PointNetwork",
  keywords: ["Sistema para moradores de condomínio", "Gestão condominial"],
});

const DescriptionHtml = () => (
  <>
    <div
      dangerouslySetInnerHTML={{
        __html: solutionsMoradoresPage.centeredContent.description || "",
      }}
    />
  </>
);

const SolutionsPageItem = () => {
  return (
    <>
      <Header />
      <HeroSolutions
        title={solutionsMoradoresPage.title}
        description={solutionsMoradoresPage.desc}
        url={solutionsMoradoresPage.productURL}
        accentColor={solutionsMoradoresPage.accentColor}
        bgColor={solutionsMoradoresPage.bgColor}
      />
      <main>
        <FeaturesBoxes
          data={solutionsMoradoresPage.featuresBoxes}
          className={"pt-52"}
        />
        <CenteredContent
          title={solutionsMoradoresPage.centeredContent.title}
          description={<DescriptionHtml />}
          video={solutionsMoradoresPage.centeredContent.video}
        />
        <MainFeaturesList features={solutionsMoradoresPage.mainFeatures} />
      </main>
      <Footer />
    </>
  );
};

export default SolutionsPageItem;
