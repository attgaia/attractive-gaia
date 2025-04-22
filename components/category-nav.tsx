"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "web", name: "Web制作" },
  { id: "content", name: "コンテンツ制作" },
  { id: "app", name: "アプリ開発" },
  { id: "marketing", name: "マーケティング" },
  { id: "business", name: "ビジネス支援" },
]

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState("ai")
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="bg-white border-b sticky top-16 z-40">
      <div className="container py-2">
        <div className="flex items-center justify-between overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6">
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "relative py-2 text-sm font-medium whitespace-nowrap transition-colors",
                  activeCategory === category.id ? "text-emerald-600" : "text-gray-600 hover:text-emerald-600",
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"
                    layoutId="activeCategory"
                  />
                )}
              </button>
            ))}
          </div>
          <div
            className="flex items-center text-sm text-emerald-600 font-medium cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            すべてのサービスを見る
            <ChevronRight className={cn("ml-1 h-4 w-4 transition-transform", isHovered ? "translate-x-0.5" : "")} />
          </div>
        </div>
      </div>
    </div>
  )
}
