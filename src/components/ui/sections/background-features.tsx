import React from "react";
import Container from "@/components/ui/container";
import Image from "next/image";

const BackgroundFeatures = () => {
  return (
    <div className="py-16 lg:py-24 px-4 lg:px-16 mb-16 lg:mb-24">
      <Image
        src="/image-point-saas-office.jpg"
        alt="PointSaas"
        width={1700}
        height={770}
        className="w-full h-auto object-cover rounded-xl"
        quality={100}
      />
      <Container className="relative">
        <div className="flex gap-8 absolute -translate-y-2/3">
          <div className="rounded-xl p-8 bg-[#EDEBE1] text-slate-700 [&_strong]:text-saas-orange--dark font-semibold tracking-tight max-w-[320px]">
            <div className="text-saas-orange--light/25 text-[82px] tracking-tighter mb-8 leading-none">
              20%
            </div>
            <p className="text-lg mt-auto">
              Estudos apontam que a implementação de um sistema ERP pode levar a
              uma <strong>redução de custos operacionais de até 20%.</strong>
            </p>
          </div>
          <div className="rounded-xl p-8 bg-[#EDEBE1] text-slate-700 [&_strong]:text-saas-orange--dark font-semibold tracking-tight max-w-[320px]">
            <div className="text-saas-orange--light/25 text-[82px] tracking-tighter mb-8 leading-none">
              7/10
            </div>
            <p className="text-lg mt-auto">
              <strong>7 em cada 10 empresas</strong> acreditam que um sistema de
              gestão melhora significativamente a qualidade das informações
              financeiras.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BackgroundFeatures;
