"use client";
import React from "react";
import dynamic from "next/dynamic";

// Carregamento sob demanda do componente ContactUs1
const ContactUs1 = dynamic(() => import("@/components/mvpblocks/contact-us-1"), {
  loading: () => <p>Carregando formulário de contato...</p>,
  ssr: false, // evita renderização no servidor, bom para componentes client-side
});

export default function Contato() {
  return (
    <section className="justify-center items-center flex flex-col my-20 bg-[#0b1224] min-h-screen">
      <ContactUs1 />
    </section>
  );
}
