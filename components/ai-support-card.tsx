"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BrainCircuit } from "lucide-react"
import Link from "next/link"

const AiSupportCard = () => {
  return (
    <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg p-6 md:p-10 rounded-xl">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-white/20 p-3 rounded-full">
          <BrainCircuit className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold">AI支援コンサルティング</h3>
      </div>
      <p className="text-white/90 mb-6">
        最新のAI技術を活用し、業務効率化から新規事業開発まで、企業のDX推進を包括的にサポートします。
        ChatGPT、Midjourney、Stable Diffusionなど最新AIツールの導入・活用支援から、
        カスタムAIシステムの開発まで対応可能です。
      </p>
      <Link href="/services/ai-consulting">
        <Button className="bg-white text-emerald-700 hover:bg-white/90 font-semibold">
          詳細を見る
        </Button>
      </Link>
    </Card>
  )
}

export default AiSupportCard