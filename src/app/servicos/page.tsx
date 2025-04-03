import Image from "next/image";
import notebook from "../../../public/icons/Vector-5.svg"
import cart from "../../../public/icons/Vector-2.svg"
import cube from "../../../public/icons/Vector-4.svg"
import grid from "../../../public/icons/Vector-3.svg"

function ContactScreen() {
    return (
        <div className="flex w-full h-full flex-col items-center bg-gradient-diagonal">
            <div className="flex flex-col">
                <div className="flex flex-col w-auto   py-10">
                    <span className="text-[48px] font-bold text-[#00CF78] px-2">Serviços</span>
                    <span className="text-[20px] text-[#D3D3D3] px-2 ">Oferecemos soluções criativas para levar seu site ao próximo nível!</span>
                </div>
                <div className="flex flex-col gap-5 w-min h-full  pb-10">
                    <div className="flex gap-5">
                        <div className=" py-5 px-7 relative flex flex-col h-[300px] min-w-[537px] bg-[#D9D9D9] bg-opacity-5 rounded-md border-[2px] border-[#686868] border-opacity-2">
                            <div className="relative w-fit flex opacity-100 bg-[#ADADAD] bg-opacity-10 p-3 rounded-lg">
                                <Image src={notebook} alt="" />
                            </div>
                            <span className="text-white text-[20px] mt-10">Desenvolvimento de Sites Personalizados</span>
                            <span className="text-white text-[16px] mt-3">Criamos sites sob medida que refletem a essência da sua marca, oferecendo uma experiência única e envolvente para seus usuários.</span>
                        </div>
                        <div className=" py-5 px-7 relative flex flex-col h-[300px] min-w-[537px] bg-[#D9D9D9] bg-opacity-5 rounded-md border-[2px] border-[#686868] border-opacity-2">
                            <div className="relative w-fit flex opacity-100 bg-[#ADADAD] bg-opacity-10 p-3 rounded-lg">
                                <Image src={cart} alt="" />
                            </div>
                            <span className="text-white text-[20px] mt-10">Desenvolvimento de Sites Personalizados</span>
                            <span className="text-white text-[16px] mt-3">Criamos sites sob medida que refletem a essência da sua marca, oferecendo uma experiência única e envolvente para seus usuários.</span>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className=" py-5 px-7 relative flex flex-col h-[300px] min-w-[537px] bg-[#D9D9D9] bg-opacity-5 rounded-md border-[2px] border-[#686868] border-opacity-2">
                            <div className="relative w-fit flex opacity-100 bg-[#ADADAD] bg-opacity-10 p-3 rounded-lg">
                                <Image src={cube} alt="" />
                            </div>
                            <span className="text-white text-[20px] mt-10">Desenvolvimento de Sites Personalizados</span>
                            <span className="text-white text-[16px] mt-3">Criamos sites sob medida que refletem a essência da sua marca, oferecendo uma experiência única e envolvente para seus usuários.</span>
                        </div>
                        <div className=" py-5 px-7 relative flex flex-col h-[300px] min-w-[537px] bg-[#D9D9D9] bg-opacity-5 rounded-md border-[2px] border-[#686868] border-opacity-2">
                            <div className="relative w-fit flex opacity-100 bg-[#ADADAD] bg-opacity-10 p-3 rounded-lg">
                                <Image src={grid} alt="" />
                            </div>
                            <span className="text-white text-[20px] mt-10">Desenvolvimento de Sites Personalizados</span>
                            <span className="text-white text-[16px] mt-3">Criamos sites sob medida que refletem a essência da sua marca, oferecendo uma experiência única e envolvente para seus usuários.</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ContactScreen;