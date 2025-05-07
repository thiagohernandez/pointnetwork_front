import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";

import ContactInfo from "@/components/ui/misc/contact-info";
import ContactForm from "@/components/ui/form/contact-form";

const HeroContact = () => {
  return (
    <div className="w-full bg-[#170E33]">
      <div className="pt-12">
        <div className="max-w-6xl mx-auto text-center text-white pt-32 px-3 items-center justify-center flex flex-col">
          <Image
            src="/fale-com-um-consultor.png"
            width={46}
            height={74}
            alt="Fale com um consultor PointID"
            className="-mt-2 mb-4"
          />
          <div className="flex flex-col gap-2">
            <h1 className="order-2 text-7xl md:text-5xl font-semibold tracking-tight">
              Entre em contato conosco
            </h1>
          </div>
          <p className="text-lg mt-2 mb-8">
            Descubra como a Point pode transformar a sua gestão!
          </p>
          <div className="w-full flex flex-col lg:flex-row -mb-16">
            <div className="flex flex-col w-full lg:w-2/3 bg-white p-16 lg:rounded-l-lg">
              <ContactForm />
            </div>
            <ContactInfo />
          </div>
        </div>
      </div>

      <div className="bg-slate-300 h-42"></div>
    </div>
  );
};

export default HeroContact;
