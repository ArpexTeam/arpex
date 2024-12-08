import WebCard from "./WebCard";
import image1 from '../../img/foguete.svg';
import image2 from '../../img/Responsivo.Color1.png';
import image3 from '../../img/Googleicons 1.png';
import image4 from '../../img/Suportepng 1.png';
import bgBackground from '../../img/background5.jpg';

function WebsiteInfo2() {

    

    return (
        <div className="relative w-full pt-20 pb-14 px-10 lg:px-0 border-t-0 border-b-0"
        style={{
            backgroundImage: `url(${bgBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover'
            
          }}>
            <div className="max-w-[1280px] ml-auto mr-auto flex text-white lg:flex-row w-4/5 gap-y-14 items-center justify-between gap-9">
           <div className="text-left w-3/5">
            <h1 className="font-['Roboto-Bold'] text-[48px]">Eleve sua marca com um site feito para impressionar.</h1>
            </div>
           <div className="w-fit text-left">
            <p className="w-fit">Uma parceria que tranforma projetos<br/> em grandes realizações</p>
           <button className="px-5 py-2 bg-[#00CF78] text-black font-['Roboto-Medium'] rounded-sm mt-5"> Faça um orçamento</button>
           </div>
           </div>
        </div>

    );
}

export default WebsiteInfo2;