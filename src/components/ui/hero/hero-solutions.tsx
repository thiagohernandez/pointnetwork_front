import React from "react";
import Container from "@/components/ui/container";
import ContactForm from "@/components/ui/form/contact-form";
import { IconLogoP } from "@/components/ui/icons";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const HeroSolutions = ({
  title,
  description,
  url,
  accentColor,
  bgColor,
}: {
  title: string;
  description: string;
  url: string;
  accentColor: string;
  bgColor: string;
}) => {
  return (
    <div className={`w-full ${bgColor}`}>
      <Container>
        <div className="pt-42 pb-32 flex relative">
          <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-24">
            <div className="w-full lg:w-2/3 text-white pb-12">
              <div className="max-w-3xl">
                <h1 className="tracking-tighter text-4xl lg:text-6xl font-semibold">
                  {title}
                </h1>
                <p className="text-lg text-slate-200 mt-4 mb-6 tracking-tight">
                  {description}
                </p>
                <Link
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-white !p-0 mb-2 hover:no-underline"
                  )}
                  href={url ? `https://${url}` : "#"}
                  target="_blank"
                >
                  Ver mais em {url} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="w-1/3 text-white">
              <ContactForm buttonVariant="green" />
            </div>
          </div>
          <div
            className={`absolute w-[226px] -bottom-4 translate-y-1/2 ${accentColor} [&_svg]:w-full [&_svg]:h-auto [&_svg]:${accentColor} [&_svg]:!fill-current`}
          >
            <IconLogoP />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSolutions;
