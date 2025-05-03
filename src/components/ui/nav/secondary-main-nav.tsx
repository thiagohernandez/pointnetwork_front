import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { IconDoor } from "@/components/ui/icons";
import { ArrowRight } from "lucide-react";

const SecondaryMainNav = () => {
  return (
    <>
      <Link href="/login" className={buttonVariants({ variant: "outline" })}>
        Login <IconDoor />
      </Link>
      <Link className={buttonVariants({ variant: "default" })} href="/contato">
        Fale com um consultor <ArrowRight />
      </Link>
    </>
  );
};

export default SecondaryMainNav;
