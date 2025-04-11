'use client';

import { ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import HeroAnimation from "@/components/hero-animation"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-900 text-white">
      {/* アニメーション背景 */}
      <div className="absolute inset-0 opacity-70">
        <HeroAnimation />
      </div>

      {/* オーバーレイグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-900/80"></div>

      <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="mb-6 bg-emerald-400/20 text-emerald-100 hover:bg-emerald-400/30 border-emerald-400/30 backdrop-blur-sm">
            AI技術で企業の未来を創造する
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-tight"
        >
          AIで<span className="text-emerald-300">ビジネスの可能性</span>を<br className="hidden md:block" />
          無限に広げる
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-emerald-100 mb-10 max-w-2xl"
        >
          業務効率化、社内教育、商品開発まで、<br className="hidden md:block" />
          すべてを支える"デジタル右腕"として<br className="hidden md:block" />
          あなたのビジネスを次のステージへ
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Button
            size="lg"
            className="bg-emerald-500 text-white hover:bg-emerald-400 shadow-lg shadow-emerald-700/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            AI支援サービスを見る
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            className="bg-white text-emerald-700 hover:bg-gray-100 shadow-lg"
          >
            <Link href="/free-consultation">無料相談する</Link>
          </Button>
        </motion.div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#services" className="text-emerald-300 hover:text-emerald-100 transition-colors">
            <ArrowDown className="h-8 w-8" />
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