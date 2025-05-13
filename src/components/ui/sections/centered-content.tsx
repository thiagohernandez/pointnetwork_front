"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const CenteredContent = ({
  title,
  subtitle,
  description,
  video,
  ctaLink,
  ctaText,
}: {
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  video?: string;
  ctaLink?: string;
  ctaText?: string;
}) => {
  const videoRef = useRef(null);
  const videoItem = useRef<HTMLVideoElement>(null);
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

  useEffect(() => {
    if (videoItem.current) {
      videoItem.current.playbackRate = 2.0;
    }
  }, []);

  return (
    <div id="features" className="w-full pt-32 px-8 ">
      <div className="w-full max-w-8xl mx-auto flex flex-col gap-6 justify-between">
        <div className="max-w-2xl flex flex-col justify-between ml-auto mr-auto">
          <div className="mb-12">
            {subtitle && (
              <h3 className="font-semibold text-sm tracking-tight leading-normal text-id-green text-center mb-4">
                {subtitle}
              </h3>
            )}
            {title && (
              <h4 className="font-semibold text-4xl md:text-5xl tracking-tight leading-tight text-id-gray-dark text-center [&_strong]:font-semibold [&_strong]:text-id-gray-dark mb-6">
                {title}
              </h4>
            )}
            {description && (
              <div className="text-center font-semibold tracking-tight leading-normal text-id-gray [&_strong]:font-semibold [&_strong]:text-id-gray-dark">
                {description}
              </div>
            )}

            <div className="text-center mt-6">
              <Link
                href={ctaLink ? ctaLink : "#contact"}
                className={buttonVariants({
                  variant: "green",
                })}
              >
                {ctaText ? ctaText : "Fale com um consultor"}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 relative w-full max-w-6xl ml-auto mr-auto">
          {video && (
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
                ref={videoItem}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CenteredContent;
