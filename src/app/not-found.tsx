import { Header } from "@/components/ui/header";
import Link from "next/link";

export default async function NotFound() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-[#170E33]">
        <div className="max-w-lg text-center -mt-16">
          <div className="relative w-full h-64 isolate flex justify-center items-center">
            <h1 className="text-[232px] font-bold text-gray-400 tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] leading-normal">
              404<span className="sr-only"> - Page Not Found</span>
            </h1>
          </div>

          <h2 className="text-3xl text-slate-100 font-semibold tracking-tight mt-2">
            Página não encontrada
          </h2>
          <p className="tracking-tight text-lg text-slate-200 mt-2 mb-8">
            Parece que você flutuou para longe demais! A página que você está
            procurando não existe ou foi removida. Não se preocupe, isso
            acontece com os melhores navegadores. Às vezes, até os mais
            experientes acabam se perdendo no vasto oceano da internet.
          </p>

          <Link
            href="/"
            className="px-4 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-600/70 font-semibold tracking-tight transition-colors"
          >
            Voltar para a home
          </Link>
        </div>
      </div>
    </>
  );
}
