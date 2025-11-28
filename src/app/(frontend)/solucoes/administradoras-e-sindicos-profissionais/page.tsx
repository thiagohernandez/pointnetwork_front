import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header";
import { HeroSolutions } from "@/components/ui/hero";
import CenteredContent from "@/components/ui/sections/centered-content";

import { solutionsAdministradorasPage } from "@/data/solutions-data";
import MainFeaturesList from "@/components/ui/sections/main-features-list";
import GridFeaturesAdm from "@/components/ui/sections/grid-features-adm";
import FeaturesVideo from "@/components/ui/sections/features-video";

import { generateMetadata } from "@/components/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title:
    "Soluções para administradoras e síndicos profissionais | PointNetwork",
  keywords: [
    "Gestão condominial",
    "Gestão de condomínios",
    "Sistema para condomínios",
  ],
});

const DescriptionHtml = () => (
  <>
    <div
      dangerouslySetInnerHTML={{
        __html: solutionsAdministradorasPage.centeredContent.description || "",
      }}
    />
  </>
);

const SolutionsPageItem = () => {
  return (
    <>
      <Header />
      <HeroSolutions
        title={solutionsAdministradorasPage.title}
        description={solutionsAdministradorasPage.desc}
        url={solutionsAdministradorasPage.productURL}
        accentColor={solutionsAdministradorasPage.accentColor}
        bgColor={solutionsAdministradorasPage.bgColor}
      />
      <main>
        <GridFeaturesAdm className="pt-52 pb-24" />
        <FeaturesVideo data={solutionsAdministradorasPage.featuresVideo} />
        <CenteredContent
          title={solutionsAdministradorasPage.centeredContent.title}
          description={<DescriptionHtml />}
          video={solutionsAdministradorasPage.centeredContent.video}
        />
        <MainFeaturesList
          features={solutionsAdministradorasPage.mainFeatures}
        />
      </main>
      <Footer />
    </>
  );
};

export default SolutionsPageItem;
