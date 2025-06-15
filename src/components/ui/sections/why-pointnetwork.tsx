"use client";
import React from "react";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

import Image from "next/image";

import { ArrowRight, BanknoteArrowUp, Speech } from "lucide-react";
import { IconDevices, IconBrasilMap } from "@/components/ui/icons";
import { motion } from "motion/react";
import Link from "next/link";
import Heading from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";

import { whyPointNetworkData } from "@/data/why-pointnetwork";

export function WhyPointNetwork() {
  return (
    <section className="py-16 lg:py-32 bg-white">
      <Container className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-1/3 py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between h-full text-left"
            >
              <div className="flex flex-col">
                <Heading headingLevel={4} className="mb-6 order-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: whyPointNetworkData?.title || "",
                    }}
                  />
                </Heading>
                <Heading
                  headingLevel={3}
                  variant="headline"
                  className="text-secondary mb-4"
                >
                  {whyPointNetworkData?.subtitle}
                </Heading>
              </div>

              <div className="flex justify-start">
                <Link
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-network-primary !p-0 mb-10 hover:no-underline items-start text-left"
                  )}
                  href={
                    whyPointNetworkData?.url ? whyPointNetworkData.url : "#"
                  }
                >
                  {whyPointNetworkData?.textLink}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="text-slate-600 [&_strong]:text-slate-900 [&_strong]:font-semibold mt-auto font-semibold tracking-tight">
                <p
                  dangerouslySetInnerHTML={{
                    __html: whyPointNetworkData?.description || "",
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Content - Grid Layout */}
          <div className="lg:w-2/3">
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-0 xl:pl-16 py-6">
              {/* Card 1 */}
              <div className="col-001 flex flex-col justify-between gap-4 h-full">
                <div className="bg-id-green px-6 py-8 rounded-2xl flex flex-col justify-between gap-0 font-semibold tracking-tight text-id-gray-dark transition-colors hover:bg-network-primary hover:text-white">
                  <p className="text-sm">Mais de</p>
                  <p className="text-6xl font-semibold tracking-tighter">
                    2.000
                  </p>
                  <p className="text-sm">clientes ativos</p>
                </div>
                <div className="bg-id-gray-light/15 text-slate-700 p-6 rounded-2xl flex flex-col justify-between gap-3 h-full transition-all hover:bg-id-gray-dark hover:text-white">
                  <div className="mb-14">
                    <IconDevices />
                  </div>
                  <p className="font-semibold tracking-tight text-lg">
                    100% na nuvem, seguro e acessível de qualquer lugar.
                  </p>
                </div>
                <div className=" text-white rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src="/why-pointnetwork-001.jpg"
                    alt="Point Network"
                    width={473}
                    height={443}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-002 flex flex-col gap-4 h-full">
                <div className="rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src="/why-pointnetwork-002.jpg"
                    alt="Point Network"
                    width={473}
                    height={443}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-id-gray-light/15 text-slate-700 p-6 rounded-2xl flex flex-col justify-between gap-3 h-full transition-all hover:bg-id-gray-dark hover:text-white">
                  <div className="mb-14">
                    <Speech strokeWidth={1.5} />
                  </div>
                  <p className="font-semibold tracking-tight text-lg">
                    Suporte humanizado e tecnologia de ponta para facilitar o
                    dia a dia.
                  </p>
                </div>
                <div className="bg-secondary px-6 py-8 rounded-2xl flex flex-col justify-between gap-0 font-semibold tracking-tight text-[#D1CDF6] transition-colors hover:bg-network-primary hover:text-white">
                  <p className="text-sm">Mais de</p>
                  <p className="text-6xl font-semibold tracking-tighter">
                    25 anos
                  </p>
                  <p className="text-sm">de experiência</p>
                </div>
              </div>
              <div className="col-003 flex flex-col gap-4 h-auto sm:h-full">
                <div className="bg-id-gray-light/15 text-slate-700 overflow-hidden py-6 rounded-2xl flex flex-col justify-between gap-3 h-auto shrink-0 transition-all hover:bg-id-gray-dark hover:text-white group">
                  <div className="relative">
                    <div className="absolute ml-6 translate-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
                      <IconBrasilMap />
                    </div>
                    <canvas
                      width={295}
                      height={280}
                      className="max-w-full h-auto block"
                    ></canvas>
                  </div>

                  <p className="font-semibold tracking-tighttext-lg mt-6 px-6">
                    Atuamos em todo o território nacional
                  </p>
                </div>
                <div className="bg-id-gray-light/15 text-slate-700 p-6 rounded-2xl flex sm:hidden md:hidden lg:flex flex-col justify-between gap-3 h-full transition-all hover:bg-id-gray-dark hover:text-white">
                  <div className="mb-14">
                    <BanknoteArrowUp strokeWidth={1.5} />
                  </div>
                  <p className="font-semibold tracking-tight text-lg">
                    Redução de custos operacionais e aumento da produtividade.
                  </p>
                </div>
              </div>
              <div className="col-004 flex-col hidden sm:flex md:flex lg:hidden gap-4 h-full">
                <div className="bg-id-gray-light/15 text-slate-700 p-6 rounded-2xl flex flex-col justify-between gap-3 h-full transition-all hover:bg-id-gray-dark hover:text-white">
                  <div className="mb-14">
                    <BanknoteArrowUp strokeWidth={1.5} />
                  </div>
                  <p className="font-semibold tracking-tight text-lg">
                    Redução de custos operacionais e aumento da produtividade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
