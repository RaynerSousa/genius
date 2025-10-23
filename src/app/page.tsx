'use client';

import React, { Suspense } from 'react';
import Inicio, { WhatsAppButton } from './Sessão/inicio';
import Footer4Col from '@/components/mvpblocks/footer-4col';

// Lazy loading
const Sobre = React.lazy(() => import('./Sessão/Sobre'));
const Comentario = React.lazy(() => import('./Sessão/Comentarios'));
const Funcionarios = React.lazy(() => import('./Sessão/funcionarios'));
const Contato = React.lazy(() => import('./Sessão/contato'));

export default function Home() {
  return (
    <div>
      <Inicio />

      <Suspense fallback={<div className="text-center py-10">Carregando Sobre...</div>}>
        <Sobre />
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Carregando Comentários...</div>}>
        <Comentario />  
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Carregando Funcionários...</div>}>
        <Funcionarios />
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Carregando Contato...</div>}>
        <Contato />
      </Suspense>

      <Footer4Col />
      <WhatsAppButton />
    </div>
  );
}
