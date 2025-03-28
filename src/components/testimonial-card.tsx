import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  image: string
  rating: number
}

export default function TestimonialCard({ quote, author, company, image, rating }: TestimonialCardProps) {
  return (
    <Card className=" shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden group border border-[hsl(var(--color-accent))]/10">
      <CardContent className="p-8 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--color-accent))]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[hsl(var(--color-accent))]/10 transition-colors duration-300"></div>
        <Quote className="h-12 w-12 text-[hsl(var(--color-accent))]/20 mb-6" />
        <p className="text-lg mb-8 relative z-10 italic"
        style={{fontFamily:'var(--font-playfair)'}}
        >{quote}</p>

        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-[hsl(var(--color-accent))]/20">
            <Image
             src={image || "/placeholder.svg"} alt={author} className="w-full h-full object-cover"
             width={100}
             height={100}
             />
          </div>
          <div>
            <h4 className="font-bold text-lg"
            style={{fontFamily:'var(--font-playfair)'}}
            >{author}</h4>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]"
            style={{fontFamily:'var(--font-mono)'}}
            >{company}</p>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={i < rating ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[hsl(var(--color-accent))]"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

