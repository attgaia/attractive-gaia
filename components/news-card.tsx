import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  category?: string
  image: string
}

export default function NewsCard({ title, excerpt, date, category, image }: NewsCardProps) {
  return (
    <Link href="#" className="group">
      <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {category && (
            <div className="absolute top-3 left-3 bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">
              {category}
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <div className="text-xs text-gray-500 mb-1">{date}</div>
          <h3 className="font-bold text-sm mb-1 group-hover:text-emerald-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-xs line-clamp-2">{excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
