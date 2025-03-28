import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

interface SkillCardProps {
  name: string
  level: number
  icon: string
}

export default function SkillCard({ name, level, icon }: SkillCardProps) {
  return (
    <Card className=" shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl overflow-hidden border border-[hsl(var(--color-primary))]/10">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-primary))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--color-primary))]/20 transition-colors">
            <Image 
             src={icon || "/placeholder.svg"} 
             alt={name} 
             className="h-6 w-6"
             height={24}
             width={24}
             />
          </div>
          <div className="font-[hsl(var(--color-accent))] font-medium">{name}</div>
        </div>
        <Progress
          value={level}
          className="h-2 bg-[hsl(var(--color-primary))]/10"
          indicatorClassName="bg-gradient-to-r from-[hsl(var(--color-primary))] to-[hsl(var(--color-primary))]/70"
        />
        <div className="mt-2 text-right text-sm text-[hsl(var(--color-muted-foreground))] font-[hsl(var(--color-accent))]">{level}%</div>
      </CardContent>
    </Card>
  )
}

