import './about.css'
import pic from '../../img/Group 2.png'

function About(){
    return(
    <section className="bg-black relative top-20 h- w-full">
        <div className='max-w-[1280px] ml-auto mr-auto pt-24 pb-36'>
        <h1 className="text-white ml-auto mr-auto w-fit text-[48px] font-['Roboto-Bold'] titulo">Sobre nós</h1>


        <div className="w-full px-10 flex bg-black pt-28 flex-col lg:flex-row justify-center items-center">
            <div className='text-white w-full md:w-4/5 lg:w-1/2 text-center lg:text-left'>
            <h2 className='text-[48px] font-["Roboto-Bold"] leading-tight'>Muito mais do que uma agência!</h2>
            <p className='text-[16px] font-["Roboto-Light"] mt-10'>
                Bem-vindo à D&B Software and Business, um site voltado para criação de sites,
                 onde a paixão pela inovação e a excelência técnica se encontram. Somos uma 
                 equipe de profissionais altamente qualificados, com anos de experiência em 
                 programação e design de sites.<br/><br/> Nosso compromisso é fornecer soluções digitais
                  que não apenas atendam às necessidades dos nossos clientes, mas que também 
                  superem suas expectativas.<br/><br/> Combinamos a expertise em desenvolvimento web 
                  com um design visualmente impactante para criar sites que são ao mesmo
                   tempo funcionais e esteticamente atraentes.<br/><br/> Entendemos que cada projeto 
                   é único, e por isso, trabalhamos lado a lado com nossos clientes para 
                   garantir que cada detalhe esteja alinhado com a identidade e os objetivos da sua marca.</p>
            </div>

            <div className='mt-14 lg:mt-0 w-full md:w-3/5 lg:w-1/2 h-full'>
                <img src={pic} className='w-full h-full'/>
            </div>
        </div>
        </div>
    </section>
    )
}

export default About;