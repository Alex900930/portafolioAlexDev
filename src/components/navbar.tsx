"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4",
        isScrolled ? "bg-[hsl(var(--color-background)/80%)] backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--color-accent))] to-[hsl(var(--color-accent)/70%)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Alexander H. Herrera Millet
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {["sobre-mi", "servicios", "habilidades", "proyectos", "testimonios", "contacto"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-sm font-medium text-white hover:text-[hsl(var(--color-primary))] transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button 
              className="bg-[hsl(var(--color-accent))] hover:bg-[hsl(var(--color-accent)/90%)] text-[hsl(var(--color-background))] shadow-md shadow-[hsl(var(--color-accent)/20%)] hover:shadow-lg hover:shadow-[hsl(var(--color-accent)/30%)] transition-all duration-300"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Contáctame
            </Button>
          </div>

          <button 
            className="md:hidden text-[hsl(var(--color-foreground))]" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[hsl(var(--color-background)/95%)] backdrop-blur-md z-40 p-4">
          <nav className="flex flex-col gap-4 py-8">
            {["sobre-mi", "servicios", "habilidades", "proyectos", "testimonios", "contacto"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-lg font-medium p-4 text-white hover:bg-[hsl(var(--color-accent)/5%)] rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Link>
            ))}

            <div className="mt-4 p-4">
              <Button 
                className="w-full bg-[hsl(var(--color-accent))] hover:bg-[hsl(var(--color-accent)/90%)] text-[hsl(var(--color-background))]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Contáctame
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}