interface Props {
    label?: string;
    text: string;
    setText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, setText, text }: Props) {
    return (
        <div className="flex flex-col w-full">
            {label && <label className="ml-2 text-[#8F8F8F] text-[15px]">{label}</label>}
            <input
                onChange={setText}
                value={text}
                className="p-3 outline-none border-b-2 border-[#D3D3D3]"
                type="text"
            />
        </div>
    );
}

export default Input;
