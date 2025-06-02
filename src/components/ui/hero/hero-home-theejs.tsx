import React from "react";
import StripeHeroItems from "@/components/ui/misc/stripe-hero-items";

import { IconFiveStars } from "@/components/ui/icons";
import MetallicAbstractScene from "@/components/ui/scene/scene2";
// import Scene from "@/components/ui/scene/scene";

const HeroHomeThreeJS = () => {
  return (
    <div className="w-full bg-[#170E33] min-h-[75vh] relative isolate">
      <div className=" pt-12 pb-32">
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
      <div className="w-full h-full relative z-[-1]">
        {/* <Scene /> */}
        <div
          className=" -mt-[280px]"
          style={{
            width: "486px",
            height: "752px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            clipPath:
              "path('M408.09 0C451.114 0 485.992 34.4132 485.992 76.8628H486V438.34C486 466.073 471 491.704 446.656 505.57L333.196 570.208C313.41 581.476 290.966 587.403 268.119 587.403L135.857 587.411L21.695 747.012C18.6949 751.207 13.2903 752.999 8.32834 751.448C3.36643 749.889 0 745.347 0 740.218V145.049C0 117.317 14.9926 91.6856 39.3365 77.8195L145.735 17.2029C165.514 5.93521 187.957 0 210.805 0H408.09Z')",
          }}
        >
          {/* <Scene /> */}
          <MetallicAbstractScene />
        </div>
      </div>
    </div>
  );
};

export default HeroHomeThreeJS;
