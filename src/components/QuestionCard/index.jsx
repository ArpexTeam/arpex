import { useState } from "react";
import openImg from '../../img/open.svg';
import closeImg from '../../img/close.svg';
import './App.css'

function QuestionCard({ id, question, answer }) {
    const [open, setOpen] = useState(false);

    // Define as classes de fundo condicionalmente

    function openClose(id){
        const element = document.getElementById(`lineColor-${id}`);
        const element2 = document.getElementById(`expandDiv-${id}`);

        console.log(element);

        if (element) {
            // Aplicar um gradiente de fundo
            if(open){
                element.classList.remove('hovered');
                element2.style.height = "0";

            }else{
             

                element.classList.toggle('hovered');
                element2.style.height = `${element2.scrollHeight}px`;

            }

            setOpen(!open);
   
        }   
     }

    return (
        <div className="flex flex-col justify-start px-10 cursor-pointer" onClick={() => openClose(id)}>
            <div className="flex justify-between p-4 py-2">
                <span className='text-[18px]'>{question}</span>
                <img src={open ? closeImg : openImg} alt="" className='cursor-pointer' />
            </div>
            <div id={`lineColor-${id}`} className={`line top-0 left-0 w-full h-[2px]`} />
            <div id={`expandDiv-${id}`} className="h-0 overflow-hidden flex mt-2 px-4 transition-all duration-600">
                {answer}
            </div>
        </div>
    );
}

export default QuestionCard;
