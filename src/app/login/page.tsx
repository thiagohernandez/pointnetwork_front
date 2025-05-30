import React from "react";
import type { Metadata } from "next";

import { generateMetadata } from "@/components/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Quem somos | PointNetwork",
  keywords: [
    "Recursos para síndicos",
    "recursos para administradoras",
    "recursos gratuitos",
  ],
});

import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";
import Link from "next/link";
import { ourSolutionsCardsData } from "@/data/our-solutions-cards";
import { LogoPointNetwork } from "@/components/ui/logo";

interface SolucaoCardProps {
  icon: React.ReactNode;
  id?: string;
  productName: string;
  urlLogin: string;
  variant?: string;
}

const SolucaoCard = ({
  icon,
  productName,
  urlLogin,
  variant,
}: SolucaoCardProps) => {
  return (
    <Link
      href={urlLogin}
      className={`card-solution ${variant} flex rounded-3xl h-full`}
    >
      <div className={`p-8 flex flex-col h-full relative z-[2]`}>
        <div className={`mb-24 [&_svg]:w-auto [&_svg]:h-[32px] icon`}>
          {icon}
        </div>
        <div className="mt-auto">
          <h3 className="text-2xl font-semibold tracking-tight mb-4">
            {productName}
          </h3>
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            Acessar <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Login() {
  return (
    <section className="py-16 min-h-screen grid grid-rows-[62px_1fr] gap-6">
      <Container className="h-[32px]">
        <div className="flex items-center justify-center w-full h-auto">
          <div className="[&_svg]:w-auto [&_svg]:h-[32px] icon [&_.letter-fill]:!fill-network-primary ">
            <Link
              href="/"
              className="text-xl font-bold text-white max-w-[162px] [&_svg]:max-w-[100%] [&_svg]:h-auto lg:max-w-[100%]"
            >
              <LogoPointNetwork />
            </Link>
          </div>
        </div>
      </Container>
      <Container className="h-[inherit] ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 h-full">
          {ourSolutionsCardsData.map((item) => (
            <SolucaoCard
              key={item.id}
              id={item.id}
              icon={item.icon}
              productName={item.productName}
              urlLogin={item.urlLogin}
              variant={item.variant}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
