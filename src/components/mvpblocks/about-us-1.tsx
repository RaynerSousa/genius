"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { BorderBeam } from "@/components/ui/border-beam";
import { CardHoverEffect } from "@/components/ui/pulse-card";
import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Building,
  Rocket,
  Target,
} from "lucide-react";

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  mission?: string;
  vision?: string;
  values?: Array<{
    title: string;
    description: string;
    icon: keyof typeof iconComponents;
  }>;
  className?: string;
}

const iconComponents = {
  Users,
  Heart,
  Lightbulb,
  Globe,
  Sparkles,
  Rocket,
  Target,
};

const defaultValues: AboutUsProps["values"] = [
  {
    title: "Inovação",
    description:
      "Nós constantemente ultrapassamos limites e exploramos novas possibilidades para criar soluções de ponta.",
    icon: "Lightbulb",
  },
  {
    title: "Colaboração",
    description:
      "Acreditamos no poder do trabalho em equipe e em perspectivas diversas para alcançar resultados extraordinários.",
    icon: "Users",
  },
  {
    title: "Excelência",
    description:
      "Nós buscamos a perfeição em tudo o que fazemos, entregando consistentemente um trabalho de alta qualidade.",
    icon: "Sparkles",
  },
  {
    title: "Impacto",
    description:
      "Medimos nosso sucesso pela diferença positiva que fazemos na vida das pessoas e nos negócios.",
    icon: "Globe",
  },
];

export default function AboutUs1() {
  // ✅ Agora todos os hooks estão dentro do componente
  const aboutRef = useRef(null);
  const timelineRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  const aboutData = {
    title: "Sobre Nós",
    subtitle: "Construímos aplicações para a autonomia de sua empresa",
    mission:
      "Nossa missão é transformar a gestão de negócios por meio de tecnologia inteligente e acessível, oferecendo soluções de automação que aumentam a eficiência, reduzem custos e impulsionam o crescimento das empresas.",
    vision:
      "Nossa visão é ser referência em inovação tecnológica, tornando a automação comercial simples, poderosa e essencial para o sucesso de qualquer negócio.",
    values: defaultValues,
    className: "relative overflow-hidden py-20",
  };

  return (
    <section
      id="sobre"
      className="relative w-full overflow-hidden"
      ref={aboutRef}
    >
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(240, 100%, 50%, 0.08) 0, hsla(240, 100%, 50%, 0.04) 50%, hsla(240, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(240, 100%, 85%, 0.08) 0, hsla(240, 100%, 50%, 0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(240, 100%, 85%, 0.06) 0, hsla(240, 100%, 85%, 0.06) 80%, transparent 100%)"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {aboutData.title}
          </h1>
          <p className="text-muted-foreground mt-6 text-xl">
            {aboutData.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-16 flex items-start gap-4"
        >
          <div className="from-primary/20 to-primary/5 text-primary inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
            <Building className="h-5 w-5" />
          </div>
          <p className="text-muted-foreground text-base leading-relaxed">
            Somos uma equipe apaixonada de especialistas dedicados a fornecer
            soluções excepcionais que ajudam empresas a prosperar no cenário
            comercial. Nosso compromisso com a inovação e a qualidade nos tornou
            um parceiro confiável para organizações em todo o mundo.
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto mt-10 mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 grid gap-12 md:grid-cols-2"
          >
            {/* Missão */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="via-primary/40 from-transparent to-transparent"
              />

              <div className="from-primary/20 to-primary/5 mb-6 inline-flex aspect-square h-16 w-16 flex-1 items-center justify-center rounded-2xl bg-gradient-to-br backdrop-blur-sm">
                <Rocket className="text-primary h-8 w-8" />
              </div>

              <h2 className="from-primary/90 to-primary/70 mb-4 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                Nossa Missão
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {aboutData.mission}
              </p>
            </motion.div>

            {/* Visão */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-blue-500/40 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <Target className="h-8 w-8 text-blue-500" />
              </div>

              <h2 className="mb-4 bg-gradient-to-r from-blue-500/90 to-blue-500/70 bg-clip-text text-3xl font-bold text-transparent">
                Nossa Visão
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {aboutData.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 text-center text-2xl font-bold tracking-tight md:text-3xl"
          >
            Nossa Jornada
          </motion.h2>

          <div className="border-border/60 relative ml-4 border-l pl-8 md:ml-0 md:border-none md:pl-0">
            {[
              {
                year: "2019",
                title: "Fundada",
                description:
                  "Nossa empresa foi criada com a visão de transformar experiências digitais.",
              },
              {
                year: "2015",
                title: "Expansão global",
                description:
                  "Operações expandidas para atender clientes em mais de 20 países no mundo todo.",
              },
              {
                year: "2023",
                title: "Novos Horizontes",
                description:
                  "Lançou novas ofertas de serviços para atender às crescentes demandas do mercado.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                className="relative mb-10 md:grid md:grid-cols-5 md:gap-8"
              >
                <div className="md:col-span-1">
                  <div className="border-border bg-card absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold md:static md:h-auto md:w-auto md:rounded-none md:border-none md:bg-transparent md:text-xl">
                    {item.year}
                  </div>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-lg font-bold md:text-xl">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Valores */}
        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <h2 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Nossos Valores Fundamentais
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Os princípios que orientam tudo o que fazemos e todas as decisões
              que tomamos.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values?.map((value, index) => {
              const IconComponent = iconComponents[value.icon];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant={
                      index === 0
                        ? "purple"
                        : index === 1
                        ? "blue"
                        : index === 2
                        ? "amber"
                        : "rose"
                    }
                    glowEffect
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
