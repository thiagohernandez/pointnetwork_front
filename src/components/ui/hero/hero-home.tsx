import React from "react";
import Container from "@/components/ui/container";
import StripeHeroItems from "@/components/ui/misc/stripe-hero-items";

import { IconFiveStars } from "@/components/ui/icons";

const HeroHome = () => {
  return (
    <div className="w-full bg-[#170E33] min-h-[70vh]">
      <div className="pb-32 pt-12">
        <div className="max-w-3xl mx-auto text-center text-white py-32 px-3 items-center justify-center flex flex-col">
          <div className="flex flex-col gap-2">
            <h1 className="order-2 text-7xl md:text-5xl font-semibold tracking-tight">
              Simplifique a Gestão, Maximize Resultados!
            </h1>
            <h2 className=" text-2xl font-semibold tracking-tight">
              Vá direto ao Point!
            </h2>
          </div>
          <p className="text-lg mt-2 mb-8">
            Simplificamos processos complexos para que você possa se concentrar
            no que realmente importa.
          </p>
          <div className="w-full flex justify-center text-center">
            <div className="flex gap-2 items-center tracking-tight px-4 py-0.5 bg-id-green text-id-gray-dark font-semibold rounded-md">
              Excelente <IconFiveStars /> +2mil clientes satisfeitos
            </div>
          </div>
        </div>

        <StripeHeroItems />
      </div>
    </div>
  );
};

export default HeroHome;
