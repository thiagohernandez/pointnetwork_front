import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SecondaryMainNav } from "@/components/ui/nav";
import { Menu, X, ChevronDown } from "lucide-react";

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
        className="w-[300px] bg-[#121212] text-white p-0"
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">Menu</span>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Fechar menu</span>
                </Button>
              </SheetTrigger>
            </div>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="flex flex-col space-y-1 px-4">
              <Link
                href="/quem-somos"
                className="py-3 px-2 text-sm font-medium hover:bg-purple-500/10 rounded-md"
              >
                Quem Somos
              </Link>
              <div className="py-3 px-2 text-sm font-medium">
                <div className="flex items-center justify-between">
                  <span>Soluções</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="mt-2 ml-4 flex flex-col space-y-1">
                  <Link
                    href="/solucoes/item-1"
                    className="py-2 px-2 text-sm hover:bg-purple-500/10 rounded-md"
                  >
                    Solução 1
                  </Link>
                  <Link
                    href="/solucoes/item-2"
                    className="py-2 px-2 text-sm hover:bg-purple-500/10 rounded-md"
                  >
                    Solução 2
                  </Link>
                  <Link
                    href="/solucoes/item-3"
                    className="py-2 px-2 text-sm hover:bg-purple-500/10 rounded-md"
                  >
                    Solução 3
                  </Link>
                </div>
              </div>
              <div className="py-3 px-2 text-sm font-medium">
                <div className="flex items-center justify-between">
                  <span>Produtos</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="mt-2 ml-4 flex flex-col space-y-1">
                  <Link
                    href="/produtos/item-1"
                    className="py-2 px-2 text-sm hover:bg-purple-500/10 rounded-md"
                  >
                    Produto 1
                  </Link>
                  <Link
                    href="/produtos/item-2"
                    className="py-2 px-2 text-sm hover:bg-purple-500/10 rounded-md"
                  >
                    Produto 2
                  </Link>
                  <Link
                    href="/produtos/item-3"
                    className="py-2 px-2 text-sm hover:bg-purple-500/10 rounded-md"
                  >
                    Produto 3
                  </Link>
                </div>
              </div>
              <Link
                href="/blog"
                className="py-3 px-2 text-sm font-medium hover:bg-purple-500/10 rounded-md"
              >
                Blog
              </Link>
              <Link
                href="/recursos"
                className="py-3 px-2 text-sm font-medium hover:bg-purple-500/10 rounded-md"
              >
                Recursos
              </Link>
              <Link
                href="/contato"
                className="py-3 px-2 text-sm font-medium hover:bg-purple-500/10 rounded-md"
              >
                Contato
              </Link>
            </div>
          </nav>
          <div className="p-4 border-t border-gray-800 space-y-3">
            <SecondaryMainNav />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMainNav;
