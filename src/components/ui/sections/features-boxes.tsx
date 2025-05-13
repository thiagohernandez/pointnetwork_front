import React from "react";
import { FeaturesBoxItem } from "@/types/types";

import Image from "next/image";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";

const FeaturesBoxes = ({
  data,
  className,
}: {
  data: FeaturesBoxItem[];
  className?: string;
}) => {
  return (
    <Container className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.map((item: FeaturesBoxItem, index: number) => (
          <div
            key={index}
            className={`flex flex-col px-4 lg:px-8 pt-4 lg:pt-8 rounded-lg ${item.backgroundColor} ${item.textColor}`}
          >
            <div className="text-left">
              {item.icon && <div className="mb-4">{item.icon}</div>}
              <Heading headingLevel={3} className={`${item.textColor}`}>
                {item.title}
              </Heading>
              <p className="mt-4">{item.description}</p>
            </div>
            <div className="flex w-full relative pt-8">
              {item.img && (
                <Image
                  src={item.img.src}
                  alt={item.title}
                  width={item.img.width}
                  height={item.img.height}
                  className="mx-auto"
                  quality={100}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeaturesBoxes;
