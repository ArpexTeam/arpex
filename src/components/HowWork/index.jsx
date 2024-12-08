import headset from '../../img/Icons Atendimento.svg';
import website from '../../img/WebsiteColor1 1.svg';
import change from '../../img/Alteraçõescolor1 1.svg';
import foneIcon from '../../img/foneIcon.svg';
import pageIcon from '../../img/pageIcon.svg';
import pagePenIcon from '../../img/pagePenIcon.svg';
import multiSquareIcon from '../../img/multiSquareIcon.svg';
import internetIcon from '../../img/internetIcon.svg';
import codeIcon from '../../img/codeIcon.svg';
import bgBackground from '../../img/background2.jpg'


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
        <div className="w-full pt-28 md:pt-52 pb-52 relative overflow-x-hidden"
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${bgBackground})`,
            backgroundRepeat: 'no-repeat',
          }}
          >
            <div className="max-w-[1280px] ml-auto mr-auto">
                <h1 className="text-[48px] font-['Roboto-Bold'] text-pink-rgb mb-28">Metodologia</h1>

                <div className='flex w-11/12 ml-auto gap-14'>
                <hr className='absolute w-full border-[#757575] max-w-[1280px] mt-10'/>
                <div className='text-white text-left w-2/12'>
                    <div className='mb-6 rounded-full bg-[#1A1A1A] border-[#00D073] border-2 w-20 h-20 flex justify-center drop-shadow-[0_0px_20px_rgba(0,208,115,1)]'>
                        <img src={foneIcon} className='w-1/2'/>
                    </div>
                    <h1 className='font-["Roboto-Medium"] text-[26px]'>Planejamento Estratégico</h1><br/>
                    <p className='font-["Roboto-Regular"] text-[14px]'>
                        Entendimento completo do seu negócio e dos objetivos do site para alinhar expectativas
                        e direcionar o projeto.
                    </p>
                </div>

                <div className='text-white text-left w-2/12'>
                    <div className='mb-6 rounded-full bg-[#1A1A1A] border-[#00D073] w-20 h-20 flex justify-center border-2 drop-shadow-[0_0px_20px_rgba(0,208,115,1)]'>
                        <img src={pageIcon} className='w-1/2'/>
                    </div>
                    <h1 className='font-["Roboto-Medium"] text-[26px]'>Estruturação do Conteúdo</h1><br/>
                    <p className='font-["Roboto-Regular"] text-[14px]'>
                        Organização lógica e clara das informações para facilitar a navegação e maximizar 
                        o impacto da mensagem.
                    </p>
                </div>

                <div className='text-white text-left w-2/12'>
                    <div className='mb-6 rounded-full bg-[#1A1A1A] border-[#00D073] w-20 h-20 flex justify-center border-2 drop-shadow-[0_0px_20px_rgba(0,208,115,1)]'>
                        <img src={pagePenIcon} className='w-1/2'/>
                    </div>
                    <h1 className='font-["Roboto-Medium"] text-[26px]'>Front-end</h1><br/>
                    <p className='font-["Roboto-Regular"] text-[14px]'>
                        Desenvolvimento de um layout atraente e alinhado com a identidade da sua marca para
                        engajar o usuário.
                    </p>
                </div>

                <div className='text-white text-left w-2/12 '>
                    <div className='mb-6 rounded-full bg-[#1A1A1A] border-[#00D073] w-20 h-20 flex justify-center border-2 drop-shadow-[0_0px_20px_rgba(0,208,115,1)]'>
                        <img src={codeIcon} className='w-1/2'/>
                    </div>
                    <h1 className='font-["Roboto-Medium"] text-[26px]'>Desenvolvimento Interativo</h1><br/>
                    <p className='font-["Roboto-Regular"] text-[14px]'>
                        Programação e implementação de funcionalidades que trazem dinamismo e usabilidade 
                        ao site.
                    </p>
                </div>

                <div className='text-white text-left w-2/12'>
                    <div className='mb-6 rounded-full bg-[#1A1A1A] border-[#00D073] w-20 h-20 flex justify-center border-2 drop-shadow-[0_0px_20px_rgba(0,208,115,1)]'>
                        <img src={multiSquareIcon} className='w-1/2'/>
                    </div>
                    <h1 className='font-["Roboto-Medium"] text-[26px]'>Validação e Testes</h1><br/>
                    <p className='font-["Roboto-Regular"] text-[14px]'>
                        Testes minuciosos para assegurar que todas as funcionalidades estejam perfeitas
                        em diferentes dispositivos e navegadores.
                    </p>
                </div>

                <div className='text-white text-left w-2/12'>
                    <div className='mb-6 rounded-full bg-[#1A1A1A] border-[#00D073] w-20 h-20 flex justify-center border-2 drop-shadow-[0_0px_20px_rgba(0,208,115,1)]'>
                        <img src={internetIcon} className='w-1/2'/>
                    </div>
                    <h1 className='font-["Roboto-Medium"] text-[26px]'>Publicação e Suporte</h1><br/>
                    <p className='font-["Roboto-Regular"] text-[14px]'>
                        Lançamento do site com todo o suporte necessário para garantir sua performance e manter a
                        qualidade ao longo do tempo.
                    </p>
                </div>
                </div>

            </div>
        </div>
    );
}

export default HowWork;
