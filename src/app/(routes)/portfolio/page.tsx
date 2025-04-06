import { dataPortfolio } from "@/data";

import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition.page";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portafolio-box";
import AvatarPortfolio from "@/components/avatar-portafolio";


const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            <AvatarPortfolio />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5 text-white">Mis últimos <span className="font-bold text-accent">trabajos realizados</span></h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;