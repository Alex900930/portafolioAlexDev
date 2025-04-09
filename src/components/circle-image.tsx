'use client'
import Image from 'next/image'
import React from 'react'
import MotionTranstion from './transition-component'

function CircleImage() {
  return (
    <MotionTranstion 
      position='bottom' 
      className="bottom-0 right-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/curriculum3.jpg"
        alt="Alexander Herrera - Desarrollador Full Stack"
        width={300}
        height={300}
        className="w-full h-[15rem] rounded-xl"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
        priority
      />
    </MotionTranstion>
  )
}

export default CircleImage