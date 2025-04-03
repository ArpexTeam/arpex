import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SliderHead from "@/components/SliderHead";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Navbar  item="home" />
      <SliderHead />
      <Footer/>
    </div>
  );
}
