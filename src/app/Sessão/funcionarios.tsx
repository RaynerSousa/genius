"use client";
import React from "react";
import dynamic from "next/dynamic";

// Carrega o componente Team2 sob demanda
const Team2 = dynamic(() => import("@/components/mvpblocks/team-2"), {
  loading: () => <p>Carregando equipe...</p>, // fallback temporário
  ssr: false, // evita renderização no servidor (opcional, útil para efeitos visuais)
});

export default function Funcionarios() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      <Team2 />
    </div>
  );
}
