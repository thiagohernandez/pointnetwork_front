import React from "react";
import Container from "@/components/ui/container";

const HeroBasic = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full bg-[#170E33]">
      <Container>
        <div className="pt-12">
          <div className="max-w-5xl text-white pt-32 justify-start flex flex-col">
            <h1 className="tracking-tighter text-5xl font-semibold">{title}</h1>
            <p className="text-lg mt-2 mb-8 tracking-tighter">{description}</p>
          </div>
        </div>
        ;
      </Container>
    </div>
  );
};

export default HeroBasic;
