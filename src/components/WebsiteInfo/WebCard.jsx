
function WebCard({ image, title, msg }) {
    return (
        <div className="relative  flex flex-col h-[255px] w-[234px] bg-[#D9D9D908] rounded-[20px] border-b-white border-b-2 border-t-0">
            <div className=" relative top-[-50px] self-center">
                <img src={image} width={110} height={110} alt="" srcset="" />
            </div>
            <div className="relative text-white top-[-40px] text-[20px] font-['Roboto-Bold']">{ title}</div>
            <div className="relative text-white top-[-40px]  text-[12px] mt-3 mx-4 font-['Roboto-Light']" 
            dangerouslySetInnerHTML={{ __html: msg }}></div>
        </div>
    );
}

export default WebCard;