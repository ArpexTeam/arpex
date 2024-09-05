import WebCard from "./WebCard";
import image1 from '../../img/foguete.svg';
import image2 from '../../img/Responsivo.Color1.png';
import image3 from '../../img/Googleicons 1.png';
import image4 from '../../img/Suportepng 1.png';

function WebsiteInfo() {

    const infos = [
        {
            title: 'SITES RÁPIDOS',
            msg: 'Nossos sites são mais rápidos, porque utilizamos tecnologia de ponta, servidores rápidos, imagens em formato WebP e otimizamos o site antes de publicá-lo.',
            image: image1
        },
        {
            title: 'SITES RESPONSIVOS',
            msg: 'Desenvolvemos sites garantindo versões específicas para cada dispositivo: PC, tablet e smartphone. Assim, sua presença online se destaca positivamente em todas as plataformas.',
            image: image2
        },
        {
            title: 'SITE OTIMIZADO PARA O GOOGLE',
            msg: ' Seu site será entregue totalmente otimizado para os motores de busca, potencializando suas chances de alcançar a primeira página do Google em um curto período.',
            image: image3
        },
        {
            title: 'SUPORTE CONTÍNUO',
            msg: 'Oferecemos o Plano de Cuidados com o Site, proporcionando suporte contínuo e atualizações semanais para garantir a segurança e o bom funcionamento do seu site. Além disso.  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED4264] to-[#100F12]">ver mais...</span>',
            image: image4
        },
    ]

    return (
        <div className="relative flex flex-wrap lg:flex-row w-full gap-y-14 items-center justify-center gap-9 bg-[#151515] pt-20 pb-14 px-10 lg:px-0 border-t-0 border-b-0">
            {infos.map(e => (
                <WebCard image={e.image} msg={e.msg} title={e.title} />
            ))}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#100F12] to-[#ED4264]" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED4264] to-[#100F12]" />

        </div>

    );
}

export default WebsiteInfo;