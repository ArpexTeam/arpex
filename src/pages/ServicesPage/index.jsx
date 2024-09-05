import pc from '../../img/MacBook Pro 16-inch Space Black Front.png';
import iphone from '../../img/iPhone 12 Graphite Pro Top View Mockup.png';
import ipad from '../../img/iPad Pro Mockup.png';
import background from '../../img/Background.jpg';

function ServicesPage() {
    return (
        <section
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            className="relative top-20 w-screen"
        >
            <div className='max-w-[1280px] ml-auto mr-auto pt-24 pb-52'>

                <h1 className="text-white ml-auto mr-auto w-fit text-[48px] font-['Roboto-Bold'] titulo">Serviços</h1>
                <p className="text-[20px] font-['Roboto-Light'] text-white ml-auto mr-auto w-fit mt-4">O que fazemos?</p>

                <div className="flex w-full md:w-4/5 justify-center items-center gap-8 ml-auto mr-auto mt-44 flex-col lg:flex-row">
                    <div className="relative w-11/12 sm:w-2/3 lg:w-1/3 h-96 border-2 rounded-lg border-white-rgb-025 bg-white-rgb-008 text-center text-white px-10 lg:px-2 xl:px-10">
                        {/* Centering the Image */}
                        <img
                            src={pc}
                            className='w-64 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        />
                        <div className='flex flex-col justify-center h-full'>
                            <h1 className='font-["Roboto-Bold"] text-[32px]'>Landing pages</h1><br />
                            <p className='font-["Roboto-Light"] text-[24px]'>Fazemos a criação de sites profissionais para a sua empresa.</p>
                        </div>
                    </div>

                    <div className="relative w-11/12 sm:w-2/3 mt-24 lg:mt-0 lg:w-1/3 h-96 border-2 rounded-lg border-white-rgb-025 bg-white-rgb-008 text-center text-white px-10 lg:px-2 xl:px-10">
                        {/* Centering the Image */}
                        <img
                            src={iphone}
                            className='w-28 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        />
                        <div className='flex flex-col justify-center h-full'>
                            <h1 className='font-["Roboto-Bold"] text-[32px]'>Landing pages</h1><br />
                            <p className='font-["Roboto-Light"] text-[24px]'>Fazemos a criação de sites profissionais para a sua empresa.</p>
                        </div>
                    </div>

                    <div className="relative w-11/12 sm:w-2/3 mt-24 lg:mt-0 lg:w-1/3 h-96 border-2 rounded-lg border-white-rgb-025 bg-white-rgb-008 text-center text-white px-10 lg:px-2 xl:px-10">
                        {/* Centering the Image */}
                        <img
                            src={ipad}
                            className="w-32 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                        <div className='flex flex-col justify-center h-full'>
                            <h1 className='font-["Roboto-Bold"] text-[32px]'>Ecommerce</h1><br />
                            <p className='font-["Roboto-Light"] text-[24px]'>Fazemos a criação de sites profissionais para a sua empresa.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ServicesPage;
