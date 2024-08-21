import logo from '../../img/Logo HeadLine.svg'
import linkedin from '../../img/LINKEDINNN 1.png'
import insta from '../../img/Instagramcolor1 1.png'
import email from '../../img/Icon E-mail.png'
import './footer.css'

function Footer(){
    return(
        <section className="bg-black w-full pt-24 footerArea">
            <div className="ml-auto mr-auto max-w-[1280px] pb-24">
                <div className="ml-auto mr-auto flex justify-between w-4/5 flex-wrap">
                    <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 text-center sm:text-left leading-8'>
                        <div className='w-fit ml-auto mr-auto sm:w-auto sm:ml-0 sm:mr-0'>
                            <img src={logo}/>
                        </div>
                        <div>
                            <p className='text-[14px] font-["Roboto-Light"] text-white mt-6'>
                                A D&B é uma empresa que se dedica à criação de sites profissionais, oferecendo 
                                serviços de design E desenvolvimentoS impactantes que atraem leads, vendem 
                                produtos e comunicam histórias.
                            </p>
                        </div>
                    </div>

                    <div className='w-full mt-14 sm:mt-0 sm:w-1/2 md:w-1/3 text-white text-left flex flex-col justify-center items-center'>
                    <div className='text-center sm:text-left'>
                        <p className='font-["Roboto-Bold"] text-[16px]'>INFORMAÇÕES DE CONTATO</p>
                        <p className='text-[14px] font-["Roboto-Light"] flex items-center mt-10'><img src={email}/>contato@d&bwebsites.com.br</p>
                        <p className='text-[14px] font-["Roboto-Light"] mt-10'>(19) 9 8181-2024</p>
                    
                        <div className='flex mt-10 items-center justify-center sm:justify-start gap-4'>
                            <div>
                            <img src={linkedin}/>
                            </div>
                            
                            <div>
                            <img src={insta}/>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='text-white mt-14 md:mt-0 text-center md:text-left w-full md:w-1/3'>
                    <p className='font-["Roboto-Bold"] text-[16px]'>INSTITUCIONAL</p>
                    <ul className='list-none justify-center md:justify-start flex flex-row md:flex-col gap-4 mt-8 flex-wrap sm:flex-nowrap'>
                        <li className='hover:text-pink-rgb cursor-pointer'>HOME</li>
                        <li className='hover:text-pink-rgb cursor-pointer'>SERVIÇOS</li>
                        <li className='hover:text-pink-rgb cursor-pointer'>PORTFÓLIO</li>
                        <li className='hover:text-pink-rgb cursor-pointer'>SOBRE NÓS</li>
                        <li className='hover:text-pink-rgb cursor-pointer'>CONTATO</li>

                    </ul>

                    </div>

                </div>
              
            </div>
            <div className='text-white w-full border-t border-white py-6'>
                <p className='text-[15px] font-["Roboto-Light"]'>© 2024 - Todos os direitos reservados - D&B SOFTWARES AND BUSINESS</p>
            </div>
        </section>

    )
}

export default Footer;