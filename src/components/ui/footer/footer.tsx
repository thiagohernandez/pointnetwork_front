import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconMail, IconPhone, IconWhatsApp } from "@/components/ui/icons";
import SociallMediaList from "@/components/ui/social-media-list/social-media-list";
import Container from "@/components/ui/container";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className="bg-[#1E2328] w-full pt-16">
      <div className="w-full p-4 xl:p-8">
        <div className="w-full bg-id-gray-dark rounded-2xl">
          <div className="w-full py-4 px-4">
            <Container className="pt-24">
              <Image
                src="/logotipo-point-condominio-color.svg"
                width={230}
                height={52}
                alt="PointNetwork"
              />
              <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-24 mt-12">
                <div className="flex flex-col">
                  <address className="mb-6 tracking-tight text-id-gray-base text-sm not-italic">
                    Rua Treze de Maio, 235 - Centro
                    <br />
                    Mogi Mirim - SP
                    <br />
                    CEP: 13800-051
                  </address>
                  <div className="mt-2 mb-8 flex flex-col gap-2">
                    <Link
                      className="flex py-1 gap-2 items-center font-semibold tracking-tight text-primary hover:text-white transition-colors text-sm"
                      href="tel:+551935496041"
                    >
                      <IconPhone />{" "}
                      <span>
                        <small>(19)</small> 3549-6041
                      </span>
                    </Link>
                    <Link
                      className="flex py-1 gap-2 items-center font-semibold tracking-tight text-primary hover:text-white transition-colors text-sm"
                      href="tel:+551935496042"
                    >
                      <IconPhone />{" "}
                      <span>
                        <small>(19)</small> 3549-6042
                      </span>
                    </Link>
                    <Link
                      className="flex py-1 gap-2 items-center font-semibold tracking-tight text-primary hover:text-white transition-colors text-sm"
                      href="https://wa.me/+5519989937210?text=Ol%C3%A1%20acessei%20o%20site%2pointid.com.br%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                    >
                      <span className="inline-flex max-w-[17px]">
                        <IconWhatsApp />
                      </span>{" "}
                      <span>
                        <small>(19)</small> 98993-7210
                      </span>
                    </Link>
                    <Link
                      className="flex py-1 gap-2 items-center font-semibold tracking-tight text-primary hover:text-white transition-colors text-sm"
                      href="mailto:contato@pointnetwork.com.br"
                    >
                      <IconMail /> contato@pointnetwork.com.br
                    </Link>
                  </div>
                  <SociallMediaList />
                </div>
                <div className="flex flex-col">
                  <h4 className="uppercase font-semibold text-[13px] text-id-gray mb-4">
                    Institucional
                  </h4>
                  <ul className="flex flex-col flex-wrap gap-1">
                    <li>
                      <Link
                        href="/quem-somos"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                      >
                        Sobre nós
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/quem-somos#transparencia"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                      >
                        Transparência
                      </Link>
                    </li>
                    {/* <li>
                      <a
                        href="/blog"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                      >
                        Blog
                      </a>
                    </li> */}
                    <li>
                      <Link
                        href="/contato"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                        target="_blank"
                      >
                        Contato
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h4 className="uppercase font-semibold text-[13px] text-id-gray mb-4">
                    Produtos
                  </h4>
                  <ul className="flex flex-col flex-wrap gap-1">
                    <li>
                      <Link
                        href="https://www.pointcondominio.com.br/"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                        target="_blank"
                      >
                        Point Condomínio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.pointcondominio.com.br/point-saas"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                        target="_blank"
                      >
                        Point SaaS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.pointid.com.br"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                        target="_blank"
                      >
                        Point ID
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="flex flex-col">
                  <h4 className="uppercase font-semibold text-[13px] text-id-gray mb-4">
                    Serviços
                  </h4>
                  <ul className="flex flex-col flex-wrap gap-1">
                    <li>
                      <a
                        href="https://www.pointcondominio.com.br/recursos-adm-gestores"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                      >
                        Conta digital
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.pointcondominio.com.br/recursos-adm-gestores"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                      >
                        Boleto digital
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.pointcondominio.com.br/recursos-adm-gestores"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                      >
                        Receber em cartão de crédito
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.pointcondominio.com.br/recursos-adm-gestores"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                      >
                        Parcelamento com cartão de crédito
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.pointcondominio.com.br/recursos-adm-gestores"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                      >
                        Seguro condominial
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.pointcondominio.com.br/recursos-adm-gestores"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                      >
                        Crédito para condomínio
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.pointcondominio.com.br/recursos-adm-gestores"
                        className="inline-flex font-semibold tracking-tight text-primary no-underline text-sm hover:text-white py-1"
                      >
                        VAN & API Bancária
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="flex w-full gap-6 items-center py-16">
                <Image
                  src="/godaddy-verified.jpg"
                  width={248}
                  height={54}
                  alt="GoDaddy - Certificate"
                />
                <Image
                  src="/SSL-stamp.png"
                  width={64}
                  height={28}
                  alt="SSL - Certificate"
                />
              </div>
            </Container>
          </div>
        </div>
      </div>
      <div className="w-full py-8 px-8 bg-black">
        <Container>
          <div className="w-full flex flex-col md:flex-row gap-2 items-center mx-auto justify-between">
            <div className="font-semibold tracking-tight text-[13px] text-id-gray-base">
              PointNetwork © {Year}
            </div>
            <div className="flex gap-2 font-semibold tracking-tight text-[13px] text-id-gray-base">
              <Link
                className="text-primary transition-colors hover:text-white tracking-tight"
                href="https://www.pointcondominio.com.br/paginas/politica-de-privacidade"
              >
                Política de Privacidade
              </Link>
              |
              <Link
                className="text-primary transition-colors hover:text-white tracking-tight"
                href="https://www.pointcondominio.com.br/politica-de-cookies"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
