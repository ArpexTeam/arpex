import headset from '../../img/Icons Atendimento.svg';
import website from '../../img/WebsiteColor1 1.svg';
import change from '../../img/Alteraçõescolor1 1.svg';
import './App.css';
import { useRef, useEffect, useState } from 'react';

function HowWork() {
    const [isVisibleC1, setIsVisibleC1] = useState(false);
    const [isVisibleC2, setIsVisibleC2] = useState(false);
    const [isVisibleC3, setIsVisibleC3] = useState(false);
    const [isVisibleC4, setIsVisibleC4] = useState(false);

    const elementRef1 = useRef(null);
    const elementRef2 = useRef(null);
    const elementRef3 = useRef(null);
    const elementRef4 = useRef(null);

    let offset = window.innerWidth <= 768 ? 200 : 50; // Define o offset com base no tamanho da tela

    useEffect(() => {
        const handleResize = () => {
            offset = window.innerWidth <= 768 ? 200 : 50; // Ajusta o offset ao redimensionar
        };

        const handleScroll = () => {
            if (elementRef1.current && elementRef2.current && elementRef3.current && elementRef4.current) {
                const rect1 = elementRef1.current.getBoundingClientRect();
                const rect2 = elementRef2.current.getBoundingClientRect();
                const rect3 = elementRef3.current.getBoundingClientRect();
                const rect4 = elementRef4.current.getBoundingClientRect();

                const windowHeight = window.innerHeight || document.documentElement.clientHeight;

                const isVisibleIf1 = rect1.top < windowHeight - offset && rect1.bottom > offset;
                const isVisibleIf2 = rect2.top < windowHeight - offset && rect2.bottom > offset;
                const isVisibleIf3 = rect3.top < windowHeight - offset && rect3.bottom > offset;
                const isVisibleIf4 = rect4.top < windowHeight - offset && rect4.bottom > offset;

                if (!isVisibleC1) {
                    setIsVisibleC1(isVisibleIf1);
                    if (isVisibleIf1) {
                        elementRef1.current.classList.add('sizeGrayLine');
                    }
                }

                if (!isVisibleC2) {
                    setIsVisibleC2(isVisibleIf2);
                    if (isVisibleIf2) {
                        elementRef2.current.classList.add('sizeGrayLine');
                    }
                }

                if (!isVisibleC3) {
                    setIsVisibleC3(isVisibleIf3);
                    if (isVisibleIf3) {
                        elementRef3.current.classList.add('sizeGrayLine');
                    }
                }

                if (!isVisibleC4) {
                    setIsVisibleC4(isVisibleIf4);
                    if (isVisibleIf4) {
                        elementRef4.current.classList.add('sizeGrayLine');
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleScroll(); // Verificação inicial

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isVisibleC1, isVisibleC2, isVisibleC3, isVisibleC4]);

    return (
        <div className="w-full bg-black pt-28 md:pt-52">
            <div className="w-full ml-auto mr-auto">
                <h1 className="text-[48px] font-['Roboto-Bold'] text-pink-rgb">Como trabalhamos</h1>

                <div ref={elementRef1} className="mt-10 w-0 transition-all overflow-hidden sm:overflow-visible duration-1000 bg-gradient-to-r from-white-rgb-02 to-black-rgb-01 h-[600px] sm:h-72 lg:h-64 xl:h-52 2xl:h-48">
                    <div className="items-center gap-12 h-[inherit] w-full justify-center lg:justify-normal lg:w-[calc(100vw-20%)] flex flex-col sm:flex-row ml-auto mr-auto left-0 right-0 sm:absolute max-w-[1280px]">
                        <img src={headset} className="w-40" />
                        <div className="text-white sm:text-left w-4/5 lg:w-1/2">
                            <h1 className="text-[40px] font-['Roboto-Bold']">BRIEFING</h1>
                            <p className="text-[20px] font-['Roboto-Light']">Após a contratação do serviço, agendamos uma reunião de briefing para juntos elaborarmos um documento que detalhe todas as necessidades do projeto. No fim dessa reunião, estabelecemos como o cliente nos fornecerá o material necessário para o site.</p>
                        </div>
                    </div>
                </div>

                <div ref={elementRef2} className="w-0 transition-all overflow-hidden sm:overflow-visible duration-1000 bg-gradient-to-l ml-auto from-white-rgb-02 to-black-rgb-01 h-[600px] sm:h-72 lg:h-64 xl:h-52 2xl:h-48">
                    <div className="items-center gap-12 h-[inherit] w-full justify-center lg:justify-end lg:w-[calc(100vw-20%)] flex flex-col sm:flex-row ml-auto mr-auto left-0 right-0 sm:absolute max-w-[1280px]">
                        <div className="text-white sm:text-right w-4/5 lg:w-1/2 order-2 sm:order-1">
                            <h1 className="text-[40px] font-['Roboto-Bold']">EXECUÇÃO</h1>
                            <p className="text-[20px] font-['Roboto-Light']">Durante a execução, utilizamos o documento de briefing e os materiais fornecidos pelo cliente para criar o site de acordo com o escopo do projeto.</p>
                        </div>
                        <img src={website} className="w-40 order-1 sm:order-2" />
                    </div>
                </div>

                <div ref={elementRef3} className="w-0 transition-all overflow-hidden sm:overflow-visible duration-1000 bg-gradient-to-r from-white-rgb-02 to-black-rgb-01 h-[600px] sm:h-72 lg:h-64 xl:h-52 2xl:h-48">
                    <div className="items-center gap-12 h-[inherit] py-4 w-full justify-center lg:justify-normal lg:w-[calc(100vw-20%)] flex flex-col sm:flex-row ml-auto mr-auto left-0 right-0 sm:absolute max-w-[1280px]">
                        <img src={change} className="w-40" />
                        <div className="text-white sm:text-left w-4/5 lg:w-1/2">
                            <h1 className="text-[40px] font-['Roboto-Bold']">ALTERAÇÕES</h1>
                            <p className="text-[20px] font-['Roboto-Light']">Processo típico em qualquer projeto, agora é a hora do cliente examinar nosso trabalho e propor as alterações necessárias.</p>
                        </div>
                    </div>
                </div>

                <div ref={elementRef4} className="w-0 transition-all overflow-hidden sm:overflow-visible duration-1000 bg-gradient-to-l ml-auto from-white-rgb-02 to-black-rgb-01 h-[600px] sm:h-72 lg:h-64 xl:h-52 2xl:h-48">
                    <div className="items-center gap-12 h-[inherit] py-4 w-full justify-center lg:justify-end lg:w-[calc(100vw-20%)] flex flex-col sm:flex-row ml-auto mr-auto left-0 right-0 sm:absolute max-w-[1280px]">
                        <div className="text-white sm:text-right w-4/5 lg:w-1/2 order-2 sm:order-1">
                            <h1 className="text-[40px] font-['Roboto-Bold']">FINALIZAÇÃO E PUBLICAÇÃO</h1>
                            <p className="text-[20px] font-['Roboto-Light']">Com a aprovação do projeto, publicamos o site no endereço final do cliente, enviamos o backup e uma planilha com os dados de acesso.</p>
                        </div>
                        <img src={website} className="w-40 order-1 sm:order-2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowWork;
