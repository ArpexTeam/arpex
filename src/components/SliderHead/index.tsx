"use client"
import { JSX, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

function SliderHead(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const route = useRouter();

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
        if (!isVisible) {
          setIsVisible(isVisibleIf);
          console.log(isVisible);
          elementRef.current.style.marginLeft = "0";
          elementRef.current.style.opacity = "1";
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);



  return (
    <section
      className="w-full bg-black h-full -mb-14"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('/images/backgound.png')`,
        backgroundRepeat: 'no-repeat',
        
      }}
    >

      <div className='bg-gradient-to-r from-black-opacity-06 to-transparent h-[700px] w-full '>
        <div className='relative top-48 md:top-1/3 text-white text-[25px] sm:text-[36px] text-left w-4/5 ml-auto mr-auto max-w-[1280px]'>
          <div ref={elementRef} className='w-full  md:w-4/5 lg:w-3/5 2xl:w-1/2 transition-all duration-1000 -ml-44 opacity-0'>
            <h1 className='font-["LT Renovate"] '>
              DEIXE SUA MARCA NA WEB COM UM<br />
              SITE PROJETADO EXCLUSIVAMENTE<br />
              <span className='text-[#00CF78] text-[36px] sm:text-[42px]'>PARA VOCÊ.</span>
            </h1>
            <p className=' text-[20px] mt-3'>
              Agência de criação de sites web, mobile e plataformas digitais para empresas, focada em inovação e resultados excepcionais.
            </p>
            <a onClick={() => route.push("/contatos")} target='__blank'>
              <button className='px-5 py-2 text-[20px] mt-4 sm:mt-0 bg-[#00CF78]  text-[#0B3A27] font-semibold rounded-md'>
                Faça um Orçamento
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderHead;