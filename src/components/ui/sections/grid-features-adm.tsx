import React from "react";
import Container from "@/components/ui/container";
import Image from "next/image";

import { ShieldCheckIcon, TrendingUp, TrendingDown } from "lucide-react";
import { IconCloudSecure } from "@/components/ui/icons";

import Heading from "@/components/ui/heading";

const GridFeaturesAdm = ({ className }: { className?: string }) => {
  return (
    <Container className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-001 flex flex-col justify-between gap-4 h-full">
          <div className="bg-id-green px-6 py-8 lg:py-12 rounded-2xl flex flex-col justify-between gap-0 font-semibold tracking-tight text-id-gray-dark transition-colors hover:bg-network-primary hover:text-white group">
            <div className="flex gap-6 items-center">
              <p className="text-6xl font-semibold tracking-tighter flex flex-col">
                <span>24</span>
                <span className="text-sm tracking-tighter">horas</span>
              </p>
              <div className="h-[100px] w-[1px] bg-id-gray-dark/25 rotate-6 transition-colors group-hover:bg-white"></div>
              <p className="text-6xl font-semibold tracking-tighter flex flex-col">
                <span>7</span>
                <span className="text-sm tracking-tighter">
                  dias por semana
                </span>
              </p>
            </div>
          </div>

          <div className="bg-id-gray-light/15 text-id-gray p-6 rounded-2xl flex flex-col justify-between gap-3 h-full transition-all hover:bg-id-gray-dark hover:text-white group">
            <div className="mb-14">
              <TrendingUp strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-4">
              <Heading
                headingLevel={3}
                className="text-2xl text-id-gray-dark group-hover:text-white"
              >
                Aumento de receita
              </Heading>
              <p className="font-semibold tracking-tight text-base">
                Soluções para aumento de receita e identificação de
                oportunidades.
              </p>
            </div>
          </div>
        </div>
        <div className="col-002 flex flex-col gap-4 h-full">
          <div className="bg-id-gray-light/15 text-id-gray p-6 rounded-2xl flex flex-col justify-between gap-3 h-full transition-all hover:bg-id-gray-dark hover:text-white group">
            <div className="mb-14">
              <TrendingDown strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-4">
              <Heading
                headingLevel={3}
                className="text-2xl text-id-gray-dark group-hover:text-white"
              >
                Redução de custos
              </Heading>
              <p className="font-semibold tracking-tight text-base">
                Automatização de processos para redução de custos e otimização
                do tempo.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shrink-0">
            <Image
              src="/why-pointnetwork-002.jpg"
              alt="Point Network"
              width={473}
              height={443}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="col-003 flex flex-col gap-4 h-full">
          <div className=" text-white rounded-2xl overflow-hidden shrink-0">
            <Image
              src="/why-pointnetwork-003.jpg"
              alt="Point Network"
              width={473}
              height={443}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-id-gray-light/15 text-id-gray p-6 rounded-2xl flex flex-col justify-between gap-3 h-full transition-all hover:bg-id-gray-dark hover:text-white group">
            <div className="mb-14">
              <IconCloudSecure />
            </div>
            <div className="flex flex-col gap-4">
              <Heading
                headingLevel={3}
                className="text-2xl text-id-gray-dark group-hover:text-white"
              >
                Cloud e seguro
              </Heading>
              <p className="font-semibold tracking-tight text-base">
                Sistema na nuvem, 100% online com acesso seguro de qualquer
                lugar e dispositivo.
              </p>
            </div>
          </div>
        </div>

        <div className="col-003 flex flex-col gap-4 h-full">
          <div className="bg-id-gray-light/15 text-id-gray p-6 rounded-2xl flex flex-col justify-between gap-3 h-full transition-all hover:bg-id-gray-dark hover:text-white group">
            <div className="mb-14">
              <ShieldCheckIcon strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-4">
              <Heading
                headingLevel={3}
                className="text-2xl text-id-gray-dark group-hover:text-white"
              >
                Point Security Check
              </Heading>
              <p className="font-semibold tracking-tight text-base">
                Realizar consultas de segurança com o Point Condomínio antes de
                liberar o acesso de novos colaboradores, prestadores de serviço
                ou visitantes ao seu condomínio é essencial para proteger tanto
                o ambiente quanto a reputação da sua administratora. Essa medida
                preventiva ajuda a mitigar riscos e evitar possíveis ameaças à
                segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GridFeaturesAdm;
