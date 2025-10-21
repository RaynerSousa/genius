"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

// Lazy load do AboutUs1
const AboutUs1 = dynamic(
  () => import("@/components/mvpblocks/about-us-1"),
  {
    loading: () => (
      <div className="text-center py-20 text-gray-500">
        Carregando seção Sobre Nós...
      </div>
    ),
    ssr: false, // desativa renderização no servidor
  }
);

export default function Sobre() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (inView && !loaded) {
      setLoaded(true);
    }
  }, [inView, loaded]);

  return (
    <section ref={ref}>
      {loaded ? <AboutUs1 /> : <p className="text-center py-20 text-gray-500">
        Seção Sobre Nós será carregada em breve...
      </p>}
    </section>
  );
}
