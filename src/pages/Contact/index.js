import './contact.css'

function Contact(){
    return(
    <section className="bg-black relative top-20 h- w-full">
        <div className='max-w-[1280px] ml-auto mr-auto pt-14 pb-36'>
        <h1 className="text-white ml-auto mr-auto w-fit text-[48px] font-['Roboto-Bold'] titulo">Contato</h1>

        <div className='bg-[#151515] w-full mt-10'>
            <form className='md:grid flex flex-col justify-center items-center md:grid-cols-2 text-center py-14'>
                <div className='md:ml-auto md:mr-4 flex text-[#8F8F8F] text-[15px] font-["Roboto-Regular"] flex-col justify-start w-4/5 sm:w-1/2'>
                <label for="nameContact" className='w-fit'>Nome</label>
                <input id="nameContact" type='text' className='rounded-md p-2 bg-input-opacity border-b-2 border-b-pink-rgb'/>
                </div>

                <div className='flex md:ml-4 text-[#8F8F8F] text-[15px] font-["Roboto-Regular"] flex-col justify-start w-4/5 sm:w-1/2'>
                <label for="lastNameContact" className='w-fit mt-8 md:mt-0'>Sobrenome</label>
                <input id="lastNameContact" type='text' className='rounded-md p-2 w- bg-input-opacity border-b-2 border-b-pink-rgb'/>
                </div>

                <div className='md:ml-auto md:mr-4 flex text-[#8F8F8F] text-[15px] font-["Roboto-Regular"] flex-col justify-start w-4/5 sm:w-1/2'>
                <label for="emailContact" className='w-fit mt-8'>E-Mail</label>
                <input id="emailContact" type='text' className='rounded-md p-2  bg-input-opacity border-b-2 border-b-pink-rgb'/>
                </div>
                
                <div className='flex md:ml-4 text-[#8F8F8F] text-[15px] font-["Roboto-Regular"] flex-col justify-start w-4/5 sm:w-1/2'>
                <label for="phoneContact" className='w-fit mt-8'>Telefone com DDD</label>
                <input id="phoneContact" type='text' className='rounded-md p-2 bg-input-opacity border-b-2 border-b-pink-rgb'/>
                </div>
                
                <div className='md:ml-auto md:mr-4 flex text-[#8F8F8F] text-[15px] font-["Roboto-Regular"] flex-col justify-start w-4/5 sm:w-1/2'>
                <label for="dropContact" className='w-fit mt-8'>Você precisa de...</label>
                <input id="dropContact" type='text' className='rounded-md p-2 bg-input-opacity border-b-2 border-b-pink-rgb'/>
                </div>
                
                <div className='flex md:ml-4 text-[#8F8F8F] text-[15px] font-["Roboto-Regular"] flex-col justify-start w-4/5 sm:w-1/2'>
                <label for="observationsContact" className='w-fit mt-8'>Observações</label>
                <input id="observationsContact" type='text' className='rounded-md p-2 w- bg-input-opacity border-b-2 border-b-pink-rgb'/>
                </div>

                <div className='col-span-2 mt-8'>
                    <button className='hover:bg-transparent border-2 border-pink-rgb hover:text-pink-rgb bg-pink-rgb text-white text-[20px] font-["Roboto-Medium"] rounded-md px-20 py-1'>Enviar</button>
                </div>
            </form>
        </div>
        </div>
    </section>
    )
}

export default Contact;