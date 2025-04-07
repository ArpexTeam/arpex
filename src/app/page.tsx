import ContactUsBanner from "@/components/ContactUsBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotebookContainer from "@/components/NotebookContainer";
import ProjectCard from "@/components/ProjectGrid/card";
import Questions from "@/components/Questions";
import SliderHead from "@/components/SliderHead";

export default function Home() {
  
  return (
    <div className="flex flex-col items-center w-full h-full bg-black">
      <Navbar item="home" />
      <SliderHead />
      <NotebookContainer/>
      <div className="flex flex-col  w-full max-w-[1280px] px-4">
        <span className="text-[48px] font-bold text-[#00CF78] px-4">Nossos projetos</span>
        <div className="flex justify-between  pb-2">
          <span className="text-[20px] text-[#D3D3D3] px-4">Confira alguns dos websites desenvolvidos recentemente por nós</span>
          <span className="text-[20px] text-[#D3D3D3] px-4">Conheça mais projetos</span>
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
      <ContactUsBanner/>
      <Questions />
      <Footer />
    </div>
  );
}
