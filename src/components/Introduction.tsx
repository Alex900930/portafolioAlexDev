'use client'
import React from 'react'
import {TypeAnimation} from 'react-type-animation';
import Image from 'next/image';
import Link from 'next/link';

export default function Introduction() {
  return (
    <div className='z-20 w-full mt-[10rem] pt-4 md:mt-44 flex items-center justify-center bg-primary/60 px-4 sm:px-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl'>
        
        {/* Contenedor de Imagen - Reducido para móviles */}
        <div className='flex items-center justify-center order-2 md:order-1 group'>
          <div className='relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80
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
                src='/curriculum.jpg'
                fill
                alt='Foto Perfil'
                className='object-cover transition-transform duration-500 
                         group-hover:scale-105'
                priority
              />
            </div>
          </div>
        </div>

        {/* Contenedor de Texto - Mejorado para móviles */}
        <div className='flex flex-col items-center md:items-start justify-center order-1 md:order-2 text-center md:text-left'>
          <h1 className='text-xl sm:text-2xl md:text-4xl font-medium text-white mb-3 md:mb-6'>
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
                className='block font-bold text-accent mt-1 md:mt-2'
            />
            <span className='block text-lg sm:text-xl md:text-2xl'>Torne-se referência!</span>
            </h1>
            <p className='text-sm sm:text-base md:text-xl text-white/90 mb-4 md:mb-8 max-w-md'>
              Como desenvolvedor Full Stack, dedico-me a unir design e funcionalidade para criar experiências digitais impactantes e acessíveis.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-2 md:gap-4 md:justify-start'>
                <Link href='/portfolio' className='px-3 py-1 sm:py-2 text-sm sm:text-base text-white transition-all border-2 cursor-pointer rounded-xl hover:shadow-xl hover:shadow-white/50'>
                  Ver Projetos
                </Link>
                
                <Link 
                  href='https://wa.me/+5585989329627?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Podemos%20falar?' 
                  className='px-3 py-1 sm:py-2 text-sm sm:text-base text-accent transition-all border-2 border-accent cursor-pointer rounded-xl hover:shadow-xl hover:shadow-white/50'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ✨ Fale comigo
                </Link>
                <Link 
                    href="/CV.pdf" 
                    download="AlexanderHerrera_CV_EspecialistaTech2025.pdf"
                    className="px-3 py-1 sm:py-2 text-sm sm:text-base text-accent transition-all border-2 border-accent cursor-pointer rounded-xl hover:shadow-xl hover:shadow-white/50"
                    data-umami-event="cv-download" 
                    target='_blank'
                  >
                    📌 Baixe meu CV
                  </Link>
            </div>
        </div>
      </div>
    </div>
  )
}