"use client"

import React from 'react'
import Link from 'next/link'
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Brain,
  BrainCircuit,
  BookOpen,
  ShoppingCart,
  Lightbulb,
  Globe,
  Repeat,
  Stethoscope,
  Palette,
  PenTool,
  FileText,
  MessageCircle,
  Mic,
  Users,
  Ship,
  MapPin,
  Star,
  ShoppingBag,
  Recycle,
  Video,
  ChevronRight,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: keyof typeof icons
  featured?: boolean
  link?: string
}

const icons = {
  'brain-circuit': BrainCircuit,
  globe: Globe,
  repeat: Repeat,
  stethoscope: Stethoscope,
  palette: Palette,
  'pen-tool': PenTool,
  video: Video,
  'file-text': FileText,
  users: Users,
  'message-circle': MessageCircle,
  lightbulb: Lightbulb,
  'shopping-cart': ShoppingCart,
  ship: Ship,
  'map-pin': MapPin,
  star: Star,
  mic: Mic,
  'book-open': BookOpen,
  'shopping-bag': ShoppingBag,
  recycle: Recycle,
}

export default function ServiceCard({ title, description, icon, featured = false, link }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const IconComponent = icons[icon]

  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-6 w-6" }

    switch (iconName) {
      case "brain-circuit":
        return <BrainCircuit {...iconProps} />
      case "book-open":
        return <BookOpen {...iconProps} />
      case "shopping-cart":
        return <ShoppingCart {...iconProps} />
      case "lightbulb":
        return <Lightbulb {...iconProps} />
      case "globe":
        return <Globe {...iconProps} />
      case "repeat":
        return <Repeat {...iconProps} />
      case "stethoscope":
        return <Stethoscope {...iconProps} />
      case "palette":
        return <Palette {...iconProps} />
      case "pen-tool":
        return <PenTool {...iconProps} />
      case "file-text":
        return <FileText {...iconProps} />
      case "message-circle":
        return <MessageCircle {...iconProps} />
      case "mic":
        return <Mic {...iconProps} />
      case "ship":
        return <Ship {...iconProps} />
      case "map-pin":
        return <MapPin {...iconProps} />
      case "star":
        return <Star {...iconProps} />
      case "shopping-bag":
        return <ShoppingBag {...iconProps} />
      case "recycle":
        return <Recycle {...iconProps} />
      case "video":
        return <Video {...iconProps} />
      default:
        return <Brain {...iconProps} />
    }
  }

  const cardContent = (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 cursor-pointer",
        featured ? "col-span-full" : "",
        isHovered ? "shadow-lg transform -translate-y-1" : "shadow",
        isHovered ? "bg-gradient-to-br from-emerald-50 to-teal-50" : "bg-white",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className={cn("flex flex-col p-6", featured ? "md:flex-row md:items-center md:gap-8" : "")}>
        <div
          className={cn(
            "flex items-center justify-center rounded-full p-3 mb-4",
            featured ? "h-16 w-16 md:mb-0" : "h-12 w-12",
            isHovered ? "bg-emerald-500 text-white" : "bg-emerald-100 text-emerald-600",
          )}
        >
          {IconComponent && <IconComponent className={cn("h-6 w-6", isHovered ? "text-white" : "text-emerald-600")} />}
        </div>
        <div className={cn(featured ? "md:flex-1 w-full" : "", "flex flex-col h-full w-full")}>
          <h3
            className={cn(
              "font-bold transition-colors",
              featured ? "text-2xl mb-2" : "text-lg mb-1",
              isHovered ? "text-emerald-600" : "text-gray-900",
            )}
          >
            {title}
          </h3>
          <p className={cn("text-gray-600 transition-opacity", featured ? "" : "text-sm", "opacity-100 mb-6")}>
            {description}
          </p>
          <div className={cn("mt-auto w-full", featured ? "md:mt-4" : "")}>
            <Button
              className={cn(
                "w-full justify-between py-3 font-bold text-white transition-all duration-300",
                "bg-emerald-600 hover:bg-emerald-700",
                "shadow-md hover:shadow-lg",
                "border-0",
                isHovered ? "transform translate-y-0" : "",
              )}
            >
              詳細を見る
              <ChevronRight className="h-5 w-5 ml-1 animate-pulse" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return link ? <Link href={link}>{cardContent}</Link> : cardContent;
}
