import { useRef, useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import bgBackground from '../../img/background6.jpg'



function Contact(){
    const form = useRef();

    const [phone, setPhone] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
    // Send email using EmailJS
    emailjs.sendForm('service_s1o0txb', 'template_lwwcs0j', form.current, "3LMwgby-wb7Qm4GSh" )
      .then(function(response) {
        alert('Email enviado com sucesso!');
      }, function(error) {
        alert('Falha ao enviar o email. Tente novamente');
        console.log('FAILED...', error);
      });

};

const formatNumber = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters

    if (input.length === 0) {
        setPhone('');
        return;
    }

    // Adds formatting for the Brazilian phone number
    if (input.length <= 2) {
        input = `(${input}`;
    } else if (input.length <= 6) {
        input = `(${input.slice(0, 2)}) ${input.slice(2)}`;
    } else if (input.length <= 10) {
        input = `(${input.slice(0, 2)}) ${input.slice(2, 6)}-${input.slice(6)}`;
    } else {
        input = `(${input.slice(0, 2)}) ${input.slice(2, 7)}-${input.slice(7, 11)}`;
    }

    setPhone(input);
};

    return(
    <section className="relative top-20 h- w-full"
    style={{
        backgroundImage: `url(${bgBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover'
        
      }}>
        <div className='max-w-[1280px] ml-auto mr-auto pt-14 pb-36'>
        <h1 className="text-white ml-auto mr-auto w-1/2 text-center text-[36px] font-['Roboto-Medium'] titulo">Preencha seus dados, que retornaremos em breve!</h1>

        <div className='bg-black w-full mt-10'>
            <form onSubmit={handleSubmit} className='md:grid flex flex-col justify-center items-center md:grid-cols-2 text-center py-14'>
                <div className='md:ml-auto md:mr-4 flex text-[#8F8F8F] text-[15px] font-["Roboto-Regular"] flex-col justify-start w-4/5 sm:w-1/2'>
                <label for="nameContact" className='w-fit'>Nome</label>
                <input id="nameContact" name='from_name' type='text' maxLength="50" className='focus:outline-none focus:border-gray-400 focus:border-2 rounded-sm p-2 bg-input-opacity border-b-2 border-b-pink-rgb'/>
                </div>

                <div className='flex md:ml-4 text-[#8F8F8F] text-[15px] font-["Roboto-Regular"] flex-col justify-start w-4/5 sm:w-1/2'>
                <label for="lastNameContact" className='w-fit mt-8 md:mt-0'>Sobrenome</label>
                <input id="lastNameContact" name='from_lastName' maxLength="50" type='text' className='focus:outline-none focus:border-gray-400 focus:border-2 rounded-sm p-2 w- bg-input-opacity border-b-2 border-b-pink-rgb'/>
                </div>

                <div className='md:ml-auto md:mr-4 flex text-[#8F8F8F] text-[15px] font-["Roboto-Regular"] flex-col justify-start w-4/5 sm:w-1/2'>
                <label for="emailContact" className='w-fit mt-8'>E-Mail</label>
                <input id="emailContact" type='text' name='from_email' maxLength="60" className='focus:outline-none focus:border-gray-400 focus:border-2 rounded-sm p-2  bg-input-opacity border-b-2 border-b-pink-rgb'/>
                </div>
                
                <div className='flex md:ml-4 text-[#8F8F8F] text-[15px] font-["Roboto-Regular"] flex-col justify-start w-4/5 sm:w-1/2'>
                <label for="phoneContact" className='w-fit mt-8'>Telefone com DDD</label>
                <input id="phoneContact" type='text' value={phone} onChange={formatNumber} name='from_phone' maxLength="15" className='focus:outline-none focus:border-gray-400 focus:border-2 rounded-sm p-2 bg-input-opacity border-b-2 border-b-pink-rgb'/>
                </div>
                
                <div className='md:ml-auto md:mr-4 flex text-[#8F8F8F] text-[15px] font-["Roboto-Regular"] flex-col justify-start w-4/5 sm:w-1/2'>
                <label for="dropContact" className='w-fit mt-8'>Você precisa de...</label>
                <input id="dropContact" type='text' name='from_needs' maxLength="65" className='focus:outline-none focus:border-gray-400 focus:border-2 rounded-md p-2 bg-input-opacity border-b-2 border-b-pink-rgb'/>
                </div>
                
                <div className='flex md:ml-4 text-[#8F8F8F] text-[15px] font-["Roboto-Regular"] flex-col justify-start w-4/5 sm:w-1/2'>
                <label for="observationsContact" className='w-fit mt-8'>Observações</label>
                <input id="observationsContact" type='text' name='from_obs' maxLength="150" className='focus:outline-none focus:border-gray-400 focus:border-2 rounded-md p-2 w- bg-input-opacity border-b-2 border-b-pink-rgb'/>
                </div>

                <div className='col-span-2 mt-8'>
                    <button type='submit' className='hover:bg-transparent border-2 border-pink-rgb hover:text-pink-rgb bg-pink-rgb text-white text-[20px] font-["Roboto-Medium"] rounded-md px-20 py-1'>Enviar</button>
                </div>
            </form>

            
        </div>
        <h1 className="text-white ml-auto mr-auto w-1/2 text-center text-[32px] font-['Roboto-Medium'] mt-10 titulo">Tudo pronto para começar? <br/>Seu projeto está prestes a ganhar forma!</h1>

        </div>
    </section>
    )
}

export default Contact;