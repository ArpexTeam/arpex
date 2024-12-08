import React, { useRef, useState } from 'react';
import multiplataform from '../../img/multiplataformImg.png';
import emailjs from 'emailjs-com';
import bgBackground from '../../img/background3.jpg';



function EntrarContato() {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        needs: '',
        obs: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
    const formatNumber = (e) => {
        let input = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
    
        if (input.length === 0) {
            setFormData((v) => ({
                ...v,
                phone: '',
            }));
            return;
        }
    
        // Adds formatting for the Brazilian phone number
        if (input.length <= 2) {
            input = `(${input}`;
        } else if (input.length <= 6) {
            input = `(${input.slice(0, 2)}) ${input.slice(2)}`;
        } else if (input.length <= 10) {
            input = `(${input.slice(0, 2)}) ${input.slice(2, 6)}-${input.slice(6)}`;
        } else {
            input = `(${input.slice(0, 2)}) ${input.slice(2, 7)}-${input.slice(7, 11)}`;
        }
    
        setFormData((v) => ({
            ...v,
            phone: input,
        }));
    };
    


    return (
        <div className="relative flex-col w-full pt-48 pb-48"
        style={{
            backgroundSize:'cover',
            backgroundImage: `url(${bgBackground})`,
            backgroundRepeat: 'no-repeat',
          }}>
            <div className='max-w-[1280px] ml-auto mr-auto'>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                <div className="flex flex-col h-full w-4/5 lg:w-1/2">
                    <div className="flex flex-col justify-center items-center text-left">
                        <span className="text-[48px] text-white w-4/5 font-['Roboto-Bold'] leading-[52px] text-left">Design responsivo</span><br/>
                        <span className="text-[16px] text-white mb-5 w-4/5 font-['Roboto-Light'] leading-[38px]">Garanta que seu site ofereça uma navegação impecável em qualquer dispositivo com um design responsivo que se ajusta a todas as telas</span>
                        <span className="text-[16px] text-white mb-5 w-4/5 font-['Roboto-Light'] leading-[38px]">Nãose preocupe com o tipo de aparelho usado para acessar seu site, com um sistema responsivo, sua página se ajusta de forma ideal ao tamanho
                        da tela, proporcionando uma usabilidade excepcional em qualquer plataforma.</span>
                        <span className="text-[16px] text-white w-4/5 font-['Roboto-Light'] leading-[38px]">Além de ser favorecido pelos mecanismos de busca, um design responsivo melhora a performance e a velocidade de carregamento, garantindo uma única aplicação que se adapta perfeitamente a cada dispositivo.</span>
                
                    </div>
                </div>
                <div className="relative flex justify-center mt-5">
                            <img src={multiplataform} alt="Foguete" className="relative z-0 w-3/4 h-3/4" />
                        </div>

            </div>
  
            </div>
        </div>
    );
}

export default EntrarContato;
