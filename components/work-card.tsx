import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

interface WorkCardProps {
  title: string
  category: string
  description: string
  image: string
}

export default function WorkCard({ title, category, description, image }: WorkCardProps) {
  return (
    <Link href="#" className="group">
      <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-lg border-0">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          <div className="absolute top-3 left-3 bg-white text-black text-xs font-medium px-2 py-1 rounded">
            {category}
          </div>
        </div>
        <CardContent className="p-4 relative">
          <h3 className="font-bold text-base mb-1 group-hover:text-[#9AFF00] transition-colors pr-6">{title}</h3>
          <p className="text-gray-600 text-xs line-clamp-2">{description}</p>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="h-4 w-4 text-[#9AFF00]" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
