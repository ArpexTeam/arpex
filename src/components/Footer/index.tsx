"use client"
import Image from "next/image";
import logo from "../../../public/images/logo.png"
import { useRouter } from "next/navigation";
import email from "../../../public/icons/Icon E-mail.svg"
import phone from "../../../public/icons/phone-green.svg"
import insta from "../../../public/icons/insta.svg"
import linkedin from "../../../public/icons/jam_linkedin-square.svg"
import Link from "next/link";

function Footer() {
    const route = useRouter();
    return (
        <div className=" hidden sm:flex w-full  h-[310px] py-20 bg-black px-32 justify-center items-center">
            <div className="flex w-full items-center justify-between max-w-[1280px]">
                <div className="flex flex-col justify-between text-white h-full ">
                    <Image src={logo} alt="" className="flex h-min w-[240px] pb-5" />
                    <div className="flex  ">Agência Arpex Technology @ 2023 - 2024</div>
                    <div className="flex ">Política de privacidade</div>
                </div>
                <div className="flex flex-col  h-full w-[240px] justify-center text-start">
                    <span className="pb-4 text-white text-[20px] font-bold">Informações</span>
                    <div className="flex flex-col gap-2">
                        <span onClick={() => { route.push("/") }} className="text-[#D3D3D3] cursor-pointer">Home</span>
                        <span onClick={() => { route.push("/servicos") }} className="text-[#D3D3D3] cursor-pointer">Serviços</span>
                        <span onClick={() => { route.push("/projetos") }} className="text-[#D3D3D3] cursor-pointer">Projetos</span>
                        <span onClick={() => { route.push("/about-us") }} className="text-[#D3D3D3] cursor-pointer">Sobre nós</span>
                        <span onClick={() => { route.push("/contatos") }} className="text-[#D3D3D3] cursor-pointer">Contato</span>
                    </div>

                </div>
                <div className="flex flex-col  h-full justify-start text-start">
                    <span className="pb-4 text-white text-[20px] font-bold">Contato</span>
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-3">
                                <Image src={email} alt="" />
                                <span onClick={() => { route.push("/") }} className="text-[#D3D3D3] cursor-pointer">contato@arpexsoftwares.com.br</span>
                            </div>
                            <div className="flex  gap-3 ">
                                <Image src={phone} alt="" />
                                <span onClick={() => { route.push("/") }} className="text-[#D3D3D3] cursor-pointer text-start">(19) 9 8181-2024</span>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Link href="https://www.instagram.com/arpextechnology/" target="_blank">
                                <Image src={insta} alt="" />
                            </Link>
                            <Link href="https://www.instagram.com/arpextechnology/" target="_blank">
                                <Image src={linkedin} alt="" />
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Footer;