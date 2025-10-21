import Earth from '@/components/ui/globe';

export default function Globe1() {
  return (
    <>
      <div className="bg-background flex flex-col items-center justify-center overflow-hidden">
        <article className="border-border relative mx-auto my-8 max-w-[500px] rounded-xl  p-5 text-center">
          <div className="relative z-10">
            <h1 className="text-3xl leading-[100%] font-semibold tracking-tighter">
            Bem vindo a Genius-Sistema de Automação Comercial
            </h1>
            {/* Normalized RGB values i.e (RGB or color / 255) */}
            <Earth
              // baseColor={[1, 0, 0.3]}
               markerColor={[1, 0, 0.33]}
              glowColor={[0.1, 0.3, 1]}
            />
          </div>
        </article>
      </div>
    </>
  );
}
