import React from 'react';
import { cn } from '@/lib/utils';

export default function Sobre() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Background alternativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="bg-primary/5 absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-3xl" />
        <div className="bg-primary/10 absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl">
            Sobre Nós
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Somos uma equipe dedicada a entregar soluções inovadoras e resultados excepcionais 
            para nossos clientes através de expertise técnica e visão estratégica.
          </p>
        </div>
      </div>
    </section>
  );
}