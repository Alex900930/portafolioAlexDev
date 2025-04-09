'use client'
import Image from 'next/image';
import MotionTranstion from './transition-component';

const AvatarPortfolio = () => {
  return (
    <MotionTranstion 
      position='bottom' 
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/Curriculum5-removebg-preview.png"
        width={300}
        height={300}
        className="w-full h-[15rem]"
        alt="Alexander Herrera - Desarrollador Full Stack"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
        priority
      />
    </MotionTranstion>
  );
}

export default AvatarPortfolio;