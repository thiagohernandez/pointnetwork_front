import React from "react";
import Image from "next/image";

import Container from "@/components/ui/container";

const FullImage = () => {
  return (
    <Container className="-mt-32">
      <div className="relative">
        <Image
          src="/full-image-quem-somos.jpg"
          alt="Full Image"
          width={1520}
          height={522}
          className="w-full h-auto object-cover rounded-3xl"
          quality={100}
        />
        <Image
          src="/p-shape.svg"
          alt="Full Image"
          width={275}
          height={426}
          className="h-auto object-cover mx-auto block -translate-y-50"
          quality={100}
        />
        <Image
          src="/earnings-chart.svg"
          alt="Full Image"
          width={192}
          height={163}
          className="h-auto block absolute -translate-y-10 translate-x-1/3 right-1/5 bottom-1/2"
          quality={100}
        />
        <div className="absolute top-1/3 left-1/5 -translate-y-1/2 mt-5 bg-white rounded-lg p-3 shadow-md">
          <div className="text-xs text-gray-500">5 Abril, 2025</div>
          <div className="flex flex-col">
            <div className="font-medium">R$132.200,25</div>
            <div className="text-xs text-emerald-500">+3,5%</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FullImage;
