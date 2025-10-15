"use client";
import { GradientBars } from "@/components/ui/gradient-bars";
import { TextReveal } from "@/components/ui/text-reveal";
import Globe1 from "./globe1";

export default function GradientBarsPreview() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center ">
      <GradientBars />
      <div className="md:-mt-50">
        <Globe1 />
      </div>
      <div className="">
        <TextReveal className="text-foreground text-center md:text-4xl sm:text-3xl text-2xl  leading-tight tracking-tighter ">
          Nossa empressa ja esta a 5 anos no mercado, proporcionado qualidade e
          segurança para nossos clientes.
        </TextReveal>
      </div>
    </div>
  );
}
