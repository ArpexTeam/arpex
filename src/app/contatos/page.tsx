'use client'
import { useState } from "react";
import Input from "@/components/Input";
import emailjs from "@emailjs/browser";

function ContactScreen() {
    const [formData, setFormData] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        descricao: "",
        observacoes: ""
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (field: keyof typeof formData) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [field]: event.target.value }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        setMessage("");

        const templateParams = {
            to_email: "contatoarpextech@gmail.com",
            nome: formData.nome,
            sobrenome: formData.sobrenome,
            email: formData.email,
            telefone: formData.telefone,
            descricao: formData.descricao,
            observacoes: formData.observacoes,
        };

        try {
            await emailjs.send(
                "service_qg2254f", 
                "template_425g7uc",
                templateParams,
                "5-1pFEKd6vGBg5N_4"
            );
            setMessage("E-mail enviado com sucesso! ✅");
        } catch (error) {
            setMessage("Erro ao enviar e-mail. ❌");
            console.error("Erro ao enviar e-mail:", error);
        }

        setLoading(false);
    };

    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <span className="text-[36px] w-auto py-10">
                Preencha seus dados, que retornaremos em breve!
            </span>

            <div className="flex flex-col gap-8 justify-center w-[1280px] rounded-xl p-8 bg-black">
                {/* Primeira linha */}
                <div className="flex w-full gap-8">
                    <Input label="Nome" text={formData.nome} setText={handleChange("nome")} />
                    <Input label="Sobrenome" text={formData.sobrenome} setText={handleChange("sobrenome")} />
                </div>

                {/* Segunda linha */}
                <div className="flex w-full gap-8">
                    <Input label="Email" text={formData.email} setText={handleChange("email")} />
                    <Input label="Telefone" text={formData.telefone} setText={handleChange("telefone")} />
                </div>

                {/* Terceira linha */}
                <div className="flex w-full gap-8">
                    <Input label="Qual serviço precisa?" text={formData.descricao} setText={handleChange("descricao")} />
                    <Input label="Observações" text={formData.observacoes} setText={handleChange("observacoes")} />
                </div>

                <button 
                    className="bg-[#00CF78] w-min self-center px-10 py-2 text-white disabled:opacity-50" 
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>

                {message && <span className="text-white text-center">{message}</span>}
            </div>

            <span className="text-[36px] w-auto py-10">
                Tudo pronto para começar? Seu projeto está prestes a ganhar forma!
            </span>
        </div>
    );
}

export default ContactScreen;
