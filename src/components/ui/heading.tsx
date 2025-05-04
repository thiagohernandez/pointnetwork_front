import React, { JSX } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const HeadingVariants = cva("font-semibold tracking-tight decoration-none", {
  variants: {
    variant: {
      default:
        "text-2xl font-semibold tracking-tight text-id-gray [&_strong]:font-semibold [&_strong]:text-id-gray-dark",
      headline: "text-sm text-secondary font-semibold tracking-tight",
      warning: "text-orange-200 dark:text-orange-200 warning",
      success: "text-green-200 dark:text-green-200",
      info: "text-purple-300 dark:text-purple-200",
      danger: "text-primary/100 dark:text-primary/100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface HeadingVariantsProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof HeadingVariants> {
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  variant?: "default" | "headline" | "warning" | "success" | "info" | "danger";
  className?: string;
}

const Heading: React.FC<HeadingVariantsProps> = ({
  className,
  variant,
  headingLevel = 3,
  children,
}) => {
  const Tag = `h${headingLevel}` as keyof JSX.IntrinsicElements;
  return React.createElement(
    Tag,
    { className: cn(HeadingVariants({ variant, className })) },
    children
  );
};

export default Heading;
