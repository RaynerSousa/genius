import Image from "next/image";
import Inicio from "./Sessão/inicio";
import AboutUs1 from "@/components/mvpblocks/about-us-1";
import Footer4Col from "@/components/mvpblocks/footer-4col";
import Funcionarios from "./Sessão/funcionarios";
import Comentario from "./Sessão/Comentarios";

export default function Home() {
  return (
    <div>
      <Inicio />
      <AboutUs1 />
      <Comentario />
      <Funcionarios />
      <Footer4Col />
    </div>
     );
}
