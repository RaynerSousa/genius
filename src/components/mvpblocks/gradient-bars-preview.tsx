"use client";
import { GradientBars } from '@/components/ui/gradient-bars';
import { TextReveal } from '@/components/ui/text-reveal';


export default function GradientBarsPreview() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center -mt-90">
      <GradientBars />
      <TextReveal className="text-foreground text-center text-4xl">
        Nossa empressa ja esta a 5 anos no mercado, proporcionado qualidade e segurança para nossos clientes. 
      </TextReveal>
    </div>
  );
}
