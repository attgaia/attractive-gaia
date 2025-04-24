"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "田中 健太",
    role: "取締役",
    company: "製造業",
    content: "「Webサイトのリニューアルを依頼しました。デザインから機能まで、すべての要望に丁寧に対応していただき、満足のいく結果となりました。」"
  },
  {
    name: "佐藤 美咲",
    role: "マーケティング部長",
    company: "小売業",
    content: "「SNS運用代行を依頼してから、フォロワー数が2倍に増加。効果的なコンテンツ提案と迅速な対応に感謝しています。」"
  },
  {
    name: "鈴木 一郎",
    role: "経営企画部長",
    company: "IT企業",
    content: "「AIを活用した業務効率化の提案をいただき、大幅なコスト削減が実現。技術的な知識と実務経験の両方を持つコンサルタントとして、非常に信頼できます。」"
  }
]

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="w-full flex-shrink-0 px-4">
              <Card className="bg-white shadow-md">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-[#40E0D0] mb-4" />
                  <p className="text-lg mb-6 italic text-gray-700">{testimonial.content}</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#008B8B] z-10"
        aria-label="前のスライド"
      >
        <ChevronLeft className="h-6 w-6 text-[#008B8B]" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#008B8B] z-10"
        aria-label="次のスライド"
      >
        <ChevronRight className="h-6 w-6 text-[#008B8B]" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === activeIndex ? "bg-[#008B8B]" : "bg-[#40E0D0]/40",
            )}
            aria-label={`スライド ${index + 1} に移動`}
          />
        ))}
      </div>
    </div>
  )
}
