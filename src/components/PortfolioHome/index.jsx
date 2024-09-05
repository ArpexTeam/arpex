import arrow from '../../img/Vector.svg'
import './App.css'

function PortifolioHome(){
    return(
        <div className="w-full bg-black pt-44 pb-12 ">
            <div className="w-4/5 ml-auto mr-auto max-w-[1280px]">
                <h1 className="text-[48px] font-['Roboto-Bold'] text-pink-rgb">Portfólio</h1>
                <p className="text-[20px] font-['Roboto-Light'] text-white">Confira alguns dos websites desenvolvidos recentemente por nós</p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between">
                    <div className="w-full h-96 bg-gray-500"></div>
                    <div className="w-full h-96 bg-gray-500"></div>
                    <div className="w-full h-96 bg-gray-500"></div>

                    <div className="w-full h-96 bg-gray-500"></div>
                    <div className="w-full h-96 bg-gray-500"></div>
                    <div className="w-full h-96 bg-gray-500"></div>
                </div>
                <button className="bg-pink-rgb py-3 hover:bg-transparent hover:border-pink-rgb hover:fill-pink-rgb hover:text-pink-rgb border-2 border-transparent px-11 rounded-3xl flex text-white font-['Roboto-Bold'] ml-auto mr-auto mt-10 text-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 mr-3' fill='white' viewBox="0 0 384 512"><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"/></svg>       
                Carregar Mais</button>
            </div>
        </div>
    )
}

export default PortifolioHome;