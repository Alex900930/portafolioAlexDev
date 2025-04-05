'use client'
import React from 'react'
import {TypeAnimation} from 'react-type-animation';
import Image from 'next/image';
import Link from 'next/link';

export default function Introduction() {
  return (
    <div className='z-20 w-full mt-44 flex items-center justify-center bg-primary/60'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4'>
        
       {/* Contenedor de Imagen con Efectos Avanzados */}
<div className='flex items-center justify-center order-2 md:order-1 group'>
  <div className='relative w-64 h-64 md:w-80 md:h-80 
    before:absolute before:inset-[-3px] before:rounded-full 
    before:bg-gradient-to-r before:from-primary before:via-accent before:to-primary 
    before:animate-spin before:[animation-duration:8s] before:opacity-0 
    before:transition-all before:duration-500
    hover:before:opacity-100 hover:before:animate-[spin_3s_linear_infinite]
    after:absolute after:inset-[-6px] after:rounded-full 
    after:bg-gradient-to-br after:from-primary/30 after:to-accent/30 
    after:blur-xl after:opacity-0 after:transition-all
    hover:after:opacity-100'>
    
    <div className='relative w-full h-full overflow-hidden rounded-full 
      border-4 border-white/10 hover:border-transparent
      transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-accent/20'>
      <Image
        src='/curriculum.jpeg'
        fill
        alt='Foto Perfil'
        className='object-cover transition-transform duration-500 
                 group-hover:scale-105'
        priority
      />
    </div>
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
            <p className='mx-auto text-white mb-4 text-xl md:mx-0 md:mb-8'>
              Como desenvolvedor Full Stack, dedico-me a unir design e funcionalidade para criar experiências digitais impactantes e acessíveis.
            </p>
            <div className='flex items-center justify-center gap-3 md:justify-start md:gap-10'>
                <Link href='/projects' className='px-3 text-white py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                  Ver Projetos
                </Link>
                
                <Link href='/projects' className='px-3 text-accent py-2 transition-all border-2 border-accent cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                 Fale comigo
                </Link>
            </div>
            
        </div>

       

      </div>
    </div>
  )
}