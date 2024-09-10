import React, { useRef, useState } from 'react';
import QuestionCard from '../QuestionCard';
import rocket from '../../img/foguete.png';
import emailjs from 'emailjs-com';


const questions = [
    {
        id:'1',
        q: 'Qual é o custo para criar um site?',
        a: 'O custo para criar um site pode variar dependendo de vários fatores, como a quantidade de páginas, a complexidade do site e as funcionalidades que você deseja incluir. Por isso entre em contato conosco para podermos entender melhor suas necessidades.'
    },
    {
        id:'2',
        q: 'Qual é o prazo médio para desenvolvimento de um site?',
        a: 'O prazo médio para o desenvolvimento de um site pode variar de acordo com sua complexidade, o número de páginas e as funcionalidades desejadas. Normalmente, um site institucional pode ser concluído em algumas semanas, enquanto projetos mais complexos, como lojas virtuais ou portais personalizados, podem levar alguns meses. Porém o diferencial de nossa empresa é a agilidade, entregando em um prazo menor do que o resto do mercado. Entre em contato conosco para uma estimativa personalizada'
    },
    {
        id:'3',
        q: 'Quais são as etapas envolvidas no desenvolvimento de um site?',
        a: 'O desenvolvimento de um site envolve várias etapas essenciais, desde a definição dos objetivos e o planejamento do design até a codificação, testes e lançamento. Cada fase é cuidadosamente planejada para garantir que o site atenda às suas necessidades específicas e ofereça uma experiência de usuário excepcional.'
    },
    {
        id:'4',
        q: 'Vocês oferecem suporte e manutenção contínuos?',
        a: 'Depois que seu site for lançado, é importante garantir que ele esteja funcionando corretamente e recebendo atualizações regulares. Por isso oferecemos o serviços de manutenção de sites aqui na agência e esse serviço é opcional.'
    },
]


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
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
    // Send email using EmailJS
    emailjs.sendForm('service_s1o0txb', 'template_lwwcs0j', form.current, "3LMwgby-wb7Qm4GSh" )
      .then(function(response) {
        alert('Email enviado com sucesso!');
      }, function(error) {
        alert('Falha ao enviar email. Tente novamente.');
        console.log('FAILED...', error);
      });

};

    return (
        <div className="relative flex-col bg-[#100F12] w-full pt-48 pb-48">
            <div className='max-w-[1280px] ml-auto mr-auto'>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                <div className="flex flex-col h-full w-4/5 lg:w-1/2">
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-[48px] text-[#ED4264] w-4/4 font-['Roboto-Bold'] leading-[52px]">Vamos tirar sua ideia do<br/> papel?</span><br/>
                        <span className="text-[16px] text-white mb-5 w-4/5 font-['Roboto-Light'] leading-[38px]">Tempo é dinheiro. Não fique atrás dos seus concorrentes. Comece agora a elevar o nível do seu negócio.</span>
                        <span className="text-[16px] text-white w-4/5 font-['Roboto-Light'] leading-[38px]">Criamos sites modernos, profissionais e inspiradores, pensados para quem deseja se destacar e crescer no mercado digital. Não perca mais tempo, deixe-nos construir o site dos seus sonhos e leve sua empresa ao próximo nível!</span>
                        <div className="relative flex justify-center mt-5">
                            <img src={rocket} alt="Foguete" className="relative z-0 w-3/4 h-3/4" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-7 w-4/5 lg:w-1/2">
                    <span className="text-[#D3D3D3]">Preencha seus dados, que retornaremos em breve!</span>
                    <form ref={form} className="flex flex-col min-w-[30vw] w-10/12 bg-[#151515] rounded-[10px] mt-4 text-[#D3D3D3] gap-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col items-start w-full px-6">
                            <label htmlFor="name" className="pl-3 pb-1 text-[14px]">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name='from_name'
                                className="focus:outline-none focus:border-gray-400 focus:border-2 bg-[#2A2A2A] w-full h-12 rounded-[10px] px-3 border-b-[#ED4264] border-b-2"
                                value={formData.name}
                                onChange={handleChange}
                                maxLength="50"
                            />
                        </div>
                        <div className="flex flex-col items-start w-full px-6">
                            <label htmlFor="lastName" className="pl-3 pb-1 text-[14px]">Sobrenome</label>
                            <input
                                type="text"
                                id="lastName"
                                name='from_lastName'
                                className="focus:outline-none focus:border-gray-400 focus:border-2 bg-[#2A2A2A] w-full h-12 rounded-[10px] px-3 border-b-[#ED4264] border-b-2"
                                value={formData.lastName}
                                onChange={handleChange}
                                maxLength="50"
                            />
                        </div>
                        <div className="flex flex-col items-start w-full px-6">
                            <label htmlFor="email" className="pl-3 pb-1 text-[14px]">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name='from_email'
                                className="focus:outline-none focus:border-gray-400 focus:border-2 bg-[#2A2A2A] w-full h-12 rounded-[10px] px-3 border-b-[#ED4264] border-b-2"
                                value={formData.email}
                                onChange={handleChange}
                                maxLength="60"
                            />
                        </div>
                        <div className="flex flex-col items-start w-full px-6">
                            <label htmlFor="phone" className="pl-3 pb-1 text-[14px]">Telefone com DDD</label>
                            <input
                                type="tel"
                                id="phone"
                                name='from_phone'
                                className="focus:outline-none focus:border-gray-400 focus:border-2 bg-[#2A2A2A] w-full h-12 rounded-[10px] px-3 border-b-[#ED4264] border-b-2"
                                value={formData.phone}
                                onChange={formatNumber}
                                maxLength="15"
                            />
                        </div>
                        <div className="flex flex-col items-start w-full px-6">
                            <label htmlFor="needs" className="pl-3 pb-1 text-[14px]">Você precisa de...</label>
                            <input
                                type="text"
                                id="needs"
                                name='from_needs'
                                className="focus:outline-none focus:border-gray-400 focus:border-2 bg-[#2A2A2A] w-full h-12 rounded-[10px] px-3 border-b-[#ED4264] border-b-2"
                                value={formData.needs}
                                onChange={handleChange}
                                maxLength="65"
                            />
                        </div>
                        <div className="flex flex-col items-start w-full px-6">
                            <label htmlFor="obs" className="pl-3 pb-1 text-[14px]">Observações</label>
                            <textarea
                                id="obs"
                                name='from_obs'
                                className="focus:outline-none focus:border-gray-400 focus:border-2 bg-[#2A2A2A] w-full rounded-[10px] px-3 resize-none p-2 h-32 border-b-[#ED4264] border-b-2"
                                value={formData.obs}
                                onChange={handleChange}
                                maxLength="150"
                            />
                        </div>
                        <button type="submit" className="flex self-center px-8 font-['Roboto-Medium'] py-1 text-[18px] w-auto hover:bg-transparent border-2 border-pink-rgb hover:text-pink-rgb bg-pink-rgb rounded-[10px]">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
            <div className='mt-10  px-2 lg:px-52 text-white'>
                <div className="mt-36">
                    <span className='text-[48px] text-[#ED4264] font-["Roboto-Bold"]'> Dúvidas frequentes</span>
                </div>
                <div className="flex flex-col gap-10 py-16">
                    {questions.map(e => (
                        <QuestionCard id={e.id} question={e.q} answer={e.a} />
                    ))}

                </div>
            </div>
            </div>
        </div>
    );
}

export default EntrarContato;
