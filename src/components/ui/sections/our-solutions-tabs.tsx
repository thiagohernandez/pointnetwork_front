"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { TabData } from "@/types/types";

import Image from "next/image";
import Container from "@/components/ui/container";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import Heading from "@/components/ui/heading";

import { tabsSolutionsData } from "@/data/our-solutions-tabs";

export function SolucoesTabs() {
  const [activeTab, setActiveTab] = useState("administradoras");
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);

  const tabs: TabData[] = tabsSolutionsData;

  useEffect(() => {
    // Se o autoPlay estiver desativado, não faça nada
    if (!autoPlayEnabled) return;

    // Configurar o intervalo para alternar as tabs a cada 4 segundos
    const interval = setInterval(() => {
      // Encontrar o índice da tab atual
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
      // Calcular o índice da próxima tab (voltando ao início se for a última)
      const nextIndex = (currentIndex + 1) % tabs.length;
      // Definir a próxima tab como ativa
      setActiveTab(tabs[nextIndex].id);
    }, 4000);

    // Limpar o intervalo quando o componente for desmontado ou quando autoPlayEnabled mudar
    return () => clearInterval(interval);
  }, [activeTab, autoPlayEnabled, tabs]);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <section className="py-16 bg-porcelain">
      <Container>
        <div className="flex flex-col lg:flex-row">
          {/* Tabs - Vertical on desktop, Horizontal scroll on mobile */}
          <div className="lg:w-1/3">
            <div className="flex flex-col gap-2 pt-8 lg:pr-8">
              <Heading headingLevel={2} className="order-2 mb-12 max-w-2xl">
                Tecnologia{" "}
                <strong>
                  para facilitar a administração, comunicação e segurança
                </strong>{" "}
                do seu condomínio ou empresa
              </Heading>

              <Heading
                headingLevel={3}
                variant="headline"
                className="pt-4 mb-4"
              >
                Soluções completas para uma gestão inteligente
              </Heading>
            </div>

            <div className="lg:border-r overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              <div className="flex lg:flex-col gap-1 min-w-max lg:min-w-0 relative">
                {tabs.map((tab) => (
                  <div key={tab.id} className="relative">
                    <button
                      onClick={() => {
                        setActiveTab(tab.id);
                        setAutoPlayEnabled(false);
                      }}
                      className={cn(
                        "font-semibold tracking-tight w-full px-4 py-4 text-left  whitespace-nowrap lg:whitespace-normal border-b lg:border-b-0 transition-colors relative lg:rounded-l-md",
                        activeTab === tab.id
                          ? "text-network-primary bg-white"
                          : "text-slate-600 border-transparent bg-white/50 hover:text-network-primary "
                      )}
                    >
                      {tab.title}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute top-0 lg:right-[-8px] lg:h-full w-[8px] bg-network-primary/20"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  </div>
                ))}
              </div>
              {autoPlayEnabled && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hidden lg:flex items-center text-xs text-gray-500 mt-4 ml-4"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                  Alternando automaticamente
                </motion.div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm pl-12 pr-6 pb-12 pt-6 flex flex-col lg:flex-row gap-8 overflow-hidden">
              {/* Tab Content */}
              <div className="relative flex gap-8 before:content-[' '] before:absolute before:-left-12 before:w-[8px] before:h-full before:bg-network-primary/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col pt-6 lg:w-full"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-sm font-semibold tracking-tight "
                    >
                      <Heading
                        headingLevel={3}
                        variant="headline"
                        className="text-secondary mb-4"
                      >
                        {activeContent?.header}
                      </Heading>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <Heading headingLevel={4} className="mb-6">
                        {activeContent?.subheader}
                      </Heading>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <Link
                        className={cn(
                          buttonVariants({ variant: "link" }),
                          "text-network-primary !p-0 mb-10 hover:no-underline"
                        )}
                        href={activeContent?.url ? activeContent.url : "#"}
                      >
                        Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-auto">
                      {activeContent?.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex flex-col gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.4 + index * 0.1,
                          }}
                        >
                          <div className="text-slate-600 mt-1">
                            {feature.icon}
                          </div>
                          <div>
                            <p className="text-slate-600">{feature.title}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Image */}

                <motion.div
                  className="lg:w-2/3 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="rounded-xl overflow-hidden h-full">
                    <div className="rounded-xl overflow-hidden relative">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.6 }}
                          className="w-full h-full absolute inset-0"
                        >
                          <Image
                            src={
                              activeContent?.image
                                ? activeContent?.image
                                : "/user-saas-point-condominio.jpg"
                            }
                            alt={
                              activeContent?.header
                                ? activeContent?.header
                                : "Point Network"
                            }
                            width={458}
                            height={986}
                            className="w-full h-full object-cover"
                            priority
                          />
                        </motion.div>
                      </AnimatePresence>
                      <canvas
                        width={458}
                        height={820}
                        className="w-full h-full object-cover bg-porcelain"
                      />
                    </div>

                    {/* Overlay card */}
                    <motion.div
                      className="absolute top-32 -left-8 bg-white rounded-lg p-3 shadow-md"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <div className="text-xs text-gray-500">5 Abril, 2025</div>
                      <div className="flex flex-col">
                        <div className="font-medium">R$132.200,25</div>
                        <div className="text-xs text-emerald-500">+3,5%</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
