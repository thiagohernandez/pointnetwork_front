"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
  animate,
  AnimationPlaybackControls,
} from "motion/react";
import Image from "next/image";
import { IconPackage, IconKey, IconAlert } from "@/components/ui/icons";
import { HousePlug, MoveUpRight, PiggyBank } from "lucide-react";

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

const StripeHeroItems = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef<number>(0);
  const baseDurationRef = useRef<number>(30);
  const lastScrollTimeRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(0);
  const scrollDirectionRef = useRef<number>(1);
  const currentSpeedRef = useRef<number>(baseDurationRef.current);
  const animationRef = useRef<AnimationPlaybackControls | null>(null);
  const controls = useAnimationControls();
  const initialXRef = useRef<number>(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scrollVelocity = useTransform(scrollYProgress, [0, 1], [0, 1.0]);

  const startAnimation = useCallback(
    (duration: number, direction: number) => {
      currentSpeedRef.current = duration;
      animationRef.current?.stop();

      const targetX =
        direction === 1
          ? initialXRef.current - widthRef.current
          : initialXRef.current + widthRef.current;

      controls.start({
        x: targetX,
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          onComplete: () => controls.set({ x: initialXRef.current }),
        },
      });
    },
    [controls]
  );

  const applyInertia = useCallback(
    (targetDuration: number, startDuration: number, direction: number) => {
      animationRef.current?.stop();
      animationRef.current = animate(startDuration, targetDuration, {
        duration: 1.2,
        ease: "easeOut",
        onUpdate: (value) => {
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
              onComplete: () => controls.set({ x: initialXRef.current }),
            },
          });
          currentSpeedRef.current = value;
        },
      });
    },
    [controls]
  );

  useEffect(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.firstChild as HTMLElement;
      if (firstChild) {
        const singleSetWidth = firstChild.offsetWidth;
        widthRef.current = singleSetWidth;
        initialXRef.current = -singleSetWidth;
        controls.set({ x: initialXRef.current });
        startAnimation(baseDurationRef.current, 1);
      }
    }
  }, [controls, startAnimation]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const now = Date.now();
      scrollDirectionRef.current =
        currentScrollY > lastScrollYRef.current ? 1 : -1;
      lastScrollYRef.current = currentScrollY;
      lastScrollTimeRef.current = now;
      setIsScrolling(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isScrolling) return;

    const checkScrollStopped = setInterval(() => {
      const now = Date.now();
      if (now - lastScrollTimeRef.current > 150) {
        setIsScrolling(false);
        clearInterval(checkScrollStopped);
        applyInertia(
          baseDurationRef.current,
          currentSpeedRef.current,
          scrollDirectionRef.current
        );
      }
    }, 100);

    return () => clearInterval(checkScrollStopped);
  }, [isScrolling, applyInertia]);

  useEffect(() => {
    const unsubscribe = scrollVelocity.onChange((latest) => {
      if (!isScrolling) return;
      const targetDuration = Math.max(5, baseDurationRef.current - latest * 40);
      applyInertia(
        targetDuration,
        currentSpeedRef.current,
        scrollDirectionRef.current
      );
    });

    return () => unsubscribe();
  }, [scrollVelocity, isScrolling, applyInertia]);

  return (
    <div ref={sectionRef} className="overflow-hidden w-full -mt-16 py-16">
      <div className="w-full" style={{ transform: "rotate(-3deg)" }}>
        <motion.div
          ref={containerRef}
          className="flex"
          animate={controls}
          style={{
            x: 0,
            width: "300%",
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
