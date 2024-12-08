import QuestionCard from '../QuestionCard';

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

function OftenQuestions(){
    return(
        <div className='w-full bg-black overflow-auto'>
        <div className="max-w-[1280px] w-4/5 ml-auto mr-auto">

        <div className='px-2 mt-28 text-white'>
        <div className=" text-left">
            <span className='text-[48px] text-[#00cf77] font-["Roboto-Bold"]'> Dúvidas frequentes</span>
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

export default OftenQuestions;