"use client"

import Image from 'next/image';

import MotionTranstion from './transition-component';

const AvatarPortfolio = () => {
    return (
        <MotionTranstion position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute ">
            <Image src="/Curriculum5-removebg-preview.png" width="300" height="300" className="w-full h-full " alt="Particles " />
        </MotionTranstion>

    );
}

export default AvatarPortfolio;