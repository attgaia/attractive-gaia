"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    content:
      "AIコンサルティングを導入してから、社内の業務効率が大幅に向上しました。特に定型業務の自動化により、社員が本来の創造的な業務に集中できるようになりました。",
    author: "田中 健太",
    position: "株式会社テクノイノベーション 代表取締役",
    company: "製造業",
  },
  {
    id: 2,
    content:
      "Web制作の月額プランを利用していますが、常に最新のトレンドを取り入れたデザインを提案してくれるので、サイトのアクセス数が増加し、問い合わせも倍増しました。コストパフォーマンスも非常に高く、満足しています。",
    author: "佐藤 美咲",
    position: "マーケティング部長",
    company: "小売業",
  },
  {
    id: 3,
    content:
      "SNS運用代行サービスを利用して半年ですが、フォロワー数が3倍に増え、エンゲージメント率も大幅に向上しました。専門知識がなくても効果的なSNSマーケティングができるようになり、大変感謝しています。",
    author: "鈴木 隆太",
    position: "広報担当",
    company: "サービス業",
  },
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
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="bg-white shadow-md">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-emerald-200 mb-4" />
                  <p className="text-lg mb-6 italic text-gray-700">{testimonial.content}</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
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
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 z-10"
        aria-label="前のスライド"
      >
        <ChevronLeft className="h-6 w-6 text-emerald-600" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 z-10"
        aria-label="次のスライド"
      >
        <ChevronRight className="h-6 w-6 text-emerald-600" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === activeIndex ? "bg-emerald-600" : "bg-emerald-200",
            )}
            aria-label={`スライド ${index + 1} に移動`}
          />
        ))}
      </div>
    </div>
  )
}
