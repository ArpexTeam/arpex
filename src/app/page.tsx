import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectCard from "@/components/ProjectGrid/card";
import Questions from "@/components/Questions";
import SliderHead from "@/components/SliderHead";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-black">
      <Navbar item="home" />
      <SliderHead />
      <div className="flex flex-col  w-full max-w-[1280px]">
        <span className="text-[48px] font-bold text-[#00CF78]">Nossos projetos</span>
        <div className="flex justify-between  pb-2">
          <span className="text-[20px] text-[#D3D3D3]">Confira alguns dos websites desenvolvidos recentemente por nós</span>
          <span className="text-[20px] text-[#D3D3D3]">Conheça mais projetos</span>
        </div>
        <div className="flex pb-10 h-full w-full justify-center">
          <div className="grid gap-5 grid-cols-2 xl:grid-cols-3 justify-center  ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
      <div className="flex w-full h-full bg-[#03120C] justify-center ">
        <div className="flex  h-[400px] w-full max-w-[1280px]   items-center justify-between  px-8">
          <span className="flex text-[48px] text-white font-bold flex-wrap w-1/2">Aqui nascem projetos que fazem a diferença</span>
          <button className="bg-[#32D27C] text-[27px] text-black w-80 h-16 rounded font-semibold">
            Faça um orçamento
          </button>
        </div>
      </div>
      <Questions />
      <Footer />
    </div>
  );
}
