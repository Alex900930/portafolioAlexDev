import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, LineChart } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case "Code":
        return <Code className="h-6 w-6 text-[hsl(var(--color-accent))]" />
      case "Palette":
        return <Palette className="h-6 w-6 text-[hsl(var(--color-accent))]" />
      case "LineChart":
        return <LineChart className="h-6 w-6 text-[hsl(var(--color-accent))]" />
      default:
        return <Code className="h-6 w-6 text-[hsl(var(--color-accent))]" />
    }
  }

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl overflow-hidden border-[hsl(var(--color-accent))]/10">
      <CardContent className="p-8">
        <div className="h-14 w-14 rounded-xl bg-[hsl(var(--color-accent))]/10 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--color-accent))]/20 transition-colors">
          <IconComponent />
        </div>
        <h3 className="heading-sm mb-3 group-hover:text-[hsl(var(--color-accent))] transition-colors">{title}</h3>
        <p className="text-[hsl(var(--color-muted-foreground))]">{description}</p>
      </CardContent>
    </Card>
  )
}

