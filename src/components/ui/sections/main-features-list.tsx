"use client";
import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { motion, useAnimationControls } from "motion/react";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";

const MainFeaturesList = ({ features }: { features: any }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Refs for motion containers
  const containerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const controls = useRef([
    useAnimationControls(),
    useAnimationControls(),
    useAnimationControls(),
  ]);

  // Stable arrays using useMemo
  const directions = useMemo(() => [1, -1, 1], []);
  const speeds = useMemo(() => [60, 80, 70], []);

  // Animation speed adjuster with skew effect
  const adjustSpeed = useCallback(
    (multiplier: number, skewAmount: number = 0) => {
      containerRefs.current.forEach((container, index) => {
        if (!container) return;

        const contentWidth = (container.children[0] as HTMLElement).offsetWidth;
        const newDuration = speeds[index] * multiplier;

        const currentX = parseFloat(
          container.style.transform
            ?.replace("translateX(", "")
            .replace("px)", "") || "0"
        );

        const startX = directions[index] > 0 ? 0 : -contentWidth;
        const endX = directions[index] > 0 ? -contentWidth : 0;
        const totalDistance = Math.abs(endX - startX);
        const distanceTraveled = Math.abs(currentX - startX);
        const progress = distanceTraveled / totalDistance;
        const remainingDuration = newDuration * (1 - progress);
        const skewDirection = directions[index];

        controls.current[index].start({
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
    [directions, speeds]
  );

  // Initial animation setup
  useEffect(() => {
    let isActive = true;

    const setupAnimations = () => {
      if (!isActive) return;

      containerRefs.current.forEach((container, index) => {
        if (!container || !isActive) return;

        const children = container.children;
        if (children.length === 0) return;

        const contentWidth = (children[0] as HTMLElement).offsetWidth;
        const direction = directions[index];
        const speed = speeds[index];
        const startX = direction > 0 ? 0 : -contentWidth;
        const endX = direction > 0 ? -contentWidth : 0;

        controls.current[index].set({ x: startX });

        controls.current[index].start({
          x: endX,
          transition: {
            duration: speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        });
      });
    };

    setupAnimations();

    return () => {
      isActive = false;
    };
  }, [directions, speeds]);

  // Adjust animation on scroll
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        adjustSpeed(0.5, -3);
        ticking = false;

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          adjustSpeed(1.0, 0);
        }, 200);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [adjustSpeed]);

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
            // ref={(el) => (containerRefs.current[stripIndex] = el)}
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
