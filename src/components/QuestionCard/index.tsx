"use client"
import Image from "next/image";
import { useState } from "react";


function QuestionCard({ question, answer }: {question:string,answer:string}) {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full flex flex-col justify-start">
            <div className="flex justify-between p-4 py-2">
                <span className='text-[18px]'>{question}</span>
                <Image src={`/images/${open ? 'close' : 'open'}.svg`} alt="" className='cursor-pointer' onClick={() => { setOpen(!open) }} />
            </div>
            <div className={`top-0 left-0 w-full h-[2px] bg-gradient-to-r ${open ? 'from-[#00CF78]' : 'from-[#D9D9D9]'} to-[#100F12]`} />
            {open && <div className="flex  mt-2 p-2 px-4">
                {answer}
            </div>}
        </div>
    );
}

export default QuestionCard;