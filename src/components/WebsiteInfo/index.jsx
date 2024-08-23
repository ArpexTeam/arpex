import WebCard from "./WebCard";

function WebsiteInfo() {

    const infos = [
        {
            title: 'Sites RÁPIDOS',
            msg: 'Nossos sites são mais rápidos, porque utilizamos tecnologia de ponta, servidores rápidos, imagens em formato WebP e otimizamos o site antes de publicá-lo.'
        },
        {
            title: 'Sites Responsivos',
            msg: 'desenvolvemos sites garantindo versões específicas para cada dispositivo: PC, tablet e smartphone. Assim, sua presença online se destaca positivamente em todas as plataformas.'
        },
        {
            title: 'Site Otimizado para o Google',
            msg: ' Seu site será entregue totalmente otimizado para os motores de busca, potencializando suas chances de alcançar a primeira página do Google em um curto período.'
        },
        {
            title: 'Suporte contínuo',
            msg: 'Oferecemos o Plano de Cuidados com o Site, proporcionando suporte contínuo e atualizações semanais para garantir a segurança e o bom funcionamento do seu site. Além disso.  ver mais...'
        },
    ]

    return (
        <div className="relative flex flex-wrap lg:flex-row w-full gap-y-14 items-center justify-center gap-9 bg-[#151515] py-16 px-10 lg:px-0 border-t-0 border-b-0">
            {infos.map(e => (
                <WebCard msg={e.msg} title={e.title} />
            ))}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#100F12] to-[#ED4264]" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED4264] to-[#100F12]" />

        </div>

    );
}

export default WebsiteInfo;