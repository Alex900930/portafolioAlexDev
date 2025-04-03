'use client'
import React from 'react'
import {TypeAnimation} from 'react-type-animation';
import Image from 'next/image';

export default function Introduction() {
  return (
    <div className='z-20 w-full mt-44 flex items-center justify-center bg-primary/60'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4'>
        
        {/* Contenedor de Imagen */}
        <div className='flex items-center justify-center order-2 md:order-1'>
          <div className='relative w-64 h-64 md:w-80 md:h-80'>
            <Image
              src='/curriculum.jpeg'
              fill
              alt='Foto Perfil'
              className='rounded-full object-cover'
              priority
            />
          </div>
        </div>

        {/* Contenedor de Texto */}
        <div className='flex flex-col items-center md:items-start justify-center order-1 md:order-2 text-center md:text-left'>
        <h1 className='text-2xl md:text-4xl font-medium text-white mb-4 md:mb-6'>
  Se você consegue imaginar,  
  <TypeAnimation
    sequence={[
      'nós codificamos',
      1000,
      'nós otimizamos', 
      1000,
      'nós transformamos em realidade',
      1000,
      'nós automatizamos soluções',
      1000,
      'nós escalamos resultados',
      1000
    ]}
    wrapper='span'
    speed={50}
    repeat={Infinity}
    className='block font-bold text-accent mt-2'
  />
  <span className='block'>Torne-se referência!</span>
</h1>
        </div>

      </div>
    </div>
  )
}