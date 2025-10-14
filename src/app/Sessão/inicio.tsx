import { Suspense, lazy } from "react";
import GradientBarsPreview from "@/components/mvpblocks/gradient-bars-preview";

// Carregamento preguiçoso do componente pesado
const Globe1 = lazy(() => import("@/components/mvpblocks/globe1"));

export default function Inicio() {
  return (
    <div>
      <Suspense fallback={
        <div className="globe-placeholder">
          {/* Placeholder simples enquanto carrega */}
          <div className="loading-spinner"></div>
          <p>Carregando globo...</p>
        </div>
      }>
        <Globe1 />
      </Suspense>
      <GradientBarsPreview />
    </div>
  );
}