"use client"

import { useState, useEffect } from "react"
import {itemsNavbar} from '../data';
import Link from "next/link";
import { usePathname } from "next/navigation";
import MotionTranstion from "./transition-component";

export default function Navbar() {
 
  const router = usePathname();

  return (
   
    <MotionTranstion position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">

      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
          {itemsNavbar.map((item) => (
            <div 
            key={item.id}
             className={`px-3 py-2 transform-gpu transition-[background,transform] 
             duration-300 cursor-pointer rounded-full 
             hover:bg-[var(--color-accent)] 
             hover:scale-105 hover:shadow-gold-sm ${router === item.link && 'bg-accent'}`}
          >
              <Link 
               href={item.link}>
                {item.icon}
              </Link>  
            </div>
          ))}
        </div>
      </nav>
    </MotionTranstion>
  )
}