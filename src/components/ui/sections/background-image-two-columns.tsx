"use client";
import Image from "next/image";
import { motion } from "motion/react";

import Heading from "@/components/ui/heading";

export function BackgroundImageTwoColumns() {
  return (
    <section
      className="relative py-32 lg:py-52 overflow-hidden"
      id="transparencia"
    >
      {/* Imagem de fundo em escala de cinza */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/man-looking-at-the-window.jpg"
          alt="Profissional em ambiente de trabalho"
          className="w-full h-full object-cover"
          width={1827}
          height={854}
          quality={100}
        />
      </div>

      {/* Gradiente da direita para a esquerda */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-l from-procelain via-porcelain to-transparent"
        style={{ backgroundSize: "100% 50%", backgroundPosition: "right" }}
      ></div>

      {/* Conteúdo posicionado à direita */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex justify-end">
          <div className="w-full lg:w-1/2 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 max-w-lg"
            >
              <Heading
                headingLevel={3}
                variant="headline"
                className="text-secondary whitespace-nowrap pt-2 mb-6"
              >
                Transparência
              </Heading>
              <Heading headingLevel={4} className="mb-6 text-3xl ">
                <strong>Construindo confiança</strong>
              </Heading>
              <p className="text-id-gray text-lg mb-6 tracking-tight font-semibold [&_strong]:text-slate-700 [&_strong]:font-bold">
                Na Point Network, acreditamos que{" "}
                <strong>
                  a base de qualquer parceria sólida é a confiança.
                </strong>{" "}
                E a confiança, por sua vez, floresce em um ambiente de
                transparência. Por isso, a{" "}
                <strong>
                  transparência é um valor fundamental que permeia todas as
                  nossas ações e decisões
                </strong>
                , desde o desenvolvimento de nossos softwares até o
                relacionamento com nossos clientes.
              </p>

              <p className="text-id-gray text-lg mb-4  tracking-tight font-semibold">
                Entendemos que, ao trabalhar com administradoras de condomínio,
                síndicos, empresas de controle de acesso e pequenas e médias
                empresas, lidamos com informações sensíveis e de grande
                importância. Por isso, nos comprometemos a:
              </p>

              {/* <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                viewport={{ once: true }}
                className="space-y-2 pl-5 list-disc"
              >
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  Manter uma comunicação clara e objetiva
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Garantir a segurança e privacidade dos dados
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Ser transparentes quanto aos nossos processos e políticas
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Oferecer suporte humanizado e eficiente
                </motion.li>
              </motion.ul> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
