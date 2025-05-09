import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import {
  LogoPointCondominio,
  LogoPointID,
  LogoPointSaas,
} from "@/components/ui/logo";

const DesktopMainNav = () => {
  return (
    <nav className="hidden xl:flex items-center gap-2">
      <Link
        href="/quem-somos"
        className="text-sm font-semibold text-white hover:text-purple-300 transition-colors p-2"
      >
        Quem Somos
      </Link>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="link"
            className="text-sm font-semibold text-white hover:text-purple-300 transition-colors p-2 h-auto hover:no-underline"
          >
            Soluções <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-white p-2 gap-1 max-w-sm"
        >
          <DropdownMenuItem className="font-semibold p-4 text-slate-600 hover:bg-slate-200 hover-text-slate-700 transition-all">
            <Link
              href="/solucoes/item-1"
              className="w-full flex items-center gap-2 justify-between"
            >
              Administradoras e síndicos profissionais
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold p-4 text-slate-600 hover:bg-slate-200 hover-text-slate-700 transition-all">
            <Link
              href="/solucoes/item-2"
              className="w-full flex items-center gap-2 justify-between"
            >
              Moradores de condomínio
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold p-4 text-slate-600 hover:bg-slate-200 hover-text-slate-700 transition-all">
            <Link
              href="/solucoes/item-3"
              className="w-full flex items-center gap-2 justify-between"
            >
              Portarias e controle de acesso
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold p-4 text-slate-600 hover:bg-slate-200 hover-text-slate-700 transition-all">
            <Link
              href="/solucoes/item-4"
              className="w-full flex items-center gap-2 justify-between"
            >
              Gestão financeira de médias e pequenas empresas
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="link"
            className="text-sm font-semibold text-white hover:text-purple-300 transition-colors p-2 h-auto hover:no-underline"
          >
            Produtos <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-white p-2 gap-1 max-w-sm"
        >
          <DropdownMenuItem className="font-semibold p-4 text-slate-600 hover:bg-slate-200 hover-text-slate-700 transition-all">
            <Link
              href="https://pointcondominio.com.br/"
              target="_blank"
              className="w-full flex items-center gap-4 justify-between"
            >
              <div className="flex flex-col items-start gap-2 text-primary w-auto [&_svg]:!w-auto [&_svg]:!h-[32px] [&_svg]:!text-network-primary justify-start text-left">
                <LogoPointCondominio />
                <p className="text-xs font-semibold text-slate-600">
                  Gestão condominial para administradoras, síndicos
                  profissionais e moradores
                </p>
              </div>
              <SquareArrowOutUpRight />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold p-4 text-slate-600 hover:bg-slate-200 hover-text-slate-700 transition-all">
            <Link
              href="https://pointid.com.br/"
              target="_blank"
              className="w-full flex items-center gap-4 justify-between"
            >
              <div className="flex flex-col items-start gap-2 text-primary w-auto [&_svg]:!w-auto [&_svg]:!h-[32px] [&_svg]:!text-slate-900 justify-start text-left">
                <LogoPointID />
                <p className="text-xs font-semibold text-slate-600">
                  Controle de acesso para portarias
                </p>
              </div>
              <SquareArrowOutUpRight />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold p-4 text-slate-600 hover:bg-slate-200 hover-text-slate-700 transition-all">
            <Link
              href="https://pointsaas.com.br/"
              target="_blank"
              className="w-full flex items-center gap-4 justify-between"
            >
              <div className="flex flex-col items-start gap-2 text-primary w-auto [&_svg]:!w-auto [&_svg]:!h-[32px] [&_svg]:!text-saas-orange--dark justify-start text-left">
                <LogoPointSaas />
                <p className="text-xs font-semibold text-slate-600">
                  Gestão financeira para pequenas e médias empresas
                </p>
              </div>
              <SquareArrowOutUpRight />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link
        href="/blog"
        className="text-sm font-semibold text-white hover:text-purple-300 transition-colors p-2"
      >
        Blog
      </Link>
      <Link
        href="/recursos"
        className="text-sm font-semibold text-white hover:text-purple-300 transition-colors p-2"
      >
        Recursos
      </Link>
      <Link
        href="/contato"
        className="text-sm font-semibold text-white hover:text-purple-300 transition-colors p-2"
      >
        Contato
      </Link>
    </nav>
  );
};

export default DesktopMainNav;
