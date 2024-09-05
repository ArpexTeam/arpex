import logo from '../../img/Logo HeadLine.svg'
import linkedin from '../../img/LINKEDINNN 1.png'
import insta from '../../img/Instagramcolor1 1.png'
import email from '../../img/Icon E-mail.png'
import phone from '../../img/Vector-phone.svg'

import './footer.css'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <section className="bg-black w-full footerArea">
            <div className="ml-auto mr-auto max-w-[1280px] pb-24">
                <div className="ml-auto mr-auto flex justify-between w-4/5 flex-wrap">
                    <div className='flex flex-col w-full sm:w-1/2 md:w-1/4 text-center sm:text-left leading-8'>
                        <div className='w-fit ml-auto mr-auto sm:w-auto sm:ml-0 sm:mr-0'>
                           <Link to="/"><img src={logo} className='hover:scale-110 transition-all cursor-pointer'/></Link>
                        </div>
                        <div>
                            <p className='text-[14px] font-["Roboto-Light"] text-white mt-6'>
                                A D&B é uma empresa que se dedica à criação de sites profissionais, oferecendo 
                                serviços de design E desenvolvimentoS impactantes que atraem leads, vendem 
                                produtos e comunicam histórias.
                            </p>
                        </div>
                    </div>

                    <div className='w-full mt-14 sm:mt-0 sm:w-1/2 md:w-1/4 text-white text-left flex flex-col justify-center items-center'>
                    <div className='text-center sm:text-left'>
                        <p className='font-["Roboto-Bold"] text-[16px]'>INFORMAÇÕES DE CONTATO</p>
                        <p className='text-[14px] font-["Roboto-Light"] flex items-center mt-10'><img src={email} className='mr-4'/>contato@d&bwebsites.com.br</p>
                        <a href='https://wa.me/:5519998524426' target='__blank'><p className='text-[14px] font-["Roboto-Light"] mt-10 flex items-center hover:text-pink-rgb'><img src={phone} className='mr-4'/>(19) 99852-4426</p></a>
                    
                        <div className='flex mt-10 items-center justify-center sm:justify-start gap-4'>
                         
                            
                            <div>
                                <a href='https://www.instagram.com/debsoftwares/' target='__blank'>
                            <img className='w-8 cursor-pointer hover:rotate-[20deg] transition-all duration-300' src={insta}/>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='text-white mt-14 md:mt-0 text-center md:text-left w-full md:w-1/4 flex justify-end'>
                    <div className='w-fit'>
                    <p className='font-["Roboto-Bold"] text-[16px] w-fit ml-auto mr-auto lg:ml-0 lg:mr-0'>INSTITUCIONAL</p>
                    <ul className='list-none justify-center w-fit md:justify-start flex flex-row md:flex-col gap-4 mt-8 flex-wrap sm:flex-nowrap'>
                        <li className='hover:text-pink-rgb cursor-pointer'><Link to="/">HOME</Link></li>
                        <li className='hover:text-pink-rgb cursor-pointer'><Link to="services">SERVIÇOS</Link></li>
                        <li className='hover:text-pink-rgb cursor-pointer'><Link to="portfolio">PORTFÓLIO</Link></li>
                        <li className='hover:text-pink-rgb cursor-pointer'><Link to="/about">SOBRE NÓS</Link></li>
                        <li className='hover:text-pink-rgb cursor-pointer'><Link to="/contact">CONTATO</Link></li>

                    </ul>
                    </div>
                    </div>

                </div>
              
            </div>
            <div className='text-white w-full text-center border-t border-white py-6'>
                <p className='text-[15px] font-["Roboto-Light"]'>© 2024 - Todos os direitos reservados - D&B SOFTWARES AND BUSINESS</p>
            </div>
        </section>

    )
}

export default Footer;