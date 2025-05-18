import React from "react";
import Container from "@/components/ui/container";

import Heading from "@/components/ui/heading";

const BackgroundChecker = ({ data }: { data: any }) => {
  return (
    <div className="bg-slate-200 py-16 lg:py-24">
      <Container>
        <div className="innovation-video flex justify-center">
          <div className="flex relative">
            <video
              loop
              autoPlay
              muted
              playsInline
              width="268"
              height="416"
              poster="/faceScan-poster.jpg"
              className="masking-scan max-w-full h-[auto] ml-auto mr-auto flex -mb-36 after:content-[' '] after:bg-id-green/50 after:absolute after:top-0 after:left-0 after:w-full after:h-full -translate-y-1/2"
            >
              <source
                src="/videos/faceScan2-green-filter.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto text-center">
          {data?.title && (
            <Heading
              headingLevel={2}
              className="text-slate-900 text-3xl lg:text-5xl tracking-tight mb-4"
            >
              {data.title}
            </Heading>
          )}
          {data?.subtitle && (
            <Heading
              headingLevel={3}
              className="text-id-gray-dark text-xl lg:text-3xl mb-8"
            >
              {data.subtitle}
            </Heading>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-8 lg:mt-16">
          {data?.content1 && (
            <div className="flex flex-col items-center font-semibold text-id-gray [&_strong]:text-id-gray-dark [&_strong]:font-semibold leading-relaxed text-2xl tracking-tight">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.content1 || "",
                }}
              />
            </div>
          )}
          <div className="flex flex-col items-center justify-center">
            <svg
              width="183"
              height="184"
              viewBox="0 0 183 184"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 md:h-24 lg:h-full w-auto"
            >
              <path
                d="M30.5002 153L149 34.5"
                stroke="#3BCFA6"
                strokeWidth="9.15"
              />
            </svg>
          </div>
          {data?.content2 && (
            <div className="flex flex-col items-center font-semibold text-id-gray [&_strong]:text-id-gray-dark [&_strong]:font-semibold leading-relaxed text-2xl tracking-tight">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.content2 || "",
                }}
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default BackgroundChecker;
