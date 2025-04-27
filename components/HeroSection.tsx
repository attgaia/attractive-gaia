'use client';

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import HeroAnimation from "@/components/hero-animation";

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
          <Badge className="mb-6 bg-[#008B8B]/20 text-white hover:bg-[#008B8B]/30 border-[#008B8B]/30 backdrop-blur-sm">
            AI技術で企業の未来を創造する
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-tight"
        >
          AIで<span className="text-[#40E0D0]">ビジネスの可能性</span>を<br className="hidden md:block" />
          無限に広げる
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-emerald-100 mb-16 max-w-2xl"
        >
          業務効率化、社内教育、商品開発まで、<br className="hidden md:block" />
          すべてを支える"デジタル右腕"として<br className="hidden md:block" />
          あなたのビジネスを次のステージへ
        </motion.p>

        <div className="relative z-10 flex justify-center w-full mb-16 pointer-events-auto">
          <a
            href="/services/ai-consulting"
            className="inline-block bg-[#FFA500] hover:bg-[#FF8C00] text-white font-bold text-lg px-8 py-4 rounded-md transition-colors duration-200"
          >
            AI支援サービスを見る <ArrowRight className="inline-block align-middle ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#services" className="text-emerald-300 hover:text-emerald-100 transition-colors">
            <ArrowDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
} 