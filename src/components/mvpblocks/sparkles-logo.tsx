import { SparklesCore } from "@/components/ui/sparkles";
import { TextReveal } from "@/components/ui/text-reveal";

export default function Page() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#00001b]">
      <div className="mx-auto mt-32 w-screen ">
        <div className="text-center text-3xl mt-20 text-white">
          <TextReveal className="text-5xl leading-[100%] font-semibold tracking-tighter md:-mt-40 md: mb-5">
            Bem vindo a Genius-Sistema de Automação Comercial
          </TextReveal>

          <br />

          <TextReveal className="text-rose-200 text-center md:text-4xl sm:text-3xl text-2xl  leading-tight tracking-tighter ">
            Nossa empressa ja esta a 5 anos no mercado, proporcionado qualidade
            e segurança para nossos clientes.
          </TextReveal>
        </div>
      </div>
      <div className="relative -mt-32 h-200 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#e60a64,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#c5769066] after:bg-zinc-900">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleDensity={300}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />{" "}
      </div>
    </div>
  );
}
