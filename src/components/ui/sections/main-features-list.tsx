"use client";
import React, { useRef, useEffect, useCallback } from "react";
import { motion, useAnimationControls } from "motion/react";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";

const MainFeaturesList = ({ features }: { features: any }) => {
  // 1. Refs declarados no nível superior, fora de outros hooks
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);

  // Agrupar refs em um array (sem usar useMemo)
  const containerRefs = [containerRef1, containerRef2, containerRef3];

  // 2. Controls declarados no nível superior, fora de outros hooks
  const control1 = useAnimationControls();
  const control2 = useAnimationControls();
  const control3 = useAnimationControls();

  // Agrupar controls em um array (sem usar useMemo)
  const controls = [control1, control2, control3];

  // 3. Valores simples não precisam de useMemo
  const directions = [1, -1, 1];
  const speeds = [60, 80, 70];

  // 4. useCallback para a função adjustSpeed
  const adjustSpeed = useCallback(
    (multiplier: number, skewAmount: number = 0) => {
      containerRefs.forEach((containerRef, index) => {
        if (!containerRef.current) return;

        // Conseguir o elemento atual e sua largura
        const container = containerRef.current;
        const contentWidth = (container.children[0] as HTMLElement).offsetWidth;

        // Ajustar velocidade com base no multiplier
        const newDuration = speeds[index] * multiplier;

        // Obter a posição X atual
        const currentX = parseFloat(
          container.style.transform
            ?.replace("translateX(", "")
            .replace("px)", "") || "0"
        );

        // Calcular o progresso da animação (0 a 1)
        const startX = directions[index] > 0 ? 0 : -contentWidth;
        const endX = directions[index] > 0 ? -contentWidth : 0;
        const totalDistance = Math.abs(endX - startX);
        const distanceTraveled = Math.abs(currentX - startX);
        const progress = distanceTraveled / totalDistance;

        // Calcular quanto tempo resta na animação atual
        const remainingDuration = newDuration * (1 - progress);

        // Aplicar direção da inclinação baseado na direção do movimento
        const skewDirection = directions[index];

        // Aplicar nova duração e skew à animação em andamento
        controls[index].start({
          x: endX,
          skewX: skewDirection * skewAmount * 2,
          transition: {
            x: {
              duration: remainingDuration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
            skewX: {
              duration: 0.4,
              ease: "easeOut",
            },
          },
        });
      });
    },
    // Como containerRefs e controls são agora referências estáveis,
    // não precisamos incluí-los nas dependências
    [directions, speeds]
  );

  // 5. Configurar animações iniciais
  useEffect(() => {
    let isActive = true;

    const setupAnimations = () => {
      if (!isActive) return;

      // Configurar animação para cada strip
      containerRefs.forEach((containerRef, index) => {
        if (!containerRef.current || !isActive) return;

        const container = containerRef.current;
        const children = container.children;

        if (children.length === 0) return;

        // Calcular largura total do conteúdo
        const contentWidth = (children[0] as HTMLElement).offsetWidth;

        // Iniciar animação contínua
        const startAnimation = () => {
          if (!isActive) return;

          const direction = directions[index];
          const speed = speeds[index];

          // Ponto inicial da animação
          const startX = direction > 0 ? 0 : -contentWidth;

          // Ponto final da animação
          const endX = direction > 0 ? -contentWidth : 0;

          // Reset position
          controls[index].set({ x: startX });

          // Animar continuamente
          controls[index].start({
            x: endX,
            transition: {
              duration: speed,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          });
        };

        startAnimation();
      });
    };

    setupAnimations();

    return () => {
      isActive = false;
    };
  }, [controls, directions, speeds]);

  // 6. Efeito para lidar com scroll
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        // Acelerar as animações durante scroll e adicionar inclinação
        adjustSpeed(0.5, -3);

        // Reset do ticker
        ticking = false;

        // Clear any existing timeout
        clearTimeout(scrollTimeout);

        // Set new timeout
        scrollTimeout = setTimeout(() => {
          // Quando o scroll parar, voltar à velocidade normal e remover inclinação
          adjustSpeed(1.0, 0);
        }, 200);
      });
    };

    // Adicionar listener para o evento de scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [adjustSpeed]);

  // Resto do componente permanece igual
  return (
    <div
      ref={sectionRef}
      className="py-16 lg:py-24 bg-porcelain overflow-hidden"
    >
      <Container>
        <Heading
          headingLevel={2}
          className="text-secondary mb-8 text-3xl lg:text-4xl"
        >
          Principais funcionalidades
        </Heading>
      </Container>
      {[0, 1, 2].map((stripIndex) => (
        <div key={stripIndex} className="overflow-hidden py-1">
          <motion.div
            ref={containerRefs[stripIndex]}
            animate={controls[stripIndex]}
            style={{
              willChange: "transform",
              display: "flex",
              width: "max-content",
            }}
            className="flex items-center"
          >
            {/* Repetir duas vezes para scroll infinito */}
            {[0, 1].map((setIndex) => (
              <div key={setIndex} className="flex">
                {features.map((feature: any, featureIndex: number) => (
                  <div
                    key={`feature-${featureIndex}-${setIndex}`}
                    className="flex items-center whitespace-nowrap bg-white px-6 py-3 gap-3 rounded-md text-network-primary font-semibold tracking-tight ml-2 text-lg"
                  >
                    <div className="w-[8px] h-[8px] rounded-full bg-porcelain -ml-1"></div>
                    {feature.content}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default MainFeaturesList;
