import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";

import { FAQsHomeList } from "@/data/faq";

const FAQ = () => {
  return (
    <div className="w-full pt-16 -mb-16 relative z-10" id="FAQs">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between bg-slate-200 gap-8 rounded-tl-lg rounded-tr-lg rounded-bl-3xl rounded-br-3xl px-8 py-12 md:py-16 md:px-16">
          <div className="flex flex-col w-full lg:w-1/3">
            <Image
              src="/fale-com-um-consultor.png"
              width={46}
              height={74}
              alt="Fale com um consultor PointID"
              className="-mt-4"
            />
            <h2 className="tracking-tight font-semibold text-4xl md:text-5xl text-id-gray-dark leading-tight max-w-3xl mt-3">
              Perguntas frequentes
            </h2>
            <h3 className="tracking-tight font-semibold text-xl md:text-2xl text-id-gray-light leading-tight my-3">
              Não encontrou aqui sua resposta?{" "}
              <Link
                href="/contato"
                className="text-network-primary transition-colors underline hover:text-primary"
              >
                Envie-nos uma mensagem
              </Link>
            </h3>
          </div>
          <div className="flex w-full lg:w-1/2">
            <Accordion type="single" collapsible className="w-full">
              {FAQsHomeList.map((item, index) => (
                <AccordionItem
                  value={`item-faq-${item.id}`}
                  key={`item-faq-${item.id}`}
                  className="border-slate-300"
                >
                  <AccordionTrigger>
                    <div className="flex flex-nowrap gap-6 items-center justify-start text-left">
                      <div className="text-network-primary font-semibold tracking-tight text-[13px] w-5">
                        0{index + 1}
                      </div>{" "}
                      <div className="tracking-tight">{item.question}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
