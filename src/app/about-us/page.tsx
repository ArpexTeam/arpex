"use client"
import Image from "next/image";
import formas from "../../../public/icons/Formas.svg"
import aboutus from "../../../public/images/aboutusarpex 1.png"
import { useRouter } from "next/navigation";
function ContactScreen() {
    const route = useRouter();
    return (
        <div className="flex flex-col w-full h-auto">
            <div className="flex w-full h-fit justify-center items-center bg-[#03120C]  py-10">
                <div className="flex w-full justify-between items-center max-w-[1280px]">
                    <span className="text-white text-[60px] w-[600px] ">Muito mais do que uma agência!</span>
                    <Image src={formas} alt="" className="w-[400px]" />
                </div>
            </div>
            <div className="flex h-full w-full bg-gradient-diagonal py-16 justify-center gap-44 items-center">
                <div className="flex w-full justify-between items-center max-w-[1280px]">
                    <div className="flex flex-col gap-5 text-white w-[600px] ">
                        <span className="text-[36px]" >Um pouco sobre nós</span>
                        <span className="text-[15px]">Bem-vindo à Arpex Technology! Somos uma equipe apaixonada por inovação e excelência, dedicada a transformar ideias em sites funcionais e esteticamente impactantes. </span>
                        <span className="text-[15px]">Combinamos nossa expertise técnica com atenção cuidadosa às necessidades de cada cliente, criando soluções que superam expectativas e refletem a essência de cada marca.</span>
                        <span className="text-[15px]">Valorizamos a confiança e a proximidade com nossos clientes, trabalhando lado a lado para garantir que cada detalhe do projeto seja exatamente como você imagina.</span>
                        <button onClick={() => { route.push("/contatos") }} className="bg-[#32D27C] text-[27px] text-black w-80 h-16 rounded font-semibold">
                            Faça um orçamento
                        </button>
                    </div>
                    <Image src={aboutus} alt="" width={580} height={487} className="h-fit" />
                </div>
            </div>
        </div>
    );
}

export default ContactScreen;