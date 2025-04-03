import type React from "react"
import type { Metadata } from "next"
import { Outfit, Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
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
  title: "Alexander H. Herrera Millet | Desarrollador Full Stack",
  description: "Portafolio profesional de Alexander H. Herrera Millet, desarrollador Full Stack y diseñador UI/UX",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${outfit.variable} ${playfair.variable} ${montserrat.variable} font-sans`}>
       <Navbar />
       <Header />
          {children}
      </body>
    </html>
  )
}

