import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header";
import { HeroBasic } from "@/components/ui/hero";
import { ResourcesContent } from "@/components/ui/sections/resources-content";

import { generateMetadata } from "@/components/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Recursos | PointNetwork",
  keywords: [
    "Recursos para síndicos",
    "recursos para administradoras",
    "recursos gratuitos",
  ],
  noIndex: true,
});

const Recursos = () => {
  return (
    <>
      <Header />
      <HeroBasic
        title="Recursos"
        description="Sabemos que gestão é coisa séria e não é tarefa fácil. Por isso, criamos conteúdos gratuitos para te ajudar"
      />
      <main className="bg-slate-300 py-16 lg:py-32">
        <ResourcesContent />
      </main>
      <Footer />
    </>
  );
};

export default Recursos;
