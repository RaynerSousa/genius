'use client';

import dynamic from 'next/dynamic';
import Globe1 from './globe1';

// Lazy loading dos componentes com Framer Motion
const GradientBars = dynamic(
  () => import('@/components/ui/gradient-bars').then((mod) => mod.GradientBars),
  { ssr: false, loading: () => <p>Carregando barras...</p> }
);

const TextReveal = dynamic(
  () => import('@/components/ui/text-reveal').then((mod) => mod.TextReveal),
  { ssr: false, loading: () => <p>Carregando texto...</p> }
);

export default function GradientBarsPreview() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      {/* Componente de barras animadas */}
      <GradientBars />

      <div className="md:-mt-50">
        <Globe1 />
      </div>

      <div>
        {/* Componente de texto animado */}
        <TextReveal className="text-foreground text-center md:text-4xl sm:text-3xl text-2xl leading-tight tracking-tighter">
          Nossa empresa já está há 5 anos no mercado, proporcionando qualidade e
          segurança para nossos clientes.
        </TextReveal>
      </div>
    </div>
  );
}
