import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className={`flex flex-col w-screen h-screen overflow-x-auto items-center justify-between bg-gradient-diagonal`}>
            <Navbar item="contato" />
            {children}
            <Footer/>
        </div>

    );
}
