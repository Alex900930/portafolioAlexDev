import type React from "react"
import type { Metadata } from "next"
import { Outfit, Playfair_Display, Montserrat } from "next/font/google"


import "./globals.css"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar"
import Header from "@/components/Header"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: 'Alexander H. Herrera Millet - Portafolio',
    template: '%s | Desenvolvedor Full Stack en Caninde'
  },
  description: 'Portfólio profissional de Alexander H. Herrera Millet, desenvolvedor Full Stack e designer UI/UX',
  keywords: ['desarrollo web', 'Next.js', 'TypeScript', 'Caninde', 'Brasil'],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    nosnippet: false,
    notranslate: false,
  },
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${outfit.variable} ${playfair.variable} ${montserrat.variable} font-sans bg-primary`}>
       <Navbar />
       <Header />
          {children}
      </body>
    </html>
  )
}

