import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Instagram, Github, Facebook, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const socialNetworks = [
    {
        id: 1,
        logo: <FaWhatsapp className="text-3xl" />,
        src: "https://wa.me/+5585989329627?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Podemos%20falar?",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/alexander-herrera-millet-8127b81b9/",
    },
    {
        id: 3,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/alexdevbrasil/",
    },
    {
        id: 4,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/Alex900930",
    },
    {
        id: 5,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "#!",
    },
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "FullStack Developer",
        subtitle: "Digital Learning",
        description: "Trabalhei de forma próxima com minha equipe no desenvolvimento de um projeto web do zero, assumindo responsabilidades chave que contribuíram para o sucesso do projeto.Criação da Interface do Projeto Web. Desenvolvimento de Funcionalidades de Registro. Criação do Backend. ",
        date: "Oct 2023 ",
    },
    {
        id: 2,
        title: "Creador de Experiencias Digitales",
        subtitle: "JIT",
        description: "fiz parte da equipe de desenvolvimento da aplicação Incluia, uma plataforma web onde desempenhei várias funções chave tanto no frontend quanto no backend. Desenvolvimento Backend com Express.js e Node.js.",
        date: "Dec 2022",
    },
    {
        id: 3,
        title: "Especialista em Desenvolvimento Front-end",
        subtitle: "AllTech",
        description: "Na Altech, transformei designs em experiências interativas com Angular 3, sempre pensando na usabilidade do usuário final. Apaixonado por resolver problemas com código elegante!",
        date: "Jan 2020",
    },
    {
        id: 4,
        title: "Especialista em Desenvolvimento Front-end",
        subtitle: "WebWizards Inc.",
        description: "Na WebWizards, dei vida a interfaces funcionais e bonitas usando Symfony 2 e Twig, sempre focando na experiência perfeita entre tecnologia e usuário.",
        date: "Sept 2014",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Anos de experiência",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes Satisfeitos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Projetos Concluídos",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 10,
        text: "Certificações",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Criação de uma identidade visual forte e consistente, abrangendo logo, cores e elementos gráficos da marca.",
    },
    {
        icon: <Pencil />,
        title: "Web Design",
        description: "Design criativo e profissional de interfaces web intuitivas e visualmente atraentes, centrado na experiência do usuário.",
    },
    {
        icon: <Computer />,
        title: "Programação de Sites",
        description: "Desenvolvimento de sites customizados, com design e funcionalidades alinhados aos seus objetivos.",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Conteúdo estratégico e criativo, desenvolvido para engajar seu público-alvo.",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Aumento da visibilidade da sua marca com SEO estratégico e atualizado. ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Salão VIP – Beleza & Estilo",
        image: "/image_webs/salon.png",
        urlGithub: "https://github.com/Alex900930/lelisbeautysalon",
        urlDemo: "https://lelisbeautysalon.vercel.app/",
    },
    {
        id: 2,
        title: "Barbearia – Tradição e Modernidade",
        image: "/image_webs/barberia.png",
        urlGithub: "https://github.com/Alex900930/BarberAgenda",
        urlDemo: "https://barber-agenda-alex.vercel.app/",
    },
    {
        id: 3,
        title: "Loja Virtual Personalizada",
        image: "/image_webs/ecomerce.png",
        urlGithub: "https://github.com/Alex900930/CommerceAlex",
        urlDemo: "https://commerce-alex-rust.vercel.app/",
    },
    {
        id: 4,
        title: "Sites Sob Medida",
        image: "/image_webs/siteMedida.png",
        urlGithub: "https://github.com/Alex900930/site-meta-zap",
        urlDemo: "https://site-meta-zap.vercel.app/",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "Trabalho incrível! Os projetos entregues foram além das minhas expectativas, com um design intuitivo e resultados reais. Recomendo demais!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "María García",
        description:
            "Profissionalismo que faz diferença! Cada detalhe foi pensado para alinhar estética e funcionalidade, gerando um impacto visível no meu negócio. Nota 10!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "Juan Pérez",
        description:
            "Adorei o resultado! Criatividade + técnica = sites que convertem. Meu público elogiou a experiência, e as vendas aumentaram. Repetirei com certeza!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Carlos Sánchez",
        description:
            "Recomendo de olhos fechados! Entregou exatamente o que prometeu: identidade visual única, prazo cumprido e um processo colaborativo. Perfeito para quem busca qualidade.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Laura Snow",
        description:
            "Sensacional! Transformou minha ideia em uma plataforma moderna e fácil de usar, com um atendimento impecável. Melhor investimento que fiz!",
        imageUrl: "/profile5.png",
    }
];