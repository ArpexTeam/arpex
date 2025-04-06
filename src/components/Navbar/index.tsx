"use client"
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import phone from "../../../public/icons/phone.svg";
import { useRouter } from "next/navigation";


interface NavbarProps {
    item: "home" | "servicos" | "projetos" | "about-us" | "contato";
}

function Navbar({ item }: NavbarProps) {
    const route = useRouter();
    return (
        <div className="navbar  z-10 bg-black h-16 text-white px-4 sm:px-20 justify-center">
            <div className="flex w-full  max-w-[1280px]">
                <div className="navbar-start">
                    <div className="text-white w-[136px] font-bold text-lg">
                        <Image src={logo} alt="logo" />
                    </div>
                </div>

                <div className="navbar-center hidden sm:flex gap-8 text-[15px]">
                    <span onClick={() => { route.push("/") }} className={`cursor-pointer font-bold ${item === "home" ? "text-[#00CF78]" : ""}`}>Home</span>
                    <span onClick={() => { route.push("/servicos") }} className={`cursor-pointer font-bold ${item === "servicos" ? "text-[#00CF78]" : ""}`}>Serviços</span>
                    <span onClick={() => { route.push("/projetos") }} className={`cursor-pointer font-bold ${item === "projetos" ? "text-[#00CF78]" : ""}`}>Projetos</span>
                    <span onClick={() => { route.push("/about-us") }} className={`cursor-pointer font-bold ${item === "about-us" ? "text-[#00CF78]" : ""}`}>Sobre nós</span>
                    <span onClick={() => { route.push("/contatos") }} className={`cursor-pointer font-bold ${item === "contato" ? "text-[#00CF78]" : ""}`}>Contato</span>
                </div>

                <div className="sm:navbar-end hidden sm:flex rounded-md justify-end items-center gap-4">
                    <div className="flex bg-white h-5 w-5 justify-center items-center rounded-[5px]">
                        <Image src={phone} alt="Phone" />
                    </div>
                    <span className="cursor-pointer font-bold text-[15px]">(19) 9 3865-1540</span>
                </div>

                <div className="flex navbar-end sm:hidden justify-end ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow -left-40">
                            <li><a onClick={() => { route.push("/") }} className={`font-bold ${item === "home" ? "text-[#00CF78]" : ""}`}>Home</a></li>
                            <li><a onClick={() => { route.push("/servicos") }} className={`font-bold ${item === "servicos" ? "text-[#00CF78]" : ""}`}>Serviços</a></li>
                            <li><a onClick={() => { route.push("/projetos") }} className={`font-bold ${item === "projetos" ? "text-[#00CF78]" : ""}`}>Projetos</a></li>
                            <li><a onClick={() => { route.push("/about-us") }} className={`font-bold ${item === "about-us" ? "text-[#00CF78]" : ""}`}>Sobre nós</a></li>
                            <li><a onClick={() => { route.push("/contatos") }} className={`font-bold ${item === "contato" ? "text-[#00CF78]" : ""}`}>Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
