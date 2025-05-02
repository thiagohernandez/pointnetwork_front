import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("container mx-auto px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
