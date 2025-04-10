import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  image: string
  buttonText: string
  imagePosition?: "left" | "right"
  darkMode?: boolean
  small?: boolean
}

export default function FeatureCard({
  title,
  description,
  image,
  buttonText,
  imagePosition = "left",
  darkMode = false,
  small = false,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg",
        darkMode ? "bg-gray-800 text-white" : "bg-white",
        small ? "h-full" : "",
      )}
    >
      <div
        className={cn(
          "flex flex-col",
          small ? "" : "md:flex-row",
          imagePosition === "right" && !small ? "md:flex-row-reverse" : "",
        )}
      >
        <div className={cn("relative", small ? "h-48" : "h-64 md:w-1/2")}>
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className={cn("p-6", small ? "" : "md:w-1/2", "flex flex-col justify-center")}>
          <h3 className={cn("font-bold text-lg mb-3", small ? "text-base" : "")}>{title}</h3>
          <p className={cn("mb-4 text-sm", darkMode ? "text-gray-300" : "text-gray-600")}>{description}</p>
          <div>
            <Button
              className={cn(
                "text-sm",
                darkMode ? "bg-[#9AFF00] hover:bg-[#8AEF00] text-black" : "bg-black hover:bg-gray-800 text-white",
              )}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
