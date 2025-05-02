import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { IconFacebook, IconLinkedin, IconX } from "@/components/ui/icons";

const SociallMediaList = () => {
  return (
    <div className="flex gap-1">
      <a
        href="https://www.facebook.com/pointcondominio/info"
        className={buttonVariants({ variant: "square", size: "icon" })}
        target="_blank"
      >
        <IconFacebook />
      </a>
      <a
        href="https://twitter.com/pointcondominio"
        className={buttonVariants({ variant: "square", size: "icon" })}
        target="_blank"
      >
        <IconX />
      </a>
      <a
        href="https://www.linkedin.com/company/pointcondominio"
        className={buttonVariants({ variant: "square", size: "icon" })}
        target="_blank"
      >
        <IconLinkedin />
      </a>
    </div>
  );
};

export default SociallMediaList;
