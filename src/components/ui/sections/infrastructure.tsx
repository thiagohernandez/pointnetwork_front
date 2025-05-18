"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import {
  IconLogoP,
  IconLogoGoogleCloud,
  IconLogoAws,
} from "@/components/ui/icons";

const Infrastructure = () => {
  const [rotation, setRotation] = useState(0);

  // Animação de rotação contínua
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-16 lg:py-32 bg-porcelain">
      <Container className="justify-between">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Conteúdo da esquerda */}
          <div className="lg:w-1/2">
            <Heading
              headingLevel={3}
              variant="headline"
              className="text-secondary mb-2 whitespace-nowrap pt-2"
            >
              Infraestrutura
            </Heading>
            <Heading headingLevel={4} className="mb-2">
              Para garantir o que há de melhor no mercado, 100% da nossa
              infraestrutura é hospedada no <strong>Google Cloud Brazil</strong>{" "}
              e na <strong>Amazon Web Services</strong>, plataformas seguras,
              robustas e escaláveis.
            </Heading>
          </div>

          {/* Conteúdo da direita - Círculos e Logos */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-[350px] h-[350px] isolate">
              {/* Círculos concêntricos com animação de pulse */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute inset-0"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full border border-gray-200"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute inset-[30px] rounded-full border border-gray-200"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute inset-[60px] rounded-full border border-gray-200"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  className="absolute inset-[90px] rounded-full border border-gray-200"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 4, 1], opacity: [0.25, 1, 0.25] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  className="absolute inset-[90px] rounded-full border border-gray-200 bg-white z-[-1] blur-sm"
                ></motion.div>
              </motion.div>

              {/* Container para rotação dos logos */}
              <div
                className="absolute inset-0"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {/* Logo Google Cloud */}
                <div
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform:
                      "translate(-50%, -50%) rotate(180deg) translateY(-140px) rotate(-180deg)",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-2 w-auto h-6 [&_svg]:w-auto [&_svg]:h-6"
                    style={{ transform: `rotate(-${rotation}deg)` }} // Contra-rotação para manter o logo na orientação correta
                  >
                    <IconLogoGoogleCloud />
                  </motion.div>
                </div>

                {/* Logo AWS */}
                <div
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform:
                      "translate(-50%, -50%) rotate(0deg) translateY(-140px) rotate(0deg)",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="p-2 w-auto h-8 [&_svg]:w-auto [&_svg]:h-8"
                    style={{ transform: `rotate(-${rotation}deg)` }} // Contra-rotação para manter o logo na orientação correta
                  >
                    <IconLogoAws />
                  </motion.div>
                </div>
              </div>

              {/* Logo Point (P) centralizado */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                viewport={{ once: true }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-network-primary"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <IconLogoP />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Infrastructure;
