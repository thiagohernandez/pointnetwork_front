"use client";

import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
  useTransform,
} from "framer-motion";
import useWidth from "@/hooks/use-width";

import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";

const FeaturesVideo = ({ data }: { data: any }) => {
  const windowWidth = useWidth();
  const [locaWidth, setLocalWidth] = useState(0);
  const [isLargeScreen, setIslargeScreen] = useState(true);
  const [isYou, setIsYou] = useState(true);

  const sectionRef = useRef(null);
  const [currentSet, setCurrentSet] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef });

  const sectionInVIew = useInView(sectionRef);

  //   useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //     console.log("Page scroll: ", latest);
  //     if (latest <= 0.33) {
  //       setCurrentSet(0);
  //     } else if (latest >= 0.34 && latest <= 0.63) {
  //       setCurrentSet(1);
  //     } else if (latest >= 0.64) {
  //       setCurrentSet(2);

  //     }
  //   });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= 0.5) {
      setCurrentSet(0);
      setIsYou(true);
    } else if (latest > 0.5) {
      // Verificação mais segura
      if (data.cardSets && data.cardSets.length > 1) {
        setCurrentSet(1);
      }
      setIsYou(false);
    }
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 1],
    [data.bgColor, data.bgColorEnd ? data.bgColorEnd : "#ffffff"]
  );
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

  useEffect(() => {
    // console.log("window.innerWidth: ", window.innerWidth);
    if (window.innerWidth > 1280) {
      setIslargeScreen(true);
    }
    if (windowWidth < 1280) {
      setIslargeScreen(false);
    } else {
      setIslargeScreen(true);
    }
  }, [windowWidth]);

  useLayoutEffect(() => {
    setLocalWidth(window.innerWidth);
    if (locaWidth > 1280) {
      setIslargeScreen(true);
    } else {
      setIslargeScreen(false);
    }
  }, [locaWidth]);

  return (
    <motion.div
      id="features"
      ref={sectionRef}
      className={`w-full h-auto xl:h-[300vh] px-8 ${data.bgColor}`}
      style={{ background: bgColor }}
    >
      <div
        className={`w-full max-w-8xl mx-auto py-32 flex flex-col xl:flex-row gap-12 h-auto xl:h-screen justify-between overflow-hidden ${
          sectionInVIew && isLargeScreen ? "sticky top-0" : "relative"
        }`}
      >
        <Container>
          <div className="flex gap-12 flex-col xl:flex-row">
            <div className="w-full xl:w-2/3 flex flex-col justify-between">
              <div className="mb-12">
                {data?.heading && (
                  <h3 className="font-semibold text-sm tracking-tight leading-normal text-id-green mb-4">
                    {data.heading}
                  </h3>
                )}
                {data?.title && (
                  <Heading
                    headingLevel={3}
                    className={`${
                      data.titleColor ? data.titleColor : "text-secondary"
                    } text-3xl max-w-md mb-8`}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.title || "",
                      }}
                    />
                  </Heading>
                )}
                {data?.description && (
                  <div
                    className="max-w-md font-semibold text-2xl tracking-tight leading-normal text-id-gray [&_strong]:font-semibold [&_strong]:text-id-gray-dark"
                    dangerouslySetInnerHTML={{
                      __html: data.description || "",
                    }}
                  />
                )}
              </div>
              <div className="mt-auto w-full">
                {data?.showFeatturesTitle && (
                  <Heading className="flex gap-2 items-center text-lg text-network-primary font-semibold tracking-tight">
                    Principais vantages{" "}
                    {isYou ? (
                      <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -150 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <span className="rounded-full inline-flex border border-dashed border-network-primary px-3 py-2 text-secondary">
                          para você
                        </span>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -150 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <span className="rounded-full inline-flex border border-dashed border-network-primary px-3 py-2 text-secondary">
                          para seus clientes
                        </span>
                      </motion.div>
                    )}
                  </Heading>
                )}
                <div className="w-full mt-12 font-semibold grid grid-cols-1 md:grid-cols-3 xl:grid xl:grid-cols-3 gap-12 justify-between">
                  {isLargeScreen ? (
                    data.cardSets[currentSet].map(
                      (card: any, index: number) => (
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -50 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          key={`card-featured-animated-${card.id}`}
                        >
                          {card.content}
                        </motion.div>
                      )
                    )
                  ) : (
                    <>
                      {data.cardSets[0] &&
                        data.cardSets[0].map((card: any, index: number) => (
                          <div
                            key={`card-featured-animated-${card.id}-${index}`}
                          >
                            {card.content}
                          </div>
                        ))}
                      {data.cardSets[1] &&
                        data.cardSets[1].map((card: any, index: number) => (
                          <div
                            key={`card-featured-animated-${card.id}-${index}`}
                          >
                            {card.content}
                          </div>
                        ))}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <motion.video
                loop
                autoPlay
                muted
                playsInline
                width="530"
                height="812"
                poster="/images/pointID-boa-vizinhanca-poster.jpg"
                className="mx-auto flex rounded-xl w-auto h-auto max-w-full lg:h-full lg:w-full"
                style={{ rotate, scale }}
              >
                <source src={data.video} type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
            </div>
          </div>
        </Container>
      </div>
    </motion.div>
  );
};

export default FeaturesVideo;
