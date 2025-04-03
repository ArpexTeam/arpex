import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className={`flex flex-col w-full overflow-x-auto h-screen items-center justify-between`}>
            <Navbar item="about-us" />
            {children}
            <Footer/>
        </div>

    );
}
