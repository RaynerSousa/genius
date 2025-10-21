"use client";
import dynamic from "next/dynamic";

const AnimatedTestimonials = dynamic(
  () =>
    import("@/components/ui/shadcn-io/animated-testimonials").then(
      (mod) => mod.AnimatedTestimonials
    ),
  {
    loading: () => <p>Carregando depoimentos...</p>,
    ssr: false, // evita problemas com window ou framer-motion no SSR
  }
);

const testimonials = [
  {
    quote:
      "O sistema transformou completamente nossa operação comercial. A atenção aos detalhes e os recursos inovadores nos deram um controle total sobre vendas, estoque e finanças. É exatamente o que nossa empresa precisava para crescer.",
    name: "Carlos Silva",
    designation: "Gerente Comercial na MaxVarejo",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
  },
  {
    quote:
      "A implementação foi perfeita e o suporte técnico é excepcional. O sistema atende todas as necessidades do nosso comércio, desde o PDV até o controle de fornecedores. Os resultados superaram todas as nossas expectativas.",
    name: "Ana Rodrigues",
    designation: "Proprietária da Rede SuperMix",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Este sistema comercial aumentou em 40% a produtividade da nossa equipe. A interface é tão intuitiva que mesmo funcionários sem experiência anterior conseguiram dominar rapidamente todas as funcionalidades.",
    name: "Roberto Santos",
    designation: "Diretor de Operações na ComércioPlus",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "O suporte técnico é robusto e sempre disponível. Em 2 anos usando o sistema, nunca ficamos sem suporte. É raro encontrar uma empresa que cumpre todas as suas promessas de suporte total ao sistema comercial.",
    name: "Fernanda Lima",
    designation: "Coordenadora de TI na Rede VarejoFácil",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
  },
  {
    quote:
      "A escalabilidade do sistema permitiu nossa expansão para 5 novas filiais sem problemas. O desempenho continua excelente mesmo com o crescimento do volume de dados. Recomendo para qualquer empresa comercial que planeja crescer.",
    name: "Paulo Oliveira",
    designation: "CEO do Grupo Comercial Brasil",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
];

export default function Comentario() {
  return <AnimatedTestimonials testimonials={testimonials} />;
}
