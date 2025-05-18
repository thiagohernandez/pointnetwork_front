"use client";
import React, { useRef, useEffect } from "react";
import { FeaturesBoxItem } from "@/types/types";
import { motion, useInView, useAnimation } from "motion/react";
import Image from "next/image";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";

const FeatureBox = ({
  item,
  index,
}: {
  item: FeaturesBoxItem;
  index: number;
}) => {
  // Criar refs no nível do componente individual
  const animationRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Configuração do useInView com threshold mais baixo
  const isInView = useInView(animationRef, {
    once: false, // Animar apenas uma vez
    amount: 0.2, // Animar quando 20% estiver visível
    // Removed rootMargin as it is not a valid property
  });

  // Usar useEffect para controlar a animação quando elemento for visível
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      // Importante: resetar a animação quando sair da viewport
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <div
      key={index}
      className={`flex flex-col px-4 lg:px-8 pt-4 lg:pt-8 rounded-lg ${item.backgroundColor} ${item.textColor}`}
      style={{
        backgroundImage: item.backgroundImage
          ? `url(${item.backgroundImage})`
          : "transparent",
        backgroundSize: "cover",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
      }}
      ref={animationRef}
    >
      <div className={`text-left ${item.backgroundImage ? "max-w-md" : ""}`}>
        {item.icon && <div className="mb-4">{item.icon}</div>}
        <Heading headingLevel={3} className={`${item.textColor}`}>
          {item.title}
        </Heading>
        <p className="mt-4">{item.description}</p>
      </div>
      <div className="flex w-full relative pt-8">
        {item.img ? (
          <Image
            src={item.img.src}
            alt={item.title}
            width={item.img.width}
            height={item.img.height}
            className="mx-auto block overflow-hidden"
            quality={100}
          />
        ) : (
          <canvas
            width={600}
            height={240}
            className="w-full h-auto mx-auto"
          ></canvas>
        )}

        {item.uiAnimation && (
          <motion.div
            className={`absolute ${item.uiAnimation.position}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.7,
              delay: 0.2 + index * 0.1, // Pequeno atraso progressivo
              ease: "easeOut",
            }}
          >
            <Image
              src={item.uiAnimation.src}
              alt={item.title}
              width={item.uiAnimation.width}
              height={item.uiAnimation.height}
              className="mx-auto block overflow-hidden"
              quality={100}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

const FeaturesBoxes = ({
  data,
  className,
}: {
  data: FeaturesBoxItem[];
  className?: string;
}) => {
  return (
    <Container className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.map((item: FeaturesBoxItem, index: number) => (
          <FeatureBox key={index} item={item} index={index} />
        ))}
      </div>
    </Container>
  );
};

export default FeaturesBoxes;
