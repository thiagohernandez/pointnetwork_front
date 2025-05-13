"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const CenteredContent = () => {
  const videoRef = useRef(null);
  const [rotate, setRotate] = useState(0);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "80% end"],
  });

  const mapNumRange = (
    num: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ) => ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setRotate(mapNumRange(latest, 0, 1, 35, 0));
  });

  return (
    <div id="features" className="bg-id-gray-base/25 w-full pt-32 px-8 ">
      <div className="w-full max-w-8xl mx-auto flex flex-col gap-6 justify-between">
        <div className="max-w-2xl flex flex-col justify-between ml-auto mr-auto">
          <div className="mb-12">
            <h3 className="font-semibold text-sm tracking-tight leading-normal text-id-green text-center mb-4">
              Soluções de convivência , gestão de encomendas e controle de
              acesso com PointiD!
            </h3>
            <h4 className="font-semibold text-4xl md:text-5xl tracking-tight leading-snug text-id-gray-dark text-center [&_strong]:font-semibold [&_strong]:text-id-gray-dark mb-6">
              Facilitando a vida de Síndicos e Administradores
            </h4>
            <p className="text-center font-semibold tracking-tight leading-normal text-id-gray [&_strong]:font-semibold [&_strong]:text-id-gray-dark">
              Além dos benefícios a sua equipe essa{" "}
              <strong>abordagem de autosserviço</strong> também proporcionará{" "}
              <strong>
                aos clientes uma sensação de controle e agilidade.
              </strong>
            </p>
            <div className="text-center mt-6">
              <Link
                href="#contact"
                className={buttonVariants({
                  variant: "primary",
                  size: "sm",
                  className: "hover:!bg-id-gray-dark hover:!text-white",
                })}
              >
                Fale com um consultor <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 relative w-full max-w-6xl ml-auto mr-auto">
          <motion.div
            className="videoBox"
            ref={videoRef}
            style={{ transform: `perspective(400px) rotateX(${rotate}deg)` }}
          >
            <video
              loop
              autoPlay
              muted
              playsInline
              width="1280"
              height="786"
              poster="/images/pointid-intro-poster.jpg"
              className="max-w-full h-[auto] ml-auto mr-auto flex rounded-tl-lg rounded-tr-lg shadow-2xl"
            >
              <source src="/videos/pointid-app.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CenteredContent;
