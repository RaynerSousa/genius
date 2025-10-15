import Image from "next/image";
import Inicio from "./Sessão/inicio";
import AboutUs1 from "@/components/mvpblocks/about-us-1";
import Footer4Col from "@/components/mvpblocks/footer-4col";
import Funcionarios from "./Sessão/funcionarios";
import Comentario from "./Sessão/Comentarios";
import Sobre from "./Sessão/Sobre";
import Contato from "./Sessão/contato";
export default function Home() {
  return (
    <div>
      <Inicio />
      {/* <AboutUs1 /> */}
      <Sobre/>
      <Comentario />
      <Funcionarios />
      <Contato />
      <Footer4Col />
    </div>
     );
}
