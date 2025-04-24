"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, ArrowRight } from "lucide-react"
import Link from "next/link"

const AiSupportCard = () => {
  return (
    <Card className="w-full overflow-hidden shadow-xl bg-gradient-to-r from-[#008B8B] to-[#40E0D0]">
      <CardContent className="p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
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
      </CardContent>
    </Card>
  )
}

export default AiSupportCard