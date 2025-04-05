
import React from 'react'
import MotionTranstion from './transition-component'
import Image from 'next/image'

export default function Avatar() {
  return (
    <MotionTranstion position='bottom' className='bottom-0 right-0 hidden md:inline-block md:absolute'>

        <Image 
        src='/curriculum3.jpg' alt='Imagen Avatar' width={460} height={460}
        className='w-full h-[25rem] rounded-xl'
        />

    </MotionTranstion>
  )
}

