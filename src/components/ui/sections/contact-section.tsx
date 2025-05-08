import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import ContactForm from "@/components/ui/form/contact-form";

const ContactSection = () => {
  return (
    <section className="py-16 lg:py-32">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="lg:w-1/2">
            <Image
              src="/fale-com-um-consultor.png"
              width={46}
              height={74}
              alt="Fale com um consultor PointID"
              className="-mt-2 mb-4"
            />
            <Heading
              headingLevel={3}
              variant="headline"
              className="text-network-primary text-3xl lg:text-6xl mb-2 whitespace-nowrap pt-2"
            >
              Entre em contato
            </Heading>
            <Heading headingLevel={4} className="mb-2 text-slate-600">
              Descubra como a Point pode transformar a sua gestão!
            </Heading>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
