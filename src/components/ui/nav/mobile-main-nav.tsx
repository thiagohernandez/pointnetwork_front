import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SecondaryMainNav } from "@/components/ui/nav";
import { Menu, X, ChevronDown, SquareArrowOutUpRight } from "lucide-react";
import {
  LogoPointCondominio,
  LogoPointID,
  LogoPointSaas,
} from "@/components/ui/logo";

const MobileMainNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="inline-flex xl:hidden text-white"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] bg-[#170E33] text-white p-0 border-0"
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-tighter">
                Menu
              </span>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Fechar menu</span>
                </Button>
              </SheetTrigger>
            </div>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="flex flex-col space-y-1 px-2">
              <Link
                href="/quem-somos"
                className="py-3 px-4 text-sm font-medium hover:bg-purple-500/10 rounded-md"
              >
                Quem Somos
              </Link>
              <div className="py-3 px-2 text-sm font-medium bg-amber-50/5 rounded-lg">
                <div className="flex px-2 items-center justify-between">
                  <span>Soluções</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="mt-3 px-2 py-2 flex flex-col space-y-2 bg-amber-50/5 text-slate-200 rounded-lg">
                  <Link
                    href="/solucoes/administradoras-e-sindicos-profissionais"
                    className="py-2 px-4 text-sm hover:bg-purple-500/10 rounded-md"
                  >
                    Administradoras e síndicos profissionais
                  </Link>
                  <Link
                    href="/solucoes/moradores-de-condominio"
                    className="py-2 px-4 text-sm hover:bg-purple-500/10 rounded-md"
                  >
                    Moradores de condomínio
                  </Link>
                  <Link
                    href="/solucoes/controle-de-acesso"
                    className="py-2 px-4 text-sm hover:bg-purple-500/10 rounded-md"
                  >
                    Portarias e controle de acesso
                  </Link>
                  <Link
                    href="/solucoes/gestao-financeira"
                    className="py-2 px-4 text-sm hover:bg-purple-500/10 rounded-md"
                  >
                    Gestão financeira de médias e pequenas empresas
                  </Link>
                </div>
              </div>
              <div className="py-3 px-2 text-sm font-medium bg-amber-50/5 rounded-lg">
                <div className="flex px-2 items-center justify-between">
                  <span>Produtos</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="mt-3 px-2 py-2 flex flex-col space-y-2 bg-amber-50/5 text-slate-200 rounded-lg">
                  <Link
                    href="https://pointcondominio.com.br/"
                    target="_blank"
                    className="w-full flex items-center gap-4 justify-between py-2 px-4 hover:bg-purple-500/10 rounded-md"
                  >
                    <div className="flex flex-col items-start gap-2 text-primary w-auto [&_svg]:!w-auto [&_svg]:!h-[24px] [&_svg]:!text-network-primary justify-start text-left">
                      <LogoPointCondominio />
                      <p className="text-xs font-semibold text-slate-100">
                        Gestão condominial para administradoras, síndicos
                        profissionais e moradores
                      </p>
                    </div>
                    <SquareArrowOutUpRight className="shrink-0 w-4 h-4" />
                  </Link>
                  <Link
                    href="https://pointid.com.br/"
                    target="_blank"
                    className="w-full flex items-center gap-4 justify-between py-2 px-4 hover:bg-purple-500/10 rounded-md"
                  >
                    <div className="flex flex-col items-start gap-2 text-primary w-auto [&_svg]:!w-auto [&_svg]:!h-[24px] [&_svg]:!text-slate-900 justify-start text-left">
                      <LogoPointID />
                      <p className="text-xs font-semibold text-slate-100">
                        Controle de acesso para portarias
                      </p>
                    </div>
                    <SquareArrowOutUpRight className="shrink-0 w-4 h-4" />
                  </Link>
                  <Link
                    href="https://pointsaas.com.br/"
                    target="_blank"
                    className="w-full flex items-center gap-4 justify-between py-2 px-4 hover:bg-purple-500/10 rounded-md"
                  >
                    <div className="flex flex-col items-start gap-2 text-primary w-auto [&_svg]:!w-auto [&_svg]:!h-[24px] [&_svg]:!text-saas-orange--dark justify-start text-left">
                      <LogoPointSaas />
                      <p className="text-xs font-semibold text-slate-100">
                        Gestão financeira para pequenas e médias empresas
                      </p>
                    </div>
                    <SquareArrowOutUpRight className="shrink-0 w-4 h-4" />
                  </Link>
                </div>
              </div>
              <Link
                href="/blog"
                className="py-3 px-4 text-sm font-medium hover:bg-purple-500/10 rounded-md"
              >
                Blog
              </Link>
              <Link
                href="/recursos"
                className="py-3 px-4 text-sm font-medium hover:bg-purple-500/10 rounded-md"
              >
                Recursos
              </Link>
              <Link
                href="/contato"
                className="py-3 px-4 text-sm font-medium hover:bg-purple-500/10 rounded-md"
              >
                Contato
              </Link>
            </div>
          </nav>
          <div className="p-4 border-t border-gray-800 space-y-3 [&_a]:!flex [&_a]:!w-full [&_a]:!justify-between">
            <SecondaryMainNav />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMainNav;
