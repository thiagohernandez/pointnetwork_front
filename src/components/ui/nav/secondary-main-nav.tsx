import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { IconDoor } from "@/components/ui/icons";
import { ArrowRight } from "lucide-react";

const SecondaryMainNav = () => {
  return (
    <>
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "py-6 !px-4 gap-3 text-white !bg-transparent hover:!bg-white/10 hover:!text-white !border-white/15 hover:border-white/20"
        )}
      >
        Login <IconDoor />
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "green" }), "py-6 !px-4 gap-3")}
        href="/contato"
      >
        Fale com um consultor <ArrowRight />
      </Link>
    </>
  );
};

export default SecondaryMainNav;
