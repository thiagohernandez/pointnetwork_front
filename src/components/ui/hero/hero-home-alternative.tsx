import React from "react";
import Containter from "@/components/ui/container";
import StripeHeroItems from "@/components/ui/misc/stripe-hero-items";

import { IconFiveStars } from "@/components/ui/icons";

const HeroHomeAlternative = () => {
  return (
    <div className="w-full bg-[#170E33] relative isolate">
      <div className="pt-0 md:pt-12 pb-62 lg:pb-32">
        <Containter>
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div className="w-full md:w-1/2 text-left text-white pt-38 justify-start flex flex-col">
              <div className="flex flex-col gap-2 max-2xl">
                <h1 className="order-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight">
                  Simplifique a Gestão, <br />
                  Maximize Resultados!
                </h1>
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight">
                  Vá direto ao Point!
                </h2>
              </div>
              <p className="text-lg mt-8 mb-8 max-w-2xl text-left justify-start">
                Simplificamos processos complexos para que você possa se
                concentrar no que realmente importa.
              </p>
              <div className="w-full flex justify-start text-center">
                <div className="flex gap-2 items-center tracking-tight px-4 py-0.5 bg-id-green text-id-gray-dark font-semibold rounded-md">
                  Excelente <IconFiveStars />{" "}
                  <span>+2mil clientes satisfeitos</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center pt-24">
              <video
                loop
                autoPlay
                muted
                playsInline
                width="486"
                height="752"
                poster="/images/pointid-intro-poster.jpg"
                className="masking-intro max-w-full h-[auto] ml-auto mr-auto flex -mb-42"
              >
                <source
                  src="/videos/point-intro-city-02.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Containter>
        <StripeHeroItems className=" absolute bottom-12 xl:bottom-24" />
      </div>
    </div>
  );
};

export default HeroHomeAlternative;
