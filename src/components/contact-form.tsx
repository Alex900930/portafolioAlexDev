"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Resetear el formulario
    e.currentTarget.reset()

    // Resetear el estado de éxito después de 3 segundos
    setTimeout(() => setIsSuccess(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm text-white font-medium">
            Nombre
          </Label>
          <Input
            id="name"
            placeholder="Tu nombre"
            required
            className="h-12 px-4 border-[hsl(var(--color-accent))]/20 focus:border-[hsl(var(--color-accent))] focus:ring-[hsl(var(--color-accent))] bg-card text-white/70"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm text-white font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            required
            className="h-12 px-4 border-[hsl(var(--color-accent))]/20 focus:border-[hsl(var(--color-accent))] focus:ring-[hsl(var(--color-accent))] bg-card text-white/70"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-sm text-white font-medium">
          Asunto
        </Label>
        <Input
          id="subject"
          placeholder="Asunto de tu mensaje"
          required
          className="h-12 px-4 border-[hsl(var(--color-accent))]/20 focus:border-[hsl(var(--color-accent))] focus:ring-[hsl(var(--color-accent))] bg-card text-white/70"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm text-white font-medium">
          Mensaje
        </Label>
        <Textarea
          id="message"
          placeholder="Cuéntame sobre tu proyecto..."
          className="min-h-[150px] px-4 py-3 border-[hsl(var(--color-accent))]/20 focus:border-[hsl(var(--color-accent))] focus:ring-[hsl(var(--color-accent))] bg-card text-white/70"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-[hsl(var(--color-accent))] hover:bg-[hsl(var(--color-accent))]/90 text-background shadow-lg shadow-[hsl(var(--color-accent))]/20 hover:shadow-xl hover:shadow-[hsl(var(--color-accent))]/30 transition-all duration-300 font-[hsl(var(--color-accent))]"
        disabled={isSubmitting || isSuccess}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : isSuccess ? (
          <>
            <CheckCircle className="mr-2 h-5 w-5" />
            ¡Mensaje enviado!
          </>
        ) : (
          "Enviar mensaje"
        )}
      </Button>
    </form>
  )
}

