'use client';

import { ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import HeroAnimation from "@/components/hero-animation"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-[#008B8B] via-[#008B8B]/80 to-[#40E0D0] text-white">
      {/* アニメーション背景 */}
      <div className="absolute inset-0 opacity-70">
        <HeroAnimation />
      </div>

      {/* オーバーレイグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#008B8B]/80"></div>

      <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge 
            className="mb-6 bg-[#008B8B]/20 text-white hover:bg-[#008B8B]/30 border-[#008B8B]/30 backdrop-blur-sm"
          >
            新時代のビジネスソリューション
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight"
        >
          AIで<span className="text-[#40E0D0]">ビジネスの可能性</span>を<br className="hidden md:block" />
          無限に広げる
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-[#40E0D0] mb-10 max-w-2xl"
        >
          最新のAI技術と豊富な実績で、あなたのビジネスの成長をサポート。<br />
          業務効率化から商品開発、Web集客まで、包括的なソリューションを提供します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-[#008B8B] text-white hover:bg-[#008B8B]/90 shadow-lg shadow-[#008B8B]/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            無料相談を予約する
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-[#008B8B] hover:bg-gray-100 shadow-lg"
          >
            サービス詳細を見る
          </Button>
        </motion.div>

        <div className="mt-12 text-center">
          <a href="#services" className="text-[#40E0D0] hover:text-[#40E0D0]/80 transition-colors">
            詳しく見る
            <ArrowDown className="mx-auto mt-2 h-6 w-6 animate-bounce" />
          </a>
        </div>

        {/* 波形デザイン */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  )
} 