'use client';
import React from 'react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactUs2() {
  const [state, setState] = React.useState({
    name: '',
    email: '',
    message: '',
    errors: {} as Record<string, string>,
    submitting: false,
    submitted: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ ...state, submitting: true });

    // Console log only
    console.log('Form submitted:', {
      name: state.name,
      email: state.email,
      message: state.message,
    });

    setState({
      ...state,
      submitting: false,
      submitted: true,
    });
  };

  return (
    <section className="w-full max-w-screen-md px-2">
      <h2 className="mt-4 mb-5 bg-gradient-to-br from-gray-300 via-blue-300 to-gray-700 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
        Vamos entrar em contato
      </h2>
      <p className="text-muted-foreground mb-6 text-center">
        Preencha o formulário abaixo e entraremos em contato o mais breve possível.
      </p>
      <div
        className="bg-opacity-10 mx-auto mb-6 grid w-full items-start gap-12 rounded-lg border bg-white px-4 pt-10 pb-6 shadow shadow-slate-800 md:grid-cols-2 lg:px-12"
        style={{
          backgroundImage:
            'radial-gradient(164.75% 100% at 50% 0,#272f3c 0,#0b1224 48.73%)',
        }}
      >
        <form className="space-y-8 text-slate-300" onSubmit={handleSubmit}>
          <div className="space-y-4 text-lg">
            <label htmlFor="name" />
            Nome
            <input
              id="name"
              type="text"
              required
              className="hover:transition-al bg-background placeholder:text-muted-foreground flex h-10 w-full rounded-md border border-slate-700 px-3 py-2 text-sm text-black shadow-inner shadow-slate-800 outline-none file:text-sm file:font-medium hover:border-slate-400 hover:outline-none focus:border-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Digite seu nome"
              name="name"
            />
          </div>

          <div className="space-y-4 text-lg">
            <label htmlFor="email" /> Email
            <input
              id="email"
              placeholder="Digite seu e-mail"
              type="email"
              className="hover:transition-al bg-background placeholder:text-muted-foreground flex h-10 w-full rounded-md border border-slate-700 px-3 py-2 text-sm text-black shadow-inner shadow-slate-800 outline-none file:text-sm file:font-medium hover:border-slate-400 hover:outline-none focus:border-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              name="email"
              required
            />
            {state.errors && state.errors.email && (
              <p className="mt-1 text-sm text-red-500">{state.errors.email}</p>
            )}
          </div>
          <div className="space-y-4 text-lg">
            <label htmlFor="message" className="text-lg" />
            Menssagem
            <textarea
              className="bg-background ring-offset-background placeholder:text-muted-foreground mb-5 flex min-h-[100px] w-full rounded-md border border-slate-700 px-3 py-2 text-sm text-black shadow-inner shadow-slate-800 outline-none hover:border-slate-400 hover:transition-all hover:outline-none focus:border-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              id="message"
              placeholder="Digite sua mensagem"
              name="message"
            />
            {state.errors && (state.errors as any).message && (
              <p className="mt-1 text-sm text-red-500">
                {(state.errors as any).message}
              </p>
            )}
          </div>
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-slate-800 to-slate-700 py-2 text-center font-medium text-white shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] transition-all duration-300 ease-in-out hover:from-slate-700 hover:to-slate-800 hover:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? 'Enviando...' : 'Enviar'}
            <Send className="mx-2 inline h-4" />
          </button>
        </form>
        <div>
          <h3 className="mb-10 text-2xl font-semibold text-slate-300">
            Conecte-se conosco
          </h3>
          <div className="mb-12 flex gap-8">
            <Link
              prefetch={false}
              target='_blank'
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="mailto:leandroas2407@hotmail.com"
            >
              <Mail className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Envie-nos um e-mail para </p>
              <p>leandroas2407@hotmail.com</p>
            </div>
          </div>

          <div className="mb-12 flex gap-8">
            <Link
              prefetch={false}
              target='_blank'
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="https://wa.me/558896178334"
            >
              <Phone className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Ligue para nós em</p>
              <p>(88) 9617-8334</p>
            </div>
          </div>

          <div className="mb-12 flex gap-8">
            <Link
              prefetch={false}
              target='_blank'
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 px-2 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="https://www.google.com/maps/search/?api=1&query=Avenida Duque de Caxias,+1291,+SALA
          101,+Fazendinha,+Itapipoca,+CE"
            >
              <MapPin className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Localização em </p>
              <p>Avenida Duque de Caxias, 1291, SALA 101,Fazendinha,Itapipoca/CE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
