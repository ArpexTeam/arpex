import { useEffect, useMemo, useRef, useState } from 'react';
import slide1 from '../../img/Imagem Headline.jpg'



function SliderHead(){

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
          if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            const isVisibleIf = (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
              
            );
            if(isVisible == false){
                setIsVisible(isVisibleIf);
                console.log(isVisible);
                elementRef.current.style.marginLeft = "0";
                elementRef.current.style.opacity = "1";
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        // Initial check on component mount
        handleScroll();
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return(
        <section className="w-full h-[700px]">
            <img src={slide1} className='w-full h-full'/>
            <div className='absolute bg-gradient-to-r from-black-opacity-06 to-transparent h-[700px] w-full top-0'>
                <div className='relative top-48 md:top-1/3 text-white text-[25px] sm:text-[36px] text-left w-4/5 ml-auto mr-auto max-w-[1280px]'>
                <div ref={elementRef} className='w-full md:w-4/5 lg:w-3/5 2xl:w-1/2 transition-all duration-1000 -ml-44 opacity-0'>
                    <h1 className='font-["Roboto-Bold"] leading-snug'>
                        DEIXE SUA MARCA NA WEB COM UM<br/>
                        SITE PROJETADO EXCLUSIVAMENTE<br/>
                        <span className='text-pink-rgb text-[36px] sm:text-[42px]'>PARA VOCÊ.</span>
                    </h1>
                    <p className='font-["Roboto-Light"] text-[20px] mt-3'>Agência de criação de sites web, mobile e plataformas digitais para empresas, focada em inovação e resultados excepcionais.</p>
                    <a href='https://wa.me/:5519998524426' target='__blank'><button className='px-5 py-2 text-[20px] mt-4 sm:mt-0 hover:bg-black hover:border-pink-rgb hover:text-pink-rgb border-2 border-transparent font-["Roboto-Medium"] bg-pink-rgb rounded-md'>Peça um Orçamento</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderHead;