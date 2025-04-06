import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";
import Questions from "@/components/Questions";
import SliderHead from "@/components/SliderHead";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-black">
      <Navbar item="home" />
      {/* <SliderHead /> */}
      <ProjectGrid />
      <div className="flex  bg-[#03120C] h-44 w-full  items-center justify-center gap-4">
        <span className="flex text-[30px] text-[#32D27C] font-bold flex-wrap w-1/2">Vamos tirar seu projeto do papel! Fale conosco e inicie seu site!</span>
        <button  className="bg-[#32D27C] text-[27px] text-black w-80 h-16 rounded font-semibold">
          Faça um orçamento
        </button>
      </div>
      <Questions />
      <Footer />
    </div>
  );
}
