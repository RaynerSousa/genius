import { Suspense, lazy } from "react";
import GradientBarsPreview from "@/components/mvpblocks/gradient-bars-preview";

// Carregamento preguiçoso do componente pesado

export default function Inicio() {
  return (
    <div>
      <GradientBarsPreview />
    </div>
  );
}
