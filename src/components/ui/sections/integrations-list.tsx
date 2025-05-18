import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";

const IntegrationsList = ({
  data,
  className,
}: {
  data: any;
  className?: string;
}) => {
  return (
    <div
      className={cn("bg-slate-900 pt-16 lg:pt-24 pb-16 lg:pb-24 ", className)}
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pb-24">
          <div className="w-full lg:w-2/3 flex flex-col">
            {data?.icon && (
              <div className="flex w-full mb-4 text-id-green">{data.icon}</div>
            )}
            {data?.title && (
              <Heading
                headingLevel={3}
                className="text-id-green text-3xl lg:text-5xl mb-8"
              >
                {data.title}
              </Heading>
            )}
            {data?.description && (
              <p className="text-[#B2B5C0] font-semibold tracking-tight mb-8">
                {data.description}
              </p>
            )}
          </div>
          <div className="w-full lg:w-1/3 flex flex-col self-center">
            <div className="flex flex-row gap-4 items-center justify-center">
              {data?.brands?.map((item: any, index: number) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex flex-col gap-4 p-4"
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IntegrationsList;
