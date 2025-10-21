'use client';

import dynamic from 'next/dynamic';

// Carregamento dinâmico do Earth
const Earth = dynamic(() => import('@/components/ui/globe'), { ssr: false });

export default function Globe1() {
  return (
    <div className="bg-background flex flex-col items-center justify-center overflow-hidden">
      <article className="border-border relative mx-auto my-8 max-w-[500px] rounded-xl p-5 text-center">
        <div className="relative z-10">
          <h1 className="text-3xl leading-[100%] font-semibold tracking-tighter">
            Bem vindo a Genius-Sistema de Automação Comercial
          </h1>
          <Earth
            // baseColor={[1, 0, 0.3]}
            markerColor={[1, 0, 0.33]}
            glowColor={[0.1, 0.3, 1]}
          />
        </div>
      </article>
    </div>
  );
}
