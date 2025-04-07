import QuestionCard from "../QuestionCard";

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

function Questions() {
    return (
        <div className='flex w-full  flex-col  text-white bg-black'>
            <div className=" max-w-[1280px] self-center w-full px-4">
                <div className="mt-10">
                    <span className='text-[48px] text-[#00CF78]'> DÚVIDAS FRENQUENTES</span>
                </div>
                <div className="flex flex-col gap-5">
                    {questions.map((e, index) => (
                        <QuestionCard question={e.q} answer={e.a} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Questions;