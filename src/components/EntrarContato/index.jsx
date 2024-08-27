import React, { useState } from 'react';
import QuestionCard from '../QuestionCard';

const questions = [
    {
        q: 'Qual é o custo para criar um site?',
        a: 'O custo para criar um site pode variar dependendo de vários fatores, como a quantidade de páginas, a complexidade do site e as funcionalidades que você deseja incluir. Por isso entre em contato conosco para podermos entender melhor suas necessidades.'
    },
    {
        q: 'Qual é o prazo médio para desenvolvimento de um site?',
        a: ''
    },
    {
        q: 'Vocês oferecem suporte e manutenção contínuos?',
        a: ''
    },
    {
        q: 'Vocês oferecem suporte e manutenção contínuos?',
        a: 'Depois que seu site for lançado, é importante garantir que ele esteja funcionando corretamente e recebendo atualizações regulares. Por isso oferecemos o serviços de manutenção de sites aqui na agência e esse serviço é opcional.'
    },
]

function EntrarContato() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados enviados:', formData);
    };

    return (
        <div className="relative flex-col bg-[#100F12] w-full pt-20">
            <div className="flex flex-col lg:flex-row justify-center px-32">
                <div className="flex flex-col h-full">
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-[48px] text-[#ED4264] w-4/4">Vamos tirar sua ideia do papel?</span>
                        <span className="text-[16px] text-white mb-5 w-3/5">Tempo é dinheiro. Não fique atrás dos seus concorrentes. Comece agora a elevar o nível do seu negócio.</span>
                        <span className="text-[16px] text-white w-3/5">Criamos sites modernos, profissionais e inspiradores, pensados para quem deseja se destacar e crescer no mercado digital. Não perca mais tempo, deixe-nos construir o site dos seus sonhos e leve sua empresa ao próximo nível!</span>
                        <div className="relative flex justify-center mt-5">
                            <img src="/images/foguete.png" alt="Foguete" className="relative z-0 w-3/4 h-3/4" />
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col items-center mt-7">
                    <span className="text-[#D3D3D3]">Preencha seus dados, que retornaremos em breve!</span>
                    <form className="flex flex-col min-w-[30vw] bg-[#151515] p-6 rounded-[10px] mt-4 text-[#D3D3D3] gap-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col items-start w-full px-12">
                            <label htmlFor="name" className="pl-3 pb-1 text-[14px]">Nome</label>
                            <input
                                type="text"
                                id="name"
                                className="bg-[#2A2A2A] w-full h-12 rounded-[10px] px-3 border-b-[#ED4264] border-b-2"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col items-start w-full px-12">
                            <label htmlFor="lastName" className="pl-3 pb-1 text-[14px]">Sobrenome</label>
                            <input
                                type="text"
                                id="lastName"
                                className="bg-[#2A2A2A] w-full h-12 rounded-[10px] px-3 border-b-[#ED4264] border-b-2"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col items-start w-full px-12">
                            <label htmlFor="email" className="pl-3 pb-1 text-[14px]">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                className="bg-[#2A2A2A] w-full h-12 rounded-[10px] px-3 border-b-[#ED4264] border-b-2"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col items-start w-full px-12">
                            <label htmlFor="phone" className="pl-3 pb-1 text-[14px]">Telefone com ddd</label>
                            <input
                                type="tel"
                                id="phone"
                                className="bg-[#2A2A2A] w-full h-12 rounded-[10px] px-3 border-b-[#ED4264] border-b-2"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col items-start w-full px-12">
                            <label htmlFor="needs" className="pl-3 pb-1 text-[14px]">Você precisa de...</label>
                            <input
                                type="text"
                                id="needs"
                                className="bg-[#2A2A2A] w-full h-12 rounded-[10px] px-3 border-b-[#ED4264] border-b-2"
                                value={formData.needs}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col items-start w-full px-12">
                            <label htmlFor="obs" className="pl-3 pb-1 text-[14px]">Observações</label>
                            <textarea
                                id="obs"
                                className="bg-[#2A2A2A] w-full rounded-[10px] px-3 resize-none p-2 h-32 border-b-[#ED4264] border-b-2"
                                value={formData.obs}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="flex self-center px-4 py-2 text-[18px] w-auto bg-[#ED4264] rounded-[10px]">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
            <div className='mt-10  px-2 lg:px-52 text-white'>
                <div className="mt-10">
                    <span className='text-[48px] text-[#ED4264]'> DÚVIDAS FRENQUENTES</span>
                </div>
                <div className="flex flex-col gap-5">
                    {questions.map(e => (
                        <QuestionCard question={e.q} answer={e.a} />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default EntrarContato;
