import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        " placeholder:text-slate-400 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20  aria-invalid:border-destructive  flex field-sizing-content min-h-16 w-full rounded-md text-slate-600 bg-slate-100 border border-slate-400/25 px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
