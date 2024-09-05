import './portfolio.css'

function Portfolio(){
    return(
    <section className="bg-black relative top-20 h- w-full">
        <div className='max-w-[1280px] ml-auto mr-auto pt-24 pb-36'>
        <h1 className="text-white ml-auto mr-auto w-fit text-[48px] font-['Roboto-Bold'] titulo">Portfólio</h1>
        <p className="text-[20px] font-['Roboto-Light'] text-white ml-auto mr-auto w-fit mt-4">Alguns trabalhos</p>


        <div className="w-full bg-black">
            <div className="w-4/5 ml-auto mr-auto max-w-[1280px]">

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between">
                    <div className="w-full h-96 bg-gray-500"></div>
                    <div className="w-full h-96 bg-gray-500"></div>
                    <div className="w-full h-96 bg-gray-500"></div>

                    <div className="w-full h-96 bg-gray-500"></div>
                    <div className="w-full h-96 bg-gray-500"></div>
                    <div className="w-full h-96 bg-gray-500"></div>
                </div>
                <button className="bg-pink-rgb py-3 hover:bg-transparent hover:border-pink-rgb hover:text-pink-rgb border-2 border-transparent px-11 rounded-3xl flex text-white font-['Roboto-Bold'] ml-auto mr-auto mt-10 text-[20px]">
                    Carregar Mais</button>
            </div>
        </div>
        </div>
    </section>
    )
}

export default Portfolio;