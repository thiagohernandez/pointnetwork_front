import React from "react";
import Container from "@/components/ui/container";

const HeroFullWidth = () => {
  return (
    <div className="w-full bg-[#170E33]">
      <Container>
        <div className="pb-52 pt-12">
          <div className="max-w-6xl pt-32 flex flex-col text-white tracking-tighter">
            <h1 className="text-6xl order-2 mb-4 font-medium">
              Na Point,{" "}
              <strong className="font-bold text-primary">
                nosso grande sonho é simplificar a vida
              </strong>{" "}
              de administradoras, condomínios e empresas.
            </h1>
            <h2 className="order-1 font-semibold mb-2">Quem somos</h2>
            <p className="text-slate-100 order-3 leading-snug max-w-5xl">
              Fazemos isso automatizando processos e agilizando a gestão,
              facilitando a comunicação e auxiliando nossos clientes a
              aumentarem sua receita de forma tangível e duradoura.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroFullWidth;
