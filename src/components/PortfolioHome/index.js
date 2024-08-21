import arrow from '../../img/Vector.svg'
import './App.css'

function PortifolioHome(){
    return(
        <div className="w-full bg-black pt-44">
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
                <button className="bg-pink-rgb py-3 hover:bg-transparent hover:border-pink-rgb hover:text-pink-rgb border-2 border-transparent px-11 rounded-3xl flex text-white font-['Roboto-Bold'] ml-auto mr-auto mt-10 text-[20px]">
                    <img src={arrow} className='mr-4'/>
                    Carregar Mais</button>
            </div>
        </div>
    )
}

export default PortifolioHome;