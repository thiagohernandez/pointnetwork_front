import React from "react";
import Container from "@/components/ui/container";
import Image from "next/image";
import ResourceForm from "@/components/ui/form/resources-form";

const HeroResources = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) => {
  return (
    <div className="w-full bg-[#170E33] pt-32 py-16">
      <Container>
        <div className="w-full flex justify-between bg-slate-200 rounded-xl overflow-hidden">
          <div className="text-white flex lg:w-2/3">
            <div className="px-16 py-12">
              <div className="flex flex-col gap-2 tracking-tight text-slate-600">
                <h1 className="tracking-tighter text-5xl font-semibold order-2 text-slate-900">
                  {title}
                </h1>
                <h2 className="tracking-tight text-network-primary font-semibold text-sm mb-2">
                  EBOOK
                </h2>
              </div>
              <p className="text-lg mt-6 mb-8 tracking-tight text-slate-600 font-semibold">
                {description}
              </p>
              <ResourceForm />
            </div>
          </div>
          {image && (
            <div className="lg:w-1/3 flex justify-end">
              <Image
                src={image}
                alt={title}
                width={820}
                height={790}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
        ;
      </Container>
    </div>
  );
};

export default HeroResources;
