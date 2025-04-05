import Avatar from '@/components/avatar'
import ContainerPage from '@/components/container'
import CounterServices from '@/components/counter-services'
import TransitionPage from '@/components/transition.page'
import React from 'react'

export default function Aboutme() {
  return (
    <>
      <TransitionPage />
      
      <ContainerPage >
      <Avatar />
      <h1 className='text-white text-2xl leading-light
        text-center md:text-left md:text-5xl md:mt-10
        '>
          Toda mi{' '}
           <span className='font-bold text-accent'>Trayectoria Profesional</span>
        </h1>
        <CounterServices />
      </ContainerPage>
    </>
  )
}
