import arrow from '../../img/SETA ROLAGEM.svg';
import notebook from '../../img/Notebook.png';
import bgBackground from '../../img/bg-desenvolvimento.jpg';
import { useEffect, useRef, useState } from 'react';

function WhoAre() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleImg, setIsVisibleImg] = useState(false);
    const [isVisibleText, setIsVisibleText] = useState(false);

    const elementRef = useRef(null);
    const elementRefImg = useRef(null);
    const elementRefText = useRef(null);

    const offset = 50; // Adicione um deslocamento para ajustar quando a animação deve ser acionada

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current && elementRefImg.current && elementRefText.current) {
                const rect = elementRef.current.getBoundingClientRect();
                const rectImg = elementRefImg.current.getBoundingClientRect();
                const rectText = elementRefText.current.getBoundingClientRect();

                const isVisibleIf = (
                    rect.top + offset >= 0 &&
                    rect.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight)
                );

                const isVisibleIfImg = (
                    rectImg.top + offset >= 0 &&
                    rectImg.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight)
                );

                const isVisibleIfText = (
                    rectText.top + offset >= 0 &&
                    rectText.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight)
                );

                if (!isVisible) {
                    setIsVisible(isVisibleIf);
                    if (isVisibleIf) {
                        elementRef.current.style.height = "600px";
                    }
                }

                if (!isVisibleImg) {
                    setIsVisibleImg(isVisibleIfImg);
                    if (isVisibleIfImg) {
                        elementRefImg.current.style.left = "0";
                        elementRefImg.current.style.opacity = "1";
                    }
                }

                if (!isVisibleText) {
                    setIsVisibleText(isVisibleIfText);
                    if (isVisibleIfText) {
                        elementRefText.current.style.right = "0rem";
                        elementRefText.current.style.opacity = "1";
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Verificação inicial ao montar o componente
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible, isVisibleImg, isVisibleText]);

    return (
        <div className="w-full h-[1000px] md:h-[600px] overflow-hidden"
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${bgBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'45% center'
          }}
        >
            <div className='max-w-[1280px] ml-auto mr-auto h-full'>
            <div ref={elementRef} className="w-24 -mt-12 sm:-mt-16 h-[0] transition-all duration-1000 bg-gradient-to-b from-pink-rgb to-transparent left-0 right-0 ml-auto mr-auto absolute">
                <img src={arrow} className='ml-auto mr-auto mt-4' />
            </div>
            <div className='w-4/5 flex flex-col justify-center md:flex-row ml-auto mr-auto h-full items-center'>
                <div className='w-full order-2 md:order-2 md:w-1/2 transition-all duration-1000 -left-32 relative opacity-0' ref={elementRefImg}>
                    <img src={notebook} className='h-min ml-auto w-3/4'/>
                </div>
                <div className='text-left w-full order-1 md:order-1 md:w-1/2 transition-all duration-1000 -right-32 relative opacity-0' ref={elementRefText}>
                    <h2 className='font-["Roboto-Bold"] text-white text-[36px]'>Desenvolvimento de sites</h2><br/>
                    <h3 className='font-["Roboto-Medium"] text-white text-[26px]'>Sites personalizados, desenvolvidos para impulsionar os resultados do seu negócio</h3><br/>
                    <p className='font-["Roboto-Light"] text-[16px] text-white'>Em um mercado cada vez mais digital, um site bem planejado é mais do que um simples canal - é a porta
                        de entrada para novos clientes, o elo entre sua empresa e o público<br/><br/>

                        Criamos sites sob medida, desenvolvidos para refletir a identidade e os valores da sua marca, ao mesmo tempo
                        em que entregam uma experiência intuitiva e envolvente<br/><br/>

                        Ter um site vai além da presença online, trata-se de garantir que sua empresa seja encontrada e
                        lembrada. Nossa equipe transforma ideias em realidade com técnicas inovadoras e estratégias focadas
                        nos seus objetivos, colocando seu negócio à frente. Conte conosco para fazer do seu site um verdadeiro
                        facilitador de negócios, com uma abordagem humanizada que conecta sua marca ao cliente de forma autêntica
                        e impactante.
                    </p>
                </div> 
            </div>
            </div>
        </div>
    );
}

export default WhoAre;
