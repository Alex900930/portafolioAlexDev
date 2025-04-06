"use client"
import React from 'react'
import MotionTranstion from './transition-component'
import Image from 'next/image'

export default function Avatar() {
  return (
    <MotionTranstion position='bottom' className='bottom-0 right-0 hidden md:inline-block md:absolute'>

        <Image 
        src='/curriculum1.jpeg' alt='Imagen Avatar' width={350} height={350}
        className='w-full h-[20rem] rounded-xl'
        />

    </MotionTranstion>
  )
}

