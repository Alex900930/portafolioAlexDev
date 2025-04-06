import CircleImage from '@/components/circle-image'
import SliderService from '@/components/slider-service'
import TransitionPage from '@/components/transition.page'
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
        <h1 className='text-white md:px-20 text-2xl landing-tight text-center
        md:text-left md:text-4xl md:mb-5
        '>
          Mis{' '}
          <span className='font-bold text-accent'>
             Servicios.  
          </span>
          </h1> 
          <p className='mb-3 text-xl text-gray-300'>
          Ofrezco servicios de desarrollo web fullstack 
          especializados en la creacion de sitios web y aplicaciones atractivas y funcionales.
          Utilizando las ultimas tecnologias como HTML, CSS y
          Javascript, diseño interfcaces de usuario intuitivas y responsivas
          que reflejan la identidad de marca de mis clientes
          y mejoran su presencia en linea.
        </p>
        <button className='px-3 py-2 rounded-lg bg-accent hover:bg-accent/65 cursor-pointer'>
          Contacta conmigo
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
