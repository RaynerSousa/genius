import React from "react";
import { Boxes } from '@/components/ui/shadcn-io/background-boxes';
import { cn } from "@/lib/utils";
export default function Sobre () {
  return (
    <div className="h-120 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Background Boxes
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Interactive grid with hover animations from shadcn.io
      </p>
    </div>
  );
};