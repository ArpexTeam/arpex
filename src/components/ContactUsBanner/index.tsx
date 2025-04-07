"use client"
import { useRouter } from "next/navigation";

function ContactUsBanner() {
    const route = useRouter();
    return (
        <div className="flex w-full h-full bg-[#03120C] justify-center ">
            <div className="flex  h-[400px] w-full max-w-[1280px]   items-center justify-between  px-8">
                <span className="flex text-[48px] text-white font-bold flex-wrap w-1/2">Aqui nascem projetos que fazem a diferença</span>
                <button onClick={()=>{route.push("/contatos")}} className="bg-[#32D27C] text-[27px] text-black w-80 h-16 rounded font-semibold">
                    Faça um orçamento
                </button>
            </div>
        </div>
    );
}

export default ContactUsBanner;