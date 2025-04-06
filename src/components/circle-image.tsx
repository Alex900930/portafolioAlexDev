import Image from 'next/image'
import React from 'react'

function CircleImage() {
  return (
    <div
    className='bottom-0 right-0 hidden md:inline-block 
    md:absolute'
    >

        <Image 
        alt='circle'
        src='/curriculum3.jpg'
        width={300}
        height={300}
        className='w-full h-[15rem] rounded-xl'
        />
    </div>
  )
}

export default CircleImage