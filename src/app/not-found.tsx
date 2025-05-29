import { Header } from "@/components/ui/header";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function NotFound() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-[#170E33]">
        <div className="max-w-lg text-center -mt-16">
          <div className="relative w-full h-32 isolate flex justify-center items-center">
            <h1 className="text-[132px] font-bold text-primary tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] leading-normal">
              404<span className="sr-only"> - Page Not Found</span>
            </h1>
          </div>

          <h2 className="text-3xl text-slate-100 font-semibold tracking-tight mt-2">
            Página não encontrada
          </h2>
          <p className="tracking-tight text-lg text-slate-200 mt-2 mb-8">
            A página que você está procurando não existe ou foi removida.
          </p>
          <Link
            className={cn(
              buttonVariants({ variant: "green" }),
              "py-6 !px-4 gap-3"
            )}
            href="/"
          >
            <ArrowLeft /> Voltar para a home
          </Link>
        </div>
      </div>
    </>
  );
}
