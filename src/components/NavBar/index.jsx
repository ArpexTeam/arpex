import { useState } from 'react'
import logo from '../../img/LogoArpex.png'
import './App.css'
import { Link } from 'react-router-dom'
import telephone from '../../img/telephoneIcon.svg'

function NavBar(){

    const [navBarMobile, setNavBarMobile] = useState(false)

    function expandNav(){
        setNavBarMobile(!navBarMobile)
        console.log(navBarMobile);
    }
    return(
        <div className="z-50 bg-gradient-to-r from-black-opacity justify-center bg-black w-full h-20 fixed backdrop-blur-sm">
            <div className='w-4/5 h-full flex max-w-[1280px] ml-auto mr-auto'>
            <div className="w-full h-full flex items-center justify-between">
            <div>
                <Link to="/"><img src={logo} className='w-3/4 md:w-full cursor-pointer transition-all hover:scale-105'/></Link>
            </div>
            <div className='block lg:hidden' onClick={expandNav}>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-8' fill='white' viewBox="0 0 448 512">
            {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
            </div>
            <div className='w-fit hidden lg:block'>
                <nav className='w-fit'>
                    <ul className='list-none flex text-white gap-4 xl:gap-14 font-["Roboto-Medium"] font-light'>
                        <li className='cursor-pointer'><Link to="/">HOME</Link></li>
                        <li className='cursor-pointer'><Link to="/services">SERVIÇOS</Link></li>
                        <li className='cursor-pointer'><Link to="/portfolio">PROJETOS</Link></li>
                        <li className='cursor-pointer'><Link to="/about">SOBRE NÓS</Link></li>
                        <li className='cursor-pointer'><Link to="/contact">CONTATO</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='lg:flex gap-3 items-center justify-center hidden text-white'>
            <img src={telephone}/><a href='https://wa.me/5519998524426' target='__blank'>(19) 93865-1540</a>
            </div>
            </div>
            
            </div>
            <div className={`w-full ${navBarMobile ? 'pt-8 pb-8 h-auto' : 'pt-0 pb-0 h-0'} bg-red-rgb block overflow-hidden lg:hidden`}>
            <nav className='w-fit ml-auto mr-auto'>
                    <ul className='list-none flex flex-col items-center text-white gap-8 xl:gap-14 font-["Roboto-Medium"] font-light'>
                       <li className='cursor-pointer' onClick={expandNav}><Link to="/">HOME</Link></li>
                        <li className='cursor-pointer' onClick={expandNav}><Link to="services">SERVIÇOS</Link></li>
                        <li className='cursor-pointer' onClick={expandNav}><Link to="/portfolio">PORTIFÓLIO</Link></li>
                        <li className='cursor-pointer' onClick={expandNav}><Link to="/about">SOBRE NÓS</Link></li>
                        <li className='cursor-pointer' onClick={expandNav}><Link to="/contact">CONTATO</Link></li>     
                        <li><button className='bg-[#00cf77] hover:opacity-80 py-1 px-6 text-white font-["Roboto-Medium"] rounded-lg'>ORÇAMENTO</button></li>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar