import { useState } from "react";

function QuestionCard({question, answer}) {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col justify-start px-10">
            <div className="flex justify-between p-4 py-2">
                <span className='text-[18px]'>{ question}</span>
                <img src={`/images/${open ? 'close' : 'open'}.svg`} alt="" className='cursor-pointer' onClick={() => { setOpen(!open) }} />
            </div>
            <div className={`top-0 left-0 w-full h-[2px] bg-gradient-to-r  from-[${open ? '#ED4264' : '#D9D9D9'}] to-[#100F12]`} />
            {open && <div className="flex  mt-2 p-2 px-4">
                {answer}
            </div>}
        </div>
    );
}

export default QuestionCard;