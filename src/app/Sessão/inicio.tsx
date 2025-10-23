"use client";
import React from "react";
import dynamic from "next/dynamic";

// Importação sob demanda (lazy loading)
const GradientBarsPreview = dynamic(
  () => import("@/components/mvpblocks/gradient-bars-preview"),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false, // desativa renderização no servidor, ideal para animações
  }
);

const Page = dynamic(() => import("@/components/mvpblocks/sparkles-logo"), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
});

export default function Inicio() {
  return (
    <div className="relative w-full min-h-screen">
      <GradientBarsPreview />
      {/* Descomente se quiser exibir */}
      {/* <Page /> */}
      <WhatsAppButton />
    </div>
  );
}

export function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="558896178334" // número no formato internacional
      accountName="Genius - Sistema de Automação Comercial"
      chatMessage="Olá! 👋 Como posso te ajudar?"
      placeholder="Digite sua mensagem..."
      notification
      notificationSound
      avatar="/logo.webp" // opcional, se quiser seu logotipo
    />
  );
}
import { FloatingWhatsApp } from "react-floating-whatsapp";
