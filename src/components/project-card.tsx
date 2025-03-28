import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  category: string
}

export default function ProjectCard({ title, description, image, tags, link, category }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 rounded-xl border border-[hsl(var(--color-accent))]/10">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={100}
          height={100}
        />
        <div className="absolute top-4 left-4 bg-[hsl(var(--color-accent))]/90 text-[hsl(var(--color-background))]] text-xs font-medium px-3 py-1 rounded-full"
        style={{fontFamily: 'var(--font-mono)'}}
        >
          {category}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--color-background))]]/80 via-[hsl(var(--color-background))]]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href={link}
            className="flex items-center gap-2 text-[hsl(var(--color-background))] bg-[hsl(var(--color-accent))]/90 px-6 py-3 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300"
            style={{fontFamily:'var(--font-mono)'}}
          >
            Ver proyecto <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--color-accent))] transition-colors"
        style={{fontFamily:'var(--font-playfair)'}}
        >{title}</h3>
        <p className="text-[hsl(var(--color-muted-foreground))] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/10 text-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary))]/20 border-none "
              style={{fontFamily:'var(--font-mono)'}}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

