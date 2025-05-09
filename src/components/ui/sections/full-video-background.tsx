"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";

interface HeroVideoProps {
  videoSrc: string;
  posterSrc?: string;
  playbackRate?: number;
}

export function FullVideoBackground({
  videoSrc,
  posterSrc,
  playbackRate = 0.5,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;

      // Garantir que a velocidade seja mantida após eventos de carga/play
      const video = videoRef.current;

      const handlePlay = () => {
        video.playbackRate = playbackRate;
      };

      video.addEventListener("play", handlePlay);

      return () => {
        video.removeEventListener("play", handlePlay);
      };
    }
  }, [playbackRate]);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc || "/placeholder.svg?height=1080&width=1920"}
          className="object-cover w-full h-full"
          //   style={{
          //     opacity: isVideoLoaded ? 1 : 0,
          //     transition: "opacity 0.5s ease",
          //   }}
        >
          <source
            src={videoSrc}
            // src="/videos/8817770-hd_1280_720_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to darken/tint the video */}
        <div className="absolute inset-0 bg-network-primary/30"></div>
      </div>

      {/* Content */}
      <Container className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-xl flex gap-4 lg:gap-8">
          <Heading
            headingLevel={3}
            variant="headline"
            className="text-secondary mb-2 pt-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 block whitespace-nowrap align-baseline"
            >
              Nossa missão
            </motion.span>
          </Heading>
          <Heading headingLevel={4} className="mb-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=" text-white"
            >
              Te empoderar a criar, oferecer e gerenciar seus condomínios e
              serviços financeiros de alto valor agregado.
            </motion.div>
          </Heading>
        </div>
      </Container>
    </section>
  );
}
