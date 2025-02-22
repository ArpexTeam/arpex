'use client'
import ProjectGrid from "@/components/ProjectGrid";

import { useRouter } from "next/navigation";

function ContactScreen() {
    const route = useRouter();
    return (
        <div className="flex w-full h-full flex-col items-center bg-gradient-diagonal justify-center pt-10 gap-8">
            <div className="flex flex-col">
                <span className="text-[48px] font-bold text-[#00CF78] px-2">Nossos projetos</span>
                <span className="text-[20px] text-[#D3D3D3] px-2 ">Cada site com propósito, estratégia e excelência.</span>
                <div className="flex">
                    <ProjectGrid />
                </div>

            </div>
            <div className="flex  bg-[#03120C] h-44 w-full  items-center justify-center gap-4">
                <span className="flex text-[30px] text-[#32D27C] font-bold flex-wrap w-1/2">Vamos tirar seu projeto do papel! Fale conosco e inicie seu site!</span>
                <button onClick={()=>{route.push("/contatos")}} className="bg-[#32D27C] text-[27px] text-black w-80 h-16 rounded font-semibold">
                    Faça um orçamento
                </button>
            </div>
        </div>
    );
}

export default ContactScreen;