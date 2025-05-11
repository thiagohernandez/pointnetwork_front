import React from "react";
import { ResourceProps } from "@/types/types";
import Image from "next/image";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Heading from "@/components/ui/heading";
import { ArrowRight } from "lucide-react";

const CardEbook = ({ resourceCard }: { resourceCard: ResourceProps }) => {
  return (
    <div className="flex bg-slate-200 rounded-xl overflow-hidden p-6 gap-6">
      {resourceCard.img && (
        <Image
          src={resourceCard.img}
          alt={resourceCard.title}
          width={283}
          height={296}
          className="rounded-lg bg-[#5B21B6] h-auto flex-shrink-0 object-cover object-center"
          quality={100}
        />
      )}
      <div className="flex flex-col py-6 gap-6">
        <div className="flex flex-col gap-2">
          <h4 className="tracking-tight text-network-primary font-semibold text-sm">
            EBOOK
          </h4>
          <Heading headingLevel={3} className="text-slate-900 text-2xl order-2">
            {resourceCard.title}
          </Heading>
        </div>
        <p className="text-id-gray font-semibold tracking-tight mb-2">
          {resourceCard.description}
        </p>
        <div className="block">
          <Link
            className={cn(
              buttonVariants({ variant: "primary" }),
              "inline-flex px-6"
            )}
            href={resourceCard.slug ? `/recursos/${resourceCard.slug}` : "#"}
          >
            Baixe grátis <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardEbook;
