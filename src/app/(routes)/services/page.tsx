import CircleImage from '@/components/circle-image'
import SliderService from '@/components/slider-service'
import TransitionPage from '@/components/transition.page'
import Link from 'next/link'
import React from 'react'

export default function ServicesPage() {
  return (
   <>
    <TransitionPage />
    <CircleImage />
    <div className='grid items-center justify-center 
    h-screen max-w-5xl gap-0.5 md:gap-6 mx-auto md:grid-cols-2 mt-24 md:mt-0
    '>
      <div className='max-w-[485px] mx-auto'>
      <h1 className='text-white md:px-20 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5'>
  Meus{' '}
  <span className='font-bold text-accent'>
    Serviços.
  </span>
</h1>

<p className='mb-3 text-xl text-gray-300'>
  Ofereço soluções completas em desenvolvimento web fullstack, 
  criando sites e aplicativos visualmente impactantes e altamente funcionais. 
  Com tecnologias modernas como <strong>React</strong>, <strong>Node.js</strong> e 
  <strong>TypeScript</strong>, desenvolvo interfaces intuitivas e responsivas 
  que traduzem a identidade digital dos meus clientes e elevam 
  sua presença online.
</p>

<button className='px-3 py-2 rounded-lg bg-accent hover:bg-accent/65 cursor-pointer transition-all duration-300 hover:scale-105'>
                <Link
                  href='https://wa.me/+5585989329627?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Podemos%20falar?'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                   Fale comigo
                </Link>
</button>
      </div>

      {/*Slider*/}
      <div className='md:mb-0 mb-36'>
        <SliderService />
      </div>
    </div>
   </>
  )
}
