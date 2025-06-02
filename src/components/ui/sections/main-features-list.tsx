"use client";
import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { motion, useAnimationControls } from "motion/react";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";

const MainFeaturesList = ({ features }: { features: any }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const controls = useRef([
    useAnimationControls(),
    useAnimationControls(),
    useAnimationControls(),
  ]);

  // Estado para controlar se as animações estão ativas
  const isAnimatingRef = useRef(true);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);

  // Configurações estáveis
  const config = useMemo(
    () => ({
      directions: [1, -1, 1] as const,
      baseSpeeds: [60, 80, 70] as const,
      scrollMultiplier: 0.3,
      scrollSkew: -2,
      normalSkew: 0,
      scrollDebounceMs: 150,
    }),
    []
  );

  // Função otimizada para calcular dimensões
  const getContainerDimensions = useCallback((container: HTMLElement) => {
    const firstChild = container.children[0] as HTMLElement;
    if (!firstChild) return null;

    return {
      contentWidth: firstChild.offsetWidth,
      containerWidth: container.offsetWidth,
    };
  }, []);

  // Função principal para controlar animações
  const updateAnimations = useCallback(
    (
      speedMultiplier: number = 1,
      skewAmount: number = 0,
      force: boolean = false
    ) => {
      if (!isAnimatingRef.current && !force) return;

      containerRefs.current.forEach((container, index) => {
        if (!container) return;

        const dimensions = getContainerDimensions(container);
        if (!dimensions) return;

        const { contentWidth } = dimensions;
        const direction = config.directions[index];
        const baseSpeed = config.baseSpeeds[index];
        const adjustedSpeed = baseSpeed * speedMultiplier;

        // Calcular posições de início e fim
        const startX = direction > 0 ? 0 : -contentWidth;
        const endX = direction > 0 ? -contentWidth : 0;

        // Se estamos forçando uma reinicialização, definir posição inicial
        if (force) {
          controls.current[index].set({ x: startX, skewX: 0 });
        }

        // Aplicar animação
        controls.current[index].start({
          x: endX,
          skewX: direction * skewAmount,
          transition: {
            x: {
              duration: adjustedSpeed,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
            skewX: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
        });
      });
    },
    [config, getContainerDimensions]
  );

  // Handler otimizado para scroll com debounce
  const handleScroll = useCallback(() => {
    if (!isAnimatingRef.current) return;

    // Marcar que estamos fazendo scroll
    isScrollingRef.current = true;

    // Aplicar efeito de scroll imediatamente
    updateAnimations(config.scrollMultiplier, config.scrollSkew);

    // Limpar timeout anterior
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Restaurar animação normal após o debounce
    scrollTimeoutRef.current = setTimeout(() => {
      if (isAnimatingRef.current) {
        isScrollingRef.current = false;
        updateAnimations(1, config.normalSkew);
      }
    }, config.scrollDebounceMs);
  }, [updateAnimations, config]);

  // Setup inicial das animações
  useEffect(() => {
    const setupTimeout = setTimeout(() => {
      if (isAnimatingRef.current) {
        updateAnimations(1, 0, true);
      }
    }, 100); // Pequeno delay para garantir que o DOM está pronto

    return () => {
      clearTimeout(setupTimeout);
    };
  }, [updateAnimations]);

  // Listener de scroll otimizado
  useEffect(() => {
    let rafId: number;
    let isThrottled = false;

    const throttledScrollHandler = () => {
      if (isThrottled) return;

      isThrottled = true;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        isThrottled = false;
      });
    };

    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
      capture: false,
    });

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  // Cleanup ao desmontar componente
  useEffect(() => {
    return () => {
      isAnimatingRef.current = false;
      controls.current.forEach((control) => {
        control.stop();
      });
    };
  }, []);

  // Observer para detectar mudanças de visibilidade (opcional - para pausar quando fora da tela)
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isAnimatingRef.current = true;
            updateAnimations(1, 0, true);
          } else {
            isAnimatingRef.current = false;
            controls.current.forEach((control) => control.stop());
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [updateAnimations]);

  const cleanupAnimations = useCallback(() => {
    isAnimatingRef.current = false;
    controls.current.forEach((control) => {
      control.stop();
    });
  }, []);

  // Cleanup ao desmontar componente
  useEffect(() => {
    return cleanupAnimations;
  }, [cleanupAnimations]);

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

      {config.directions.map((_, stripIndex) => (
        <div key={stripIndex} className="overflow-hidden py-1">
          <motion.div
            ref={(el) => {
              containerRefs.current[stripIndex] = el;
            }}
            animate={controls.current[stripIndex]}
            style={{
              willChange: "transform",
              display: "flex",
              width: "max-content",
            }}
            className="flex items-center"
          >
            {/* Duplicar conteúdo para loop infinito seamless */}
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
