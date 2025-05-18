import React from "react";
import Container from "@/components/ui/container";
import Image from "next/image";

import { ShieldCheckIcon } from "lucide-react";
import {
  IconDevices,
  IconFingerprint,
  IconWhatsApp,
} from "@/components/ui/icons";

import Heading from "@/components/ui/heading";

const GridFeaturesAccessControl = ({ className }: { className?: string }) => {
  return (
    <Container className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-001 flex flex-col justify-between gap-4 h-full">
          <div className="bg-id-green px-6 py-8 lg:py-12 rounded-2xl flex flex-col justify-between gap-0 font-semibold tracking-tight text-id-gray-dark transition-colors hover:bg-network-primary hover:text-white group">
            <div className="leading-snug">
              <p className="text-6xl font-semibold tracking-tighter">69%</p>
              <p className="text-sm">
                dos moradores apontam{" "}
                <strong>segurança como fator determinante</strong> para escolha
                de condomínios.*
              </p>
            </div>
          </div>

          <div className="bg-id-gray-light/15 text-id-gray p-6 rounded-2xl flex flex-col justify-between gap-3 h-full transition-all hover:bg-id-gray-dark hover:text-white group">
            <div className="mb-14">
              <IconFingerprint />
            </div>
            <div className="flex flex-col gap-4">
              <Heading
                headingLevel={3}
                className="text-2xl text-id-gray-dark group-hover:text-white"
              >
                Segurança garantida
              </Heading>
              <p className="font-semibold tracking-tight text-base">
                Acesso ao histórico e liberação de todas as pessoas que entram
                e/ou saem do condomínio.
              </p>
            </div>
          </div>
        </div>
        <div className="col-002 flex flex-col gap-4 h-full">
          <div className="bg-id-gray-light/15 text-id-gray p-6 rounded-2xl flex flex-col justify-between gap-3 h-full transition-all hover:bg-id-gray-dark hover:text-white group">
            <div className="mb-14">
              <IconDevices />
            </div>
            <div className="flex flex-col gap-4">
              <Heading
                headingLevel={3}
                className="text-2xl text-id-gray-dark group-hover:text-white"
              >
                Praticidade e agilidade
              </Heading>
              <p className="font-semibold tracking-tight text-base">
                Acesso a informações e funcionalidades em tempo real na palma da
                mão para moradores e funcionários.
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
              <IconWhatsApp />
            </div>
            <div className="flex flex-col gap-4">
              <Heading
                headingLevel={3}
                className="text-2xl text-id-gray-dark group-hover:text-white"
              >
                Comunicação em tempo real
              </Heading>
              <p className="font-semibold tracking-tight text-base">
                A integração com o WhatsApp é nosso diferencial, proporcionando
                melhor experiência ao cliente.
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

export default GridFeaturesAccessControl;
