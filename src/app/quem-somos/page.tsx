import type { Metadata } from "next";

import { generateMetadata } from "@/components/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Quem somos | PointNetwork",
  keywords: [
    "Recursos para síndicos",
    "recursos para administradoras",
    "recursos gratuitos",
  ],
});

import Footer from "@/components/ui/footer/footer";
import { Header } from "@/components/ui/header";

import Image from "next/image";
import { IconBrasilMap } from "@/components/ui/icons";

import { HeroFullWidth } from "@/components/ui/hero";

import FullImage from "@/components/ui/sections/full-image";
import { FullVideoBackground } from "@/components/ui/sections/full-video-background";
import Infrastructure from "@/components/ui/sections/infrastructure";
import ContactSection from "@/components/ui/sections/contact-section";
import { BackgroundImageTwoColumns } from "@/components/ui/sections/background-image-two-columns";
import ListFeaturesWhyPoint from "@/components/ui/sections/list-features-why-point";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";

export default function Home() {
  return (
    <>
      <Header />
      <HeroFullWidth />
      <FullImage />
      <Container className="-mt-2 md:-mt-32 lg:-mt-52 pb-16 lg:pb-32">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="max-w-lg flex flex-col gap-2">
            <Heading
              headingLevel={3}
              variant="headline"
              className="text-secondary mb-2"
            >
              Como fazemos isso?
            </Heading>
            <Heading headingLevel={4} className="mb-2">
              Através de nossos softwares "as a service",{" "}
              <strong>
                unimos tecnologia de ponta e criatividade para eliminar a
                burocracia
              </strong>{" "}
              e oferecer uma experiência de utilização aprimorada e um
              atendimento humanizado.{" "}
              <strong>
                Nosso objetivo é impulsionar nossos clientes no mundo digital.
              </strong>
            </Heading>
          </div>
          <div className="max-w-lg flex flex-col gap-2">
            <Heading
              headingLevel={3}
              variant="headline"
              className="text-secondary mb-2"
            >
              O que fazemos?
            </Heading>
            <Heading headingLevel={4} className="mb-2">
              <strong>Desenvolvemos com paixão um sistema robusto</strong> que
              capacita administradoras e condomínios a criar, oferecer e{" "}
              <strong>
                gerenciar suas carteiras de clientes e moradores de maneira ágil
                e eficiente, sob sua própria marca.
              </strong>{" "}
              Nossas soluções são simples, seguras e eficazes.
            </Heading>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 py-16 lg:py-32">
          <div className="lg:w-1/3">
            <div className="max-w-lg flex flex-col gap-2">
              <Heading
                headingLevel={3}
                variant="headline"
                className="text-secondary mb-2"
              >
                Nossa história
              </Heading>
              <Heading headingLevel={4} className="mb-2">
                Criada em 2000, a Point é{" "}
                <strong>
                  pioneira no modelo de software como serviço no Brasil.
                </strong>{" "}
                Já nascemos digital e, ao longo de mais de 25 anos, construímos
                uma trajetória de{" "}
                <strong>inovação e compromisso com nossos clientes.</strong>
              </Heading>
            </div>
          </div>
          <div className="lg:w-2/3 lg:justify-end">
            <div className="lg:max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-4 ml-auto auto-rows-min items-start">
              <div className="col-001 grid grid-cols-1 sm:grid-cols-2 sm:grid-row-1 md:grid-cols-1 md:grid-rows-2 justify-between gap-4 h:auto lg:h-full">
                <div className="w-full bg-secondary px-6 py-8 rounded-2xl flex justify-start items-center gap-0 font-semibold tracking-tight text-[#D1CDF6] transition-colors hover:bg-network-primary/20 hover:text-network-primary">
                  <div className="leading-snug">
                    <p className="text-sm">Mais de</p>
                    <p className="text-6xl font-semibold tracking-tighter">
                      25 anos
                    </p>
                    <p className="text-sm">de experiência</p>
                  </div>
                </div>
                <div className="w-full bg-network-primary px-6 py-8 rounded-2xl flex justify-start items-center gap-0 font-semibold tracking-tight text-slate-100 transition-colors hover:bg-network-primary/20 hover:text-network-primary">
                  <div className="leading-snug">
                    <p className="text-sm">Mais de</p>
                    <p className="text-6xl font-semibold tracking-tighter">
                      2.000
                    </p>
                    <p className="text-sm">
                      clientes, entre administradoras, condomínios e síndicos
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-002 grid sm:hidden md:grid justify-between gap-4 h-full rounded-2xl overflow-hidden">
                <Image
                  src="/gestao-de-condominio-point-network.jpg"
                  alt="Point Network"
                  width={544}
                  height={746}
                  className="w-auto h-full object-cover"
                />
              </div>
              <div className="col-003 grid sm:hidden md:grid justify-between gap-4 h-full">
                <div className="bg-id-gray-light/15 text-slate-700 overflow-hidden py-6 rounded-2xl flex flex-col justify-between gap-3 h-auto shrink-0 transition-all hover:bg-id-gray-dark hover:text-white group">
                  <div className="relative">
                    <div className="absolute ml-6 translate-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
                      <IconBrasilMap />
                    </div>
                    <canvas
                      width={295}
                      height={280}
                      className="w-full h-auto"
                    ></canvas>
                  </div>

                  <p className="font-semibold tracking-tighttext-lg mt-6 px-6">
                    Atuamos em todo o território nacional
                  </p>
                </div>
              </div>
              <div className="col-004 hidden sm:flex md:hidden justify-between gap-4 h-auto">
                <Image
                  src="/gestao-de-condominio-point-network.jpg"
                  alt="Point Network"
                  width={544}
                  height={746}
                  className="w-1/2 h-full object-cover shrink-0"
                />
                <div className="bg-id-gray-light/15 text-slate-700 overflow-hidden py-6 rounded-2xl w-1/2 flex flex-col justify-between gap-3 h-auto shrink-0 transition-all hover:bg-id-gray-dark hover:text-white group">
                  <div className="relative">
                    <div className="absolute ml-6 translate-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
                      <IconBrasilMap />
                    </div>
                    <canvas
                      width={295}
                      height={280}
                      className="w-full h-auto"
                    ></canvas>
                  </div>

                  <p className="font-semibold tracking-tighttext-lg mt-6 px-6">
                    Atuamos em todo o território nacional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <FullVideoBackground
        // videoSrc="/videos/8817770-hd_1280_720_25fps.mp4"
        // posterSrc="/placeholder.svg?height=1080&width=1920"
        imgSrc="/pexels-cristian-rojas-7616804.jpg"
        width={1920}
        height={1281}
      />
      <Container className="py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8">
          <Heading
            headingLevel={3}
            variant="headline"
            className="text-secondary mb-2 whitespace-nowrap pt-2"
          >
            Nossos valores
          </Heading>
          <Heading headingLevel={4} className="mb-2">
            <strong>Inovação:</strong> Buscamos constantemente novas soluções
            para atender às necessidades de nossos clientes.
          </Heading>
          <Heading headingLevel={4} className="mb-2">
            <strong>Compromisso:</strong> Somos comprometidos em entregar a
            melhor tecnologia e um atendimento de excelência.
          </Heading>
          <Heading headingLevel={4} className="mb-2">
            <strong>Parceria:</strong> Acreditamos em construir relacionamentos
            sólidos e duradouros com nossos clientes.
          </Heading>
          <Heading headingLevel={4} className="mb-2">
            <strong>Flexibilidade:</strong> Flexibilidade: Nossas soluções se
            adaptam a qualquer porte de administradora, condomínio e empresa.
          </Heading>
        </div>
      </Container>
      <Infrastructure />
      <ContactSection />
      <BackgroundImageTwoColumns />
      <ListFeaturesWhyPoint />
      <Footer />
    </>
  );
}
