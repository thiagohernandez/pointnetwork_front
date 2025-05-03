"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
  animate,
} from "motion/react";
import Image from "next/image";
import { IconPackage, IconKey, IconAlert } from "@/components/ui/icons";
import { HousePlug, MoveUpRight, PiggyBank } from "lucide-react";

const StripeHeroItems = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const widthRef = useRef(0);
  const baseDurationRef = useRef(30); // Velocidade inicial
  const lastScrollTimeRef = useRef(0);
  const lastScrollYRef = useRef(0); // Armazena a última posição de scroll
  const scrollDirectionRef = useRef(1); // 1 para baixo, -1 para cima
  const currentSpeedRef = useRef(baseDurationRef.current); // Velocidade atual
  const animationRef = useRef(null); // Referência para a animação atual
  const controls = useAnimationControls();
  const initialXRef = useRef(0); // Posição X inicial

  // Estado para controlar o efeito de retorno à velocidade normal
  const [isScrolling, setIsScrolling] = useState(false);

  // Hook para detectar o scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transforma o scroll em uma velocidade de animação
  const scrollVelocity = useTransform(scrollYProgress, [0, 1], [0, 1.0]);

  // Inicialização da animação
  useEffect(() => {
    if (containerRef.current) {
      const singleSetWidth = containerRef.current.firstChild.offsetWidth;
      widthRef.current = singleSetWidth;

      // Define a posição inicial como 1/3 do caminho, para ter espaço em ambas direções
      initialXRef.current = -singleSetWidth;

      // Configura a posição inicial
      controls.set({ x: initialXRef.current });

      // Configuração inicial da animação
      startAnimation(baseDurationRef.current, 1);
    }
  }, []);

  // Função para iniciar a animação com uma determinada duração e direção
  const startAnimation = (duration, direction) => {
    // Atualiza a velocidade atual
    currentSpeedRef.current = duration;

    // Cancela qualquer animação de inércia existente
    if (animationRef.current) {
      animationRef.current.stop();
    }

    // Calcula a posição final baseada na direção
    const targetX =
      direction === 1
        ? initialXRef.current - widthRef.current
        : initialXRef.current + widthRef.current;

    controls.start({
      x: targetX,
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        onComplete: () => {
          // Redefine a posição inicial para evitar números muito grandes
          controls.set({ x: initialXRef.current });
        },
      },
    });
  };

  // Função que aplica gradualmente a inércia (desaceleração natural)
  const applyInertia = (targetDuration, startDuration, direction) => {
    // Cancela qualquer animação de inércia existente
    if (animationRef.current) {
      animationRef.current.stop();
    }

    // Cria uma animação de transição para a duração (velocidade)
    animationRef.current = animate(startDuration, targetDuration, {
      duration: 1.2, // Tempo de transição para desacelerar (1.2 segundos)
      ease: "easeOut", // Efeito de desaceleração natural
      onUpdate: (value) => {
        // Atualiza a animação do carousel com o novo valor de duração
        const targetX =
          direction === 1
            ? initialXRef.current - widthRef.current
            : initialXRef.current + widthRef.current;

        controls.start({
          x: targetX,
          transition: {
            duration: value,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            onComplete: () => {
              // Redefine a posição inicial para evitar números muito grandes
              controls.set({ x: initialXRef.current });
            },
          },
        });

        // Atualiza a referência da velocidade atual
        currentSpeedRef.current = value;
      },
    });
  };

  // Detecta quando o scroll ocorre e sua direção
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const now = Date.now();

      // Determina a direção do scroll
      if (currentScrollY > lastScrollYRef.current) {
        scrollDirectionRef.current = 1; // Scroll para baixo
      } else if (currentScrollY < lastScrollYRef.current) {
        scrollDirectionRef.current = -1; // Scroll para cima
      }

      lastScrollYRef.current = currentScrollY;
      lastScrollTimeRef.current = now;
      setIsScrolling(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efeito para retornar à velocidade normal após parar de rolar (com inércia)
  useEffect(() => {
    if (!isScrolling) return;

    const checkScrollStopped = setInterval(() => {
      const now = Date.now();
      if (now - lastScrollTimeRef.current > 150) {
        // 150ms sem scroll = parou de rolar
        setIsScrolling(false);
        clearInterval(checkScrollStopped);

        // Aplica inércia para retornar gradualmente à velocidade normal
        applyInertia(
          baseDurationRef.current,
          currentSpeedRef.current,
          scrollDirectionRef.current
        );
      }
    }, 100);

    return () => clearInterval(checkScrollStopped);
  }, [isScrolling]);

  // Efeito para atualizar a velocidade da animação baseada no scroll (com aceleração gradual)
  useEffect(() => {
    const unsubscribe = scrollVelocity.onChange((latest) => {
      if (!isScrolling) return;

      // Calcula a nova duração (menor valor = animação mais rápida)
      const targetDuration = Math.max(5, baseDurationRef.current - latest * 40);

      // Aplica aceleração gradual em vez de mudança instantânea
      applyInertia(
        targetDuration,
        currentSpeedRef.current,
        scrollDirectionRef.current
      );
    });

    return () => unsubscribe();
  }, [scrollVelocity, isScrolling]);

  const cardSets = [
    <div key="cardset" className="flex gap-1 mr-1">
      <div className="bg-white rounded-lg flex items-center gap-2 max-w-60 w-60 p-3 relative">
        <div className="cardAlert__icon w-12 h-12 aspect-square rounded-full shrink-0 bg-green-200/25 text-green-600 flex items-center justify-center">
          <MoveUpRight />
        </div>
        <div className="cardAlert__content leading-none relative">
          <div className="inline-flex text-[11px] font-semibold py-0.5 px-2 rounded-lg tracking-tight text-green-500 bg-green-200/40">
            Saldo em caixa
          </div>
          <h3 className="text-id-gray-darker tracking-tight font-medium text-sm mt-0.5">
            R$134.942,55
          </h3>
          <span className="text-green-600 text-[10px] font-medium">2.56%</span>
        </div>
      </div>
      <div className="bg-white rounded-lg flex items-center gap-2 max-w-60 w-60 p-3">
        <div className="cardAlert__icon w-12 h-12 aspect-square rounded-full shrink-0 bg-orange-300/25 text-orange-300 flex items-center justify-center">
          <IconPackage />
        </div>
        <div className="cardAlert__content leading-none w-full">
          <h3 className="text-id-gray-darker tracking-tight font-medium text-sm mt-0.5">
            Nova encomenda entregue na portaria
          </h3>
          <time className="text-id-gray-light text-[10px] font-medium">
            3 min. atrás
          </time>
        </div>
      </div>
      <div className="bg-white rounded-lg flex items-center gap-2 max-w-60 w-60 p-3">
        <div className="cardAlert__icon w-12 h-12 aspect-square rounded-full shrink-0 bg-[#7367F0]/15 text-[#7367F0] flex items-center justify-center">
          <IconKey />
        </div>
        <div className="cardAlert__content leading-none w-full">
          <div className="inline-flex text-[11px] font-semibold py-0.5 px-2 rounded-lg tracking-tight bg-[#7367F0]/15 text-[#7367F0]">
            Salão de festas
          </div>
          <h3 className="text-id-gray-darker tracking-tight font-medium text-sm mt-0.5">
            Chaves entregues
          </h3>
          <time className="text-id-gray-light text-[10px] font-medium">
            2 horas atrás
          </time>
        </div>
      </div>
      <div className="bg-white rounded-lg flex items-center gap-2 max-w-60 w-60 p-3 relative">
        <div className="cardAlert__icon w-12 h-12 aspect-square rounded-full shrink-0 bg-purple-400/15 text-purple-600 flex items-center justify-center">
          <HousePlug />
        </div>
        <div className="cardAlert__content leading-none relative">
          <h3 className="text-id-gray-darker tracking-tight font-medium text-sm mt-0.5">
            Relatório de consumo energético
          </h3>
          <time className="text-id-gray-light text-[10px] font-medium">
            3 horas atrás
          </time>
        </div>
      </div>
      <div className="bg-white rounded-lg flex items-center gap-2 max-w-60 w-60 p-3 relative">
        <div className="cardAlert__icon w-12 h-12 aspect-square rounded-full shrink-0 bg-green-200/25 text-green-600 flex items-center justify-center">
          <PiggyBank />
        </div>
        <div className="cardAlert__content leading-none relative">
          <div className="inline-flex text-[11px] font-semibold py-0.5 px-2 rounded-lg tracking-tight text-green-500 bg-green-200/40">
            Taxa de inadinimplência
          </div>
          <h3 className="text-id-gray-darker tracking-tight font-medium text-sm mt-0.5">
            3.25%
          </h3>
          <span className="text-green-600 text-[10px] font-medium">-0.5%</span>
        </div>
      </div>
      <div className="bg-white rounded-lg flex items-center gap-2 max-w-60 w-60 p-3 relative">
        <div className="cardAlert__icon">
          <Image
            src="/Avatar/jonas-santana-user.png"
            width={52}
            height={52}
            alt="Jonas Santana - Cliente PointID"
          />
        </div>
        <div className="cardAlert__content leading-none relative">
          <div className="inline-flex text-[11px] font-semibold py-0.5 px-2 rounded-lg tracking-tight text-green-500 bg-green-200/40">
            Acesso liberado
          </div>
          <h3 className="text-id-gray-darker tracking-tight font-medium text-sm mt-0.5">
            Jonas Santana
          </h3>
          <time className="text-id-gray-light text-[10px] font-medium">
            10 min. atrás
          </time>
        </div>
      </div>
      <div className="bg-white rounded-lg flex items-center gap-2 max-w-60 w-60 p-3 relative">
        <div className="cardAlert__icon w-12 h-12 aspect-square rounded-full shrink-0 bg-orange-300/25 text-orange-300 flex items-center justify-center">
          <IconAlert />
        </div>
        <div className="cardAlert__content leading-none w-full">
          <h3 className="text-id-gray-darker tracking-tight font-medium text-sm mt-0.5">
            Novo aviso
          </h3>
          <time className="text-id-gray-light text-[10px] font-medium">
            5 min. atrás
          </time>
        </div>
        <div className="font-bold tracking-tight text-white text-[10px] py-[1px] px-2 rounded-lg bg-orange-400 absolute top-4 -left-2">
          2
        </div>
      </div>
      <div className="bg-white rounded-lg flex items-center gap-2 max-w-60 w-60 p-3 relative">
        <div className="cardAlert__icon">
          <Image
            src="/Avatar/carolina-alves-user.png"
            width={52}
            height={52}
            alt="Carolina Alves - Cliente PointID"
          />
        </div>
        <div className="cardAlert__content leading-none relative">
          <div className="inline-flex text-[11px] font-semibold py-0.5 px-2 rounded-lg tracking-tight text-green-500 bg-green-200/40">
            Acesso liberado
          </div>
          <h3 className="text-id-gray-darker tracking-tight font-medium text-sm mt-0.5">
            Carolina Alves
          </h3>
          <time className="text-id-gray-light text-[10px] font-medium">
            5 min. atrás
          </time>
        </div>
      </div>
    </div>,
  ];

  return (
    <div ref={sectionRef} className="overflow-hidden w-full -mt-12 py-12">
      <div className="w-full" style={{ transform: "rotate(-3deg)" }}>
        <motion.div
          ref={containerRef}
          className="flex"
          animate={controls}
          style={{
            x: 0,
            width: "300%", // Aumentado para ter mais espaço em ambas direções
            display: "flex",
          }}
        >
          {cardSets}
          {cardSets}
          {cardSets}
        </motion.div>
      </div>
    </div>
  );
};

export default StripeHeroItems;
