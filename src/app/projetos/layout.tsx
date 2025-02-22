import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`flex flex-col items-center justify-between w-full h-full`}>
            <Navbar item="projetos" />
            {children}
            <Footer />
        </div>
    );
}
