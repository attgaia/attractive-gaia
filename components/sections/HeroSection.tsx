'use client';

import { ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import HeroAnimation from "@/components/hero-animation"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import { useRef, useEffect } from "react"

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // スクロールに応じたアニメーション値
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  // スプリングアニメーション
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springY = useSpring(y, springConfig);
  const springScale = useSpring(scale, springConfig);

  // ホバーアニメーション用の値
  const hoverScale = useMotionValue(1);
  const hoverRotate = useMotionValue(0);

  // ホバー時のアニメーション
  const handleHover = () => {
    hoverScale.set(1.05);
    hoverRotate.set(2);
  };

  const handleHoverEnd = () => {
    hoverScale.set(1);
    hoverRotate.set(0);
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-[#008B8B] via-[#008B8B]/80 to-[#40E0D0] text-white"
    >
      {/* アニメーション背景 */}
      <motion.div 
        className="absolute inset-0 opacity-70"
        style={{ 
          y: springY,
          scale: springScale,
          rotate,
        }}
      >
        <HeroAnimation />
      </motion.div>

      {/* オーバーレイグラデーション */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#008B8B]/80"
        style={{ opacity }}
      />

      <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Badge 
              className="mb-6 bg-[#008B8B]/20 text-white hover:bg-[#008B8B]/30 border-[#008B8B]/30 backdrop-blur-sm"
            >
              新時代のビジネスソリューション
            </Badge>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            AIで
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="text-[#40E0D0]"
          >
            ビジネスの可能性
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            を<br className="hidden md:block" />
            無限に広げる
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 100
          }}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -20]) }}
        >
          最先端のAI技術を活用し、あなたのビジネスを次のレベルへと導きます。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="flex flex-col sm:flex-row gap-4"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -10]) }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button className="bg-[#40E0D0] text-white hover:bg-[#40E0D0]/90">
              サービスを見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              お問い合わせ
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 1,
            type: "spring",
            stiffness: 100
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 20]) }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown className="h-6 w-6 text-white/80" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 