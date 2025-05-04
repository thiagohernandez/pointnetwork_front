import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ourSolutionsCardsData } from "@/data/our-solutions-cards";

interface SolucaoCardProps {
  icon: React.ReactNode;
  id: string;
  title: string;
  desc: string;
  url: string;
  variant?: string;
}

const SolucaoCard = ({
  icon,
  id,
  title,
  desc,
  url,
  variant,
}: SolucaoCardProps) => {
  return (
    <Link href={url} className={`card-solution ${variant} flex rounded-3xl`}>
      <div className={`p-8 flex flex-col h-full relative z-[2]`}>
        <div className={`mb-24 [&_svg]:w-auto [&_svg]:h-[32px] icon`}>
          {icon}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight mb-4">{title}</h3>
        <p className="mb-8 flex-grow text-base tracking-tight">{desc}</p>
        <ArrowRight className="h-5 w-5" />
      </div>
    </Link>
  );
};

export function OurSolutionsCards() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-xl text-slate-600 font-semibold tracking-tight mb-8">
          Nossas soluções
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ourSolutionsCardsData.map((item) => (
            <SolucaoCard
              key={item.id}
              id={item.id}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              url={item.url}
              variant={item.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
