import React from 'react'
import MotionTranstion from './transition-component'
import Link from 'next/link'
import { socialNetworks } from '@/data'

export default function Header() {
  return (
    <MotionTranstion position='bottom'
    className='absolute z-40 inline-block w-full top-5 md:top-10 px-20'
    >
        <header>
           <div className='container text-white justify-between max-w-full mx-auto md:flex'>
                <Link href='/'>
                <h1 className='my-3 text-4xl font-bold text-center md:text-left'>
                   Alex
                    <span className='text-accent'>DevBrasil</span>
                </h1>
                   
                </Link>
                <div className='flex items-center justify-center gap-7'>
                    {socialNetworks.map(({logo, src, id}) => (
                        <Link key={id}
                        href={src}
                        target='_blank'
                        className='transition-all duration-300 hover:text-accent'
                        >
                            {logo}
                        </Link>
                    ))}
                </div>
           </div>
        </header>
    
    </MotionTranstion>
  )
}
