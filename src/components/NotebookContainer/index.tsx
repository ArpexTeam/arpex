"use client"
import { JSX, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
function NotebookContainer(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

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
      className="w-full bg-black"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('/images/background2.png')`,
        backgroundRepeat: 'no-repeat',
      }}
    >

      <div className='bg-gradient-to-r from-black-opacity-06 to-transparent h-[700px] w-full -mt-16 '>
        <div className='relative top-48  text-white text-[25px] sm:text-[36px] text-left w-4/5 ml-auto mr-auto max-w-[1280px]'>
          <div ref={elementRef} className=' pt-24 mb-28 flex flex-col w-full  md:w-4/5 lg:w-3/5 2xl:w-1/2 transition-all duration-1000 -ml-44 opacity-0'>
            <span className='font-["LT Renovate"] font-bold text-[36px] '>
              Desenvolvimento de sites
            </span>
            <span className=' font-bold text-[20px] '>
              Sites personalizados, desenvolvidos para impulsionar os resultados do seu negócio.
            </span>
            <p className=' text-[16px] mt-3'>
              Em um mercado cada vez mais digital, um site bem planejado é mais do que um simples canal — é a porta de entrada para novos clientes, o elo entre sua empresa e o público.

              Criamos sites sob medida, desenvolvidos para refletir a identidade e os valores da sua marca, ao mesmo tempo em que entregam uma experiência intuitiva e envolvente.

              Ter um site vai além da presença online; trata-se de garantir que sua empresa seja encontrada e lembrada. Nossa equipe transforma ideias em realidade com técnicas inovadoras e estratégias focadas nos seus objetivos, colocando seu negócio à frente. Conte conosco para fazer do seu site um verdadeiro facilitador de negócios, com uma abordagem humanizada que conecta sua marca ao cliente de forma autêntica e impactante.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotebookContainer;