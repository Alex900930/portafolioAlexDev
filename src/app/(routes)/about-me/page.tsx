import Avatar from '@/components/avatar'
import ContainerPage from '@/components/container'
import CounterServices from '@/components/counter-services'
import TimeLine from '@/components/time-line'
import TransitionPage from '@/components/transition.page'
import React from 'react'

export default function Aboutme() {
  return (
    <>
      <TransitionPage />
      
      <ContainerPage >
      <Avatar />
      <h1 className='text-white text-2xl leading-light
        text-center py-5- md:text-left md:text-5xl md:mt-10 md:px-40
        '>
          Toda a minha{' '}
           <span className='font-bold text-accent'>Jornada Profissional</span>
        
        </h1>
        <CounterServices />
        <TimeLine />
      </ContainerPage>
    </>
  )
}
