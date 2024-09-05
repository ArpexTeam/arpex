import arrow from '../../img/SETA ROLAGEM.svg';
import macBook from '../../img/MacBook Pro and iPhone 15 Pro Mockup.png';
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
        <div className="w-full bg-black h-[1000px] md:h-[600px] overflow-hidden">
            <div className='max-w-[1280px] ml-auto mr-auto h-full'>
            <div ref={elementRef} className="w-24 -mt-12 sm:-mt-16 h-[0] transition-all duration-1000 bg-gradient-to-b from-pink-rgb to-transparent left-0 right-0 ml-auto mr-auto absolute">
                <img src={arrow} className='ml-auto mr-auto mt-4' />
            </div>
            <div className='w-4/5 flex flex-col justify-center md:flex-row ml-auto mr-auto h-full items-center'>
                <div className='w-full order-2 md:order-1 md:w-1/2 transition-all duration-1000 -left-32 relative opacity-0' ref={elementRefImg}>
                    <img src={macBook} className='h-min'/>
                </div>
                <div className='text-left w-full order-1 md:order-2 md:w-1/2 transition-all duration-1000 -right-32 relative opacity-0' ref={elementRefText}>
                    <h1 className='font-["Roboto-Bold"] text-pink-rgb text-[48px]'>Quem Somos?</h1>
                    <p className='font-["Roboto-Light"] text-[20px] ml-12 text-white'>Somos uma agência de criação de sites dedicada a transformar suas ideias em realidade digital. Com uma equipe experiente e apaixonada pelo que faz, focamos em oferecer soluções personalizadas para que o seu site se destaque no mercado.</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default WhoAre;
