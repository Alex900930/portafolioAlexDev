import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users, Clock, CheckCircle } from "lucide-react"
import type { ReactNode } from "react"

interface StatCardProps {
  value: ReactNode
  label: string
  icon: string
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "Briefcase":
        return <Briefcase className="h-6 w-6 text-[hsl(var(--color-accent))]" />
      case "Users":
        return <Users className="h-6 w-6 text-[hsl(var(--color-accent))]" />
      case "Clock":
        return <Clock className="h-6 w-6 text-[hsl(var(--color-accent))]" />
      case "CheckCircle":
        return <CheckCircle className="h-6 w-6 text-[hsl(var(--color-accent))]" />
      default:
        return <Briefcase className="h-6 w-6 text-[hsl(var(--color-accent))]" />
    }
  }

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl overflow-hidden border-[hsl(var(--color-accent))]/10">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="h-14 w-14 rounded-full bg-[hsl(var(--color-accent))]/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--color-accent))]/20 transition-colors">
          <IconComponent />
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 group-hover:text-[hsl(var(--color-accent))] transition-colors"
         style={{ fontFamily: "var(--font-playfair)" }}
        >{value}</div>
        <p className="text-[hsl(var(--color-muted-foreground))] font-[hsl(var(--color-accent))]">{label}</p>
      </CardContent>
    </Card>
  )
}

