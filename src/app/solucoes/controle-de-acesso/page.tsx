import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header";
import { HeroSolutions } from "@/components/ui/hero";
import CenteredContent from "@/components/ui/sections/centered-content";

import { solutionsControleAcessoPage } from "@/data/solutions-data";
import MainFeaturesList from "@/components/ui/sections/main-features-list";
import GridFeaturesAccessControl from "@/components/ui/sections/grid-features-access-control";
import IntegrationsList from "@/components/ui/sections/integrations-list";
import BackgroundChecker from "@/components/ui/sections/background-checker";

import { generateMetadata } from "@/components/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Sistema para controle de acesso de portarias | PointNetwork",
  keywords: [
    "Controle de acesso de portarias",
    "sistema de controle de acesso",
  ],
});

const DescriptionHtml = () => (
  <>
    <div
      dangerouslySetInnerHTML={{
        __html: solutionsControleAcessoPage.centeredContent.description || "",
      }}
    />
  </>
);

const SolutionsPageItem = () => {
  return (
    <>
      <Header />
      <HeroSolutions
        title={solutionsControleAcessoPage.title}
        description={solutionsControleAcessoPage.desc}
        url={solutionsControleAcessoPage.productURL}
        accentColor={solutionsControleAcessoPage.accentColor}
        bgColor={solutionsControleAcessoPage.bgColor}
      />
      <main>
        <GridFeaturesAccessControl className="pt-52 pb-24" />
        <IntegrationsList
          data={solutionsControleAcessoPage.integrationBrands}
          className="pb-52"
        />
        <BackgroundChecker
          data={solutionsControleAcessoPage.backgroundChecker}
        />
        <CenteredContent
          title={solutionsControleAcessoPage.centeredContent.title}
          description={<DescriptionHtml />}
          video={solutionsControleAcessoPage.centeredContent.video}
        />
        <MainFeaturesList features={solutionsControleAcessoPage.mainFeatures} />
      </main>
      <Footer />
    </>
  );
};

export default SolutionsPageItem;
