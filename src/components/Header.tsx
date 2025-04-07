import React from 'react';
import MotionTranstion from './transition-component';
import Link from 'next/link';
import { socialNetworks } from '@/data';
import Image from 'next/image';

export default function Header() {
  return (
    <MotionTranstion 
      position='bottom'
      className='fixed z-40 w-full top-5 px-4 sm:px-6 md:px-8 lg:px-20'
    >
      <header className='w-full'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
          <Link href='/' className='flex justify-center md:justify-start'>
            <Image
              src="/Logo.png"
              alt='Logo Alex'
              width={200}
              height={50}
              className='w-auto h-24 md:h-36'
              priority
            />
          </Link>
          
          <div className='flex items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7'>
            {socialNetworks.map(({logo, src, id}) => (
              <Link 
                key={id}
                href={src}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-accent transition-colors duration-300 text-xl md:text-2xl'
                aria-label={`Enlace a ${id}`}
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTranstion>
  );
}