import { Card, CardContent } from "@/components/ui/card"

interface ProcessStepProps {
  number: string
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl overflow-hidden border border-[hsl(var(--color-accent))]/10">
      <CardContent className="p-6 relative">
        <div className="absolute -top-6 -left-6 text-8xl 
        font-heading  font-bold text-[hsl(var(--color-accent))]/5 group-hover:text-[hsl(var(--color-accent))]/10 transition-colors duration-300">
          {number}
        </div>
        <div className="relative z-10">
          <div className="h-12 w-12 rounded-full bg-[hsl(var(--color-accent))]/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--color-accent))]/20 transition-colors">
            <div className="text-xl font-heading font-bold text-[hsl(var(--color-accent))]">{number}</div>
          </div>
          <h3 className="heading-sm mb-2 group-hover:text-[hsl(var(--color-accent))] transition-colors">{title}</h3>
          <p className="text-[hsl(var(--color-muted-foreground))]">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

